'use client';

import { useEffect, useMemo, useState } from 'react';
import { ProductCard } from '@/components/product-card';
import { SedifexProduct } from '@/lib/types';

type ShopCatalogProps = {
  products: SedifexProduct[];
};

const allCategoriesLabel = 'All Categories';
const RECENT_SEARCHES_STORAGE_KEY = 'timeless-recent-searches';
const MAX_RECENT_SEARCHES = 6;

const synonymMap: Record<string, string[]> = {
  adidas: ['adiddas', 'addidas', 'adi das'],
  moisturizer: ['moisturiser', 'hydrator', 'hydrating cream'],
  serum: ['essence', 'concentrate'],
  cleanser: ['face wash', 'wash', 'cleanser'],
  sunscreen: ['spf', 'sunblock'],
  exfoliator: ['scrub', 'peel'],
  body: ['bodycare', 'body care'],
  skincare: ['skin care', 'skin-care']
};

function normalizeTerm(value: string) {
  return value.toLowerCase().trim().replace(/\s+/g, ' ');
}

function levenshtein(a: string, b: string) {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;

  const prev = new Array(b.length + 1).fill(0).map((_, index) => index);
  const curr = new Array(b.length + 1).fill(0);

  for (let i = 1; i <= a.length; i += 1) {
    curr[0] = i;

    for (let j = 1; j <= b.length; j += 1) {
      const substitutionCost = a[i - 1] === b[j - 1] ? 0 : 1;
      curr[j] = Math.min(
        curr[j - 1] + 1,
        prev[j] + 1,
        prev[j - 1] + substitutionCost
      );
    }

    for (let j = 0; j <= b.length; j += 1) {
      prev[j] = curr[j];
    }
  }

  return prev[b.length];
}

function buildAliasMap() {
  const aliases = new Map<string, Set<string>>();

  Object.entries(synonymMap).forEach(([canonical, values]) => {
    const normalizedCanonical = normalizeTerm(canonical);
    const canonicalAliases = aliases.get(normalizedCanonical) ?? new Set<string>();
    canonicalAliases.add(normalizedCanonical);

    values.forEach((value) => {
      const normalizedAlias = normalizeTerm(value);
      canonicalAliases.add(normalizedAlias);

      const reverseAliasGroup = aliases.get(normalizedAlias) ?? new Set<string>();
      reverseAliasGroup.add(normalizedCanonical);
      reverseAliasGroup.add(normalizedAlias);
      aliases.set(normalizedAlias, reverseAliasGroup);
    });

    aliases.set(normalizedCanonical, canonicalAliases);
  });

  return aliases;
}

const aliasMap = buildAliasMap();

function expandSearchTerms(query: string) {
  const normalized = normalizeTerm(query);
  const terms = new Set<string>(normalized ? [normalized] : []);

  normalized.split(' ').forEach((token) => {
    const normalizedToken = normalizeTerm(token);
    if (!normalizedToken) return;

    terms.add(normalizedToken);
    aliasMap.get(normalizedToken)?.forEach((term) => terms.add(term));

    Object.entries(synonymMap).forEach(([canonical, aliases]) => {
      const normalizedCanonical = normalizeTerm(canonical);
      if (levenshtein(normalizedToken, normalizedCanonical) <= 2) {
        terms.add(normalizedCanonical);
      }

      aliases.forEach((alias) => {
        const normalizedAlias = normalizeTerm(alias);
        if (levenshtein(normalizedToken, normalizedAlias) <= 2) {
          terms.add(normalizedCanonical);
          terms.add(normalizedAlias);
        }
      });
    });
  });

  return Array.from(terms);
}

function matchesSearch(product: SedifexProduct, query: string) {
  if (!query) return true;

  const searchableContent = [product.name, product.category, product.description, product.itemType]
    .filter((value): value is string => Boolean(value))
    .map((value) => normalizeTerm(value));

  const expandedTerms = expandSearchTerms(query);

  return expandedTerms.some((term) => {
    return searchableContent.some((field) => {
      if (field.includes(term)) return true;

      return field
        .split(/[^a-z0-9]+/)
        .filter(Boolean)
        .some((token) => levenshtein(token, term) <= 2);
    });
  });
}

export function ShopCatalog({ products }: ShopCatalogProps) {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(allCategoriesLabel);
  const [stockOnly, setStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'name-asc'>('featured');
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  const categories = useMemo(() => {
    const uniqueCategories = new Set(
      products.map((product) => product.category?.trim() || 'Uncategorized')
    );

    return [allCategoriesLabel, ...Array.from(uniqueCategories).sort((a, b) => a.localeCompare(b))];
  }, [products]);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(RECENT_SEARCHES_STORAGE_KEY);
      if (!stored) return;
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) {
        setRecentSearches(parsed.filter((item): item is string => typeof item === 'string'));
      }
    } catch {
      setRecentSearches([]);
    }
  }, []);

  const searchSuggestions = useMemo(() => {
    const baseTerms = new Set<string>();

    products.forEach((product) => {
      [product.name, product.category, product.itemType]
        .filter((value): value is string => Boolean(value))
        .forEach((value) => baseTerms.add(value.trim()));
    });

    Object.entries(synonymMap).forEach(([canonical, aliases]) => {
      baseTerms.add(canonical);
      aliases.forEach((alias) => baseTerms.add(alias));
    });

    recentSearches.forEach((term) => baseTerms.add(term));

    const normalizedQuery = normalizeTerm(query);
    if (!normalizedQuery) {
      return recentSearches.slice(0, MAX_RECENT_SEARCHES);
    }

    return Array.from(baseTerms)
      .filter((term) => {
        const normalizedTerm = normalizeTerm(term);
        return (
          normalizedTerm.includes(normalizedQuery) ||
          normalizedQuery.includes(normalizedTerm) ||
          levenshtein(normalizedTerm, normalizedQuery) <= 2
        );
      })
      .sort((a, b) => a.localeCompare(b))
      .slice(0, 8);
  }, [products, query, recentSearches]);

  const filteredProducts = useMemo(() => {
    const matchedProducts = products.filter((product) => {
      const category = product.category?.trim() || 'Uncategorized';
      const categoryMatch = activeCategory === allCategoriesLabel || category === activeCategory;
      const queryMatch = matchesSearch(product, query.trim());
      const stockMatch = !stockOnly || (product.stockCount ?? 0) > 0;

      return categoryMatch && queryMatch && stockMatch;
    });

    return matchedProducts.sort((a, b) => {
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
      if (sortBy === 'price-low') return (a.price ?? Number.POSITIVE_INFINITY) - (b.price ?? Number.POSITIVE_INFINITY);
      if (sortBy === 'price-high') return (b.price ?? Number.NEGATIVE_INFINITY) - (a.price ?? Number.NEGATIVE_INFINITY);
      return 0;
    });
  }, [activeCategory, products, query, sortBy, stockOnly]);

  const persistRecentSearch = (searchValue: string) => {
    const normalizedValue = normalizeTerm(searchValue);
    if (!normalizedValue) return;

    setRecentSearches((current) => {
      const updated = [searchValue.trim(), ...current.filter((item) => normalizeTerm(item) !== normalizedValue)].slice(
        0,
        MAX_RECENT_SEARCHES
      );
      window.localStorage.setItem(RECENT_SEARCHES_STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <div className='space-y-8'>
      <div className='space-y-4 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm md:p-5'>
        <div className='grid gap-4 md:grid-cols-[2fr_1fr]'>
          <div className='space-y-2'>
            <label htmlFor='shop-search' className='block text-sm font-medium text-stone-700'>
              Search products
            </label>
            <input
              id='shop-search'
              type='search'
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onBlur={() => persistRecentSearch(query)}
              placeholder='Search by name, category, or description'
              className='w-full rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-900 outline-none ring-rose-200 transition focus:border-rose-400 focus:ring-2'
              list='shop-search-suggestions'
            />
            <datalist id='shop-search-suggestions'>
              {searchSuggestions.map((suggestion) => (
                <option key={suggestion} value={suggestion} />
              ))}
            </datalist>
          </div>
          <div className='space-y-2'>
            <label htmlFor='shop-sort' className='block text-sm font-medium text-stone-700'>
              Sort
            </label>
            <select
              id='shop-sort'
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value as 'featured' | 'price-low' | 'price-high' | 'name-asc')}
              className='w-full rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-900 outline-none ring-rose-200 transition focus:border-rose-400 focus:ring-2'
            >
              <option value='featured'>Featured</option>
              <option value='price-low'>Price: Low to High</option>
              <option value='price-high'>Price: High to Low</option>
              <option value='name-asc'>Name: A to Z</option>
            </select>
          </div>
        </div>
        <label className='inline-flex items-center gap-2 text-sm text-stone-700'>
          <input
            type='checkbox'
            checked={stockOnly}
            onChange={(event) => setStockOnly(event.target.checked)}
            className='h-4 w-4 rounded border-stone-300 text-stone-900 focus:ring-rose-300'
          />
          In-stock only
        </label>
        <div className='flex flex-wrap gap-2'>
          {categories.map((category) => {
            const isActive = category === activeCategory;

            return (
              <button
                type='button'
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                  isActive
                    ? 'border-stone-900 bg-stone-900 text-white'
                    : 'border-stone-300 bg-white text-stone-700 hover:border-stone-500'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      <p className='text-sm text-stone-600'>
        Showing <span className='font-semibold text-stone-900'>{filteredProducts.length}</span> of{' '}
        <span className='font-semibold text-stone-900'>{products.length}</span> products.
      </p>

      {filteredProducts.length ? (
        <div className='grid gap-5 md:grid-cols-3'>
          {filteredProducts.map((product) => (
            <ProductCard key={`${product.id}-${product.name}`} product={product} />
          ))}
        </div>
      ) : (
        <div className='rounded-2xl border border-dashed border-stone-300 bg-white p-8 text-center text-sm text-stone-600'>
          No products match your filters right now. Try another category or search term.
        </div>
      )}
    </div>
  );
}

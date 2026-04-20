'use client';

import { useMemo, useState } from 'react';
import { ProductCard } from '@/components/product-card';
import { SedifexProduct } from '@/lib/types';

type ShopCatalogProps = {
  products: SedifexProduct[];
};

const allCategoriesLabel = 'All Categories';

function matchesSearch(product: SedifexProduct, query: string) {
  if (!query) return true;

  const term = query.toLowerCase();
  return [product.name, product.category, product.description, product.itemType]
    .filter((value): value is string => Boolean(value))
    .some((value) => value.toLowerCase().includes(term));
}

export function ShopCatalog({ products }: ShopCatalogProps) {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(allCategoriesLabel);

  const categories = useMemo(() => {
    const uniqueCategories = new Set(
      products.map((product) => product.category?.trim() || 'Uncategorized')
    );

    return [allCategoriesLabel, ...Array.from(uniqueCategories).sort((a, b) => a.localeCompare(b))];
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const category = product.category?.trim() || 'Uncategorized';
      const categoryMatch = activeCategory === allCategoriesLabel || category === activeCategory;
      const queryMatch = matchesSearch(product, query.trim());

      return categoryMatch && queryMatch;
    });
  }, [activeCategory, products, query]);

  return (
    <div className='space-y-8'>
      <div className='space-y-4 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm md:p-5'>
        <label htmlFor='shop-search' className='block text-sm font-medium text-stone-700'>
          Search products
        </label>
        <input
          id='shop-search'
          type='search'
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder='Search by name, category, or description'
          className='w-full rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-900 outline-none ring-rose-200 transition focus:border-rose-400 focus:ring-2'
        />
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

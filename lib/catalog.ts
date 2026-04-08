import { bestsellers, featuredCollections, type CollectionItem, type ProductItem } from "@/lib/data";

export const catalogProducts = bestsellers;

const collectionCategoryMap: Record<string, string[]> = {
  womens: ["Women"],
  mens: ["Men"],
  unisex: ["Unisex"],
  oils: ["Perfume Oils"],
  gift: ["Women", "Unisex", "Perfume Oils"],
  signature: ["Unisex", "Men", "Women"]
};

const priceRanges = {
  budget: { min: 0, max: 400 },
  mid: { min: 401, max: 600 },
  premium: { min: 601, max: Number.POSITIVE_INFINITY }
} as const;

export type CatalogPriceRange = keyof typeof priceRanges;
export type CatalogSortOption = "featured" | "price-asc" | "price-desc" | "name-asc";

export interface CatalogFilterOptions {
  category?: string;
  scentFamily?: string;
  priceRange?: string;
  sort?: string;
}

export interface CatalogFilterState {
  category: string;
  scentFamily: string;
  priceRange: CatalogPriceRange | "";
  sort: CatalogSortOption;
}

function isSortOption(value: string): value is CatalogSortOption {
  return value === "featured" || value === "price-asc" || value === "price-desc" || value === "name-asc";
}

export function normalizeCatalogFilters(filters: CatalogFilterOptions): CatalogFilterState {
  const requestedSort = filters.sort?.trim() ?? "";
  const requestedPriceRange = filters.priceRange?.trim() ?? "";

  return {
    category: filters.category?.trim() ?? "",
    scentFamily: filters.scentFamily?.trim() ?? "",
    priceRange: requestedPriceRange in priceRanges ? (requestedPriceRange as CatalogPriceRange) : "",
    sort: isSortOption(requestedSort) ? requestedSort : "featured"
  };
}

export function applyCatalogFilters(products: ProductItem[], filters: CatalogFilterState): ProductItem[] {
  const filtered = products.filter((product) => {
    const categoryMatch = !filters.category || product.category === filters.category;
    const scentMatch = !filters.scentFamily || product.scentFamily === filters.scentFamily;

    const priceRangeMatch = (() => {
      if (!filters.priceRange) return true;
      const range = priceRanges[filters.priceRange];
      return product.price >= range.min && product.price <= range.max;
    })();

    return categoryMatch && scentMatch && priceRangeMatch;
  });

  if (filters.sort === "price-asc") {
    return [...filtered].sort((a, b) => a.price - b.price);
  }

  if (filters.sort === "price-desc") {
    return [...filtered].sort((a, b) => b.price - a.price);
  }

  if (filters.sort === "name-asc") {
    return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
  }

  return filtered;
}

export function getCategoryOptions(products: ProductItem[]): string[] {
  return [...new Set(products.map((product) => product.category))].sort((a, b) => a.localeCompare(b));
}

export function getScentFamilyOptions(products: ProductItem[]): string[] {
  return [...new Set(products.map((product) => product.scentFamily))].sort((a, b) => a.localeCompare(b));
}

export function getProductBySlug(slug: string): ProductItem | undefined {
  return catalogProducts.find((product) => product.id === slug);
}

export function getCollectionById(id: string): CollectionItem | undefined {
  return featuredCollections.find((collection) => collection.id === id);
}

export function getProductsByCollectionId(collectionId: string): ProductItem[] {
  const categories = collectionCategoryMap[collectionId] ?? [];
  return catalogProducts.filter((product) => categories.includes(product.category));
}

export function getCollectionIdForCategory(category: string): string {
  const normalized = category.toLowerCase().trim();

  if (normalized === "women") return "womens";
  if (normalized === "men") return "mens";
  if (normalized === "unisex") return "unisex";

  return "oils";
}

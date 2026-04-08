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

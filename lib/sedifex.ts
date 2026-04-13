import { fallbackGallery, fallbackProducts, fallbackPromo } from '@/lib/fallback-data';
import { buildWhatsAppLink } from '@/lib/constants';
import type { SedifexGalleryItem, SedifexProduct, SedifexPromo } from '@/lib/types';

const baseUrl = process.env.SEDIFEX_API_BASE_URL;
const storeId = process.env.SEDIFEX_STORE_ID;
const integrationKey = process.env.SEDIFEX_INTEGRATION_KEY;

const headers = integrationKey
  ? {
      Authorization: `Bearer ${integrationKey}`
    }
  : undefined;

async function sedifexFetch<T>(endpoint: string): Promise<T | null> {
  if (!baseUrl || !storeId || !headers) return null;

  const response = await fetch(`${baseUrl}${endpoint}?storeId=${storeId}`, {
    headers,
    next: { revalidate: 60 }
  });

  if (!response.ok) throw new Error(`Sedifex request failed: ${response.status}`);

  return (await response.json()) as T;
}

function deduplicateProducts(products: SedifexProduct[]) {
  const map = new Map<string, SedifexProduct>();
  for (const product of products) {
    const key = `${product.id ?? ''}|${product.storeId ?? ''}|${product.name}|${product.price ?? ''}`;
    if (!map.has(key)) map.set(key, product);
  }
  return Array.from(map.values());
}

export function groupProductsByCategory(products: SedifexProduct[]) {
  return products.reduce<Record<string, SedifexProduct[]>>((acc, product) => {
    const category = product.category || 'General Care';
    acc[category] ??= [];
    acc[category].push(product);
    return acc;
  }, {});
}

export async function getSedifexProducts() {
  try {
    const result = await sedifexFetch<SedifexProduct[]>('/integrationProducts');
    if (!result?.length) return fallbackProducts;
    return deduplicateProducts(result);
  } catch {
    return fallbackProducts;
  }
}

export async function getSedifexPromo() {
  try {
    const promo = await sedifexFetch<SedifexPromo | SedifexPromo[]>('/integrationPromo');
    if (!promo) return fallbackPromo;
    return Array.isArray(promo) ? promo[0] ?? fallbackPromo : promo;
  } catch {
    return fallbackPromo;
  }
}

export async function getSedifexGallery() {
  try {
    const gallery = await sedifexFetch<SedifexGalleryItem[]>('/integrationGallery');
    if (!gallery?.length) return fallbackGallery;
    return gallery
      .filter((item) => item.isPublished)
      .sort((a, b) => (a.sortOrder ?? 999) - (b.sortOrder ?? 999));
  } catch {
    return fallbackGallery;
  }
}

export const getOrderLink = (productName: string) =>
  buildWhatsAppLink(`Hello Prep N Prime GH, I want to order ${productName}.`);

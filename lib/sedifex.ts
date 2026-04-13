import { fallbackGallery, fallbackProducts, fallbackPromo } from '@/lib/fallback-data';
import { buildWhatsAppLink } from '@/lib/constants';
import type {
  IntegrationGalleryResponse,
  IntegrationProductsResponse,
  IntegrationPromoResponse,
  SedifexGalleryItem,
  SedifexProduct,
  SedifexPromo
} from '@/lib/types';

const baseUrl = process.env.SEDIFEX_API_BASE_URL;
const storeId = process.env.SEDIFEX_STORE_ID;
const integrationKey = process.env.SEDIFEX_INTEGRATION_API_KEY ?? process.env.SEDIFEX_INTEGRATION_KEY;
const contractVersion = process.env.SEDIFEX_CONTRACT_VERSION ?? '2026-04-13';

function buildHeaders() {
  if (!integrationKey) return undefined;

  return {
    'x-api-key': integrationKey,
    'X-Sedifex-Contract-Version': contractVersion,
    Accept: 'application/json'
  };
}

async function sedifexFetch<T>(endpoint: string): Promise<T | null> {
  const headers = buildHeaders();
  if (!baseUrl || !storeId || !headers) return null;

  const response = await fetch(`${baseUrl}${endpoint}?storeId=${encodeURIComponent(storeId)}`, {
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
    const category = product.category?.trim() || 'Uncategorized';
    acc[category] ??= [];
    acc[category].push(product);
    return acc;
  }, {});
}

export async function getSedifexProducts() {
  try {
    const result = await sedifexFetch<IntegrationProductsResponse>('/v1IntegrationProducts');
    const products = Array.isArray(result?.products) ? result.products : [];
    if (!products.length) return fallbackProducts;
    return deduplicateProducts(products);
  } catch {
    return fallbackProducts;
  }
}

export async function getSedifexPromo() {
  try {
    const result = await sedifexFetch<IntegrationPromoResponse>('/v1IntegrationPromo');
    if (!result?.promo) return fallbackPromo;
    return result.promo;
  } catch {
    return fallbackPromo;
  }
}

export async function getSedifexGallery() {
  try {
    const result = await sedifexFetch<IntegrationGalleryResponse>('/integrationGallery');
    const gallery = Array.isArray(result?.items) ? result.items : [];
    if (!gallery.length) return fallbackGallery;

    return gallery
      .filter((item) => item.isPublished)
      .sort((a, b) => (a.sortOrder ?? 999) - (b.sortOrder ?? 999));
  } catch {
    return fallbackGallery;
  }
}

export const getOrderLink = (productName: string) =>
  buildWhatsAppLink(`Hello Prep N Prime GH, I want to order ${productName}.`);

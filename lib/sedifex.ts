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

function normalizePromoRecord(raw: unknown): SedifexPromo | null {
  if (!raw || typeof raw !== 'object') return null;

  const candidate = raw as Record<string, unknown>;
  const promoTitle = typeof candidate.promoTitle === 'string' ? candidate.promoTitle : undefined;
  if (!promoTitle) return null;

  return {
    promoTitle,
    promoSummary: typeof candidate.promoSummary === 'string' ? candidate.promoSummary : undefined,
    promoStartDate: typeof candidate.promoStartDate === 'string' ? candidate.promoStartDate : undefined,
    promoEndDate: typeof candidate.promoEndDate === 'string' ? candidate.promoEndDate : undefined,
    promoSlug: typeof candidate.promoSlug === 'string' ? candidate.promoSlug : undefined,
    promoWebsiteUrl: typeof candidate.promoWebsiteUrl === 'string' ? candidate.promoWebsiteUrl : undefined,
    displayName: typeof candidate.displayName === 'string' ? candidate.displayName : undefined,
    name: typeof candidate.name === 'string' ? candidate.name : undefined
  };
}

function normalizeGalleryItems(raw: unknown): SedifexGalleryItem[] {
  if (!Array.isArray(raw)) return [];

  return raw
    .map((item) => {
      if (!item || typeof item !== 'object') return null;
      const record = item as Record<string, unknown>;

      return {
        url: typeof record.url === 'string' ? record.url : undefined,
        alt: typeof record.alt === 'string' ? record.alt : undefined,
        caption: typeof record.caption === 'string' ? record.caption : undefined,
        sortOrder: typeof record.sortOrder === 'number' ? record.sortOrder : undefined,
        isPublished: typeof record.isPublished === 'boolean' ? record.isPublished : undefined,
        createdAt: typeof record.createdAt === 'string' ? record.createdAt : undefined,
        updatedAt: typeof record.updatedAt === 'string' ? record.updatedAt : undefined
      } satisfies SedifexGalleryItem;
    })
    .filter((item): item is SedifexGalleryItem => Boolean(item?.url));
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
    const promo = normalizePromoRecord(result?.promo) ?? normalizePromoRecord(result);
    if (!promo) return fallbackPromo;
    return promo;
  } catch {
    return fallbackPromo;
  }
}

export async function getSedifexGallery() {
  try {
    const result = await sedifexFetch<IntegrationGalleryResponse>('/integrationGallery');
    const directItems = normalizeGalleryItems(result?.items);
    const promoGalleryItems = normalizeGalleryItems((result as { promoGallery?: unknown } | null)?.promoGallery);
    const gallery = directItems.length ? directItems : promoGalleryItems;
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

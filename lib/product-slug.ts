import type { SedifexProduct } from '@/lib/types';

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-');
}

export function getStableProductSlug(product: SedifexProduct) {
  const nameSlug = slugify(product.name) || 'product';
  const idToken = product.id ? slugify(product.id).slice(0, 12) : '';
  return idToken ? `${nameSlug}-${idToken}` : nameSlug;
}

export function findProductBySlug(products: SedifexProduct[], slug: string) {
  return products.find((product) => getStableProductSlug(product) === slug) ?? null;
}

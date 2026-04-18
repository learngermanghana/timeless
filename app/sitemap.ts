import type { MetadataRoute } from 'next';

const siteUrl = 'https://www.prepnprimegh.com';

const staticRoutes = [
  '',
  '/shop',
  '/body-care',
  '/skin-care',
  '/sensitive-skin',
  '/glow-products',
  '/collections',
  '/consultation',
  '/faq',
  '/about',
  '/contact',
  '/privacy-policy',
  '/terms'
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.7
  }));
}

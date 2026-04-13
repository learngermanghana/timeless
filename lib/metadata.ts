import type { Metadata } from 'next';

const baseUrl = 'https://prep-n-prime-gh.vercel.app';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Prep N Prime GH | Beauty Shop in Ghana',
    template: '%s | Prep N Prime GH'
  },
  description:
    'Shop authentic body care and skincare products in Ghana. Prep N Prime GH offers premium products, glow essentials, and consultation-led shopping.',
  keywords: [
    'beauty shop in Ghana',
    'skincare products Ghana',
    'body care products Ghana',
    'authentic beauty products Ghana',
    'sunscreen Ghana',
    'face cleanser Ghana',
    'body lotion Ghana',
    'serums and skincare Ghana'
  ],
  openGraph: {
    title: 'Prep N Prime GH',
    description:
      'Premium body products and skincare in Ghana with friendly consultation support.',
    type: 'website',
    locale: 'en_GH',
    url: baseUrl,
    siteName: 'Prep N Prime GH'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prep N Prime GH',
    description: 'Body care and skincare made simple, premium, and authentic.'
  }
};

export const buildPageMetadata = (title: string, description: string): Metadata => ({
  title,
  description,
  openGraph: { title: `${title} | Prep N Prime GH`, description },
  twitter: { title: `${title} | Prep N Prime GH`, description }
});

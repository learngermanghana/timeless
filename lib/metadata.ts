import type { Metadata } from 'next';

const baseUrl = 'https://www.prepnprimegh.com';

const buildCanonicalUrl = (path = '/') => new URL(path, baseUrl).toString();

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
    'serums and skincare Ghana',
    'Prep N Prime GH'
  ],
  alternates: {
    canonical: '/'
  },
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
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  }
};

export const buildPageMetadata = (title: string, description: string, path = '/'): Metadata => {
  const canonical = buildCanonicalUrl(path);
  const brandedTitle = `${title} | Prep N Prime GH`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title: brandedTitle, description, url: canonical },
    twitter: { title: brandedTitle, description }
  };
};

import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from './constants';

const defaultDescription =
  'Condolence GH provides professional funeral brochure, poster, banner, obituary card, and memorial printing services in Ghana.';

export function buildMetadata(title: string, description = defaultDescription, path = '/'): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const url = `${SITE_URL}${path}`;
  const keywords = [
    'funeral printing in Ghana',
    'funeral brochure printing Ghana',
    'funeral poster printing Accra',
    'funeral banner printing Ghana',
    'obituary card printing Ghana',
    'memorial printing services Ghana',
    'funeral invitation cards Ghana'
  ];

  return {
    title: fullTitle,
    description,
    keywords,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'en_GH',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description
    },
    alternates: {
      canonical: url
    }
  };
}

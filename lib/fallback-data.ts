import type { SedifexGalleryItem, SedifexProduct, SedifexPromo } from '@/lib/types';

export const fallbackProducts: SedifexProduct[] = [
  {
    id: 'fb-1',
    storeId: 'local',
    name: 'Hydra Glow Body Lotion',
    category: 'Body Lotions',
    description: 'Deep moisture body lotion for smooth, radiant skin all day.',
    price: 145,
    imageUrl:
      'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Premium body lotion on a clean shelf'
  },
  {
    id: 'fb-2',
    storeId: 'local',
    name: 'Gentle Brightening Cleanser',
    category: 'Face Cleansers',
    description: 'Daily cleanser that refreshes skin while preserving hydration.',
    price: 120,
    imageUrl:
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Face cleanser bottle in neutral setting'
  },
  {
    id: 'fb-3',
    storeId: 'local',
    name: 'Barrier Repair Serum',
    category: 'Serums',
    description: 'Lightweight serum designed for glow, comfort, and resilience.',
    price: 210,
    imageUrl:
      'https://images.unsplash.com/photo-1571781565036-d3f759be73e4?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Skincare serum with dropper'
  },
  {
    id: 'fb-4',
    storeId: 'local',
    name: 'Velvet Body Oil',
    category: 'Body Oils',
    description: 'Nourishing body oil for soft, silky skin and natural shine.',
    price: 165,
    imageUrl:
      'https://images.unsplash.com/photo-1611080541599-8c6dbde6ed28?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Body oil bottle and skincare texture'
  }
];

export const fallbackPromo: SedifexPromo = {
  title: 'Free Skin Consultation Week',
  summary: 'Get tailored recommendations before you buy your next routine.',
  websiteUrl:
    'https://wa.me/233244680516?text=Hi%20Prep%20N%20Prime%20GH%2C%20I%20want%20a%20free%20skin%20consultation.'
};

export const fallbackGallery: SedifexGalleryItem[] = [
  {
    url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
    alt: 'Skincare display with clean packaging',
    caption: 'Authentic products, carefully selected.',
    sortOrder: 1,
    isPublished: true
  },
  {
    url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    alt: 'Body care products on vanity setup',
    caption: 'Body care essentials for everyday glow.',
    sortOrder: 2,
    isPublished: true
  }
];

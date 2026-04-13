export const BRAND_NAME = 'Prep N Prime GH';
export const PHONE_DISPLAY = '024 468 0516';
export const PHONE_E164 = '+233244680516';
export const WHATSAPP_LINK =
  'https://wa.me/233244680516?text=Hello%20Prep%20N%20Prime%20GH%2C%20I%20want%20to%20order%20your%20beauty%20products.';

export const buildWhatsAppLink = (message: string) =>
  `https://wa.me/233244680516?text=${encodeURIComponent(message)}`;

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/body-care', label: 'Body Care' },
  { href: '/skin-care', label: 'Skin Care' },
  { href: '/collections', label: 'Collections' },
  { href: '/consultation', label: 'Consultation' },
  { href: '/faq', label: 'FAQ' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
] as const;

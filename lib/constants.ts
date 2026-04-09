export const SITE_NAME = 'Condolence GH';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.condolencegh.com';
export const PHONE_DISPLAY = process.env.NEXT_PUBLIC_CONTACT_PHONE ?? '+233 24 000 0000';
export const PHONE_RAW = PHONE_DISPLAY.replace(/\s+/g, '');
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP ?? '+233240000000';
export const EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'hello@condolencegh.com';
export const ADDRESS = 'Circle Industrial Area, Accra, Ghana';

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/products', label: 'Products' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/quote', label: 'Quote' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/faq', label: 'FAQ' }
];

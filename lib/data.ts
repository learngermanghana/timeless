export type Service = {
  title: string;
  description: string;
  href: string;
};

export const services: Service[] = [
  { title: 'Funeral Brochures', description: 'Premium folded or stapled brochures with tribute pages, hymns, and schedule details.', href: '/funeral-brochures' },
  { title: 'Funeral Posters', description: 'Durable indoor and outdoor memorial posters for announcement and directional use.', href: '/funeral-posters' },
  { title: 'Funeral Banners', description: 'Large-format banners for church compounds, homes, and event grounds.', href: '/funeral-banners' },
  { title: 'Invitation Cards', description: 'Elegantly printed invitation cards for family and invited guests.', href: '/funeral-invitations' },
  { title: 'Obituary / Memorial Cards', description: 'Compact keepsake cards with portrait, life summary, and service details.', href: '/products' },
  { title: 'Appreciation Cards', description: 'Thank-you cards to acknowledge support after burial or thanksgiving service.', href: '/appreciation-cards' },
  { title: 'One-Week Observance Printing', description: 'Coordinated observance flyers, posters, and program inserts delivered on time.', href: '/services' },
  { title: 'Custom Funeral Print Jobs', description: 'Tailored print packages for unique family preferences and cultural requirements.', href: '/quote' }
];

export const products = [
  { title: 'A5 Funeral Brochure', details: '8 to 32 pages, full-color, matte or silk finish.', href: '/funeral-brochures' },
  { title: 'A2 Memorial Poster', details: 'Weather-resistant poster stock with sharp portrait reproduction.', href: '/funeral-posters' },
  { title: 'Large Tribute Banner', details: 'Vinyl banner with hemming and eyelets for mounting.', href: '/funeral-banners' },
  { title: 'Funeral Invitation Cards', details: 'Classic and modern templates with optional envelopes.', href: '/funeral-invitations' },
  { title: 'Obituary Cards', details: 'Pocket-friendly memorial cards printed on sturdy card stock.', href: '/products' },
  { title: 'Appreciation Cards', details: 'Polished thank-you cards for post-service gratitude.', href: '/appreciation-cards' }
];

export const galleryItems = [
  { src: 'https://images.unsplash.com/photo-1598300053653-0e6f5f7f31f6?auto=format&fit=crop&w=1200&q=80', alt: 'Elegant funeral program brochure on a dark table' },
  { src: 'https://images.unsplash.com/photo-1616627452855-7e6604d392eb?auto=format&fit=crop&w=1200&q=80', alt: 'Printed memorial poster sample in a frame' },
  { src: 'https://images.unsplash.com/photo-1586769852044-692d6e3703f0?auto=format&fit=crop&w=1200&q=80', alt: 'Stack of invitation cards with muted premium tones' },
  { src: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80', alt: 'Banner print finishing at a professional print shop' },
  { src: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80', alt: 'Memorial stationery with clean ivory paper texture' },
  { src: 'https://images.unsplash.com/photo-1529516544814-8f1ef0d7e87c?auto=format&fit=crop&w=1200&q=80', alt: 'Funeral print package laid out with coordinated design' }
];

export const faqItems = [
  {
    question: 'How long does funeral brochure printing take?',
    answer: 'Most brochure jobs are completed within 24 to 72 hours after artwork approval, depending on quantity and finishing options.'
  },
  {
    question: 'Can I order urgent funeral posters?',
    answer: 'Yes. We handle urgent poster requests and can prioritize same-day or next-day production where files are ready.'
  },
  {
    question: 'Do you help with design?',
    answer: 'Absolutely. Our team can support layout, photo placement, and content formatting to ensure a dignified final print.'
  },
  {
    question: 'Can I print in small quantities?',
    answer: 'Yes, we offer both low-quantity and bulk print runs to suit family needs and budget.'
  },
  {
    question: 'Do you deliver in Accra?',
    answer: 'Yes. We offer pickup and delivery in Accra, and can arrange dispatch to other parts of Ghana.'
  },
  {
    question: 'Can I send artwork on WhatsApp?',
    answer: 'Yes, you can send text, photos, and draft files via WhatsApp for quick review and guidance.'
  }
];

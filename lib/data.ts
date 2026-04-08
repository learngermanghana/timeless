export interface CollectionItem {
  id: string;
  title: string;
  description: string;
  image: string;
  ctaLabel: string;
}

export interface ProductItem {
  id: string;
  name: string;
  description: string;
  category: string;
  scentFamily: string;
  price: number;
  image: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  alt: string;
}

export const featuredCollections: CollectionItem[] = [
  {
    id: "womens",
    title: "Women’s Perfumes",
    description: "Floral, warm and graceful fragrances designed for elegant everyday presence.",
    image:
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1200&q=80",
    ctaLabel: "Shop Women’s"
  },
  {
    id: "mens",
    title: "Men’s Perfumes",
    description: "Bold, clean and refined scents that balance confidence and sophistication.",
    image:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80",
    ctaLabel: "Shop Men’s"
  },
  {
    id: "unisex",
    title: "Unisex Fragrances",
    description: "Contemporary blends with soft woods, amber and fresh notes for all identities.",
    image:
      "https://images.unsplash.com/photo-1615228939096-f3a41f6a6f0f?auto=format&fit=crop&w=1200&q=80",
    ctaLabel: "Explore Unisex"
  },
  {
    id: "oils",
    title: "Perfume Oils",
    description: "Concentrated oils with rich depth and lasting trail for long-wear comfort.",
    image:
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=1200&q=80",
    ctaLabel: "Discover Oils"
  },
  {
    id: "gift",
    title: "Gift Sets",
    description: "Beautifully presented fragrance sets for birthdays, anniversaries and milestones.",
    image:
      "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?auto=format&fit=crop&w=1200&q=80",
    ctaLabel: "Browse Gift Sets"
  },
  {
    id: "signature",
    title: "Signature Scents",
    description: "Curated statement perfumes created for unforgettable first impressions.",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80",
    ctaLabel: "Find Signature"
  }
];

export const bestsellers: ProductItem[] = [
  {
    id: "oud-royale",
    name: "Oud Royale",
    description: "A luxurious oud accord wrapped in saffron and smoky vanilla.",
    category: "Unisex",
    scentFamily: "Woody",
    price: 690,
    image:
      "https://images.unsplash.com/photo-1595425964078-6f4f8dbf1e30?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "velvet-bloom",
    name: "Velvet Bloom",
    description: "Soft rose petals, white musk and creamy sandalwood for timeless femininity.",
    category: "Women",
    scentFamily: "Floral",
    price: 540,
    image:
      "https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "amber-muse",
    name: "Amber Muse",
    description: "Warm amber resin with citrus spark and cedar for elevated everyday wear.",
    category: "Unisex",
    scentFamily: "Amber",
    price: 610,
    image:
      "https://images.unsplash.com/photo-1619994403073-2cec0f87aa0f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "midnight-noir",
    name: "Midnight Noir",
    description: "Dark plum, black pepper and leather notes for a modern evening aura.",
    category: "Men",
    scentFamily: "Spicy",
    price: 580,
    image:
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "soft-gold",
    name: "Soft Gold",
    description: "A luminous blend of jasmine, pear and golden amber with smooth depth.",
    category: "Women",
    scentFamily: "Floral",
    price: 520,
    image:
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "timeless-signature-oil",
    name: "Timeless Signature Oil",
    description: "Concentrated perfume oil with clean musk and creamy woods.",
    category: "Perfume Oils",
    scentFamily: "Fresh",
    price: 260,
    image:
      "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?auto=format&fit=crop&w=1200&q=80"
  }
];

export const benefits: BenefitItem[] = [
  {
    id: "lasting",
    title: "Long-Lasting Fragrances",
    description: "Our perfume range is selected for rich projection and all-day elegance in Ghana’s climate."
  },
  {
    id: "curated",
    title: "Carefully Curated Collection",
    description: "From niche-inspired blends to classic favorites, every scent is chosen for premium quality."
  },
  {
    id: "gift-worthy",
    title: "Gift-Worthy Luxury",
    description: "Choose refined fragrances and gift sets perfect for birthdays, anniversaries and milestones."
  },
  {
    id: "easy-order",
    title: "Easy WhatsApp Ordering",
    description: "Message us directly for quick recommendations, pricing and smooth order support."
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: "bottles",
    image:
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80",
    alt: "Luxury perfume bottles arranged on a boutique shelf"
  },
  {
    id: "gift-box",
    image:
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1200&q=80",
    alt: "Elegant fragrance gift box with ribbon on soft neutral background"
  },
  {
    id: "flat-lay",
    image:
      "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=1200&q=80",
    alt: "Premium fragrance and beauty flat lay with gold accents"
  },
  {
    id: "lifestyle",
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1200&q=80",
    alt: "Fragrance lifestyle scene with modern feminine styling"
  }
];

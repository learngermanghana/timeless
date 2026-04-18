export type SedifexProduct = {
  id?: string;
  storeId?: string;
  name: string;
  category?: string | null;
  description?: string | null;
  price?: number;
  stockCount?: number;
  itemType?: string;
  imageUrl?: string | null;
  imageUrls?: string[];
  imageAlt?: string;
  updatedAt?: string;
};

export type SedifexPromo = {
  enabled?: boolean;
  slug?: string;
  title?: string;
  summary?: string;
  startDate?: string;
  endDate?: string;
  websiteUrl?: string | null;
  youtubeUrl?: string | null;
  youtubeEmbedUrl?: string | null;
  youtubeChannelId?: string | null;
  youtubeVideos?: string[];
  imageUrl?: string | null;
  imageAlt?: string | null;
  phone?: string;
  storeName?: string;
  updatedAt?: string;
};

export type SedifexGalleryItem = {
  id?: string;
  url?: string;
  alt?: string;
  caption?: string;
  sortOrder?: number;
  isPublished?: boolean;
  createdAt?: string;
  updatedAt?: string;
};

export type IntegrationProductsResponse = {
  products?: SedifexProduct[];
};

export type IntegrationPromoResponse = {
  promo?: SedifexPromo;
  storeId?: string;
};

export type IntegrationGalleryResponse = {
  gallery?: SedifexGalleryItem[];
  storeId?: string;
};

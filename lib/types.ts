export type SedifexProduct = {
  id?: string;
  storeId?: string;
  name: string;
  category?: string;
  description?: string;
  price?: number;
  stockCount?: number;
  itemType?: string;
  imageUrl?: string;
  imageAlt?: string;
  updatedAt?: string;
};

export type SedifexPromo = {
  promoTitle?: string;
  promoSummary?: string;
  promoStartDate?: string;
  promoEndDate?: string;
  promoSlug?: string;
  promoWebsiteUrl?: string;
  displayName?: string;
  name?: string;
};

export type SedifexGalleryItem = {
  url?: string;
  alt?: string;
  caption?: string;
  sortOrder?: number;
  isPublished?: boolean;
  createdAt?: string;
  updatedAt?: string;
};

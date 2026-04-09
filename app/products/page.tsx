import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { ProductCard } from '@/components/product-card';
import { SectionHeading } from '@/components/section-heading';
import { products } from '@/lib/data';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata('Products', 'View Condolence GH funeral print products including brochures, posters, banners, obituary cards, and appreciation cards.', '/products');

export default function ProductsPage() {
  return (
    <div className="container-shell py-10">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Products' }]} />
      <SectionHeading title="Funeral print products" description="Choose from standard and custom memorial print formats produced with premium finishing." />
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{products.map((product) => <ProductCard key={product.title} {...product} />)}</div>
    </div>
  );
}

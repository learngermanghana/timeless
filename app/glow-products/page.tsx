import { SectionHeading } from '@/components/section-heading';
import { ProductCard } from '@/components/product-card';
import { buildPageMetadata } from '@/lib/metadata';
import { getSedifexProducts } from '@/lib/sedifex';

export const metadata = buildPageMetadata('Glow Products', 'Glow and hydration skincare products from Prep N Prime GH.', '/glow-products');

export default async function GlowProductsPage() {
  const products = await getSedifexProducts();
  const filtered = products.filter((p) => /glow|bright|hydrat|radiance|dark/i.test(`${p.category} ${p.name} ${p.description}`));

  return (
    <section className='mx-auto max-w-7xl space-y-6 px-4 py-14 md:px-6'>
      <SectionHeading title='Glow Products' description='Radiance-focused products for smooth, luminous skin.' />
      <div className='grid gap-5 md:grid-cols-3'>
        {(filtered.length ? filtered : products.slice(0, 6)).map((product) => <ProductCard key={`${product.id}-${product.name}`} product={product} />)}
      </div>
    </section>
  );
}

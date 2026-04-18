import { SectionHeading } from '@/components/section-heading';
import { ProductCard } from '@/components/product-card';
import { buildPageMetadata } from '@/lib/metadata';
import { getSedifexProducts } from '@/lib/sedifex';

export const metadata = buildPageMetadata('Body Care', 'Body lotions, shower gels, body oils, and body scrubs in Ghana.', '/body-care');

export default async function BodyCarePage() {
  const products = await getSedifexProducts();
  const filtered = products.filter((p) => /body|lotion|oil|scrub|wash/i.test(`${p.category} ${p.name}`));

  return (
    <section className='mx-auto max-w-7xl px-4 py-14 md:px-6'>
      <SectionHeading title='Body Care Essentials' description='Lotions, shower gels, body oils, and scrubs for soft hydrated skin.' />
      <div className='mt-6 grid gap-5 md:grid-cols-3'>
        {(filtered.length ? filtered : products).map((product) => <ProductCard key={`${product.id}-${product.name}`} product={product} />)}
      </div>
    </section>
  );
}

import { SectionHeading } from '@/components/section-heading';
import { ProductCard } from '@/components/product-card';
import { buildPageMetadata } from '@/lib/metadata';
import { getSedifexProducts } from '@/lib/sedifex';

export const metadata = buildPageMetadata('Sensitive Skin', 'Gentle skincare products for sensitive skin in Ghana.', '/sensitive-skin');

export default async function SensitiveSkinPage() {
  const products = await getSedifexProducts();
  const filtered = products.filter((p) => /sensitive|gentle|barrier|hydrat/i.test(`${p.category} ${p.name} ${p.description}`));

  return (
    <section className='mx-auto max-w-7xl space-y-6 px-4 py-14 md:px-6'>
      <SectionHeading title='Sensitive Skin Picks' description='Comforting formulas focused on hydration and barrier support.' />
      <div className='grid gap-5 md:grid-cols-3'>
        {(filtered.length ? filtered : products.slice(0, 6)).map((product) => <ProductCard key={`${product.id}-${product.name}`} product={product} />)}
      </div>
    </section>
  );
}

import { SectionHeading } from '@/components/section-heading';
import { ProductCard } from '@/components/product-card';
import { buildPageMetadata } from '@/lib/metadata';
import { getSedifexProducts } from '@/lib/sedifex';

export const metadata = buildPageMetadata('Skin Care', 'Shop cleansers, toners, serums, moisturizers, and sunscreen in Ghana.', '/skin-care');

export default async function SkinCarePage() {
  const products = await getSedifexProducts();
  const filtered = products.filter((p) =>
    /cleanser|toner|serum|moisturizer|sunscreen|acne|hydration|glow|dark|sensitive|skin/i.test(`${p.category} ${p.name}`)
  );

  return (
    <section className='mx-auto max-w-7xl px-4 py-14 md:px-6'>
      <SectionHeading title='Skin Care Collection' description='From daily cleansing to targeted glow and dark-spot support.' />
      <div className='mt-6 grid gap-5 md:grid-cols-3'>
        {(filtered.length ? filtered : products).map((product) => <ProductCard key={`${product.id}-${product.name}`} product={product} />)}
      </div>
    </section>
  );
}

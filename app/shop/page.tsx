import { SectionHeading } from '@/components/section-heading';
import { ProductCard } from '@/components/product-card';
import { buildPageMetadata } from '@/lib/metadata';
import { getSedifexProducts, groupProductsByCategory } from '@/lib/sedifex';

export const metadata = buildPageMetadata('Shop', 'Browse premium body care and skincare products in Ghana.', '/shop');

export default async function ShopPage() {
  const products = await getSedifexProducts();
  const grouped = groupProductsByCategory(products);

  return (
    <section className='mx-auto max-w-7xl space-y-10 px-4 py-14 md:px-6'>
      <SectionHeading title='Shop All Products' description='Browse the full Prep N Prime GH catalog and order via WhatsApp.' />
      {Object.entries(grouped).map(([category, items]) => (
        <div key={category} className='space-y-4'>
          <h2 className='text-2xl font-semibold text-stone-900'>{category}</h2>
          <div className='grid gap-5 md:grid-cols-3'>
            {items.map((product) => (
              <ProductCard key={`${product.id}-${product.name}`} product={product} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

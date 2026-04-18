import Link from 'next/link';
import { HeroSection } from '@/components/hero-section';
import { SectionHeading } from '@/components/section-heading';
import { CategoryCard } from '@/components/category-card';
import { ProductCard } from '@/components/product-card';
import { TestimonialCard } from '@/components/testimonial-card';
import { CtaBanner } from '@/components/cta-banner';
import { PromoBanner } from '@/components/promo-banner';
import { GalleryGrid } from '@/components/gallery-grid';
import { FaqList } from '@/components/faq-list';
import { NewsletterBox } from '@/components/newsletter-box';
import { getSedifexGallery, getSedifexProducts, getSedifexPromo } from '@/lib/sedifex';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata(
  'Home',
  'Premium beauty shop in Ghana for body products and skincare with WhatsApp ordering and consultation support.',
  '/'
);

export default async function HomePage() {
  const [products, promo, gallery] = await Promise.all([
    getSedifexProducts(),
    getSedifexPromo(),
    getSedifexGallery()
  ]);

  return (
    <div className='space-y-16 pb-20'>
      <HeroSection promo={promo} />
      <section className='mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-2 md:px-6'>
        <div className='space-y-6'>
          <SectionHeading title='Special promo' description='Latest integration promo from Sedifex.' />
          <PromoBanner promo={promo} />
        </div>

        <div className='space-y-6'>
          <SectionHeading title='Store gallery' description='Latest integration gallery from Sedifex.' />
          <GalleryGrid items={gallery.slice(0, 6)} />
        </div>
      </section>

      <section className='mx-auto max-w-7xl px-4 md:px-6'>
        <SectionHeading eyebrow='Categories' title='Shop by beauty category' description='Explore top categories curated for body care and skincare needs.' />
        <div className='mt-6 grid gap-4 md:grid-cols-3'>
          <CategoryCard title='Body Care' description='Lotions, oils, scrubs and moisturizing essentials.' href='/body-care' />
          <CategoryCard title='Skin Care' description='Cleansers, toners, serums, moisturizers and sunscreen.' href='/skin-care' />
          <CategoryCard title='Sensitive Skin' description='Comfort-first picks for delicate and reactive skin.' href='/sensitive-skin' />
          <CategoryCard title='Glow Essentials' description='Brightening and hydration favorites for radiant skin.' href='/glow-products' />
          <CategoryCard title='Daily Care' description='Reliable everyday routines for healthy looking skin.' href='/collections' />
        </div>
      </section>

      <section className='mx-auto max-w-7xl px-4 md:px-6'>
        <SectionHeading eyebrow='Best Sellers' title='Featured products' description='Popular picks from our current catalog.' />
        <div className='mt-6 grid gap-5 md:grid-cols-3'>
          {products.slice(0, 6).map((product) => (
            <ProductCard key={`${product.id}-${product.name}`} product={product} />
          ))}
        </div>
      </section>

      <section className='mx-auto max-w-7xl px-4 md:px-6'>
        <SectionHeading title='Why shop with Prep N Prime GH' />
        <div className='mt-6 grid gap-4 md:grid-cols-3'>
          <TestimonialCard quote='Authentic products from trusted lines only.' name='Authenticity first' />
          <TestimonialCard quote='Friendly consultation support before purchase.' name='Consultation-led' />
          <TestimonialCard quote='Easy order process through WhatsApp and phone.' name='Customer-friendly' />
        </div>
      </section>

      <section className='mx-auto max-w-7xl px-4 md:px-6'><CtaBanner /></section>

      <section className='mx-auto max-w-7xl space-y-6 px-4 md:px-6'>
        <SectionHeading title='FAQs' />
        <FaqList />
        <Link href='/faq' className='text-sm font-medium text-rose-600'>View all FAQs →</Link>
      </section>

      <section className='mx-auto max-w-7xl px-4 md:px-6'><NewsletterBox /></section>
    </div>
  );
}

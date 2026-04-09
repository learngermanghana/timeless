import Link from 'next/link';
import { HeroSection } from '@/components/hero-section';
import { SectionHeading } from '@/components/section-heading';
import { ServiceCard } from '@/components/service-card';
import { ProductCard } from '@/components/product-card';
import { CtaBanner } from '@/components/cta-banner';
import { GalleryGrid } from '@/components/gallery-grid';
import { FaqList } from '@/components/faq-list';
import { services, products, galleryItems, faqItems } from '@/lib/data';

export default function HomePage() {
  return (
    <div className="container-shell space-y-16 py-8 sm:py-12">
      <HeroSection />

      <section className="space-y-8">
        <SectionHeading eyebrow="Core Services" title="Complete funeral printing support" description="From obituary brochures to event banners, we provide coordinated print solutions for funerals, one-week observance, and thanksgiving services." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{services.slice(0, 6).map((service) => <ServiceCard key={service.title} {...service} />)}</div>
      </section>

      <section className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
        <SectionHeading title="Why families and planners choose us" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {['Respectful design guidance', 'Fast turnaround for urgent timelines', 'Color-accurate premium printing', 'Pickup and delivery support in Accra'].map((item) => (
            <p key={item} className="rounded-2xl bg-[var(--color-ivory)] p-4 text-sm text-[var(--color-muted)]">{item}</p>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading eyebrow="Featured" title="Popular print options" />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{products.map((product) => <ProductCard key={product.title} {...product} />)}</div>
      </section>

      <section className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
        <SectionHeading eyebrow="How It Works" title="A simple process during sensitive times" />
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {['Share details and photos', 'Approve draft design', 'Print and finishing', 'Pickup or delivery'].map((step, i) => (
            <li key={step} className="rounded-2xl bg-[var(--color-ivory)] p-4 text-sm"><span className="font-semibold">0{i + 1}.</span> {step}</li>
          ))}
        </ol>
      </section>

      <section className="space-y-8">
        <div className="flex items-end justify-between gap-4">
          <SectionHeading className="mx-0 text-left" title="Gallery preview" description="A look at our memorial-themed print quality and finishing." />
          <Link href="/gallery" className="text-sm font-medium text-[var(--color-accent)] hover:underline">View full gallery</Link>
        </div>
        <GalleryGrid items={galleryItems.slice(0, 3)} />
      </section>

      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <SectionHeading className="mx-0 text-left" title="Frequently asked questions" />
          <Link href="/faq" className="text-sm font-medium text-[var(--color-accent)] hover:underline">See all FAQs</Link>
        </div>
        <FaqList items={faqItems.slice(0, 3)} />
      </section>

      <CtaBanner title="Need urgent funeral printing support?" description="Speak with Condolence GH now for fast and respectful print coordination in Accra and across Ghana." />
    </div>
  );
}

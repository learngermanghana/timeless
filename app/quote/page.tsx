import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { ContactCard } from '@/components/contact-card';
import { QuoteForm } from '@/components/quote-form';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata('Request a Quote', 'Request a funeral printing quote from Condolence GH for brochures, posters, banners, obituary cards, and custom memorial jobs.', '/quote');

export default function QuotePage() {
  return (
    <div className="container-shell py-10">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Request a Quote' }]} />
      <h1 className="text-3xl font-semibold">Request a funeral print quote</h1>
      <p className="mt-3 max-w-2xl text-sm text-[var(--color-muted)]">Complete the form and our team will respond with pricing, timeline, and recommended finishing options.</p>
      <div className="mt-8 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <QuoteForm />
        <ContactCard />
      </div>
    </div>
  );
}

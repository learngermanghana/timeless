import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata('Appreciation Cards', 'Appreciation and thank-you card printing after funeral and memorial services in Ghana.', '/appreciation-cards');

export default function AppreciationCardsPage() {
  return (
    <section className="container-shell space-y-4 py-10">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Appreciation Cards' }]} />
      <h1 className="text-3xl font-semibold">Appreciation cards</h1>
      <p className="max-w-3xl text-sm text-[var(--color-muted)]">Honor those who supported your family with tasteful appreciation cards designed for post-service gratitude and remembrance.</p>
    </section>
  );
}

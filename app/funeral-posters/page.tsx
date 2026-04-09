import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { CtaBanner } from '@/components/cta-banner';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata('Funeral Poster Printing', 'Get high-quality funeral poster printing in Accra and across Ghana for announcements, directions, and memorial displays.', '/funeral-posters');

export default function FuneralPostersPage() {
  return (
    <section className="container-shell space-y-8 py-10">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Funeral Posters' }]} />
      <h1 className="text-3xl font-semibold">Funeral poster printing</h1>
      <p className="max-w-3xl text-[var(--color-muted)]">Condolence GH produces clear, durable memorial posters suitable for churches, family homes, event grounds, and directional signage.</p>
      <div className="grid gap-4 md:grid-cols-3">
        <article className="rounded-2xl border border-black/10 bg-white p-5"><h2 className="font-semibold">Use cases</h2><p className="mt-2 text-sm text-[var(--color-muted)]">Announcement posters, directional event posters, remembrance displays.</p></article>
        <article className="rounded-2xl border border-black/10 bg-white p-5"><h2 className="font-semibold">Sizes & formats</h2><p className="mt-2 text-sm text-[var(--color-muted)]">A3, A2, A1, custom large format with portrait-focused templates.</p></article>
        <article className="rounded-2xl border border-black/10 bg-white p-5"><h2 className="font-semibold">Finishing options</h2><p className="mt-2 text-sm text-[var(--color-muted)]">Laminated or unlaminated stock, weather-resistant options for outdoors.</p></article>
      </div>
      <CtaBanner title="Need urgent funeral posters?" description="We offer fast turnaround and guidance for same-day and next-day requests." />
    </section>
  );
}

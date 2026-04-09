import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { CtaBanner } from '@/components/cta-banner';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata('Funeral Banner Printing', 'Professional funeral banner printing in Ghana for memorial announcements, venue branding, and directional signage.', '/funeral-banners');

export default function FuneralBannersPage() {
  return (
    <section className="container-shell space-y-8 py-10">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Funeral Banners' }]} />
      <h1 className="text-3xl font-semibold">Funeral banner printing</h1>
      <p className="max-w-3xl text-[var(--color-muted)]">Our banners are printed on durable materials with clear typography and dignified visuals for memorial events and public notices.</p>
      <div className="grid gap-4 md:grid-cols-3">
        <article className="rounded-2xl border border-black/10 bg-white p-5"><h2 className="font-semibold">Use cases</h2><p className="mt-2 text-sm text-[var(--color-muted)]">Venue entrance branding, roadside tribute announcements, stage backdrops.</p></article>
        <article className="rounded-2xl border border-black/10 bg-white p-5"><h2 className="font-semibold">Sizes & formats</h2><p className="mt-2 text-sm text-[var(--color-muted)]">3x6ft, 4x8ft, and custom dimensions for churches and event spaces.</p></article>
        <article className="rounded-2xl border border-black/10 bg-white p-5"><h2 className="font-semibold">Finishing options</h2><p className="mt-2 text-sm text-[var(--color-muted)]">Hemmed edges, eyelets, reinforced corners, and stand-mount options.</p></article>
      </div>
      <CtaBanner title="Request banner pricing" description="Send preferred size, quantity, and deadline for a tailored quote." />
    </section>
  );
}

import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { CtaBanner } from '@/components/cta-banner';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata('Funeral Brochure Printing', 'Professional funeral brochure printing in Ghana with elegant layouts, quality paper options, and fast turnaround.', '/funeral-brochures');

export default function FuneralBrochuresPage() {
  return (
    <section className="container-shell space-y-8 py-10">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Funeral Brochures' }]} />
      <h1 className="text-3xl font-semibold">Funeral brochure printing in Ghana</h1>
      <p className="max-w-3xl text-[var(--color-muted)]">Our brochure service is ideal for order of service programs, tribute pages, and acknowledgment notes presented with respectful design and premium print quality.</p>
      <div className="grid gap-4 md:grid-cols-3">
        <article className="rounded-2xl border border-black/10 bg-white p-5"><h2 className="font-semibold">Use cases</h2><p className="mt-2 text-sm text-[var(--color-muted)]">Burial service programs, one-week observance handouts, thanksgiving service booklets.</p></article>
        <article className="rounded-2xl border border-black/10 bg-white p-5"><h2 className="font-semibold">Sizes & formats</h2><p className="mt-2 text-sm text-[var(--color-muted)]">A5, A4 folded, saddle-stitched, perfect-bound, 8 to 32+ pages.</p></article>
        <article className="rounded-2xl border border-black/10 bg-white p-5"><h2 className="font-semibold">Finishing options</h2><p className="mt-2 text-sm text-[var(--color-muted)]">Matte, silk, gloss, soft-touch laminate, and premium textured stocks.</p></article>
      </div>
      <CtaBanner title="Ready to print a funeral brochure?" description="Share your content and photos; we will prepare a respectful layout and quick quote." />
    </section>
  );
}

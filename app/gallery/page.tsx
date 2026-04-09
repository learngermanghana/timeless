import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { GalleryGrid } from '@/components/gallery-grid';
import { buildMetadata } from '@/lib/metadata';
import { galleryItems } from '@/lib/data';

export const metadata: Metadata = buildMetadata('Gallery', 'View a respectful gallery of funeral brochures, posters, banners, and memorial print materials by Condolence GH.', '/gallery');

export default function GalleryPage() {
  return (
    <section className="container-shell space-y-8 py-10">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Gallery' }]} />
      <h1 className="text-3xl font-semibold">Memorial print gallery</h1>
      <p className="max-w-3xl text-sm text-[var(--color-muted)]">Selected samples demonstrating quality print finishes, color control, and dignified layout direction.</p>
      <GalleryGrid items={galleryItems} />
    </section>
  );
}

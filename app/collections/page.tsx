import { CollectionGrid } from '@/components/collection-grid';
import { SectionHeading } from '@/components/section-heading';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata('Collections', 'Curated skincare and body care bundles for glow, hydration, and sensitive skin.', '/collections');

export default function CollectionsPage() {
  return (
    <section className='mx-auto max-w-7xl space-y-8 px-4 py-14 md:px-6'>
      <SectionHeading title='Beauty Collections' description='Shop curated routines for glow, hydration, and daily care.' />
      <CollectionGrid />
    </section>
  );
}

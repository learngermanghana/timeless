import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata('About', 'Learn how Condolence GH, a sub-brand of 247 PRINT HOUSE, supports funeral and memorial printing projects across Ghana.', '/about');

export default function AboutPage() {
  return (
    <section className="container-shell space-y-5 py-10">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'About' }]} />
      <h1 className="text-3xl font-semibold">About Condolence GH</h1>
      <p className="max-w-3xl text-[var(--color-muted)]">Condolence GH is the funeral-printing and memorial-focused arm of 247 PRINT HOUSE. We were created to provide families, churches, planners, and institutions in Ghana with a dedicated team that understands the urgency, sensitivity, and quality expectations of funeral print projects.</p>
      <p className="max-w-3xl text-[var(--color-muted)]">Our production workflow combines respectful design direction, clear communication, and dependable finishing. Whether you need a full coordinated package or a single urgent item, we help you deliver a dignified presentation for every stage of remembrance.</p>
    </section>
  );
}

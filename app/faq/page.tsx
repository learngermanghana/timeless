import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { FaqList } from '@/components/faq-list';
import { buildMetadata } from '@/lib/metadata';
import { faqItems } from '@/lib/data';

export const metadata: Metadata = buildMetadata('FAQ', 'Frequently asked questions about funeral brochure printing, urgent posters, delivery, and design support in Ghana.', '/faq');

export default function FaqPage() {
  return (
    <section className="container-shell space-y-8 py-10">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]} />
      <h1 className="text-3xl font-semibold">Frequently asked questions</h1>
      <FaqList items={faqItems} />
    </section>
  );
}

import { FaqList } from '@/components/faq-list';
import { SectionHeading } from '@/components/section-heading';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata('FAQ', 'Frequently asked questions about ordering, consultations, and product authenticity.', '/faq');

export default function FaqPage() {
  return (
    <section className='mx-auto max-w-4xl space-y-6 px-4 py-14 md:px-6'>
      <SectionHeading title='Frequently Asked Questions' />
      <FaqList />
    </section>
  );
}

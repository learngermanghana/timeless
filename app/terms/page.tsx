import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata('Terms', 'Terms of use and ordering terms for Prep N Prime GH.', '/terms');

export default function TermsPage() {
  return (
    <section className='mx-auto max-w-4xl space-y-4 px-4 py-14 text-stone-700 md:px-6'>
      <h1 className='text-3xl font-semibold text-stone-900'>Terms & Conditions</h1>
      <p>Product availability and pricing may change without notice. Orders are confirmed after direct communication.</p>
      <p>Customers should follow usage directions and patch-test new products where necessary.</p>
    </section>
  );
}

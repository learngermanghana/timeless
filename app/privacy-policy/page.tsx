import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata('Privacy Policy', 'How Prep N Prime GH handles customer data and enquiry information.');

export default function PrivacyPolicyPage() {
  return (
    <section className='mx-auto max-w-4xl space-y-4 px-4 py-14 text-stone-700 md:px-6'>
      <h1 className='text-3xl font-semibold text-stone-900'>Privacy Policy</h1>
      <p>We collect only the personal information needed to process enquiries and orders, including contact details and product preferences.</p>
      <p>We do not sell personal data. You may request updates or deletion of your data by contacting us.</p>
    </section>
  );
}

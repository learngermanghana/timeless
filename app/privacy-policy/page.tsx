import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata('Privacy Policy', 'Read the Condolence GH privacy policy for how enquiry details and customer information are handled.', '/privacy-policy');

export default function PrivacyPolicyPage() {
  return (
    <section className="container-shell space-y-5 py-10">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]} />
      <h1 className="text-3xl font-semibold">Privacy Policy</h1>
      <p className="text-sm text-[var(--color-muted)]">Condolence GH collects only the information required to respond to enquiries, prepare print estimates, and deliver completed jobs. We may store contact details, artwork files, and communication history for service execution and quality assurance.</p>
      <p className="text-sm text-[var(--color-muted)]">We do not sell personal data. Customer data may be shared with trusted logistics or production partners only where necessary for job fulfilment. You may request update or deletion of your contact information by emailing our support team.</p>
      <p className="text-sm text-[var(--color-muted)]">By using this website, you consent to this policy and to reasonable updates made for legal or operational purposes.</p>
    </section>
  );
}

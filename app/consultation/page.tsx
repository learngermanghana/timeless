import { ConsultationForm } from '@/components/consultation-form';
import { SectionHeading } from '@/components/section-heading';
import { WHATSAPP_LINK } from '@/lib/constants';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata('Consultation', 'Request professional skincare and body care guidance from Prep N Prime GH.', '/consultation');

export default function ConsultationPage() {
  return (
    <section className='mx-auto max-w-5xl space-y-6 px-4 py-14 md:px-6'>
      <SectionHeading title='Skincare Consultation' description='Tell us your skin type, concerns, and goals. We will guide you toward suitable products.' />
      <ConsultationForm />
      <p className='text-sm text-stone-600'>Need faster help? <a href={WHATSAPP_LINK} className='font-medium text-rose-600'>Message us on WhatsApp</a>.</p>
    </section>
  );
}

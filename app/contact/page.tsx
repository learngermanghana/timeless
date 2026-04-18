import { ContactCard } from '@/components/contact-card';
import { ConsultationForm } from '@/components/consultation-form';
import { SectionHeading } from '@/components/section-heading';
import { buildPageMetadata } from '@/lib/metadata';
import { PHONE_DISPLAY, PHONE_E164, WHATSAPP_LINK } from '@/lib/constants';

export const metadata = buildPageMetadata('Contact', 'Call or WhatsApp Prep N Prime GH for skincare and body care enquiries.', '/contact');

export default function ContactPage() {
  return (
    <section className='mx-auto max-w-7xl space-y-8 px-4 py-14 md:px-6'>
      <SectionHeading title='Contact Us' description='Call, WhatsApp, or send your enquiry below.' />
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        <ContactCard title='Call' value={PHONE_DISPLAY} href={`tel:${PHONE_E164}`} />
        <ContactCard title='WhatsApp' value='Chat now' href={WHATSAPP_LINK} />
        <ContactCard title='Email' value='hello@prepnprimegh.com' href='mailto:hello@prepnprimegh.com' />
        <ContactCard title='Address' value='Accra, Ghana (placeholder)' />
      </div>
      <ConsultationForm />
    </section>
  );
}

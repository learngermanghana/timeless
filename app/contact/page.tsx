import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { ContactCard } from '@/components/contact-card';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata('Contact', 'Contact Condolence GH for funeral printing enquiries in Accra and across Ghana via phone, WhatsApp, or email.', '/contact');

export default function ContactPage() {
  return (
    <section className="container-shell py-10">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />
      <h1 className="text-3xl font-semibold">Contact us</h1>
      <p className="mt-3 max-w-2xl text-sm text-[var(--color-muted)]">Send your enquiry and artwork details for quick support. Urgent projects are best handled via phone or WhatsApp.</p>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <ContactCard />
        <form className="space-y-4 rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <label className="block text-sm font-medium">Name<input className="mt-2 w-full rounded-xl border border-black/15 px-3 py-2 text-sm" /></label>
          <label className="block text-sm font-medium">Email<input type="email" className="mt-2 w-full rounded-xl border border-black/15 px-3 py-2 text-sm" /></label>
          <label className="block text-sm font-medium">Message<textarea rows={5} className="mt-2 w-full rounded-xl border border-black/15 px-3 py-2 text-sm" /></label>
          <button className="rounded-full bg-[var(--color-foreground)] px-5 py-3 text-sm font-semibold text-white">Send enquiry</button>
        </form>
      </div>
    </section>
  );
}

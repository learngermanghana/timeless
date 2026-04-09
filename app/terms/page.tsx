import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata('Terms of Service', 'Review the Condolence GH terms for funeral and memorial printing orders in Ghana.', '/terms');

export default function TermsPage() {
  return (
    <section className="container-shell space-y-5 py-10">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Terms' }]} />
      <h1 className="text-3xl font-semibold">Terms of Service</h1>
      <p className="text-sm text-[var(--color-muted)]">Quotes are valid for 7 days unless otherwise stated. Production begins after content confirmation and payment agreement. Turnaround times depend on file readiness, quantity, and finishing.</p>
      <p className="text-sm text-[var(--color-muted)]">Customers are responsible for final proofreading and approval of names, dates, and service details before print. Approved artwork cannot be fully refunded once production has started.</p>
      <p className="text-sm text-[var(--color-muted)]">Delivery timelines are estimates and may vary due to external logistics conditions. By placing an order, you agree to these terms and any approved job-specific quotation terms.</p>
    </section>
  );
}

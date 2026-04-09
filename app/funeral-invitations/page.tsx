import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata('Funeral Invitation Cards', 'Elegant funeral invitation card printing for family announcements and invited guests in Ghana.', '/funeral-invitations');

export default function FuneralInvitationsPage() {
  return (
    <section className="container-shell space-y-4 py-10">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Funeral Invitations' }]} />
      <h1 className="text-3xl font-semibold">Funeral invitation cards</h1>
      <p className="max-w-3xl text-sm text-[var(--color-muted)]">We print refined invitation cards with clear event details, optional envelopes, and coordinated styling to match your funeral brochure and poster set.</p>
    </section>
  );
}

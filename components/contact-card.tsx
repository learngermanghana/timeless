import { ADDRESS, EMAIL, PHONE_DISPLAY, PHONE_RAW, WHATSAPP_NUMBER } from '@/lib/constants';

export function ContactCard() {
  return (
    <aside className="rounded-2xl border border-black/10 bg-[var(--color-ivory)] p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-[var(--color-foreground)]">Contact Condolence GH</h3>
      <ul className="mt-4 space-y-2 text-sm text-[var(--color-muted)]">
        <li>
          <strong className="text-[var(--color-foreground)]">Phone:</strong>{' '}
          <a className="hover:underline" href={`tel:${PHONE_RAW}`}>
            {PHONE_DISPLAY}
          </a>
        </li>
        <li>
          <strong className="text-[var(--color-foreground)]">WhatsApp:</strong>{' '}
          <a className="hover:underline" href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}`}>
            {WHATSAPP_NUMBER}
          </a>
        </li>
        <li>
          <strong className="text-[var(--color-foreground)]">Email:</strong>{' '}
          <a className="hover:underline" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </li>
        <li>
          <strong className="text-[var(--color-foreground)]">Address:</strong> {ADDRESS}
        </li>
      </ul>
    </aside>
  );
}

import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <section className="container-shell py-20 text-center">
      <h1 className="text-3xl font-semibold">Thank you for your enquiry</h1>
      <p className="mt-3 text-sm text-[var(--color-muted)]">A team member from Condolence GH will contact you shortly.</p>
      <Link href="/" className="mt-6 inline-block rounded-full bg-[var(--color-foreground)] px-5 py-3 text-sm font-semibold text-white">
        Return to Home
      </Link>
    </section>
  );
}

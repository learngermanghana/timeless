import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container-shell py-24 text-center">
      <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-muted)]">404</p>
      <h1 className="mt-3 text-3xl font-semibold">Page not found</h1>
      <p className="mt-3 text-[var(--color-muted)]">The page you are looking for may have moved.</p>
      <Link href="/" className="mt-6 inline-block rounded-full bg-[var(--color-foreground)] px-5 py-3 text-sm font-semibold text-white">
        Return home
      </Link>
    </section>
  );
}

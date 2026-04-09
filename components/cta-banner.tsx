import Link from 'next/link';

type CtaBannerProps = {
  title: string;
  description: string;
};

export function CtaBanner({ title, description }: CtaBannerProps) {
  return (
    <section className="rounded-3xl bg-[var(--color-foreground)] px-6 py-12 text-[var(--color-background)] sm:px-10">
      <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
      <p className="mt-3 max-w-2xl text-sm text-[color-mix(in_oklab,var(--color-background)_82%,black)] sm:text-base">{description}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/quote" className="rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90">
          Request a Quote
        </Link>
        <Link href="/contact" className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
          Contact Team
        </Link>
      </div>
    </section>
  );
}

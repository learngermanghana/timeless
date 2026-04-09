import Link from 'next/link';
import { PHONE_RAW } from '@/lib/constants';

export function HeroSection() {
  return (
    <section className="rounded-3xl bg-[linear-gradient(140deg,#171717_0%,#2a2a2a_100%)] px-6 py-14 text-[var(--color-background)] sm:px-10 sm:py-20">
      <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-accent)]">Funeral Printing Services in Ghana</p>
      <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">Premium memorial print support when every detail matters.</h1>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
        Condolence GH helps families, churches, and funeral planners produce dignified brochures, posters, banners, invitation cards, and memorial stationery with dependable turnaround.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/quote" className="rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-black hover:opacity-90">
          Request a Quote
        </Link>
        <a href={`tel:${PHONE_RAW}`} className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold hover:bg-white/10">
          Call / WhatsApp
        </a>
      </div>
    </section>
  );
}

import { WHATSAPP_URL } from "@/lib/constants";

export default function PromoBanner() {
  return (
    <section className="bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-3xl bg-gradient-to-r from-brand-primary to-brand-secondary p-8 text-brand-light shadow-luxe md:flex-row md:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-brand-accent">Luxury Promo</p>
          <h2 className="mt-2 font-serif text-3xl leading-tight sm:text-4xl">Discover your next signature scent</h2>
          <p className="mt-3 max-w-2xl text-brand-light/80">
            Shop elegant fragrances for everyday confidence, gifting moments and unforgettable occasions.
          </p>
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-brand-secondary transition hover:brightness-95"
        >
          Order on WhatsApp
        </a>
      </div>
    </section>
  );
}

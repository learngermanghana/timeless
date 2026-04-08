import Image from "next/image";
import { PHONE_DISPLAY, PHONE_E164, WHATSAPP_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="bg-brand-light px-4 pb-16 pt-8 sm:px-6 lg:px-8" id="top">
      <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-[2rem] bg-gradient-to-br from-brand-primary via-[#2f1824] to-brand-secondary p-6 text-brand-light shadow-luxe sm:p-10 lg:grid-cols-2 lg:p-14">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-brand-accent/50 bg-brand-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-accent">
            Luxury perfumes in Ghana
          </p>
          <h1 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Luxury fragrances that leave a lasting impression.
          </h1>
          <p className="mt-6 max-w-xl text-base text-brand-light/85 sm:text-lg">
            Timeless Perfume brings premium men’s, women’s and unisex scents to Accra—crafted for confidence,
            elegance and unforgettable moments.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-brand-secondary transition hover:brightness-95"
            >
              Order on WhatsApp
            </a>
            <a
              href={`tel:${PHONE_E164}`}
              className="rounded-full border border-brand-light/30 px-6 py-3 text-sm font-semibold text-brand-light transition hover:bg-brand-light/10"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-brand-light/15 bg-brand-light/5">
          <Image
            src="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1400&q=80"
            alt="Premium perfume bottles on a modern boutique counter with soft lighting"
            width={1200}
            height={900}
            priority
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

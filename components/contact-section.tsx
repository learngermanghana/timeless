import { MAPS_URL, PHONE_DISPLAY, PHONE_E164, WHATSAPP_URL } from "@/lib/constants";

export default function ContactSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8" id="contact">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-3xl border border-brand-neutral bg-brand-light p-6 shadow-soft sm:p-10 lg:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.16em] text-brand-primary">Customer Experience</p>
          <h2 className="mt-2 text-3xl font-semibold text-brand-secondary sm:text-4xl">Fragrance for life’s special moments</h2>
          <p className="mt-4 text-brand-secondary/75">
            Whether you are shopping for daily elegance, birthdays, anniversaries, men’s and women’s perfumes or a
            thoughtful gift, Timeless Perfume is ready to guide your choice.
          </p>
          <p className="mt-3 text-brand-secondary/75">
            Call or message us for orders and enquiries. We make premium fragrance shopping smooth and personal.
          </p>
        </div>

        <div className="space-y-4 rounded-2xl bg-white p-6 shadow-soft">
          <a
            href={`tel:${PHONE_E164}`}
            className="block rounded-full bg-brand-primary px-5 py-3 text-center text-sm font-semibold text-brand-light transition hover:bg-brand-secondary"
          >
            Call {PHONE_DISPLAY}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="block rounded-full border border-brand-primary px-5 py-3 text-center text-sm font-semibold text-brand-primary transition hover:bg-brand-primary hover:text-brand-light"
          >
            Chat on WhatsApp
          </a>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="block rounded-full border border-brand-secondary px-5 py-3 text-center text-sm font-semibold text-brand-secondary transition hover:bg-brand-secondary hover:text-brand-light"
          >
            Get directions
          </a>
        </div>
      </div>
    </section>
  );
}

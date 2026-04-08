import { MAPS_URL, PHONE_DISPLAY, PHONE_E164, WHATSAPP_URL } from "@/lib/constants";

const supportHighlights = [
  {
    title: "Fast response",
    description: "Most messages are answered within minutes during business hours.",
  },
  {
    title: "Gift-ready guidance",
    description: "Tell us the occasion and budget—we'll recommend the right fragrance quickly.",
  },
  {
    title: "Easy pickup directions",
    description: "Open Google Maps in one tap and head straight to our store.",
  },
];

export default function ContactSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8" id="contact">
      <div className="mx-auto max-w-7xl rounded-3xl border border-brand-neutral bg-brand-light p-6 shadow-soft sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.25fr_1fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.16em] text-brand-primary">Customer Experience</p>
            <h2 className="mt-2 text-3xl font-semibold text-brand-secondary sm:text-4xl">
              Fragrance support made personal
            </h2>
            <p className="mt-4 text-brand-secondary/75">
              Whether you are shopping for daily elegance, birthdays, anniversaries, men’s and women’s perfumes, or a
              thoughtful gift, Timeless Perfume is ready to guide your choice.
            </p>
            <p className="mt-3 text-brand-secondary/75">
              Call or message us for orders and enquiries. We make premium fragrance shopping smooth and personal.
            </p>

            <ul className="mt-6 space-y-3">
              {supportHighlights.map((item) => (
                <li key={item.title} className="rounded-2xl border border-brand-neutral/80 bg-white/70 p-4">
                  <p className="font-semibold text-brand-secondary">{item.title}</p>
                  <p className="mt-1 text-sm text-brand-secondary/75">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 rounded-2xl bg-white p-6 shadow-soft">
            <p className="text-sm font-medium text-brand-secondary/70">Choose your preferred way to reach us</p>
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
            <p className="rounded-xl bg-brand-light px-4 py-3 text-xs leading-relaxed text-brand-secondary/70">
              Tip: Include your preferred scent notes (fresh, woody, floral, gourmand) when messaging us for a faster,
              more tailored recommendation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

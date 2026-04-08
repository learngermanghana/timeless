import { BRAND_NAME, MAPS_URL, PHONE_DISPLAY, PHONE_E164, WHATSAPP_URL } from "@/lib/constants";

const quickLinks = [
  { label: "Collections", href: "#collections" },
  { label: "Bestsellers", href: "#bestsellers" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" }
];

export default function Footer() {
  return (
    <footer className="bg-brand-secondary px-4 py-12 text-brand-light sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        <div>
          <h2 className="font-serif text-2xl">{BRAND_NAME}</h2>
          <p className="mt-3 text-sm text-brand-light/70">
            Luxury perfume and fragrance boutique in Ghana, curated for elegance, confidence and timeless style.
          </p>
        </div>

        <nav aria-label="Quick links">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-accent">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm text-brand-light/80">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition hover:text-brand-accent">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-accent">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-brand-light/80">
            <li>
              <a href={`tel:${PHONE_E164}`} className="transition hover:text-brand-accent">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="transition hover:text-brand-accent">
                WhatsApp Orders
              </a>
            </li>
            <li>
              <a href={MAPS_URL} target="_blank" rel="noreferrer" className="transition hover:text-brand-accent">
                Get Directions
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-7xl border-t border-brand-light/10 pt-5 text-xs text-brand-light/60">
        © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
      </p>
    </footer>
  );
}

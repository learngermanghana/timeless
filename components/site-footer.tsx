import Link from 'next/link';
import { ADDRESS, EMAIL, PHONE_DISPLAY } from '@/lib/constants';

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-black/10 bg-[#161616] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <h2 className="text-lg font-semibold">Condolence GH</h2>
          <p className="mt-2 text-sm text-white/80">A focused funeral-printing sub-branch of 247 PRINT HOUSE, serving families and institutions across Ghana.</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li><Link href="/services" className="hover:underline">Services</Link></li>
            <li><Link href="/products" className="hover:underline">Products</Link></li>
            <li><Link href="/quote" className="hover:underline">Request a Quote</Link></li>
            <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">Service Routes</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li><Link href="/funeral-brochures" className="hover:underline">Funeral Brochures</Link></li>
            <li><Link href="/funeral-posters" className="hover:underline">Funeral Posters</Link></li>
            <li><Link href="/funeral-banners" className="hover:underline">Funeral Banners</Link></li>
            <li><Link href="/appreciation-cards" className="hover:underline">Appreciation Cards</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">Contact</h3>
          <p className="mt-3 text-sm text-white/80">{PHONE_DISPLAY}</p>
          <p className="text-sm text-white/80">{EMAIL}</p>
          <p className="mt-1 text-sm text-white/80">{ADDRESS}</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/70">© {new Date().getFullYear()} Condolence GH. All rights reserved.</div>
    </footer>
  );
}

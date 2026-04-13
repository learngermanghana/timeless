import { SedifexPromo } from '@/lib/types';
import { WHATSAPP_LINK } from '@/lib/constants';

export function PromoBanner({ promo }: { promo?: SedifexPromo }) {
  if (!promo?.promoTitle) return null;
  return (
    <section className='rounded-2xl border border-rose-100 bg-rose-50 p-6'>
      <h3 className='text-xl font-semibold text-stone-900'>{promo.promoTitle}</h3>
      <p className='mt-2 text-sm text-stone-700'>{promo.promoSummary || 'Special beauty offer available now.'}</p>
      <a href={promo.promoWebsiteUrl || WHATSAPP_LINK} className='mt-4 inline-block text-sm font-semibold text-rose-600'>
        Explore this offer →
      </a>
    </section>
  );
}

import Link from 'next/link';
import { SedifexPromo } from '@/lib/types';
import { WHATSAPP_LINK } from '@/lib/constants';

export function HeroSection({ promo }: { promo?: SedifexPromo }) {
  return (
    <section className='bg-gradient-to-b from-[#f7efe9] to-[#fffdfa]'>
      <div className='mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24'>
        <div className='space-y-6'>
          <p className='text-sm font-semibold uppercase tracking-[0.2em] text-rose-500'>Beauty Shop in Ghana</p>
          <h1 className='text-4xl font-semibold leading-tight text-stone-900 md:text-5xl'>Premium body care and skincare for your healthiest glow.</h1>
          <p className='text-lg text-stone-600'>Shop authentic products, get friendly skincare guidance, and order quickly via WhatsApp with Prep N Prime GH.</p>
          <div className='flex flex-wrap gap-3'>
            <Link href='/shop' className='rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white'>Shop Products</Link>
            <a href={WHATSAPP_LINK} target='_blank' rel='noreferrer' className='rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-stone-900'>Chat on WhatsApp</a>
          </div>
          {promo?.title ? (
            <div className='rounded-2xl border border-rose-100 bg-white p-4'>
              <p className='font-medium text-stone-900'>{promo.title}</p>
              <p className='text-sm text-stone-600'>{promo.summary}</p>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

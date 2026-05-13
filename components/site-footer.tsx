import Link from 'next/link';
import { BRAND_NAME, BUSINESS_ADDRESS, PHONE_DISPLAY, PHONE_E164, WHATSAPP_LINK } from '@/lib/constants';

export function SiteFooter() {
  return (
    <footer className='border-t border-stone-200 bg-[#f7f1ec]'>
      <div className='mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4 md:px-6'>
        <div>
          <h3 className='text-lg font-semibold text-stone-900'>{BRAND_NAME}</h3>
          <p className='mt-2 text-sm text-stone-600'>Clean, premium body care and skincare with trusted guidance for every skin journey.</p>
        </div>
        <div>
          <h4 className='font-semibold text-stone-900'>Quick Links</h4>
          <ul className='mt-3 space-y-2 text-sm text-stone-600'>
            <li><Link href='/shop'>Shop</Link></li>
            <li><Link href='/collections'>Collections</Link></li>
            <li><Link href='/consultation'>Consultation</Link></li>
            <li><Link href='/faq'>FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h4 className='font-semibold text-stone-900'>Categories</h4>
          <ul className='mt-3 space-y-2 text-sm text-stone-600'>
            <li>Body Lotions</li><li>Body Oils</li><li>Face Cleansers</li><li>Serums & Sunscreen</li>
          </ul>
        </div>
        <div>
          <h4 className='font-semibold text-stone-900'>Contact</h4>
          <ul className='mt-3 space-y-2 text-sm text-stone-600'>
            <li><a href={`tel:${PHONE_E164}`}>{PHONE_DISPLAY}</a></li>
            <li><a href={WHATSAPP_LINK}>WhatsApp Orders</a></li>
            <li><a href='mailto:prepnprimegh@gmail.com'>prepnprimegh@gmail.com</a></li>
            <li>{BUSINESS_ADDRESS}</li>
          </ul>
        </div>
      </div>
      <div className='border-t border-stone-200 px-4 py-4 text-center text-xs text-stone-500 md:px-6'>
        <a
          href='https://sedifex.com/join-customers/81024e2769344036ad50747d'
          target='_blank'
          rel='noreferrer'
          className='mb-2 block text-sm font-medium text-rose-600 underline underline-offset-4'
        >
          Join our customer list
        </a>
        <p>© {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.</p>
      </div>
    </footer>
  );
}

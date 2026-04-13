import Link from 'next/link';
import { WHATSAPP_LINK } from '@/lib/constants';

export function CtaBanner() {
  return (
    <section className='rounded-3xl bg-stone-900 px-6 py-10 text-white md:px-10'>
      <h3 className='text-2xl font-semibold'>Need help building a routine?</h3>
      <p className='mt-2 text-stone-200'>Speak with Prep N Prime GH for personalized body care and skincare recommendations.</p>
      <div className='mt-5 flex gap-3'>
        <Link href='/consultation' className='rounded-full bg-white px-5 py-2 text-sm font-medium text-stone-900'>Book Consultation</Link>
        <a href={WHATSAPP_LINK} className='rounded-full border border-stone-400 px-5 py-2 text-sm font-medium'>WhatsApp Now</a>
      </div>
    </section>
  );
}

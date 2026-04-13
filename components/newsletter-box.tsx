'use client';

export function NewsletterBox() {
  return (
    <form className='rounded-2xl border border-stone-200 bg-white p-6'>
      <h3 className='text-lg font-semibold text-stone-900'>Beauty updates and offers</h3>
      <p className='mt-2 text-sm text-stone-600'>Get occasional skincare tips, product highlights, and promo updates.</p>
      <div className='mt-4 flex flex-col gap-3 sm:flex-row'>
        <input type='email' placeholder='Enter your email' className='w-full rounded-full border border-stone-300 px-4 py-2' />
        <button type='submit' className='rounded-full bg-stone-900 px-5 py-2 text-sm font-medium text-white'>Subscribe</button>
      </div>
    </form>
  );
}

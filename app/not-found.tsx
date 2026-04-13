import Link from 'next/link';

export default function NotFound() {
  return (
    <section className='mx-auto max-w-7xl px-4 py-24 md:px-6'>
      <h1 className='text-3xl font-semibold text-stone-900'>Page not found</h1>
      <p className='mt-3 text-stone-600'>The page you requested is unavailable.</p>
      <Link href='/' className='mt-6 inline-block rounded-full bg-stone-900 px-5 py-2 text-sm text-white'>Back Home</Link>
    </section>
  );
}

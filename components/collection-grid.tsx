import Link from 'next/link';

const collections = [
  'Glow Collection',
  'Hydration Collection',
  'Daily Care Collection',
  'Sensitive Skin Collection',
  'Body Essentials Collection'
];

export function CollectionGrid() {
  return (
    <div className='grid gap-4 md:grid-cols-3'>
      {collections.map((collection) => (
        <div key={collection} className='rounded-2xl border border-stone-200 bg-white p-6 shadow-sm'>
          <h3 className='font-semibold text-stone-900'>{collection}</h3>
          <p className='mt-2 text-sm text-stone-600'>Curated products selected for consistent results and a polished routine.</p>
          <Link href='/shop' className='mt-4 inline-block text-sm font-medium text-rose-600'>Shop this collection →</Link>
        </div>
      ))}
    </div>
  );
}

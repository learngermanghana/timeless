import Link from 'next/link';

export function CategoryCard({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <Link href={href} className='rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5'>
      <h3 className='text-lg font-semibold text-stone-900'>{title}</h3>
      <p className='mt-2 text-sm text-stone-600'>{description}</p>
    </Link>
  );
}

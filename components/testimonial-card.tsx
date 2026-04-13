export function TestimonialCard({ quote, name }: { quote: string; name: string }) {
  return (
    <article className='rounded-2xl border border-stone-200 bg-white p-5 shadow-sm'>
      <p className='text-sm text-stone-700'>“{quote}”</p>
      <p className='mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-stone-500'>{name}</p>
    </article>
  );
}

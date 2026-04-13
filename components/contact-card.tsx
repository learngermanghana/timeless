export function ContactCard({ title, value, href }: { title: string; value: string; href?: string }) {
  const content = href ? <a href={href}>{value}</a> : <span>{value}</span>;
  return (
    <div className='rounded-2xl border border-stone-200 bg-white p-5'>
      <h3 className='text-sm font-semibold uppercase tracking-[0.16em] text-stone-500'>{title}</h3>
      <p className='mt-2 text-stone-900'>{content}</p>
    </div>
  );
}

const items = [
  { q: 'Are your products authentic?', a: 'Yes. We prioritize authentic and trusted beauty and skincare products only.' },
  { q: 'Do you offer skin consultation?', a: 'Absolutely. We help you choose products based on your skin type and concerns.' },
  { q: 'How do I order?', a: 'Browse products and place your order quickly through WhatsApp or call us directly.' },
  { q: 'Do you stock sensitive-skin options?', a: 'Yes, we carry gentle cleansers, hydrating serums, and low-irritation options.' }
];

export function FaqList() {
  return (
    <div className='space-y-4'>
      {items.map((item) => (
        <details key={item.q} className='rounded-2xl border border-stone-200 bg-white p-5'>
          <summary className='cursor-pointer font-medium text-stone-900'>{item.q}</summary>
          <p className='mt-2 text-sm text-stone-600'>{item.a}</p>
        </details>
      ))}
    </div>
  );
}

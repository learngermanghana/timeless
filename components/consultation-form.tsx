'use client';

import { FormEvent } from 'react';
import { buildWhatsAppLink } from '@/lib/constants';

export function ConsultationForm() {
  const fields = [
    ['Full Name', 'fullName'],
    ['Phone Number', 'phone'],
    ['Email', 'email'],
    ['Skin Type', 'skinType'],
    ['Skin Concern', 'skinConcern'],
    ['Product Interest', 'productInterest']
  ] as const;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const fullName = String(data.get('fullName') ?? '').trim();
    const phone = String(data.get('phone') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const skinType = String(data.get('skinType') ?? '').trim();
    const skinConcern = String(data.get('skinConcern') ?? '').trim();
    const productInterest = String(data.get('productInterest') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    const lines = [
      'Hello Prep N Prime GH, I want a consultation.',
      `Full Name: ${fullName}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Skin Type: ${skinType}`,
      `Skin Concern: ${skinConcern}`,
      `Product Interest: ${productInterest}`,
      `Message: ${message || 'N/A'}`
    ];

    window.open(buildWhatsAppLink(lines.join('\n')), '_blank', 'noopener,noreferrer');
  };

  return (
    <form onSubmit={handleSubmit} className='grid gap-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm'>
      <div className='grid gap-4 md:grid-cols-2'>
        {fields.map(([label, name]) => (
          <label key={name} className='text-sm font-medium text-stone-700'>
            {label}
            <input required type='text' name={name} className='mt-1 w-full rounded-xl border border-stone-300 px-3 py-2 outline-none focus:border-stone-500' />
          </label>
        ))}
      </div>
      <label className='text-sm font-medium text-stone-700'>
        Message
        <textarea name='message' rows={4} className='mt-1 w-full rounded-xl border border-stone-300 px-3 py-2 outline-none focus:border-stone-500' />
      </label>
      <button type='submit' className='w-fit rounded-full bg-stone-900 px-5 py-2 text-sm font-medium text-white'>
        Submit Consultation Request
      </button>
      <p className='text-xs text-stone-500'>Submitting opens WhatsApp with your consultation details prefilled.</p>
    </form>
  );
}

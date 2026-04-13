'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { formatGHS } from '@/lib/format';
import { buildWhatsAppLink } from '@/lib/constants';
import { SedifexProduct } from '@/lib/types';

const fallback =
  'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80';

export function ProductCard({ product }: { product: SedifexProduct }) {
  const imageSrc = useMemo(() => product.imageUrl || product.imageUrls?.[0] || fallback, [product.imageUrl, product.imageUrls]);
  const [resolvedImageSrc, setResolvedImageSrc] = useState(imageSrc);

  const description = product.description || 'Premium skincare and body care essential.';
  const shouldTruncate = description.length > 120;
  const shortDescription = shouldTruncate ? `${description.slice(0, 120).trimEnd()}...` : description;

  return (
    <article className='overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm'>
      <div className='relative h-56 w-full'>
        <Image
          src={resolvedImageSrc}
          alt={product.imageAlt || `${product.name} product image`}
          fill
          className='object-cover'
          sizes='(max-width: 768px) 100vw, 33vw'
          onError={() => setResolvedImageSrc(fallback)}
        />
      </div>
      <div className='space-y-3 p-5'>
        <p className='text-xs uppercase tracking-[0.2em] text-rose-500'>{product.category || 'Beauty Care'}</p>
        <h3 className='text-lg font-semibold text-stone-900'>{product.name}</h3>
        <p className='text-sm text-stone-600'>
          {shortDescription}
          {shouldTruncate && <span className='ml-1 font-medium text-stone-800'>Read more</span>}
        </p>
        <div className='flex items-center justify-between'>
          <span className='font-semibold text-stone-900'>{formatGHS(product.price)}</span>
          <a
            href={buildWhatsAppLink(`Hello Prep N Prime GH, I want to order ${product.name}.`)}
            target='_blank'
            rel='noreferrer'
            className='rounded-full bg-stone-900 px-4 py-2 text-xs font-medium text-white'
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}

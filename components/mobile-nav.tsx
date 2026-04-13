'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, WHATSAPP_LINK } from '@/lib/constants';

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className='md:hidden'>
      <button aria-label='Toggle menu' onClick={() => setOpen((prev) => !prev)} className='rounded-md p-2'>
        {open ? <X className='h-6 w-6 text-stone-900' /> : <Menu className='h-6 w-6 text-stone-900' />}
      </button>
      {open ? (
        <div className='absolute inset-x-0 top-full border-b border-stone-200 bg-[#fefbf8] p-4 shadow-sm'>
          <nav className='grid gap-3'>
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className='text-sm text-stone-700'>
                {link.label}
              </Link>
            ))}
            <a href={WHATSAPP_LINK} target='_blank' rel='noreferrer' className='mt-2 rounded-full bg-stone-900 px-4 py-2 text-center text-sm text-white'>
              Chat on WhatsApp
            </a>
          </nav>
        </div>
      ) : null}
    </div>
  );
}

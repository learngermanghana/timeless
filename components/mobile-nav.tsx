'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label="Toggle navigation"
        onClick={() => setOpen((value) => !value)}
        className="rounded-lg border border-black/10 p-2"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>
      {open ? (
        <div id="mobile-nav-panel" className="absolute inset-x-0 top-20 z-50 border-y border-black/10 bg-[var(--color-background)] p-4 shadow-lg">
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link onClick={() => setOpen(false)} href={link.href} className="block rounded-lg px-3 py-2 text-sm font-medium text-[var(--color-foreground)] hover:bg-black/5">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

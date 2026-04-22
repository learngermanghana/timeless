import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { ActivityPopups } from '@/components/activity-popups';
import { defaultMetadata } from '@/lib/metadata';
import './globals.css';

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <ActivityPopups />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

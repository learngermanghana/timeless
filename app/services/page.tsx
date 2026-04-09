import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { SectionHeading } from '@/components/section-heading';
import { ServiceCard } from '@/components/service-card';
import { CtaBanner } from '@/components/cta-banner';
import { services } from '@/lib/data';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata('Services', 'Explore all funeral and memorial printing services from Condolence GH, including brochures, posters, banners, invitation cards, and custom jobs.', '/services');

export default function ServicesPage() {
  return (
    <div className="container-shell space-y-10 py-10">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Services' }]} />
      <SectionHeading title="Funeral printing services" description="We provide complete print coordination for funeral events, remembrance gatherings, and thanksgiving services." />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{services.map((service) => <ServiceCard key={service.title} {...service} />)}</div>
      <CtaBanner title="Discuss your print requirements" description="Send your details for package guidance, quantities, and turnaround options." />
    </div>
  );
}

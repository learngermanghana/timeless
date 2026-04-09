import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
};

export function ServiceCard({ title, description, href }: ServiceCardProps) {
  return (
    <article className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-[var(--color-foreground)]">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{description}</p>
      <Link href={href} className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] hover:underline">
        Learn more <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </article>
  );
}

import Link from 'next/link';

type ProductCardProps = {
  title: string;
  details: string;
  href: string;
};

export function ProductCard({ title, details, href }: ProductCardProps) {
  return (
    <article className="rounded-2xl border border-black/10 bg-[var(--color-ivory)] p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-[var(--color-foreground)]">{title}</h3>
      <p className="mt-2 text-sm text-[var(--color-muted)]">{details}</p>
      <Link href={href} className="mt-4 inline-block text-sm font-medium text-[var(--color-accent)] hover:underline">
        View details
      </Link>
    </article>
  );
}

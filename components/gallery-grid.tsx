import Image from 'next/image';

type GalleryItem = {
  src: string;
  alt: string;
};

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <figure key={item.src} className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
          <div className="relative h-56 w-full">
            <Image src={item.src} alt={item.alt} fill className="object-cover" sizes="(max-width: 1024px) 50vw, 33vw" />
          </div>
          <figcaption className="p-4 text-sm text-[var(--color-muted)]">{item.alt}</figcaption>
        </figure>
      ))}
    </div>
  );
}

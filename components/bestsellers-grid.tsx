import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/section-heading";
import { bestsellers } from "@/lib/data";
import { formatPriceGHS } from "@/lib/format";

export default function BestsellersGrid() {
  return (
    <section className="bg-brand-light px-4 py-16 sm:px-6 lg:px-8" id="bestsellers">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Bestsellers"
          title="Most loved perfumes at Timeless Perfume"
          description="Sample featured products to inspire your next signature purchase."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bestsellers.map((product) => (
            <article
              key={product.id}
              className="overflow-hidden rounded-2xl border border-brand-neutral bg-white shadow-soft transition hover:-translate-y-1"
            >
              <div className="relative h-64">
                <Image
                  src={product.image}
                  alt={`${product.name} perfume bottle at Timeless Perfume Ghana`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary/80">{product.category}</p>
                <h3 className="mt-2 text-xl font-semibold text-brand-secondary">{product.name}</h3>
                <p className="mt-2 text-sm text-brand-secondary/75">{product.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-lg font-bold text-brand-primary">{formatPriceGHS(product.price)}</p>
                  <Link
                    href={`/shop/${product.id}`}
                    className="rounded-full bg-brand-primary px-4 py-2 text-sm font-semibold text-brand-light transition hover:bg-brand-secondary"
                  >
                    View details
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import { catalogProducts } from "@/lib/catalog";
import { formatPriceGHS } from "@/lib/format";
import { BRAND_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Shop Perfumes | ${BRAND_NAME}`,
  description:
    "Browse Timeless Perfume's full fragrance catalog including unisex, men’s, women’s and perfume oil collections.",
  alternates: {
    canonical: "/shop"
  }
};

export default function ShopPage() {
  return (
    <main className="bg-brand-light">
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.16em] text-brand-primary">Catalog</p>
          <h1 className="mt-3 text-4xl font-semibold text-brand-secondary sm:text-5xl">Shop all perfumes</h1>
          <p className="mt-4 max-w-3xl text-brand-secondary/75">
            Explore the Timeless Perfume catalog and view detailed product pages for notes, pricing and quick ordering.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {catalogProducts.map((product) => (
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
                <div className="space-y-3 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary/80">{product.category}</p>
                  <h2 className="text-xl font-semibold text-brand-secondary">{product.name}</h2>
                  <p className="text-sm text-brand-secondary/75">{product.description}</p>
                  <div className="flex items-center justify-between gap-3 pt-1">
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
      <Footer />
    </main>
  );
}

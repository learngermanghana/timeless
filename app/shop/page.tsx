import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import {
  applyCatalogFilters,
  catalogProducts,
  getCategoryOptions,
  getScentFamilyOptions,
  normalizeCatalogFilters
} from "@/lib/catalog";
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

interface ShopPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

function getSingleSearchParam(value: string | string[] | undefined): string {
  return Array.isArray(value) ? (value[0] ?? "") : (value ?? "");
}

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const params = await searchParams;

  const filters = normalizeCatalogFilters({
    category: getSingleSearchParam(params.category),
    scentFamily: getSingleSearchParam(params.scent),
    priceRange: getSingleSearchParam(params.priceRange),
    sort: getSingleSearchParam(params.sort)
  });

  const products = applyCatalogFilters(catalogProducts, filters);
  const categoryOptions = getCategoryOptions(catalogProducts);
  const scentOptions = getScentFamilyOptions(catalogProducts);

  return (
    <main className="bg-brand-light">
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.16em] text-brand-primary">Catalog</p>
          <h1 className="mt-3 text-4xl font-semibold text-brand-secondary sm:text-5xl">Shop all perfumes</h1>
          <p className="mt-4 max-w-3xl text-brand-secondary/75">
            Explore the Timeless Perfume catalog and view detailed product pages for notes, pricing and quick ordering.
          </p>

          <form className="mt-8 grid gap-4 rounded-2xl border border-brand-neutral bg-white p-4 sm:grid-cols-2 lg:grid-cols-4">
            <label className="space-y-1 text-sm text-brand-secondary">
              <span className="font-medium">Category</span>
              <select
                name="category"
                defaultValue={filters.category}
                className="w-full rounded-lg border border-brand-neutral bg-brand-light px-3 py-2"
              >
                <option value="">All categories</option>
                {categoryOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <label className="space-y-1 text-sm text-brand-secondary">
              <span className="font-medium">Scent family</span>
              <select
                name="scent"
                defaultValue={filters.scentFamily}
                className="w-full rounded-lg border border-brand-neutral bg-brand-light px-3 py-2"
              >
                <option value="">All scent families</option>
                {scentOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <label className="space-y-1 text-sm text-brand-secondary">
              <span className="font-medium">Price range</span>
              <select
                name="priceRange"
                defaultValue={filters.priceRange}
                className="w-full rounded-lg border border-brand-neutral bg-brand-light px-3 py-2"
              >
                <option value="">All prices</option>
                <option value="budget">Budget (≤ GH₵ 400)</option>
                <option value="mid">Mid-range (GH₵ 401 - GH₵ 600)</option>
                <option value="premium">Premium (≥ GH₵ 601)</option>
              </select>
            </label>

            <label className="space-y-1 text-sm text-brand-secondary">
              <span className="font-medium">Sort by</span>
              <select
                name="sort"
                defaultValue={filters.sort}
                className="w-full rounded-lg border border-brand-neutral bg-brand-light px-3 py-2"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
              </select>
            </label>

            <div className="sm:col-span-2 lg:col-span-4 flex flex-wrap items-center gap-3 pt-1">
              <button
                type="submit"
                className="rounded-full bg-brand-primary px-5 py-2 text-sm font-semibold text-brand-light transition hover:bg-brand-secondary"
              >
                Apply filters
              </button>
              <Link
                href="/shop"
                className="rounded-full border border-brand-primary px-5 py-2 text-sm font-semibold text-brand-primary transition hover:bg-brand-primary hover:text-brand-light"
              >
                Reset
              </Link>
            </div>
          </form>

          <div className="mt-4 text-sm text-brand-secondary/70">Showing {products.length} fragrance(s).</div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
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
                  <p className="text-xs font-medium uppercase tracking-wide text-brand-secondary/70">
                    Scent family: {product.scentFamily}
                  </p>
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

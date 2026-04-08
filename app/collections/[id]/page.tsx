import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/footer";
import { getCollectionById, getProductsByCollectionId } from "@/lib/catalog";
import { featuredCollections } from "@/lib/data";
import { formatPriceGHS } from "@/lib/format";
import { BRAND_NAME } from "@/lib/constants";

interface CollectionPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return featuredCollections.map((collection) => ({ id: collection.id }));
}

export async function generateMetadata({ params }: CollectionPageProps): Promise<Metadata> {
  const { id } = await params;
  const collection = getCollectionById(id);

  if (!collection) {
    return {
      title: `Collection Not Found | ${BRAND_NAME}`
    };
  }

  return {
    title: `${collection.title} | ${BRAND_NAME}`,
    description: collection.description,
    alternates: {
      canonical: `/collections/${collection.id}`
    }
  };
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { id } = await params;
  const collection = getCollectionById(id);

  if (!collection) {
    notFound();
  }

  const products = getProductsByCollectionId(id);

  return (
    <main className="bg-brand-light">
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link href="/shop" className="text-sm font-semibold text-brand-primary transition hover:text-brand-secondary">
            ← Back to shop
          </Link>

          <div className="mt-6 grid gap-8 rounded-3xl border border-brand-neutral bg-white p-6 shadow-soft sm:p-8 lg:grid-cols-2">
            <div className="relative min-h-[280px] overflow-hidden rounded-2xl">
              <Image src={collection.image} alt={collection.title} fill className="object-cover" priority />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.16em] text-brand-primary">Collection</p>
              <h1 className="mt-3 text-4xl font-semibold text-brand-secondary">{collection.title}</h1>
              <p className="mt-4 text-brand-secondary/75">{collection.description}</p>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-brand-secondary">Products in this collection</h2>

            {products.length > 0 ? (
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                  <article
                    key={product.id}
                    className="overflow-hidden rounded-2xl border border-brand-neutral bg-white shadow-soft"
                  >
                    <div className="relative h-56">
                      <Image src={product.image} alt={product.name} fill className="object-cover" />
                    </div>
                    <div className="space-y-2 p-5">
                      <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary/80">{product.category}</p>
                      <h3 className="text-xl font-semibold text-brand-secondary">{product.name}</h3>
                      <p className="text-sm text-brand-secondary/75">{product.description}</p>
                      <div className="mt-3 flex items-center justify-between gap-3">
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
            ) : (
              <div className="mt-6 rounded-2xl border border-dashed border-brand-neutral bg-white p-6 text-sm text-brand-secondary/70">
                No direct product matches yet for this collection. Browse all available fragrances in our full catalog.
                <Link href="/shop" className="ml-1 font-semibold text-brand-primary">
                  Go to shop
                </Link>
                .
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

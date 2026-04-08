import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/footer";
import { catalogProducts, getCollectionIdForCategory, getProductBySlug } from "@/lib/catalog";
import { BRAND_NAME, WHATSAPP_URL } from "@/lib/constants";
import { formatPriceGHS } from "@/lib/format";

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return catalogProducts.map((product) => ({ slug: product.id }));
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: `Product Not Found | ${BRAND_NAME}`
    };
  }

  return {
    title: `${product.name} | ${BRAND_NAME}`,
    description: `${product.description} Shop ${product.name} at Timeless Perfume in Ghana.`,
    alternates: {
      canonical: `/shop/${product.id}`
    }
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="bg-brand-light">
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Link href="/shop" className="text-sm font-semibold text-brand-primary transition hover:text-brand-secondary">
            ← Back to shop
          </Link>

          <article className="mt-6 grid gap-8 rounded-3xl border border-brand-neutral bg-white p-6 shadow-soft sm:p-8 lg:grid-cols-2">
            <div className="relative min-h-[360px] overflow-hidden rounded-2xl">
              <Image
                src={product.image}
                alt={`${product.name} premium fragrance bottle`}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary/80">{product.category}</p>
              <h1 className="mt-3 text-4xl font-semibold text-brand-secondary">{product.name}</h1>
              <p className="mt-4 text-base text-brand-secondary/75">{product.description}</p>

              <p className="mt-6 text-3xl font-bold text-brand-primary">{formatPriceGHS(product.price)}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-brand-light transition hover:bg-brand-secondary"
                >
                  Order on WhatsApp
                </a>
                <Link
                  href={`/collections/${getCollectionIdForCategory(product.category)}`}
                  className="rounded-full border border-brand-primary px-6 py-3 text-sm font-semibold text-brand-primary transition hover:bg-brand-primary hover:text-brand-light"
                >
                  More in this category
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>
      <Footer />
    </main>
  );
}

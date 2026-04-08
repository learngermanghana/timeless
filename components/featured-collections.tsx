import Image from "next/image";
import SectionHeading from "@/components/section-heading";
import { featuredCollections } from "@/lib/data";
import { WHATSAPP_URL } from "@/lib/constants";

export default function FeaturedCollections() {
  return (
    <section className="bg-brand-light px-4 py-16 sm:px-6 lg:px-8" id="collections">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Featured Collections"
          title="Explore fragrance collections curated for style, presence and occasion"
          description="From signature daytime scents to evening-ready statements, discover a refined collection designed for Ghana’s fragrance lovers."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCollections.map((collection) => (
            <article
              key={collection.id}
              className="group overflow-hidden rounded-2xl border border-brand-neutral bg-white shadow-soft transition hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={collection.image}
                  alt={`${collection.title} collection display at Timeless Perfume`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-3 p-5">
                <h3 className="text-xl font-semibold text-brand-secondary">{collection.title}</h3>
                <p className="text-sm leading-relaxed text-brand-secondary/70">{collection.description}</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full bg-brand-primary px-4 py-2 text-sm font-semibold text-brand-light transition hover:bg-brand-secondary"
                >
                  {collection.ctaLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

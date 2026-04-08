import Image from "next/image";
import SectionHeading from "@/components/section-heading";
import { galleryItems } from "@/lib/data";

export default function GalleryGrid() {
  return (
    <section className="bg-brand-light px-4 py-16 sm:px-6 lg:px-8" id="gallery">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Brand Experience"
          title="The Timeless Perfume boutique mood"
          description="A glimpse of fragrance artistry, gift-ready elegance and modern luxury in Accra."
          center
        />
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {galleryItems.map((item) => (
            <figure key={item.id} className="relative h-44 overflow-hidden rounded-2xl shadow-soft md:h-60">
              <Image src={item.image} alt={item.alt} fill className="object-cover transition duration-500 hover:scale-105" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

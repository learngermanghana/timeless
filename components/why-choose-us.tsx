import SectionHeading from "@/components/section-heading";
import { benefits } from "@/lib/data";

export default function WhyChooseUs() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8" id="why-us">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why Choose Timeless"
          title="Premium fragrance service with care, quality and convenience"
          description="We help you find scents that feel personal, luxurious and truly memorable."
          center
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <article key={benefit.id} className="rounded-2xl border border-brand-neutral bg-brand-light p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-brand-secondary">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-secondary/75">{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

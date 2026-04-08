import Hero from "@/components/hero";
import FeaturedCollections from "@/components/featured-collections";
import WhyChooseUs from "@/components/why-choose-us";
import BestsellersGrid from "@/components/bestsellers-grid";
import PromoBanner from "@/components/promo-banner";
import GalleryGrid from "@/components/gallery-grid";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedCollections />
      <WhyChooseUs />
      <BestsellersGrid />
      <PromoBanner />
      <GalleryGrid />
      <ContactSection />
      <Footer />
    </main>
  );
}

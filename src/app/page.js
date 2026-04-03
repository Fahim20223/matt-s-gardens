import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ServicesPreview from "@/components/ServicesPreview";
import AboutTeaser from "@/components/AboutTeaser";
import WhyChooseMatt from "@/components/WhyChooseMatt";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesPreview />
      <AboutTeaser />
      <WhyChooseMatt />
      <Testimonials />
      <CTABanner />
    </>
  );
}

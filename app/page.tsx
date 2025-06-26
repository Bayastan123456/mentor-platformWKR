import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      <FAQSection />
      {/* <Footer /> */}
    </main>
  );
}

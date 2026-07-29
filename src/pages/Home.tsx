import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { HeroSection } from "../components/sections/HeroSection";
import { TrustBar } from "../components/sections/TrustBar";
import { ServicesOverview } from "../components/sections/ServicesOverview";
import { WhyChooseUs } from "../components/sections/WhyChooseUs";
import { ProcessTimeline } from "../components/sections/ProcessTimeline";
import { FAQSection } from "../components/sections/FAQSection";
import { FinalCTA } from "../components/sections/FinalCTA";

export function Home() {
  return (
    <div className="bg-bg-primary text-on-surface font-body-md antialiased selection:bg-primary/20 min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <ServicesOverview />
      <WhyChooseUs />
      <ProcessTimeline />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}

import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { AboutHeroSection } from "../components/sections/about/AboutHeroSection";
import { WhyWeExistSection } from "../components/sections/about/WhyWeExistSection";
import { AboutTimeline } from "../components/sections/about/AboutTimeline";
import { PrinciplesSection } from "../components/sections/about/PrinciplesSection";
import { AboutFinalCTA } from "../components/sections/about/AboutFinalCTA";

export function About() {
  return (
    <div className="bg-bg-primary text-on-surface font-body-md antialiased selection:bg-primary/20 min-h-screen pt-32">
      <Navbar />
      <main>
        <AboutHeroSection />
        <WhyWeExistSection />
        <AboutTimeline />
        <PrinciplesSection />
        <AboutFinalCTA />
      </main>
      <Footer />
    </div>
  );
}

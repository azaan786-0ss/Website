import { useEffect } from "react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { AboutHeroSection } from "../components/sections/about/AboutHeroSection";
import { WhyWeExistSection } from "../components/sections/about/WhyWeExistSection";
import { AboutTimeline } from "../components/sections/about/AboutTimeline";
import { PrinciplesSection } from "../components/sections/about/PrinciplesSection";
import { AboutFinalCTA } from "../components/sections/about/AboutFinalCTA";

export function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 text-slate-900 font-body-md antialiased selection:bg-indigo-100 selection:text-indigo-900 min-h-screen pt-20 relative">
      {/* Global Page Grid Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[length:64px_64px]"></div>
      </div>

      <Navbar />
      <main className="relative z-10 overflow-hidden">
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

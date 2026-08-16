import { useEffect } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { AboutHeroSection } from '../components/sections/about/AboutHeroSection';
import { WhyWeExistSection } from '../components/sections/about/WhyWeExistSection';
import { AboutTimeline } from '../components/sections/about/AboutTimeline';
import { PrinciplesSection } from '../components/sections/about/PrinciplesSection';
import { AboutFinalCTA } from '../components/sections/about/AboutFinalCTA';

export function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 dark:bg-black text-slate-900 dark:text-white font-body-md antialiased selection:bg-indigo-100 dark:selection:bg-indigo-500/30 selection:text-indigo-900 dark:selection:text-indigo-200 min-h-screen pt-20 relative transition-colors duration-300">
      {/* Global Page Grid Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 global-grid"></div>
      </div>

      <Navbar />
      <main className="relative z-10 overflow-x-clip">
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

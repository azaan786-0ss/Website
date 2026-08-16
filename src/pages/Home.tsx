import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../components/sections/HeroSection';
import { TrustBar } from '../components/sections/TrustBar';
import { ServicesOverview } from '../components/sections/ServicesOverview';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { ProcessTimeline } from '../components/sections/ProcessTimeline';
import { FAQSection } from '../components/sections/FAQSection';
import { FinalCTA } from '../components/sections/FinalCTA';

export function Home() {
  return (
    <div className="bg-slate-50 dark:bg-black text-slate-900 dark:text-white font-body-md antialiased selection:bg-indigo-100 dark:selection:bg-indigo-500/30 selection:text-indigo-900 dark:selection:text-indigo-200 min-h-screen relative transition-colors duration-300">
      {/* Global Page Grid Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 global-grid"></div>
      </div>
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <TrustBar />
        <ServicesOverview />
        <WhyChooseUs />
        <ProcessTimeline />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

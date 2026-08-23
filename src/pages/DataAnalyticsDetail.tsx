import { useEffect } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { DataAnalyticsHero } from '../components/sections/service/data/DataAnalyticsHero';
import { DataAnalyticsCapabilities } from '../components/sections/service/data/DataAnalyticsCapabilities';
import { DataAnalyticsRoadmap } from '../components/sections/service/data/DataAnalyticsRoadmap';
import { DataAnalyticsDeliverables } from '../components/sections/service/data/DataAnalyticsDeliverables';
import { DataAnalyticsCTA } from '../components/sections/service/data/DataAnalyticsCTA';

export function DataAnalyticsDetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAFAFC] dark:bg-[#050505] text-on-surface dark:text-[#fafafa] antialiased overflow-x-clip selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen font-body-md flex flex-col transition-colors duration-300">
      {/* Global Page Grid Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:64px_64px]"></div>
      </div>
      <Navbar />
      <main className="flex-1 pt-24 pb-0 relative z-10">
        <DataAnalyticsHero />
        <DataAnalyticsCapabilities />
        <DataAnalyticsRoadmap />
        <DataAnalyticsDeliverables />
        <DataAnalyticsCTA />
      </main>
      <Footer />
    </div>
  );
}

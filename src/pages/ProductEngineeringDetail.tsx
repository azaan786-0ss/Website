import { useEffect } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ProductEngineeringHero } from '../components/sections/service/engineering/ProductEngineeringHero';
import { ProductEngineeringCapabilities } from '../components/sections/service/engineering/ProductEngineeringCapabilities';
import { ProductEngineeringRoadmap } from '../components/sections/service/engineering/ProductEngineeringRoadmap';
import { ProductEngineeringDeliverables } from '../components/sections/service/engineering/ProductEngineeringDeliverables';
import { ProductEngineeringCTA } from '../components/sections/service/engineering/ProductEngineeringCTA';

export function ProductEngineeringDetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAFAFC] dark:bg-[#050505] text-on-surface dark:text-[#fafafa] antialiased overflow-x-clip selection:bg-primary-container selection:text-white min-h-screen font-body-md flex flex-col transition-colors duration-300">
      {/* Global Page Grid Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:64px_64px]"></div>
      </div>
      <Navbar />
      <main className="flex-1 pt-24 pb-0 relative z-10">
        <ProductEngineeringHero />
        <ProductEngineeringCapabilities />
        <ProductEngineeringRoadmap />
        <ProductEngineeringDeliverables />
        <ProductEngineeringCTA />
      </main>
      <Footer />
    </div>
  );
}

import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ProductStrategyHero } from '../components/sections/service/strategy/ProductStrategyHero';
import { ProductStrategyCapabilities } from '../components/sections/service/strategy/ProductStrategyCapabilities';
import { ProductStrategyRoadmap } from '../components/sections/service/strategy/ProductStrategyRoadmap';
import { ProductStrategyDeliverables } from '../components/sections/service/strategy/ProductStrategyDeliverables';
import { ProductStrategyCTA } from '../components/sections/service/strategy/ProductStrategyCTA';

export function ProductStrategyDetail() {
  return (
    <div className="bg-surface dark:bg-[#0B0E14] text-on-surface dark:text-[#f3f4f6] antialiased overflow-x-clip selection:bg-primary-container selection:text-white min-h-screen relative font-body-md transition-colors duration-300">
      {/* Global Page Grid Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:64px_64px]"></div>
      </div>
      <Navbar />
      <main className="relative z-10 pt-24 pb-0">
        <ProductStrategyHero />
        <ProductStrategyCapabilities />
        <ProductStrategyRoadmap />
        <ProductStrategyDeliverables />
        <ProductStrategyCTA />
      </main>
      <Footer />
    </div>
  );
}

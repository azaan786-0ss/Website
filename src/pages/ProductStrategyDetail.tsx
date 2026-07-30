import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { ServiceBackLink } from "../components/ui/ServiceBackLink";
import { ProductStrategyHero } from "../components/sections/service/strategy/ProductStrategyHero";
import { ProductStrategyCapabilities } from "../components/sections/service/strategy/ProductStrategyCapabilities";
import { ProductStrategyRoadmap } from "../components/sections/service/strategy/ProductStrategyRoadmap";
import { ProductStrategyDeliverables } from "../components/sections/service/strategy/ProductStrategyDeliverables";
import { ProductStrategyCTA } from "../components/sections/service/strategy/ProductStrategyCTA";

export function ProductStrategyDetail() {
  return (
    <div className="bg-surface text-on-surface antialiased overflow-x-hidden selection:bg-primary-container selection:text-white min-h-screen relative font-body-md">
      <Navbar />
      <main className="relative z-10 pt-20 pb-0">
        <ServiceBackLink />
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

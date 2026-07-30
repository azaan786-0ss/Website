import { useEffect } from "react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { ServiceBackLink } from "../components/ui/ServiceBackLink";
import { ProductEngineeringHero } from "../components/sections/service/engineering/ProductEngineeringHero";
import { ProductEngineeringCapabilities } from "../components/sections/service/engineering/ProductEngineeringCapabilities";
import { ProductEngineeringRoadmap } from "../components/sections/service/engineering/ProductEngineeringRoadmap";
import { ProductEngineeringDeliverables } from "../components/sections/service/engineering/ProductEngineeringDeliverables";
import { ProductEngineeringCTA } from "../components/sections/service/engineering/ProductEngineeringCTA";

export function ProductEngineeringDetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAFAFC] text-on-surface antialiased overflow-x-hidden selection:bg-primary-container selection:text-white min-h-screen font-body-md flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <ServiceBackLink />
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

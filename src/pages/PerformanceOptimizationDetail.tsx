import { useEffect } from "react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { ServiceBackLink } from "../components/ui/ServiceBackLink";
import { PerformanceOptimizationHero } from "../components/sections/service/performance/PerformanceOptimizationHero";
import { PerformanceOptimizationCapabilities } from "../components/sections/service/performance/PerformanceOptimizationCapabilities";
import { PerformanceOptimizationProcess } from "../components/sections/service/performance/PerformanceOptimizationProcess";
import { PerformanceOptimizationDeliverables } from "../components/sections/service/performance/PerformanceOptimizationDeliverables";
import { PerformanceOptimizationCTA } from "../components/sections/service/performance/PerformanceOptimizationCTA";

export function PerformanceOptimizationDetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-surface text-on-surface antialiased overflow-x-hidden selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen font-body-md flex flex-col">
      <Navbar />
      <main className="flex-1 mt-20">
        <ServiceBackLink />
        <PerformanceOptimizationHero />
        <PerformanceOptimizationCapabilities />
        <PerformanceOptimizationProcess />
        <PerformanceOptimizationDeliverables />
        <PerformanceOptimizationCTA />
      </main>
      <Footer />
    </div>
  );
}

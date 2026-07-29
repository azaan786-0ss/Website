import { useEffect } from "react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { DataAnalyticsHero } from "../components/sections/service/data/DataAnalyticsHero";
import { DataAnalyticsCapabilities } from "../components/sections/service/data/DataAnalyticsCapabilities";
import { DataAnalyticsRoadmap } from "../components/sections/service/data/DataAnalyticsRoadmap";
import { DataAnalyticsDeliverables } from "../components/sections/service/data/DataAnalyticsDeliverables";
import { DataAnalyticsCTA } from "../components/sections/service/data/DataAnalyticsCTA";

export function DataAnalyticsDetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background text-on-background antialiased overflow-x-hidden selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen font-body-md flex flex-col">
      <Navbar />
      <main className="flex-1 mt-20">
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

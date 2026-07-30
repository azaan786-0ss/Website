import { useEffect } from "react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { ServiceBackLink } from "../components/ui/ServiceBackLink";
import { CloudArchitectureHero } from "../components/sections/service/cloud/CloudArchitectureHero";
import { CloudArchitectureCapabilities } from "../components/sections/service/cloud/CloudArchitectureCapabilities";
import { CloudArchitectureRoadmap } from "../components/sections/service/cloud/CloudArchitectureRoadmap";
import { CloudArchitectureDeliverables } from "../components/sections/service/cloud/CloudArchitectureDeliverables";
import { CloudArchitectureCTA } from "../components/sections/service/cloud/CloudArchitectureCTA";

export function CloudArchitectureDetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-bg-primary text-on-background antialiased overflow-x-hidden selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen font-body-md flex flex-col">
      <Navbar />
      <main className="flex-1 mt-20">
        <ServiceBackLink />
        <CloudArchitectureHero />
        <CloudArchitectureCapabilities />
        <CloudArchitectureRoadmap />
        <CloudArchitectureDeliverables />
        <CloudArchitectureCTA />
      </main>
      <Footer />
    </div>
  );
}

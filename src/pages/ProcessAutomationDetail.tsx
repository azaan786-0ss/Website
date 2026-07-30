import { useEffect } from "react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { ServiceBackLink } from "../components/ui/ServiceBackLink";
import { ProcessAutomationHero } from "../components/sections/service/process/ProcessAutomationHero";
import { ProcessAutomationCapabilities } from "../components/sections/service/process/ProcessAutomationCapabilities";
import { ProcessAutomationLifecycle } from "../components/sections/service/process/ProcessAutomationLifecycle";
import { ProcessAutomationDeliverables } from "../components/sections/service/process/ProcessAutomationDeliverables";
import { ProcessAutomationCTA } from "../components/sections/service/process/ProcessAutomationCTA";

export function ProcessAutomationDetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-surface text-on-surface antialiased overflow-x-hidden selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen font-body-md flex flex-col">
      <Navbar />
      <main className="flex-1 mt-20">
        <ServiceBackLink />
        <ProcessAutomationHero />
        <ProcessAutomationCapabilities />
        <ProcessAutomationLifecycle />
        <ProcessAutomationDeliverables />
        <ProcessAutomationCTA />
      </main>
      <Footer />
    </div>
  );
}

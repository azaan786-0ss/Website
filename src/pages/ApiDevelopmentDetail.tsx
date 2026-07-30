import { useEffect } from "react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { ServiceBackLink } from "../components/ui/ServiceBackLink";
import { ApiDevelopmentHero } from "../components/sections/service/api/ApiDevelopmentHero";
import { ApiDevelopmentCapabilities } from "../components/sections/service/api/ApiDevelopmentCapabilities";
import { ApiDevelopmentLifecycle } from "../components/sections/service/api/ApiDevelopmentLifecycle";
import { ApiDevelopmentDeliverables } from "../components/sections/service/api/ApiDevelopmentDeliverables";
import { ApiDevelopmentCTA } from "../components/sections/service/api/ApiDevelopmentCTA";

export function ApiDevelopmentDetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-surface text-on-surface antialiased overflow-x-hidden selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen font-body-md flex flex-col">
      <Navbar />
      <main className="flex-1 mt-20">
        <ServiceBackLink />
        <ApiDevelopmentHero />
        <ApiDevelopmentCapabilities />
        <ApiDevelopmentLifecycle />
        <ApiDevelopmentDeliverables />
        <ApiDevelopmentCTA />
      </main>
      <Footer />
    </div>
  );
}

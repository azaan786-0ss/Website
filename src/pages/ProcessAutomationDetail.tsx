import { useEffect } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ProcessAutomationHero } from '../components/sections/service/process/ProcessAutomationHero';
import { ProcessAutomationCapabilities } from '../components/sections/service/process/ProcessAutomationCapabilities';
import { ProcessAutomationLifecycle } from '../components/sections/service/process/ProcessAutomationLifecycle';
import { ProcessAutomationDeliverables } from '../components/sections/service/process/ProcessAutomationDeliverables';
import { ProcessAutomationCTA } from '../components/sections/service/process/ProcessAutomationCTA';

export function ProcessAutomationDetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-surface text-on-surface antialiased overflow-x-hidden selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen font-body-md flex flex-col">
      {/* Global Page Grid Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[length:64px_64px]"></div>
      </div>
      <Navbar />
      <main className="flex-1 pt-24 pb-0 relative z-10">
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

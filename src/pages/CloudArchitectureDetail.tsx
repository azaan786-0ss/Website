import { useEffect } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { CloudArchitectureHero } from '../components/sections/service/cloud/CloudArchitectureHero';
import { CloudArchitectureCapabilities } from '../components/sections/service/cloud/CloudArchitectureCapabilities';
import { CloudArchitectureRoadmap } from '../components/sections/service/cloud/CloudArchitectureRoadmap';
import { CloudArchitectureDeliverables } from '../components/sections/service/cloud/CloudArchitectureDeliverables';
import { CloudArchitectureCTA } from '../components/sections/service/cloud/CloudArchitectureCTA';

export function CloudArchitectureDetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-bg-primary text-on-background antialiased overflow-x-hidden selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen font-body-md flex flex-col">
      {/* Global Page Grid Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[length:64px_64px]"></div>
      </div>
      <Navbar />
      <main className="flex-1 pt-24 pb-0 relative z-10">
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

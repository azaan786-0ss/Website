import { useEffect } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ApiDevelopmentHero } from '../components/sections/service/api/ApiDevelopmentHero';
import { ApiDevelopmentCapabilities } from '../components/sections/service/api/ApiDevelopmentCapabilities';
import { ApiDevelopmentLifecycle } from '../components/sections/service/api/ApiDevelopmentLifecycle';
import { ApiDevelopmentDeliverables } from '../components/sections/service/api/ApiDevelopmentDeliverables';
import { ApiDevelopmentCTA } from '../components/sections/service/api/ApiDevelopmentCTA';

export function ApiDevelopmentDetail() {
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

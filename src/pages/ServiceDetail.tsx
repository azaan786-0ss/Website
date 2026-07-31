import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { WebGLBackground } from '../components/canvas/WebGLBackground';
import { ServiceDetailHero } from '../components/sections/service/ServiceDetailHero';
import { ProblemFraming } from '../components/sections/service/ProblemFraming';
import { WebDesignFeatures } from '../components/sections/service/web/WebDesignFeatures';
import { WebDesignTechStack } from '../components/sections/service/web/WebDesignTechStack';
import { WebDesignProcess } from '../components/sections/service/web/WebDesignProcess';
import { WebDesignFAQ } from '../components/sections/service/web/WebDesignFAQ';
import { ServiceFinalCTA } from '../components/sections/service/ServiceFinalCTA';

export function ServiceDetail() {
  return (
    <div className="bg-transparent text-on-surface font-body-md antialiased selection:bg-primary-container selection:text-on-primary relative min-h-screen">
      <WebGLBackground />
      {/* Global Page Grid Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[length:64px_64px]"></div>
      </div>
      <Navbar />
      <main className="pt-32 pb-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ServiceDetailHero />
          <ProblemFraming />

          <WebDesignFeatures />
          <WebDesignTechStack />
          <WebDesignProcess />
          <WebDesignFAQ />

          <ServiceFinalCTA />
        </div>
      </main>
      <Footer />
    </div>
  );
}

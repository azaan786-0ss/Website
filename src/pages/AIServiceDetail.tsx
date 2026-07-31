import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { AIServiceHero } from '../components/sections/service/AIServiceHero';
import { AIProblemFraming } from '../components/sections/service/AIProblemFraming';
import { AICapabilitiesGrid } from '../components/sections/service/AICapabilitiesGrid';
import { AITrustSecurity } from '../components/sections/service/AITrustSecurity';
import { AIPipeline } from '../components/sections/service/AIPipeline';
import { AIBenchmarksBar } from '../components/sections/service/AIBenchmarksBar';
import { ServiceFinalCTA } from '../components/sections/service/ServiceFinalCTA';
import { LightWebGLBackground } from '../components/canvas/LightWebGLBackground';

export function AIServiceDetail() {
  return (
    <div className="bg-bg-primary text-on-surface antialiased overflow-x-hidden selection:bg-primary-container selection:text-white min-h-screen relative">
      <LightWebGLBackground />
      {/* Global Page Grid Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[length:64px_64px]"></div>
      </div>
      <Navbar />
      <main className="pt-32 pb-space-32 relative z-10">
        <AIServiceHero />
        <AIProblemFraming />
        <AICapabilitiesGrid />
        <AIPipeline />
        <AIBenchmarksBar />
        <AITrustSecurity />
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ServiceFinalCTA
            title="Deploy intelligent AI solutions"
            subtitle="Ready to transform your business operations with bespoke machine learning and generative AI?"
            buttonText="Discuss AI Architecture"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

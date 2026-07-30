import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { ServiceBackLink } from "../components/ui/ServiceBackLink";
import { MobileServiceHero } from "../components/sections/service/MobileServiceHero";
import { MobileProblemFraming } from "../components/sections/service/MobileProblemFraming";
import { MobileBentoGrid } from "../components/sections/service/MobileBentoGrid";
import { MobilePerformanceBenchmarks } from "../components/sections/service/MobilePerformanceBenchmarks";
import { MobileShowcaseStack } from "../components/sections/service/MobileShowcaseStack";
import { MobileLifecycleGrid } from "../components/sections/service/MobileLifecycleGrid";
import { ServiceFinalCTA } from "../components/sections/service/ServiceFinalCTA";
import { LightWebGLBackground } from "../components/canvas/LightWebGLBackground";

export function MobileServiceDetail() {
  return (
    <div className="bg-surface text-on-surface antialiased overflow-x-hidden selection:bg-primary-container selection:text-white min-h-screen relative">
      <LightWebGLBackground />
      <Navbar />
      <main className="relative z-10 pt-40 pb-space-32">
        <ServiceBackLink />
        <MobileServiceHero />
        <MobileProblemFraming />
        <MobileBentoGrid />
        <MobilePerformanceBenchmarks />
        <MobileShowcaseStack />
        <MobileLifecycleGrid />
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ServiceFinalCTA 
            title="Start your mobile app project"
            subtitle="Ready to build an enterprise-grade mobile application that delivers native performance?"
            buttonText="Build Your Mobile App"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { WebGLBackground } from "../components/canvas/WebGLBackground";
import { ServiceDetailHero } from "../components/sections/service/ServiceDetailHero";
import { ProblemFraming } from "../components/sections/service/ProblemFraming";
import { ServiceFinalCTA } from "../components/sections/service/ServiceFinalCTA";

export function ServiceDetail() {
  return (
    <div className="bg-transparent text-on-surface font-body-md antialiased selection:bg-primary-container selection:text-on-primary relative min-h-screen">
      <WebGLBackground />
      <Navbar />
      <main className="pt-32 pb-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ServiceDetailHero />
          <ProblemFraming />
          <ServiceFinalCTA />
        </div>
      </main>
      <Footer />
    </div>
  );
}

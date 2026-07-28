import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { MobileServiceHero } from "../components/sections/service/MobileServiceHero";
import { MobileProblemFraming } from "../components/sections/service/MobileProblemFraming";
import { MobileBentoGrid } from "../components/sections/service/MobileBentoGrid";
import { LightWebGLBackground } from "../components/canvas/LightWebGLBackground";

export function MobileServiceDetail() {
  return (
    <div className="bg-surface text-on-surface antialiased overflow-x-hidden selection:bg-primary-container selection:text-white min-h-screen relative">
      <LightWebGLBackground />
      <Navbar />
      <main className="relative z-10 pt-40 pb-space-32">
        <MobileServiceHero />
        <MobileProblemFraming />
        <MobileBentoGrid />
      </main>
      <Footer />
    </div>
  );
}

import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { AIServiceHero } from "../components/sections/service/AIServiceHero";
import { AIProblemFraming } from "../components/sections/service/AIProblemFraming";
import { LightWebGLBackground } from "../components/canvas/LightWebGLBackground";

export function AIServiceDetail() {
  return (
    <div className="bg-bg-primary text-on-surface antialiased overflow-x-hidden selection:bg-primary-container selection:text-white min-h-screen relative">
      <LightWebGLBackground />
      <Navbar />
      <main className="pt-32 pb-space-32">
        <AIServiceHero />
        <AIProblemFraming />
      </main>
      <Footer />
    </div>
  );
}

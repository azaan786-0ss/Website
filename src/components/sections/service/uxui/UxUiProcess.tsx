import React, { useEffect, useRef, useState } from "react";

export function UxUiProcess() {
  const [progress, setProgress] = useState(0);
  const processRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!processRef.current) return;
      const processSection = processRef.current;
      const scrollPos = window.scrollY + (window.innerHeight / 2);
      const sectionTop = processSection.offsetTop;
      const sectionHeight = processSection.offsetHeight;
      
      if (scrollPos > sectionTop) {
        let p = ((scrollPos - sectionTop) / sectionHeight) * 100;
        p = Math.min(Math.max(p, 0), 100);
        setProgress(p);
      } else {
        setProgress(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-space-32 bg-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="mb-space-16">
          <h2 className="font-display-lg text-display-lg">The Nexus Process</h2>
          <p className="text-text-secondary">A meticulous, four-phase engineering approach to creative problem solving.</p>
        </div>
        <div className="relative" ref={processRef}>
          {/* Progress Line background */}
          <div className="absolute top-8 left-0 w-full h-[2px] bg-outline-variant/30 hidden md:block"></div>
          <div 
            className="absolute top-8 left-0 h-[2px] bg-primary transition-all duration-300 ease-out hidden md:block" 
            style={{ width: `${progress}%` }}
          ></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-space-8 relative">
            {/* Step 1 */}
            <div className="relative pt-space-12">
              <div className={`absolute top-4 left-0 w-8 h-8 rounded-full flex items-center justify-center font-bold z-10 transition-colors duration-300 ${progress >= 0 ? 'bg-primary text-on-primary' : 'bg-outline-variant text-on-surface'}`}>1</div>
              <h4 className="font-heading-md text-heading-md mb-2">Discover &amp; Research</h4>
              <p className="text-text-secondary font-body-md">User mapping, stakeholder interviews, and persona development to set the strategic foundation.</p>
            </div>
            {/* Step 2 */}
            <div className="relative pt-space-12">
              <div className={`absolute top-4 left-0 w-8 h-8 rounded-full flex items-center justify-center font-bold z-10 transition-colors duration-300 ${progress >= 33 ? 'bg-primary text-on-primary' : 'bg-outline-variant text-on-surface'}`}>2</div>
              <h4 className="font-heading-md text-heading-md mb-2">Architecture &amp; Wireframing</h4>
              <p className="text-text-secondary font-body-md">Building information architecture and logical user flows before a single pixel is styled.</p>
            </div>
            {/* Step 3 */}
            <div className="relative pt-space-12">
              <div className={`absolute top-4 left-0 w-8 h-8 rounded-full flex items-center justify-center font-bold z-10 transition-colors duration-300 ${progress >= 66 ? 'bg-primary text-on-primary' : 'bg-outline-variant text-on-surface'}`}>3</div>
              <h4 className="font-heading-md text-heading-md mb-2">Visual UI &amp; Prototyping</h4>
              <p className="text-text-secondary font-body-md">Crafting the high-fidelity visual identity and high-resolution interactive prototypes.</p>
            </div>
            {/* Step 4 */}
            <div className="relative pt-space-12">
              <div className={`absolute top-4 left-0 w-8 h-8 rounded-full flex items-center justify-center font-bold z-10 transition-colors duration-300 ${progress >= 95 ? 'bg-primary text-on-primary' : 'bg-outline-variant text-on-surface'}`}>4</div>
              <h4 className="font-heading-md text-heading-md mb-2">Testing &amp; Handoff</h4>
              <p className="text-text-secondary font-body-md">Developer-ready documentation, design tokens, and final spec alignment for seamless builds.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

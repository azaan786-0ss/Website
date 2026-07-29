import { useEffect, useRef, useState } from "react";

const steps = [
  {
    title: "Discover & Architect",
    desc: "Deep dive into requirements, defining data models, API contracts, and core infrastructure choices before a single line of code is written."
  },
  {
    title: "Design & Prototype",
    desc: "Creating high-fidelity wireframes and interactive prototypes to validate user flows and visual direction."
  },
  {
    title: "Build & Iterate",
    desc: "Agile development cycles with continuous integration. You see progress weekly, not monthly."
  },
  {
    title: "Launch & Scale",
    desc: "Rigorous QA, load testing, and seamless deployment to production environments."
  },
  {
    title: "Support & Optimize",
    desc: "Ongoing performance monitoring, feature enhancements, and technical debt management."
  }
];

export function ProcessTimeline() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !lineRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far down the container the user has scrolled
      // Start filling when the top of the container is 60% down the screen
      const startPoint = windowHeight * 0.6; 
      
      const totalScrollable = rect.height;
      const currentScroll = startPoint - rect.top;
      
      let progress = currentScroll / totalScrollable;
      progress = Math.max(0, Math.min(1, progress));
      
      lineRef.current.style.height = `${progress * 100}%`;

      // Determine which step is active based on progress percentage
      const stepThreshold = 1 / steps.length;
      let active = -1;
      for (let i = 0; i < steps.length; i++) {
        // Step becomes active a bit before the line reaches it fully
        if (progress > i * stepThreshold - 0.05) {
          active = i;
        }
      }
      setActiveIndex(active);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // init on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-space-32 px-6 md:px-8 max-w-4xl mx-auto relative">
      <div className="mb-space-24 text-center">
        <h2 className="font-display-md text-display-lg mb-space-4">Our Methodology</h2>
        <p className="font-body-lg text-xl text-secondary">A deterministic approach to software delivery.</p>
      </div>
      
      <div className="relative pl-12 md:pl-20 py-8" ref={containerRef}>
        {/* Background inactive line */}
        <div className="absolute left-[23px] md:left-[39px] top-0 bottom-0 w-[2px] bg-outline-variant/30 rounded-full" />
        
        {/* Active progress line (fills on scroll) */}
        <div 
          ref={lineRef}
          className="absolute left-[23px] md:left-[39px] top-0 w-[2px] bg-primary rounded-full origin-top transition-all duration-75 ease-out shadow-[0_0_8px_rgba(99,102,241,0.6)]"
          style={{ height: "0%" }}
        />

        <div className="flex flex-col gap-8 md:gap-12 relative z-10">
          {steps.map((step, index) => {
            const isActive = index <= activeIndex;

            return (
              <div 
                key={index} 
                className={`relative transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${isActive ? 'opacity-100 translate-x-0' : 'opacity-40 -translate-x-4'}`}
              >
                {/* Step Badge */}
                <div 
                  className={`absolute -left-[45px] md:-left-[69px] top-6 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-code text-lg font-bold z-20 transition-all duration-500
                    ${isActive 
                      ? 'bg-bg-primary border-2 border-primary text-primary shadow-[0_0_15px_rgba(99,102,241,0.4)] scale-110' 
                      : 'bg-bg-primary border-2 border-outline-variant text-secondary scale-100'
                    }`}
                >
                  {index + 1}
                </div>
                
                {/* Step Card */}
                <div className={`p-6 md:p-8 rounded-2xl border transition-all duration-500 ${isActive ? 'bg-bg-primary border-outline-variant/60 shadow-lg shadow-primary/5' : 'bg-transparent border-transparent'}`}>
                  <h3 className={`font-heading-md text-2xl mb-3 transition-colors duration-500 ${isActive ? 'text-on-surface' : 'text-secondary'}`}>
                    {step.title}
                  </h3>
                  <p className="font-body-md text-secondary leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

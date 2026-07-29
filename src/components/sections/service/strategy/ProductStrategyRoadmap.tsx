import React, { useEffect, useRef, useState } from "react";

export function ProductStrategyRoadmap() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const visibleHeight = window.innerHeight;
      if (rect.top < visibleHeight && rect.bottom > 0) {
        // Calculate how far we've scrolled through the section
        const scrollPercent = Math.min(100, Math.max(0, (visibleHeight - rect.top) / (rect.height + visibleHeight) * 100));
        setScrollProgress(scrollPercent);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-space-24 px-space-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-space-12 items-start">
        <div className="md:sticky md:top-32 md:w-1/3">
          <h2 className="font-display-lg text-display-lg">The Nexus Roadmap Process</h2>
          <p className="text-text-secondary mt-space-4">A proven 4-phase methodology designed to turn concepts into market-ready leaders.</p>
        </div>
        <div className="md:w-2/3 space-y-space-8 relative" ref={sectionRef}>
          {/* Vertical Line */}
          <div 
            className="absolute left-6 top-8 bottom-8 w-[2px] z-0 hidden lg:block rounded-full transition-all duration-75"
            style={{ background: `linear-gradient(to bottom, #3525cd ${scrollProgress}%, #c7c4d8 ${scrollProgress}%)` }}
          ></div>
          
          {/* Phase 1 */}
          <div className="relative z-10 flex gap-space-6 items-start bg-white p-space-6 rounded-xl border border-outline-variant shadow-sm transition-all hover:border-primary/50 group">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center font-heading-lg shrink-0 transition-colors duration-300 ${scrollProgress >= 10 ? 'bg-primary text-white' : 'bg-outline-variant/30 text-text-secondary'}`}>1</div>
            <div>
              <h4 className="font-heading-lg text-heading-lg mb-2">Opportunity Assessment</h4>
              <p className="text-text-secondary mb-4">In-depth market research, competitive landscape auditing, and internal stakeholder alignment workshops.</p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-surface-container px-3 py-1 rounded-md text-caption text-on-surface-variant">Market Audit</span>
                <span className="bg-surface-container px-3 py-1 rounded-md text-caption text-on-surface-variant">SWOT</span>
              </div>
            </div>
          </div>
          {/* Phase 2 */}
          <div className="relative z-10 flex gap-space-6 items-start bg-white p-space-6 rounded-xl border border-outline-variant shadow-sm transition-all hover:border-primary/50 group">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center font-heading-lg shrink-0 transition-colors duration-300 ${scrollProgress >= 35 ? 'bg-primary text-white' : 'bg-outline-variant/30 text-text-secondary'}`}>2</div>
            <div>
              <h4 className="font-heading-lg text-heading-lg mb-2">Concept Validation</h4>
              <p className="text-text-secondary mb-4">Rapid hypothesis testing, targeted user interviews, and landing page experiments to confirm demand.</p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-surface-container px-3 py-1 rounded-md text-caption text-on-surface-variant">User Interviews</span>
                <span className="bg-surface-container px-3 py-1 rounded-md text-caption text-on-surface-variant">Demand Testing</span>
              </div>
            </div>
          </div>
          {/* Phase 3 */}
          <div className="relative z-10 flex gap-space-6 items-start bg-white p-space-6 rounded-xl border border-outline-variant shadow-sm transition-all hover:border-primary/50 group">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center font-heading-lg shrink-0 transition-colors duration-300 ${scrollProgress >= 60 ? 'bg-primary text-white' : 'bg-outline-variant/30 text-text-secondary'}`}>3</div>
            <div>
              <h4 className="font-heading-lg text-heading-lg mb-2">Product Blueprint</h4>
              <p className="text-text-secondary mb-4">Feature prioritization matrix using RICE scoring and detailed technical architecture roadmap.</p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-surface-container px-3 py-1 rounded-md text-caption text-on-surface-variant">PRD</span>
                <span className="bg-surface-container px-3 py-1 rounded-md text-caption text-on-surface-variant">Feature Matrix</span>
              </div>
            </div>
          </div>
          {/* Phase 4 */}
          <div className="relative z-10 flex gap-space-6 items-start bg-white p-space-6 rounded-xl border border-outline-variant shadow-sm transition-all hover:border-primary/50 group">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center font-heading-lg shrink-0 transition-colors duration-300 ${scrollProgress >= 85 ? 'bg-primary text-white' : 'bg-outline-variant/30 text-text-secondary'}`}>4</div>
            <div>
              <h4 className="font-heading-lg text-heading-lg mb-2">Go-to-Market Playbook</h4>
              <p className="text-text-secondary mb-4">Full launch sequence, telemetry setup for tracking KPIs, and iterative feedback loop establishment.</p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-surface-container px-3 py-1 rounded-md text-caption text-on-surface-variant">GTM Strategy</span>
                <span className="bg-surface-container px-3 py-1 rounded-md text-caption text-on-surface-variant">Analytics Plan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

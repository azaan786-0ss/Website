import { useEffect } from "react";

export function AboutTimeline() {
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("process-section");
      const progress = document.getElementById("timeline-progress");
      
      if (section && progress) {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        // Calculate how far we've scrolled into the section
        let scrollPercentage = 0;
        
        if (sectionTop < windowHeight && sectionTop > -sectionHeight) {
          const scrolled = windowHeight - sectionTop;
          const totalScrollable = sectionHeight + windowHeight / 2; // Adjust for better feel
          scrollPercentage = Math.min(100, Math.max(0, (scrolled / totalScrollable) * 100));
        }
        
        progress.style.height = `${scrollPercentage}%`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-space-32 px-8 max-w-[1280px] mx-auto" id="process-section">
      <div className="text-center mb-space-16">
        <p className="font-code text-code text-primary mb-space-4">METHODOLOGY</p>
        <h2 className="font-display-lg text-display-lg text-on-surface">The engineering process.</h2>
      </div>
      <div className="max-w-3xl mx-auto relative pl-16">
        <div className="timeline-line"></div>
        <div className="timeline-progress" id="timeline-progress"></div>
        {/* Step 1 */}
        <div className="relative mb-space-16 group">
          <div className="absolute -left-16 top-0 w-12 h-12 bg-bg-primary border-2 border-border rounded-full flex items-center justify-center z-10 transition-colors group-hover:border-primary">
            <span className="font-code text-code text-text-secondary group-hover:text-primary">01</span>
          </div>
          <h3 className="font-heading-lg text-heading-lg text-on-surface mb-space-2 group-hover:text-primary transition-colors">Discover</h3>
          <p className="font-body-md text-body-md text-text-secondary">Deep systemic analysis of your current technical debt, market position, and strategic objectives to define a clear architectural roadmap.</p>
        </div>
        {/* Step 2 */}
        <div className="relative mb-space-16 group">
          <div className="absolute -left-16 top-0 w-12 h-12 bg-bg-primary border-2 border-border rounded-full flex items-center justify-center z-10 transition-colors group-hover:border-primary">
            <span className="font-code text-code text-text-secondary group-hover:text-primary">02</span>
          </div>
          <h3 className="font-heading-lg text-heading-lg text-on-surface mb-space-2 group-hover:text-primary transition-colors">Design</h3>
          <p className="font-body-md text-body-md text-text-secondary">Creating robust blueprints for user experience and system architecture. We prioritize elegant, scalable patterns over immediate, fragile solutions.</p>
        </div>
        {/* Step 3 */}
        <div className="relative mb-space-16 group">
          <div className="absolute -left-16 top-0 w-12 h-12 bg-bg-primary border-2 border-border rounded-full flex items-center justify-center z-10 transition-colors group-hover:border-primary">
            <span className="font-code text-code text-text-secondary group-hover:text-primary">03</span>
          </div>
          <h3 className="font-heading-lg text-heading-lg text-on-surface mb-space-2 group-hover:text-primary transition-colors">Build</h3>
          <p className="font-body-md text-body-md text-text-secondary">Meticulous execution by senior engineers. We employ rigorous testing, code reviews, and continuous integration to ensure enterprise-grade stability.</p>
        </div>
        {/* Step 4 */}
        <div className="relative mb-space-16 group">
          <div className="absolute -left-16 top-0 w-12 h-12 bg-bg-primary border-2 border-border rounded-full flex items-center justify-center z-10 transition-colors group-hover:border-primary">
            <span className="font-code text-code text-text-secondary group-hover:text-primary">04</span>
          </div>
          <h3 className="font-heading-lg text-heading-lg text-on-surface mb-space-2 group-hover:text-primary transition-colors">Launch</h3>
          <p className="font-body-md text-body-md text-text-secondary">Orchestrated deployment with zero-downtime strategies. We manage the complexity of transition so your operations remain uninterrupted.</p>
        </div>
        {/* Step 5 */}
        <div className="relative group">
          <div className="absolute -left-16 top-0 w-12 h-12 bg-bg-primary border-2 border-border rounded-full flex items-center justify-center z-10 transition-colors group-hover:border-primary">
            <span className="font-code text-code text-text-secondary group-hover:text-primary">05</span>
          </div>
          <h3 className="font-heading-lg text-heading-lg text-on-surface mb-space-2 group-hover:text-primary transition-colors">Support</h3>
          <p className="font-body-md text-body-md text-text-secondary">Long-term partnership ensuring system evolution, security patching, and strategic scaling as your business demands grow.</p>
        </div>
      </div>
    </section>
  );
}

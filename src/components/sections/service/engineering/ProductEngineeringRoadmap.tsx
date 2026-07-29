import React from "react";

export function ProductEngineeringRoadmap() {
  return (
    <section className="py-space-32 px-space-6 md:px-8 bg-bg-secondary overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-space-16">
          <h2 className="font-heading-lg text-display-md text-on-surface mb-4">The 0-to-100 Growth Journey</h2>
          <p className="font-body-lg text-body-lg text-text-secondary max-w-2xl mx-auto">
            A structured roadmap designed to align technical maturity with business expansion phases.
          </p>
        </div>
        <div className="relative">
          {/* Roadmap Line (Hidden on Mobile) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-primary to-transparent -translate-x-1/2"></div>
          
          {/* Stage 1 */}
          <div className="relative flex flex-col lg:flex-row items-center mb-space-16 lg:mb-space-24 group">
            <div className="flex-1 lg:pr-space-16 text-center lg:text-right mb-8 lg:mb-0">
              <h3 className="text-primary font-heading-md text-heading-md mb-2">Stage 1: 0 to 1</h3>
              <div className="font-display-md text-heading-lg text-on-surface mb-3 group-hover:text-primary transition-colors">Launch &amp; Validate</div>
              <p className="text-text-secondary">Rapid MVP engineering focused on core features and market validation. We prioritize fast time-to-market and high-quality initial execution to secure early traction.</p>
            </div>
            <div className="z-10 w-16 h-16 rounded-full bg-primary text-on-primary flex items-center justify-center font-display-md border-4 border-white shadow-lg group-hover:scale-110 transition-transform">01</div>
            <div className="flex-1 lg:pl-space-16 hidden lg:block"></div>
          </div>
          
          {/* Stage 2 */}
          <div className="relative flex flex-col lg:flex-row items-center mb-space-16 lg:mb-space-24 group">
            <div className="flex-1 lg:pr-space-16 hidden lg:block"></div>
            <div className="z-10 w-16 h-16 rounded-full bg-primary text-on-primary flex items-center justify-center font-display-md border-4 border-white shadow-lg group-hover:scale-110 transition-transform">02</div>
            <div className="flex-1 lg:pl-space-16 text-center lg:text-left mt-8 lg:mt-0">
              <h3 className="text-primary font-heading-md text-heading-md mb-2">Stage 2: 1 to 10</h3>
              <div className="font-display-md text-heading-lg text-on-surface mb-3 group-hover:text-primary transition-colors">Scale &amp; Automate</div>
              <p className="text-text-secondary">Hardening the foundation for growth. Implementation of high-concurrency architecture, process automation, and deep performance tuning to handle increasing user volume.</p>
            </div>
          </div>
          
          {/* Stage 3 */}
          <div className="relative flex flex-col lg:flex-row items-center group">
            <div className="flex-1 lg:pr-space-16 text-center lg:text-right mb-8 lg:mb-0">
              <h3 className="text-primary font-heading-md text-heading-md mb-2">Stage 3: 10 to 100</h3>
              <div className="font-display-md text-heading-lg text-on-surface mb-3 group-hover:text-primary transition-colors">Enterprise &amp; Expand</div>
              <p className="text-text-secondary">Building for market dominance. Multi-region reliability, continuous refactoring, and system expansion to support enterprise-level complexity and international scale.</p>
            </div>
            <div className="z-10 w-16 h-16 rounded-full bg-primary text-on-primary flex items-center justify-center font-display-md border-4 border-white shadow-lg group-hover:scale-110 transition-transform">03</div>
            <div className="flex-1 lg:pl-space-16 hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

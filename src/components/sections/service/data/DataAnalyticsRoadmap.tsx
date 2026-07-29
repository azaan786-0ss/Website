import React from "react";

export function DataAnalyticsRoadmap() {
  return (
    <section className="py-space-32 bg-primary">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-12 gap-space-12">
        <div className="lg:col-span-4 text-on-primary">
          <h2 className="font-display-lg text-display-lg mb-space-6">The Engineering Roadmap</h2>
          <p className="text-primary-fixed-dim text-body-lg">Our 4-phase engagement model ensures we don't just ship code, but build a lasting data culture.</p>
        </div>
        <div className="lg:col-span-8 relative">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-on-primary-container/30">
            <div className="w-full bg-on-primary transition-all duration-500 origin-top h-full" id="scroll-progress-line"></div>
          </div>
          <div className="space-y-space-16">
            {/* Step 1 */}
            <div className="relative pl-16 group">
              <div className="absolute left-[23px] top-2 w-4 h-4 rounded-full bg-on-primary border-4 border-primary z-10 transition-transform group-hover:scale-125"></div>
              <div>
                <span className="font-code text-caption text-primary-fixed mb-space-2 block group-hover:text-white transition-colors">PHASE 01</span>
                <h3 className="font-heading-lg text-on-primary mb-space-2">Audit &amp; Strategy</h3>
                <p className="text-primary-fixed-dim max-w-xl group-hover:text-white/90 transition-colors">We analyze your existing stack, identify data gaps, and define a tracking plan aligned with business goals.</p>
              </div>
            </div>
            {/* Step 2 */}
            <div className="relative pl-16 group">
              <div className="absolute left-[23px] top-2 w-4 h-4 rounded-full bg-on-primary border-4 border-primary z-10 transition-transform group-hover:scale-125"></div>
              <div>
                <span className="font-code text-caption text-primary-fixed mb-space-2 block group-hover:text-white transition-colors">PHASE 02</span>
                <h3 className="font-heading-lg text-on-primary mb-space-2">Infrastructure Engineering</h3>
                <p className="text-primary-fixed-dim max-w-xl group-hover:text-white/90 transition-colors">Setting up the modern data stack: warehouse provisioning, ETL connector setup, and schema design.</p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="relative pl-16 group">
              <div className="absolute left-[23px] top-2 w-4 h-4 rounded-full bg-on-primary border-4 border-primary z-10 transition-transform group-hover:scale-125"></div>
              <div>
                <span className="font-code text-caption text-primary-fixed mb-space-2 block group-hover:text-white transition-colors">PHASE 03</span>
                <h3 className="font-heading-lg text-on-primary mb-space-2">Telemetry Setup</h3>
                <p className="text-primary-fixed-dim max-w-xl group-hover:text-white/90 transition-colors">Implementing event tracking across web and mobile apps to capture every meaningful user interaction.</p>
              </div>
            </div>
            {/* Step 4 */}
            <div className="relative pl-16 group">
              <div className="absolute left-[23px] top-2 w-4 h-4 rounded-full bg-on-primary border-4 border-primary z-10 transition-transform group-hover:scale-125"></div>
              <div>
                <span className="font-code text-caption text-primary-fixed mb-space-2 block group-hover:text-white transition-colors">PHASE 04</span>
                <h3 className="font-heading-lg text-on-primary mb-space-2">Continuous Tuning</h3>
                <p className="text-primary-fixed-dim max-w-xl group-hover:text-white/90 transition-colors">Iterative refinement of dashboards, anomaly detection alerts, and executive reporting cadences.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

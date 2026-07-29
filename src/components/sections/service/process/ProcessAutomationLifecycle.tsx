import React from "react";

export function ProcessAutomationLifecycle() {
  return (
    <section className="py-24 px-6 overflow-hidden bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <h2 className="font-display-md text-display-md mb-6 text-on-surface">Automation Lifecycle</h2>
            <p className="font-body-md text-body-md text-text-secondary mb-8">Our rigorous engineering approach ensures that automation doesn't just work—it creates lasting enterprise value without technical debt.</p>
            <div className="p-6 bg-surface-container rounded-xl border border-outline-variant/30 hover:border-primary/50 transition-colors">
              <p className="font-code text-sm text-primary mb-2 uppercase">Phase Completion Tracker</p>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm text-on-surface">
                  <span>Engineering Rigor</span>
                  <span className="font-bold">100%</span>
                </div>
                <div className="h-1.5 w-full bg-white rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-full animate-[pulse_3s_ease-in-out_infinite]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 space-y-12 relative">
            {/* Connecting Line */}
            <div className="absolute left-6 top-8 bottom-8 w-[1.5px] bg-outline-variant/30 hidden md:block"></div>
            
            <div className="flex gap-6 relative group cursor-pointer">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold relative z-10 group-hover:scale-110 transition-transform shadow-md">01</div>
              <div>
                <h3 className="font-heading-md text-heading-md mb-2 text-on-surface group-hover:text-primary transition-colors">Workflow Audit &amp; Bottleneck Discovery</h3>
                <p className="font-body-md text-body-md text-text-secondary">Mapping internal operations, analyzing human labor costs, and identifying high-ROI automation targets through deep-dive analysis.</p>
              </div>
            </div>
            
            <div className="flex gap-6 relative group cursor-pointer">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold relative z-10 group-hover:scale-110 transition-transform shadow-md">02</div>
              <div>
                <h3 className="font-heading-md text-heading-md mb-2 text-on-surface group-hover:text-primary transition-colors">Architecture &amp; Integration Blueprint</h3>
                <p className="font-body-md text-body-md text-text-secondary">Designing fault-tolerant workflow logic, data validation checks, and comprehensive error-handling mechanisms for scale.</p>
              </div>
            </div>
            
            <div className="flex gap-6 relative group cursor-pointer">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold relative z-10 group-hover:scale-110 transition-transform shadow-md">03</div>
              <div>
                <h3 className="font-heading-md text-heading-md mb-2 text-on-surface group-hover:text-primary transition-colors">Custom Bot &amp; Pipeline Deployment</h3>
                <p className="font-body-md text-body-md text-text-secondary">Engineering middleware, configuring API webhooks, and training custom AI parsing models to handle your unique data requirements.</p>
              </div>
            </div>
            
            <div className="flex gap-6 relative group cursor-pointer">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold relative z-10 group-hover:scale-110 transition-transform shadow-md">04</div>
              <div>
                <h3 className="font-heading-md text-heading-md mb-2 text-on-surface group-hover:text-primary transition-colors">Operational Monitoring &amp; Refinement</h3>
                <p className="font-body-md text-body-md text-text-secondary">Setting up real-time execution logs, automated fallback alerts, and ongoing workflow speed tuning for maximum efficiency.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

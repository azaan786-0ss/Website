import React from "react";

export function PerformanceOptimizationProcess() {
  return (
    <section className="py-space-32 overflow-hidden bg-surface">
      <div className="px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row gap-space-24">
          <div className="md:w-1/3">
            <h2 className="font-display-md text-display-md mb-6 text-on-surface">Our Engineering Methodology</h2>
            <p className="text-text-secondary mb-8 font-body-lg text-body-lg">Performance isn't a one-time fix; it's a rigorous process of measurement, remediation, and maintenance.</p>
            <div className="hidden md:block w-px h-64 bg-outline-variant/30 relative ml-6">
              <div className="absolute top-0 left-0 w-px bg-primary transition-all duration-500 h-full animate-[pulse_3s_ease-in-out_infinite]" id="scroll-line"></div>
            </div>
          </div>
          <div className="md:w-2/3 space-y-space-16 relative">
            
            <div className="flex gap-space-8 relative group">
              <div className="flex-shrink-0 w-12 h-12 rounded-full border border-primary flex items-center justify-center font-heading-md text-primary bg-white z-10 group-hover:bg-primary group-hover:text-white transition-colors shadow-sm">01</div>
              <div>
                <h3 className="font-heading-lg text-heading-lg mb-2 text-on-surface group-hover:text-primary transition-colors">Deep Diagnostic Audit</h3>
                <p className="text-text-secondary max-w-lg font-body-md text-body-md">Using real-user monitoring (RUM) and synthetic profiling to map every millisecond of the user journey and identify precise friction points.</p>
              </div>
            </div>
            
            <div className="flex gap-space-8 relative group">
              <div className="flex-shrink-0 w-12 h-12 rounded-full border border-primary flex items-center justify-center font-heading-md text-primary bg-white z-10 group-hover:bg-primary group-hover:text-white transition-colors shadow-sm">02</div>
              <div>
                <h3 className="font-heading-lg text-heading-lg mb-2 text-on-surface group-hover:text-primary transition-colors">Bottleneck Remediation</h3>
                <p className="text-text-secondary max-w-lg font-body-md text-body-md">Surgical refactoring of critical path code and infrastructure configuration to unlock immediate speed gains.</p>
              </div>
            </div>
            
            <div className="flex gap-space-8 relative group">
              <div className="flex-shrink-0 w-12 h-12 rounded-full border border-primary flex items-center justify-center font-heading-md text-primary bg-white z-10 group-hover:bg-primary group-hover:text-white transition-colors shadow-sm">03</div>
              <div>
                <h3 className="font-heading-lg text-heading-lg mb-2 text-on-surface group-hover:text-primary transition-colors">Stress Testing</h3>
                <p className="text-text-secondary max-w-lg font-body-md text-body-md">Pushing systems to their theoretical limits to ensure the newly optimized architecture can handle 10x normal load without degradation.</p>
              </div>
            </div>
            
            <div className="flex gap-space-8 relative group">
              <div className="flex-shrink-0 w-12 h-12 rounded-full border border-primary flex items-center justify-center font-heading-md text-primary bg-white z-10 group-hover:bg-primary group-hover:text-white transition-colors shadow-sm">04</div>
              <div>
                <h3 className="font-heading-lg text-heading-lg mb-2 text-on-surface group-hover:text-primary transition-colors">Telemetry &amp; Guardrails</h3>
                <p className="text-text-secondary max-w-lg font-body-md text-body-md">Implementing continuous performance monitoring and automated budgets to prevent future "regression creep."</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

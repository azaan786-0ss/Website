import React from "react";

export function CloudArchitectureRoadmap() {
  return (
    <section className="py-space-32 bg-white">
      <div className="px-6 md:px-12 max-w-[1280px] mx-auto">
        <div className="text-center mb-space-16">
          <h2 className="font-display-lg text-display-md md:text-display-lg mb-space-4">Modernization Roadmap</h2>
          <p className="text-text-secondary max-w-xl mx-auto text-body-lg">
            A proven engineering process to transition legacy stacks into high-performance cloud ecosystems.
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          {/* Progress Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-primary/20"></div>
          
          <div className="space-y-space-24">
            {/* Step 1 */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center group">
              <div className="flex-1 md:text-right md:pr-space-12 order-2 md:order-1">
                <h4 className="font-heading-lg text-heading-lg text-primary mb-2">Step 1</h4>
                <h3 className="font-display-md text-display-md mb-2 group-hover:text-primary transition-colors">Cloud Audit &amp; Risk Assessment</h3>
                <p className="text-text-secondary">In-depth evaluation of existing workloads, identifying security gaps and cost bottlenecks.</p>
              </div>
              <div className="relative z-10 w-8 h-8 rounded-full bg-primary border-4 border-white shadow-sm order-1 md:order-2 mb-4 md:mb-0 group-hover:scale-125 transition-transform"></div>
              <div className="flex-1 md:pl-space-12 order-3"></div>
            </div>
            {/* Step 2 */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center group">
              <div className="flex-1 order-2 md:order-1 md:pr-space-12"></div>
              <div className="relative z-10 w-8 h-8 rounded-full bg-primary border-4 border-white shadow-sm order-1 md:order-2 mb-4 md:mb-0 group-hover:scale-125 transition-transform"></div>
              <div className="flex-1 md:pl-space-12 order-3">
                <h4 className="font-heading-lg text-heading-lg text-primary mb-2">Step 2</h4>
                <h3 className="font-display-md text-display-md mb-2 group-hover:text-primary transition-colors">Architecture Blueprint &amp; Topology</h3>
                <p className="text-text-secondary">Declarative IaC templates and VPC network design tailored for security and speed.</p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center group">
              <div className="flex-1 md:text-right md:pr-space-12 order-2 md:order-1">
                <h4 className="font-heading-lg text-heading-lg text-primary mb-2">Step 3</h4>
                <h3 className="font-display-md text-display-md mb-2 group-hover:text-primary transition-colors">Automated Migration &amp; Execution</h3>
                <p className="text-text-secondary">Phased, zero-downtime data migration and container orchestration deployment.</p>
              </div>
              <div className="relative z-10 w-8 h-8 rounded-full bg-primary border-4 border-white shadow-sm order-1 md:order-2 mb-4 md:mb-0 group-hover:scale-125 transition-transform"></div>
              <div className="flex-1 md:pl-space-12 order-3"></div>
            </div>
            {/* Step 4 */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center group">
              <div className="flex-1 order-2 md:order-1 md:pr-space-12"></div>
              <div className="relative z-10 w-8 h-8 rounded-full bg-primary border-4 border-white shadow-sm order-1 md:order-2 mb-4 md:mb-0 group-hover:scale-125 transition-transform"></div>
              <div className="flex-1 md:pl-space-12 order-3">
                <h4 className="font-heading-lg text-heading-lg text-primary mb-2">Step 4</h4>
                <h3 className="font-display-md text-display-md mb-2 group-hover:text-primary transition-colors">Continuous Observability &amp; Tuning</h3>
                <p className="text-text-secondary">Real-time dashboards, FinOps controls, and proactive infrastructure scaling.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

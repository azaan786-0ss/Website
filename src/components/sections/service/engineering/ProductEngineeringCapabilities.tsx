import React from "react";

export function ProductEngineeringCapabilities() {
  return (
    <section className="py-space-32 bg-white px-space-6 md:px-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-space-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-heading-lg text-display-md text-on-surface mb-4">Comprehensive Engineering Ecosystem</h2>
            <p className="font-body-lg text-body-lg text-text-secondary">We bridge the gap between strategic business objectives and high-performance technical execution with a multi-disciplinary approach.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-8">
          {/* Card 1 */}
          <div className="group p-space-8 rounded-xl border border-border hover:border-primary transition-all bg-[#FAFAFC]">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-space-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">rocket_launch</span>
            </div>
            <h3 className="font-heading-md text-heading-md mb-3">0-to-1 Rapid MVP Buildout</h3>
            <p className="text-text-secondary leading-relaxed">Translating business strategy into robust, market-ready digital products with a focus on speed-to-market without compromising quality.</p>
          </div>
          {/* Card 2 */}
          <div className="group p-space-8 rounded-xl border border-border hover:border-primary transition-all bg-[#FAFAFC]">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-space-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">architecture</span>
            </div>
            <h3 className="font-heading-md text-heading-md mb-3">High-Scale System Architecture</h3>
            <p className="text-text-secondary leading-relaxed">Designing adaptable tech foundations capable of handling massive growth and extreme concurrency through cloud-native distributed patterns.</p>
          </div>
          {/* Card 3 */}
          <div className="group p-space-8 rounded-xl border border-border hover:border-primary transition-all bg-[#FAFAFC]">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-space-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">hub</span>
            </div>
            <h3 className="font-heading-md text-heading-md mb-3">Core Business Logic Integration</h3>
            <p className="text-text-secondary leading-relaxed">Connecting complex workflows, payments, CRMs, and internal operations into a unified, high-integrity technical core.</p>
          </div>
          {/* Card 4 */}
          <div className="group p-space-8 rounded-xl border border-border hover:border-primary transition-all bg-[#FAFAFC]">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-space-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">security</span>
            </div>
            <h3 className="font-heading-md text-heading-md mb-3">Continuous Performance &amp; Security</h3>
            <p className="text-text-secondary leading-relaxed">Hardening platforms with proactive threat detection, automated compliance, and enterprise-grade data security protocols.</p>
          </div>
          {/* Card 5 */}
          <div className="group p-space-8 rounded-xl border border-border hover:border-primary transition-all bg-[#FAFAFC]">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-space-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">history_edu</span>
            </div>
            <h3 className="font-heading-md text-heading-md mb-3">Legacy Modernization</h3>
            <p className="text-text-secondary leading-relaxed">Evolving initial prototypes and monolithic systems into maintainable, modern, and highly scalable microservices architectures.</p>
          </div>
          {/* Card 6 */}
          <div className="group p-space-8 rounded-xl border border-border hover:border-primary transition-all bg-[#FAFAFC]">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-space-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">settings_suggest</span>
            </div>
            <h3 className="font-heading-md text-heading-md mb-3">Tech Governance &amp; Infrastructure</h3>
            <p className="text-text-secondary leading-relaxed">Monitoring, cost optimization, CI/CD pipelines, and strategic ops support to ensure your technology remains an asset, not a liability.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

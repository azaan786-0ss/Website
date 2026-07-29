import React from "react";

export function ProcessAutomationCapabilities() {
  return (
    <section className="py-24 bg-surface-container-lowest relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="font-heading-lg text-heading-lg text-on-surface mb-4">Core Capabilities</h2>
          <p className="font-body-md text-body-md text-text-secondary max-w-2xl">Engineering-grade solutions designed to bridge the gap between human creativity and operational scale.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="group p-8 rounded-xl border border-border bg-white hover:border-primary transition-all duration-300 hover:shadow-md cursor-pointer">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent-subtle text-primary mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>hub</span>
            </div>
            <h3 className="font-heading-md text-heading-md mb-3 text-on-surface group-hover:text-primary transition-colors">Custom Workflow Automation</h3>
            <p className="font-body-md text-body-md text-text-secondary">End-to-end automation of cross-departmental operations, syncing data between internal platforms, CRMs, and communication tools.</p>
          </div>
          {/* Card 2 */}
          <div className="group p-8 rounded-xl border border-border bg-white hover:border-primary transition-all duration-300 hover:shadow-md cursor-pointer">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent-subtle text-primary mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
            </div>
            <h3 className="font-heading-md text-heading-md mb-3 text-on-surface group-hover:text-primary transition-colors">Operational AI &amp; LLM Agents</h3>
            <p className="font-body-md text-body-md text-text-secondary">Integrating custom AI agents into business workflows to automate document parsing, customer ticket routing, and content processing.</p>
          </div>
          {/* Card 3 */}
          <div className="group p-8 rounded-xl border border-border bg-white hover:border-primary transition-all duration-300 hover:shadow-md cursor-pointer">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent-subtle text-primary mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>integration_instructions</span>
            </div>
            <h3 className="font-heading-md text-heading-md mb-3 text-on-surface group-hover:text-primary transition-colors">Enterprise Software Integration</h3>
            <p className="font-body-md text-body-md text-text-secondary">Connecting isolated business software—from accounting and ERPs to HR systems—with robust custom middleware.</p>
          </div>
          {/* Card 4 */}
          <div className="group p-8 rounded-xl border border-border bg-white hover:border-primary transition-all duration-300 hover:shadow-md cursor-pointer">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent-subtle text-primary mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>description</span>
            </div>
            <h3 className="font-heading-md text-heading-md mb-3 text-on-surface group-hover:text-primary transition-colors">Automated Document &amp; Data Processing</h3>
            <p className="font-body-md text-body-md text-text-secondary">Intelligent OCR and data extraction workflows that convert unstructured documents, invoices, and forms into structured database records.</p>
          </div>
          {/* Card 5 */}
          <div className="group p-8 rounded-xl border border-border bg-white hover:border-primary transition-all duration-300 hover:shadow-md cursor-pointer">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent-subtle text-primary mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dynamic_feed</span>
            </div>
            <h3 className="font-heading-md text-heading-md mb-3 text-on-surface group-hover:text-primary transition-colors">Trigger-Based Customer Lifecycle Operations</h3>
            <p className="font-body-md text-body-md text-text-secondary">Automated messaging, onboarding sequences, and account management triggers based on real-time customer activity.</p>
          </div>
          {/* Card 6 */}
          <div className="group p-8 rounded-xl border border-border bg-white hover:border-primary transition-all duration-300 hover:shadow-md cursor-pointer">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent-subtle text-primary mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>precision_manufacturing</span>
            </div>
            <h3 className="font-heading-md text-heading-md mb-3 text-on-surface group-hover:text-primary transition-colors">Robotic Process Automation (RPA)</h3>
            <p className="font-body-md text-body-md text-text-secondary">Software bots engineered to navigate legacy user interfaces, handling repetitive data entry where traditional APIs are unavailable.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

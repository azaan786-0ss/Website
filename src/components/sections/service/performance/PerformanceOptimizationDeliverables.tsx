import React from "react";

export function PerformanceOptimizationDeliverables() {
  return (
    <section className="bg-bg-secondary py-space-32 border-t border-outline-variant/30">
      <div className="px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-24">
          {/* Deliverables */}
          <div>
            <h2 className="font-heading-lg text-heading-lg mb-space-8 text-on-surface">Key Deliverables</h2>
            <ul className="space-y-space-4">
              <li className="flex items-start gap-3 group">
                <span className="material-symbols-outlined text-success mt-1 group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <div>
                  <span className="font-heading-md text-on-surface group-hover:text-primary transition-colors">Comprehensive Audit Report</span>
                  <p className="text-body-md text-text-secondary mt-1">A 50+ page breakdown of every latency source and cost-saving opportunity.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="material-symbols-outlined text-success mt-1 group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <div>
                  <span className="font-heading-md text-on-surface group-hover:text-primary transition-colors">Optimized Production Codebase</span>
                  <p className="text-body-md text-text-secondary mt-1">Clean, modular refactors delivered via pull requests for your team to review.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="material-symbols-outlined text-success mt-1 group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <div>
                  <span className="font-heading-md text-on-surface group-hover:text-primary transition-colors">Infrastructure as Code (IaC) Updates</span>
                  <p className="text-body-md text-text-secondary mt-1">Terraform or CloudFormation scripts for optimized server clusters.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="material-symbols-outlined text-success mt-1 group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <div>
                  <span className="font-heading-md text-on-surface group-hover:text-primary transition-colors">Performance Dashboard</span>
                  <p className="text-body-md text-text-secondary mt-1">Custom Datadog or Grafana views for real-time health tracking.</p>
                </div>
              </li>
            </ul>
          </div>
          {/* Performance Stack */}
          <div className="bg-white p-space-8 rounded-2xl border border-border shadow-sm group hover:shadow-lg hover:border-primary/20 transition-all duration-300">
            <h2 className="font-heading-lg text-heading-lg mb-space-8 text-on-surface">Our Optimization Stack</h2>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-surface-container rounded-lg border border-outline-variant/30 hover:-translate-y-1 transition-transform cursor-pointer shadow-sm">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
                <span className="font-code text-caption text-on-surface">Lighthouse</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-surface-container rounded-lg border border-outline-variant/30 hover:-translate-y-1 transition-transform cursor-pointer shadow-sm delay-[50ms]">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>speed</span>
                <span className="font-code text-caption text-on-surface">k6.io</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-surface-container rounded-lg border border-outline-variant/30 hover:-translate-y-1 transition-transform cursor-pointer shadow-sm delay-[100ms]">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>monitoring</span>
                <span className="font-code text-caption text-on-surface">Datadog</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-surface-container rounded-lg border border-outline-variant/30 hover:-translate-y-1 transition-transform cursor-pointer shadow-sm delay-[150ms]">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>layers</span>
                <span className="font-code text-caption text-on-surface">Redis</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-surface-container rounded-lg border border-outline-variant/30 hover:-translate-y-1 transition-transform cursor-pointer shadow-sm delay-[200ms]">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>dns</span>
                <span className="font-code text-caption text-on-surface">Cloudflare</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-surface-container rounded-lg border border-outline-variant/30 hover:-translate-y-1 transition-transform cursor-pointer shadow-sm delay-[250ms]">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>cloud</span>
                <span className="font-code text-caption text-on-surface">AWS X-Ray</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-surface-container rounded-lg border border-outline-variant/30 hover:-translate-y-1 transition-transform cursor-pointer shadow-sm delay-[300ms]">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>settings_ethernet</span>
                <span className="font-code text-caption text-on-surface">New Relic</span>
              </div>
            </div>
            <div className="mt-space-12 pt-space-6 border-t border-dashed border-border group-hover:border-primary/30 transition-colors">
               <p className="text-secondary text-body-md italic">"We leverage enterprise-grade telemetry to ensure data-driven decision making at every architectural junction."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";

export function CloudArchitectureDeliverables() {
  return (
    <section className="py-space-32 bg-bg-secondary border-y border-border/50 overflow-hidden">
      <div className="px-6 md:px-12 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-space-24 items-center">
        <div>
          <h2 className="font-display-lg text-display-md md:text-display-lg mb-space-8">Engineered Deliverables</h2>
          <ul className="space-y-space-6">
            <li className="flex items-start gap-4 group">
              <span className="material-symbols-outlined text-success group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <div>
                <span className="font-heading-md block text-on-surface">Production-Ready Terraform Codebase</span>
                <span className="text-text-secondary">Clean, modular, and reusable IaC templates.</span>
              </div>
            </li>
            <li className="flex items-start gap-4 group">
              <span className="material-symbols-outlined text-success group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <div>
                <span className="font-heading-md block text-on-surface">Interactive Topology Diagrams</span>
                <span className="text-text-secondary">Visual mapping of all VPCs, subnets, and routing.</span>
              </div>
            </li>
            <li className="flex items-start gap-4 group">
              <span className="material-symbols-outlined text-success group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <div>
                <span className="font-heading-md block text-on-surface">CI/CD Pipeline Configurations</span>
                <span className="text-text-secondary">Fully automated build, test, and deploy workflows.</span>
              </div>
            </li>
            <li className="flex items-start gap-4 group">
              <span className="material-symbols-outlined text-success group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <div>
                <span className="font-heading-md block text-on-surface">Disaster Recovery (DR) Plan</span>
                <span className="text-text-secondary">Verified failover and recovery documentation.</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="bg-white p-space-12 rounded-2xl border border-border/60 shadow-xl group">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-8 text-center opacity-70 group-hover:opacity-100 transition-opacity duration-500">
            <div className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-bg-secondary rounded-lg flex items-center justify-center font-bold text-primary shadow-inner">AWS</div>
              <span className="text-caption">AWS</span>
            </div>
            <div className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-bg-secondary rounded-lg flex items-center justify-center font-bold text-primary shadow-inner">GCP</div>
              <span className="text-caption">Google Cloud</span>
            </div>
            <div className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-bg-secondary rounded-lg flex items-center justify-center font-bold text-primary shadow-inner">Dk</div>
              <span className="text-caption">Docker</span>
            </div>
            <div className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-bg-secondary rounded-lg flex items-center justify-center font-bold text-primary shadow-inner">K8s</div>
              <span className="text-caption">Kubernetes</span>
            </div>
            <div className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-bg-secondary rounded-lg flex items-center justify-center font-bold text-primary shadow-inner">Tf</div>
              <span className="text-caption">Terraform</span>
            </div>
            <div className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-bg-secondary rounded-lg flex items-center justify-center font-bold text-primary shadow-inner">Dd</div>
              <span className="text-caption">Datadog</span>
            </div>
            <div className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-bg-secondary rounded-lg flex items-center justify-center font-bold text-primary shadow-inner">GH</div>
              <span className="text-caption">GitHub Actions</span>
            </div>
            <div className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-bg-secondary rounded-lg flex items-center justify-center font-bold text-primary shadow-inner">Hm</div>
              <span className="text-caption">Helm</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

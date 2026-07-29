import React from "react";

export function CloudArchitectureCapabilities() {
  return (
    <section className="py-space-32 bg-bg-secondary">
      <div className="px-6 md:px-12 max-w-[1280px] mx-auto">
        <div className="mb-space-16">
          <h2 className="font-display-lg text-display-md md:text-display-lg mb-space-4">Core Capabilities</h2>
          <p className="text-text-secondary max-w-xl text-body-lg">
            Deep technical expertise across the modern cloud stack to ensure your infrastructure scales as fast as your business.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-6">
          {/* Card 1 */}
          <div className="bg-white p-space-8 rounded-xl border border-border hover:border-primary hover:shadow-[0_4px_16px_rgba(17,19,24,0.08)] transition-all group">
            <div className="w-12 h-12 bg-accent-subtle rounded-lg flex items-center justify-center text-primary mb-space-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">cloud_done</span>
            </div>
            <h3 className="font-heading-lg text-heading-lg mb-space-3">Cloud-Native Architecture</h3>
            <p className="text-text-secondary">Serverless, containerized microservices, and multi-region setups for maximum resilience.</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-space-8 rounded-xl border border-border hover:border-primary hover:shadow-[0_4px_16px_rgba(17,19,24,0.08)] transition-all group">
            <div className="w-12 h-12 bg-accent-subtle rounded-lg flex items-center justify-center text-primary mb-space-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">code_blocks</span>
            </div>
            <h3 className="font-heading-lg text-heading-lg mb-space-3">Infrastructure as Code (IaC)</h3>
            <p className="text-text-secondary">Terraform, AWS CDK, and reproducible environments ensuring zero configuration drift.</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-space-8 rounded-xl border border-border hover:border-primary hover:shadow-[0_4px_16px_rgba(17,19,24,0.08)] transition-all group">
            <div className="w-12 h-12 bg-accent-subtle rounded-lg flex items-center justify-center text-primary mb-space-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">rocket_launch</span>
            </div>
            <h3 className="font-heading-lg text-heading-lg mb-space-3">Automated CI/CD Pipelines</h3>
            <p className="text-text-secondary">GitHub Actions and automated testing for safe, frequent, and zero-downtime releases.</p>
          </div>
          {/* Card 4 */}
          <div className="bg-white p-space-8 rounded-xl border border-border hover:border-primary hover:shadow-[0_4px_16px_rgba(17,19,24,0.08)] transition-all group">
            <div className="w-12 h-12 bg-accent-subtle rounded-lg flex items-center justify-center text-primary mb-space-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">payments</span>
            </div>
            <h3 className="font-heading-lg text-heading-lg mb-space-3">FinOps &amp; Cost Tuning</h3>
            <p className="text-text-secondary">Expenditure audits, rightsizing, and auto-scaling logic to optimize every dollar spent.</p>
          </div>
          {/* Card 5 */}
          <div className="bg-white p-space-8 rounded-xl border border-border hover:border-primary hover:shadow-[0_4px_16px_rgba(17,19,24,0.08)] transition-all group">
            <div className="w-12 h-12 bg-accent-subtle rounded-lg flex items-center justify-center text-primary mb-space-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">admin_panel_settings</span>
            </div>
            <h3 className="font-heading-lg text-heading-lg mb-space-3">Security &amp; Recovery</h3>
            <p className="text-text-secondary">IAM least-privilege, automated backups, and multi-region failover strategies.</p>
          </div>
          {/* Card 6 */}
          <div className="bg-white p-space-8 rounded-xl border border-border hover:border-primary hover:shadow-[0_4px_16px_rgba(17,19,24,0.08)] transition-all group">
            <div className="w-12 h-12 bg-accent-subtle rounded-lg flex items-center justify-center text-primary mb-space-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">monitoring</span>
            </div>
            <h3 className="font-heading-lg text-heading-lg mb-space-3">Observability</h3>
            <p className="text-text-secondary">Full telemetry using Datadog and Prometheus with intelligent, noise-free alerting.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

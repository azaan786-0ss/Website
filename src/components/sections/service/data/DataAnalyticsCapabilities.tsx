import React from "react";

export function DataAnalyticsCapabilities() {
  return (
    <section className="bg-bg-secondary py-space-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-space-16 space-y-space-4 text-center">
          <h2 className="font-display-lg text-display-lg">Our Data Capabilities</h2>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">End-to-end engineering that transforms your messy event streams into a competitive advantage.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-space-6">
          {/* Cap 1 */}
          <div className="bg-white/70 backdrop-blur-md border border-outline-variant p-space-8 rounded-xl hover:shadow-[0_4px_20px_rgba(79,70,229,0.08)] hover:border-primary transition-all duration-300 group cursor-pointer">
            <div className="w-12 h-12 bg-accent-subtle rounded-lg flex items-center justify-center text-primary mb-space-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>hub</span>
            </div>
            <h3 className="font-heading-lg mb-space-2 group-hover:text-primary transition-colors">Data Pipeline Architecture</h3>
            <p className="text-on-surface-variant">Scalable ETL and ELT processes built with dbt and Fivetran to ensure data reliability across the enterprise.</p>
          </div>
          {/* Cap 2 */}
          <div className="bg-white/70 backdrop-blur-md border border-outline-variant p-space-8 rounded-xl hover:shadow-[0_4px_20px_rgba(79,70,229,0.08)] hover:border-primary transition-all duration-300 group cursor-pointer">
            <div className="w-12 h-12 bg-accent-subtle rounded-lg flex items-center justify-center text-primary mb-space-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>monitoring</span>
            </div>
            <h3 className="font-heading-lg mb-space-2 group-hover:text-primary transition-colors">Product Analytics</h3>
            <p className="text-on-surface-variant">Implementation of Mixpanel and PostHog for granular user journey tracking and feature adoption measurement.</p>
          </div>
          {/* Cap 3 */}
          <div className="bg-white/70 backdrop-blur-md border border-outline-variant p-space-8 rounded-xl hover:shadow-[0_4px_20px_rgba(79,70,229,0.08)] hover:border-primary transition-all duration-300 group cursor-pointer">
            <div className="w-12 h-12 bg-accent-subtle rounded-lg flex items-center justify-center text-primary mb-space-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard_customize</span>
            </div>
            <h3 className="font-heading-lg mb-space-2 group-hover:text-primary transition-colors">Custom BI Dashboards</h3>
            <p className="text-on-surface-variant">Tailored visualization layers in Looker or Tableau that surface critical KPIs to every stakeholder.</p>
          </div>
          {/* Cap 4 */}
          <div className="bg-white/70 backdrop-blur-md border border-outline-variant p-space-8 rounded-xl hover:shadow-[0_4px_20px_rgba(79,70,229,0.08)] hover:border-primary transition-all duration-300 group cursor-pointer">
            <div className="w-12 h-12 bg-accent-subtle rounded-lg flex items-center justify-center text-primary mb-space-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>storage</span>
            </div>
            <h3 className="font-heading-lg mb-space-2 group-hover:text-primary transition-colors">Data Warehousing</h3>
            <p className="text-on-surface-variant">Optimizing Snowflake and BigQuery architectures for cost-efficiency and high-performance querying.</p>
          </div>
          {/* Cap 5 */}
          <div className="bg-white/70 backdrop-blur-md border border-outline-variant p-space-8 rounded-xl hover:shadow-[0_4px_20px_rgba(79,70,229,0.08)] hover:border-primary transition-all duration-300 group cursor-pointer">
            <div className="w-12 h-12 bg-accent-subtle rounded-lg flex items-center justify-center text-primary mb-space-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>rebase_edit</span>
            </div>
            <h3 className="font-heading-lg mb-space-2 group-hover:text-primary transition-colors">CDP Integration</h3>
            <p className="text-on-surface-variant">Unifying customer profiles via Segment to power personalized marketing and product experiences.</p>
          </div>
          {/* Cap 6 */}
          <div className="bg-white/70 backdrop-blur-md border border-outline-variant p-space-8 rounded-xl hover:shadow-[0_4px_20px_rgba(79,70,229,0.08)] hover:border-primary transition-all duration-300 group cursor-pointer">
            <div className="w-12 h-12 bg-accent-subtle rounded-lg flex items-center justify-center text-primary mb-space-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>query_stats</span>
            </div>
            <h3 className="font-heading-lg mb-space-2 group-hover:text-primary transition-colors">Predictive Analytics</h3>
            <p className="text-on-surface-variant">Deploying machine learning models to forecast churn, LTV, and revenue growth with statistical rigor.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

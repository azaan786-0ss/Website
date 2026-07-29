import React from "react";

export function DataAnalyticsDeliverables() {
  return (
    <section className="py-space-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-space-16">
          <div>
            <h2 className="font-display-lg text-display-lg mb-space-8 text-on-surface">Hard Deliverables</h2>
            <ul className="space-y-space-6">
              <li className="flex items-start gap-space-4 group">
                <span className="material-symbols-outlined text-success mt-1 group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <div>
                  <h4 className="font-heading-md text-on-surface">Warehouse Schema</h4>
                  <p className="text-on-surface-variant">Documented and optimized Star-schema for analytical speed.</p>
                </div>
              </li>
              <li className="flex items-start gap-space-4 group">
                <span className="material-symbols-outlined text-success mt-1 group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <div>
                  <h4 className="font-heading-md text-on-surface">Automated ETL Pipelines</h4>
                  <p className="text-on-surface-variant">Robust data movers ensuring &lt;1% failure rates on daily syncs.</p>
                </div>
              </li>
              <li className="flex items-start gap-space-4 group">
                <span className="material-symbols-outlined text-success mt-1 group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <div>
                  <h4 className="font-heading-md text-on-surface">Executive BI Dashboards</h4>
                  <p className="text-on-surface-variant">Board-ready reporting with drill-down functionality.</p>
                </div>
              </li>
              <li className="flex items-start gap-space-4 group">
                <span className="material-symbols-outlined text-success mt-1 group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <div>
                  <h4 className="font-heading-md text-on-surface">Global Tracking Plan</h4>
                  <p className="text-on-surface-variant">The source of truth for all events across your product ecosystem.</p>
                </div>
              </li>
              <li className="flex items-start gap-space-4 group">
                <span className="material-symbols-outlined text-success mt-1 group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <div>
                  <h4 className="font-heading-md text-on-surface">Anomaly Detection</h4>
                  <p className="text-on-surface-variant">Proactive Slack/Email alerts for business metric deviations.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-surface-container p-space-12 rounded-2xl group hover:shadow-[0_4px_24px_rgba(79,70,229,0.06)] hover:bg-white border border-transparent hover:border-primary/20 transition-all duration-500">
            <h3 className="font-heading-lg mb-space-8 text-on-surface">Our Certified Data Stack</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-space-4">
              {/* Logos/Items */}
              <div className="p-space-4 bg-white rounded-lg border border-outline-variant/30 flex items-center justify-center font-code text-sm shadow-sm group-hover:translate-y-[-2px] transition-transform duration-300 text-on-surface">Snowflake</div>
              <div className="p-space-4 bg-white rounded-lg border border-outline-variant/30 flex items-center justify-center font-code text-sm shadow-sm group-hover:translate-y-[-2px] transition-transform duration-300 delay-[50ms] text-on-surface">BigQuery</div>
              <div className="p-space-4 bg-white rounded-lg border border-outline-variant/30 flex items-center justify-center font-code text-sm shadow-sm group-hover:translate-y-[-2px] transition-transform duration-300 delay-[100ms] text-on-surface">dbt</div>
              <div className="p-space-4 bg-white rounded-lg border border-outline-variant/30 flex items-center justify-center font-code text-sm shadow-sm group-hover:translate-y-[-2px] transition-transform duration-300 delay-[150ms] text-on-surface">Looker</div>
              <div className="p-space-4 bg-white rounded-lg border border-outline-variant/30 flex items-center justify-center font-code text-sm shadow-sm group-hover:translate-y-[-2px] transition-transform duration-300 delay-[200ms] text-on-surface">PostHog</div>
              <div className="p-space-4 bg-white rounded-lg border border-outline-variant/30 flex items-center justify-center font-code text-sm shadow-sm group-hover:translate-y-[-2px] transition-transform duration-300 delay-[250ms] text-on-surface">Mixpanel</div>
              <div className="p-space-4 bg-white rounded-lg border border-outline-variant/30 flex items-center justify-center font-code text-sm shadow-sm group-hover:translate-y-[-2px] transition-transform duration-300 delay-[300ms] text-on-surface">Segment</div>
              <div className="p-space-4 bg-white rounded-lg border border-outline-variant/30 flex items-center justify-center font-code text-sm shadow-sm group-hover:translate-y-[-2px] transition-transform duration-300 delay-[350ms] text-on-surface">Fivetran</div>
              <div className="p-space-4 bg-white rounded-lg border border-outline-variant/30 flex items-center justify-center font-code text-sm shadow-sm group-hover:translate-y-[-2px] transition-transform duration-300 delay-[400ms] text-on-surface">Python</div>
            </div>
            <div className="mt-space-12 p-space-6 bg-primary/5 rounded-xl border border-primary/10 group-hover:bg-primary/10 transition-colors duration-500">
              <p className="font-body-md text-on-surface-variant italic">"We select the right tool for the job, ensuring your infrastructure is built for future scale without unnecessary technical debt."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

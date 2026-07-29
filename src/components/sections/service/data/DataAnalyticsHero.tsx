import React from "react";
import { Link } from "react-router-dom";

export function DataAnalyticsHero() {
  return (
    <section className="pt-space-32 pb-space-24 px-8 max-w-7xl mx-auto relative mt-16">
      <div className="grid lg:grid-cols-2 gap-space-12 items-center relative z-10">
        <div className="space-y-space-6">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent-subtle border border-primary/20 text-primary font-code text-caption uppercase tracking-wider animate-in fade-in slide-in-from-bottom-8 duration-700">
            Growth &amp; Ops / Data Analytics
          </div>
          <h1 className="font-display-xl-mobile md:text-display-xl tracking-tight text-on-background animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            Turn Raw Data into Actionable Growth &amp; Product Insights
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            We design, build, and deploy modern data pipelines, real-time analytics dashboards, and telemetry tracking that empower founders and product teams to make confident, data-backed decisions.
          </p>
          <div className="flex flex-wrap gap-space-4 pt-space-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <Link to="/start-project">
              <button className="bg-primary text-on-primary px-space-8 py-space-4 rounded-lg font-heading-md hover:shadow-[0_8px_30px_rgba(79,70,229,0.3)] transition-all active:scale-95">
                Request Data Audit
              </button>
            </Link>
            <button className="border border-outline text-on-background px-space-8 py-space-4 rounded-lg font-heading-md hover:bg-surface-container transition-all active:scale-95">
              Explore Data Stack
            </button>
          </div>
        </div>
        <div className="relative animate-in fade-in zoom-in-95 duration-1000 delay-300">
          <div className="aspect-square rounded-2xl overflow-hidden bg-white/70 backdrop-blur-md border border-outline-variant/50 p-space-8 flex flex-col justify-center items-center relative z-10 shadow-xl">
            <div className="grid grid-cols-2 gap-space-4 w-full h-full">
              <div className="bg-white/50 p-space-6 rounded-xl border border-outline-variant/30 flex flex-col justify-between hover:bg-white hover:shadow-md transition-all">
                <span className="material-symbols-outlined text-primary text-4xl">analytics</span>
                <div>
                  <div className="font-display-md text-display-md text-primary">100%</div>
                  <div className="text-caption text-on-surface-variant uppercase">Accuracy</div>
                </div>
              </div>
              <div className="bg-white/50 p-space-6 rounded-xl border border-outline-variant/30 flex flex-col justify-between hover:bg-white hover:shadow-md transition-all">
                <span className="material-symbols-outlined text-primary text-4xl">speed</span>
                <div>
                  <div className="font-display-md text-display-md text-primary">10x</div>
                  <div className="text-caption text-on-surface-variant uppercase">Speed</div>
                </div>
              </div>
              <div className="bg-white/50 p-space-6 rounded-xl border border-outline-variant/30 flex flex-col justify-between hover:bg-white hover:shadow-md transition-all">
                <span className="material-symbols-outlined text-primary text-4xl">radar</span>
                <div>
                  <div className="font-heading-lg text-on-background">Real-Time</div>
                  <div className="text-caption text-on-surface-variant uppercase">Telemetry</div>
                </div>
              </div>
              <div className="bg-white/50 p-space-6 rounded-xl border border-outline-variant/30 flex flex-col justify-between hover:bg-white hover:shadow-md transition-all">
                <span className="material-symbols-outlined text-primary text-4xl">verified_user</span>
                <div>
                  <div className="font-heading-lg text-on-background">SOC2</div>
                  <div className="text-caption text-on-surface-variant uppercase">Compliance</div>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-primary/10 rounded-full blur-2xl -z-10"></div>
        </div>
      </div>
    </section>
  );
}

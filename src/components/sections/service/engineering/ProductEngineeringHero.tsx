import React from "react";
import { Link } from "react-router-dom";

export function ProductEngineeringHero() {
  return (
    <section className="relative pt-space-24 pb-space-16 px-space-6 md:px-8 overflow-hidden bg-bg-secondary">
      <div className="max-w-[1280px] mx-auto text-center">
        <div className="inline-flex items-center px-4 py-1.5 bg-accent-subtle text-primary rounded-full font-caption text-caption mb-space-8 border border-primary/10">
          <span className="material-symbols-outlined text-[16px] mr-2">settings_input_component</span>
          Engineering &amp; Cloud / Full-Lifecycle Product Engineering
        </div>
        <h1 className="font-display-xl-mobile md:font-display-xl text-on-surface max-w-5xl mx-auto mb-space-6 tracking-tight">
          Engineering Built to Scale Your Business from <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-container">0 to 100</span>
        </h1>
        <p className="font-body-lg text-body-lg text-text-secondary max-w-3xl mx-auto mb-space-12 leading-relaxed">
          We don't just write code—we act as your technical engine. From rapid MVP deployment to enterprise infrastructure and continuous operations, we build software engineered for long-term business impact.
        </p>
        <div className="flex flex-col sm:flex-row gap-space-4 justify-center mb-space-24">
          <Link to="/start-project">
            <button className="bg-primary text-on-primary px-8 py-4 rounded-lg font-body-lg font-semibold hover:bg-primary/90 transition-all flex items-center justify-center">
              Plan Your Tech Strategy
              <span className="material-symbols-outlined ml-2">trending_up</span>
            </button>
          </Link>
          <button className="bg-transparent text-primary border-2 border-primary/20 px-8 py-4 rounded-lg font-body-lg font-semibold hover:bg-primary/5 transition-all">
            Explore Lifecycle Framework
          </button>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-space-6">
          <div className="bg-white p-space-6 rounded-xl border border-border shadow-sm text-left hover:border-primary/30 transition-all">
            <span className="material-symbols-outlined text-primary mb-2">bolt</span>
            <div className="text-display-md text-on-surface mb-1">0-to-1</div>
            <div className="text-caption text-text-secondary uppercase tracking-wider">MVP Velocity</div>
          </div>
          <div className="bg-white p-space-6 rounded-xl border border-border shadow-sm text-left hover:border-primary/30 transition-all">
            <span className="material-symbols-outlined text-primary mb-2">cloud_done</span>
            <div className="text-display-md text-on-surface mb-1">99.99%</div>
            <div className="text-caption text-text-secondary uppercase tracking-wider">Enterprise Uptime</div>
          </div>
          <div className="bg-white p-space-6 rounded-xl border border-border shadow-sm text-left hover:border-primary/30 transition-all">
            <span className="material-symbols-outlined text-primary mb-2">account_tree</span>
            <div className="text-display-md text-on-surface mb-1">Zero-Debt</div>
            <div className="text-caption text-text-secondary uppercase tracking-wider">Architecture</div>
          </div>
          <div className="bg-white p-space-6 rounded-xl border border-border shadow-sm text-left hover:border-primary/30 transition-all">
            <span className="material-symbols-outlined text-primary mb-2">verified</span>
            <div className="text-display-md text-on-surface mb-1">End-to-End</div>
            <div className="text-caption text-text-secondary uppercase tracking-wider">Ownership</div>
          </div>
        </div>
      </div>
    </section>
  );
}

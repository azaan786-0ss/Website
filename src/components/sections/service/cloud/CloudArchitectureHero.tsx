import React from "react";
import { Link } from "react-router-dom";

export function CloudArchitectureHero() {
  return (
    <section className="relative pt-space-24 pb-space-32 px-6 md:px-12 max-w-[1280px] mx-auto overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[length:40px_40px] -z-10 opacity-40"></div>
      <div className="max-w-4xl">
        <span className="inline-block py-1 px-3 bg-accent-subtle text-primary border border-primary/20 rounded-full font-caption text-caption mb-space-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
          Engineering &amp; Cloud / Cloud Architecture
        </span>
        <h1 className="font-display-xl-mobile md:font-display-xl mb-space-8 text-on-surface animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
          Resilient Infrastructure Design &amp; Automated Cloud Deployment
        </h1>
        <p className="font-body-lg text-body-lg text-text-secondary mb-space-12 max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          Architecting high-availability, auto-scaling cloud foundations on AWS and GCP designed to handle traffic spikes, reduce cloud spend, and eliminate downtime.
        </p>
        <div className="flex flex-col sm:flex-row gap-space-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          <Link to="/start-project">
            <button className="bg-primary text-on-primary px-space-8 py-space-4 rounded-lg font-heading-md hover:bg-primary-container transition-all flex items-center justify-center gap-2">
              Audit Your Infrastructure
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </Link>
          <button className="border border-border text-on-surface px-space-8 py-space-4 rounded-lg font-heading-md hover:bg-bg-secondary transition-all">
            Explore Cloud Services
          </button>
        </div>
      </div>
      
      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-space-4 mt-space-24 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
        <div className="p-space-8 border border-border/60 rounded-xl bg-white shadow-sm hover:border-primary/30 transition-all">
          <div className="font-display-md text-primary mb-1">99.99%</div>
          <div className="text-caption text-text-secondary">Uptime &amp; System Availability</div>
        </div>
        <div className="p-space-8 border border-border/60 rounded-xl bg-white shadow-sm hover:border-primary/30 transition-all">
          <div className="font-display-md text-primary mb-1">-40%</div>
          <div className="text-caption text-text-secondary">Avg. Cloud Spend Optimization</div>
        </div>
        <div className="p-space-8 border border-border/60 rounded-xl bg-white shadow-sm hover:border-primary/30 transition-all">
          <div className="font-display-md text-primary mb-1">&lt; 5 Min</div>
          <div className="text-caption text-text-secondary">Zero-Downtime Deployments</div>
        </div>
        <div className="p-space-8 border border-border/60 rounded-xl bg-white shadow-sm hover:border-primary/30 transition-all">
          <div className="font-display-md text-primary mb-1">100%</div>
          <div className="text-caption text-text-secondary">SOC2 &amp; HIPAA Compliance</div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export function PerformanceOptimizationHero() {
  return (
    <section className="px-6 md:px-12 max-w-[1440px] mx-auto pt-32 pb-32">
      <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-700">
        <span className="inline-block py-1 px-3 rounded-full bg-accent-subtle text-primary font-caption text-caption uppercase tracking-wider mb-space-6 border border-primary/20">Growth &amp; Ops / Performance Optimization</span>
        <h1 className="font-display-lg text-display-lg md:text-display-xl mb-space-6 leading-tight text-on-surface">Maximizing System Speed, Efficiency, and High-Load Resilience</h1>
        <p className="font-body-lg text-body-lg text-text-secondary mb-space-12 max-w-2xl">We audit, tune, and refactor applications to achieve sub-second load times, eliminate server bottlenecks, reduce cloud costs, and guarantee stability during extreme traffic spikes.</p>
        <div className="flex flex-wrap gap-space-4 mb-space-24">
          <Link to="/start-project">
            <button className="bg-primary text-white px-8 py-4 rounded-lg font-heading-md hover:brightness-110 transition-all hover:shadow-lg active:scale-95">Get a Performance Audit</button>
          </Link>
          <button className="border border-outline text-on-surface px-8 py-4 rounded-lg font-heading-md hover:bg-surface-container transition-all active:scale-95">View Tuning Benchmarks</button>
        </div>
      </div>
      {/* Key Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-space-4 border-t border-outline-variant/30 pt-space-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
        <div className="p-space-6 hover:-translate-y-1 transition-transform cursor-default">
          <div className="font-display-md text-display-md text-primary mb-2">&lt; 1s</div>
          <div className="text-secondary font-caption uppercase tracking-tighter">Page Load &amp; Core Web Vitals</div>
        </div>
        <div className="p-space-6 hover:-translate-y-1 transition-transform cursor-default">
          <div className="font-display-md text-display-md text-primary mb-2">10x</div>
          <div className="text-secondary font-caption uppercase tracking-tighter">Increased Traffic Capacity</div>
        </div>
        <div className="p-space-6 hover:-translate-y-1 transition-transform cursor-default">
          <div className="font-display-md text-display-md text-primary mb-2">-50%</div>
          <div className="text-secondary font-caption uppercase tracking-tighter">Database &amp; Server Latency</div>
        </div>
        <div className="p-space-6 hover:-translate-y-1 transition-transform cursor-default">
          <div className="font-display-md text-display-md text-primary mb-2">100%</div>
          <div className="text-secondary font-caption uppercase tracking-tighter">Stress Test Passing Rate</div>
        </div>
      </div>
    </section>
  );
}

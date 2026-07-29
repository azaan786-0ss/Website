import React from "react";

export function PerformanceOptimizationCapabilities() {
  return (
    <section className="bg-bg-secondary py-space-32">
      <div className="px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="mb-space-16">
          <h2 className="font-display-md text-display-md mb-4 text-on-surface">Core Engineering Capabilities</h2>
          <p className="text-text-secondary max-w-xl font-body-lg text-body-lg">Meticulous optimization across every layer of your technology stack.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-6">
          {/* Capability 1 */}
          <div className="bg-white p-space-8 rounded-xl border border-outline-variant/20 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group cursor-pointer">
            <span className="material-symbols-outlined text-primary text-4xl mb-space-4 group-hover:scale-110 transition-transform block" style={{ fontVariationSettings: "'FILL' 1" }}>speed</span>
            <h3 className="font-heading-lg text-heading-lg mb-space-3 text-on-surface group-hover:text-primary transition-colors">Frontend Speed Tuning</h3>
            <p className="text-text-secondary font-body-md text-body-md">Eliminating render-blocking resources, implementing critical CSS, and optimizing asset delivery pipelines.</p>
          </div>
          {/* Capability 2 */}
          <div className="bg-white p-space-8 rounded-xl border border-outline-variant/20 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group cursor-pointer">
            <span className="material-symbols-outlined text-primary text-4xl mb-space-4 group-hover:scale-110 transition-transform block" style={{ fontVariationSettings: "'FILL' 1" }}>database</span>
            <h3 className="font-heading-lg text-heading-lg mb-space-3 text-on-surface group-hover:text-primary transition-colors">Database Optimization</h3>
            <p className="text-text-secondary font-body-md text-body-md">Query refactoring, strategic indexing, and schema normalization to reduce I/O overhead and lock contention.</p>
          </div>
          {/* Capability 3 */}
          <div className="bg-white p-space-8 rounded-xl border border-outline-variant/20 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group cursor-pointer">
            <span className="material-symbols-outlined text-primary text-4xl mb-space-4 group-hover:scale-110 transition-transform block" style={{ fontVariationSettings: "'FILL' 1" }}>memory</span>
            <h3 className="font-heading-lg text-heading-lg mb-space-3 text-on-surface group-hover:text-primary transition-colors">Server-Side Caching</h3>
            <p className="text-text-secondary font-body-md text-body-md">Multi-layer caching strategies using Redis and Memcached to minimize expensive compute operations.</p>
          </div>
          {/* Capability 4 */}
          <div className="bg-white p-space-8 rounded-xl border border-outline-variant/20 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group cursor-pointer">
            <span className="material-symbols-outlined text-primary text-4xl mb-space-4 group-hover:scale-110 transition-transform block" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
            <h3 className="font-heading-lg text-heading-lg mb-space-3 text-on-surface group-hover:text-primary transition-colors">Load Testing</h3>
            <p className="text-text-secondary font-body-md text-body-md">Simulating extreme traffic patterns to identify failure points before they impact real users.</p>
          </div>
          {/* Capability 5 */}
          <div className="bg-white p-space-8 rounded-xl border border-outline-variant/20 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group cursor-pointer">
            <span className="material-symbols-outlined text-primary text-4xl mb-space-4 group-hover:scale-110 transition-transform block" style={{ fontVariationSettings: "'FILL' 1" }}>code</span>
            <h3 className="font-heading-lg text-heading-lg mb-space-3 text-on-surface group-hover:text-primary transition-colors">Codebase Optimization</h3>
            <p className="text-text-secondary font-body-md text-body-md">Algorithmic improvements and removal of bloat to ensure lean, efficient execution cycles.</p>
          </div>
          {/* Capability 6 */}
          <div className="bg-white p-space-8 rounded-xl border border-outline-variant/20 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group cursor-pointer">
            <span className="material-symbols-outlined text-primary text-4xl mb-space-4 group-hover:scale-110 transition-transform block" style={{ fontVariationSettings: "'FILL' 1" }}>search_insights</span>
            <h3 className="font-heading-lg text-heading-lg mb-space-3 text-on-surface group-hover:text-primary transition-colors">Memory Leak Profiling</h3>
            <p className="text-text-secondary font-body-md text-body-md">Deep forensic analysis to prevent silent resource exhaustion and application crashes.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

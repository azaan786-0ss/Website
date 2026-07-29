export function ProductStrategyCapabilities() {
  return (
    <section className="py-space-24 px-space-6 bg-white border-y border-outline-variant">
      <div className="max-w-7xl mx-auto">
        <div className="mb-space-12">
          <h2 className="font-display-lg text-display-lg">Core Capabilities</h2>
          <p className="text-text-secondary mt-2">Comprehensive strategic support across the product lifecycle.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-6">
          {/* Card 1 */}
          <div className="p-space-8 rounded-xl border border-outline-variant hover:-translate-y-1 hover:border-primary hover:shadow-[0_10px_30px_-10px_rgba(53,37,205,0.1)] transition-all bg-surface/30">
            <span className="material-symbols-outlined text-primary mb-4 text-3xl">analytics</span>
            <h3 className="font-heading-lg text-heading-lg mb-2">Market &amp; Discovery</h3>
            <p className="text-text-secondary">Benchmarking, market positioning, and gap analysis to find your unfair advantage.</p>
          </div>
          {/* Card 2 */}
          <div className="p-space-8 rounded-xl border border-outline-variant hover:-translate-y-1 hover:border-primary hover:shadow-[0_10px_30px_-10px_rgba(53,37,205,0.1)] transition-all bg-surface/30">
            <span className="material-symbols-outlined text-primary mb-4 text-3xl">view_kanban</span>
            <h3 className="font-heading-lg text-heading-lg mb-2">MVP Scoping</h3>
            <p className="text-text-secondary">Feature prioritization, scope management, and phase planning for initial launch.</p>
          </div>
          {/* Card 3 */}
          <div className="p-space-8 rounded-xl border border-outline-variant hover:-translate-y-1 hover:border-primary hover:shadow-[0_10px_30px_-10px_rgba(53,37,205,0.1)] transition-all bg-surface/30">
            <span className="material-symbols-outlined text-primary mb-4 text-3xl">route</span>
            <h3 className="font-heading-lg text-heading-lg mb-2">User Journey Mapping</h3>
            <p className="text-text-secondary">Customer touchpoint analysis and friction elimination for seamless experiences.</p>
          </div>
          {/* Card 4 */}
          <div className="p-space-8 rounded-xl border border-outline-variant hover:-translate-y-1 hover:border-primary hover:shadow-[0_10px_30px_-10px_rgba(53,37,205,0.1)] transition-all bg-surface/30">
            <span className="material-symbols-outlined text-primary mb-4 text-3xl">payments</span>
            <h3 className="font-heading-lg text-heading-lg mb-2">Monetization Models</h3>
            <p className="text-text-secondary">Value metric definition and SaaS pricing strategy optimized for LTV.</p>
          </div>
          {/* Card 5 */}
          <div className="p-space-8 rounded-xl border border-outline-variant hover:-translate-y-1 hover:border-primary hover:shadow-[0_10px_30px_-10px_rgba(53,37,205,0.1)] transition-all bg-surface/30">
            <span className="material-symbols-outlined text-primary mb-4 text-3xl">insights</span>
            <h3 className="font-heading-lg text-heading-lg mb-2">Growth Frameworks</h3>
            <p className="text-text-secondary">North Star metric setup and retention analytics strategy for sustainable growth.</p>
          </div>
          {/* Card 6 */}
          <div className="p-space-8 rounded-xl border border-outline-variant hover:-translate-y-1 hover:border-primary hover:shadow-[0_10px_30px_-10px_rgba(53,37,205,0.1)] transition-all bg-surface/30">
            <span className="material-symbols-outlined text-primary mb-4 text-3xl">rocket_launch</span>
            <h3 className="font-heading-lg text-heading-lg mb-2">Lifecycle Management</h3>
            <p className="text-text-secondary">Scaling strategy from seed stage through enterprise-level expansion.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

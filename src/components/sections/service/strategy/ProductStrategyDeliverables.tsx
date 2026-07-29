export function ProductStrategyDeliverables() {
  return (
    <section className="py-space-24 px-space-6 bg-white border-y border-outline-variant">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-space-16 items-center">
        <div className="lg:w-1/2">
          <h2 className="font-display-lg text-display-lg mb-space-8">Tangible Deliverables</h2>
          <div className="space-y-space-4">
            <div className="flex items-center gap-space-4 p-space-4 rounded-lg bg-surface border border-outline-variant">
              <span className="material-symbols-outlined text-primary">check_circle</span>
              <span className="font-heading-md">Product Requirement Documents (PRD)</span>
            </div>
            <div className="flex items-center gap-space-4 p-space-4 rounded-lg bg-surface border border-outline-variant">
              <span className="material-symbols-outlined text-primary">check_circle</span>
              <span className="font-heading-md">Feature Prioritization Matrix</span>
            </div>
            <div className="flex items-center gap-space-4 p-space-4 rounded-lg bg-surface border border-outline-variant">
              <span className="material-symbols-outlined text-primary">check_circle</span>
              <span className="font-heading-md">GTM Launch Playbook</span>
            </div>
            <div className="flex items-center gap-space-4 p-space-4 rounded-lg bg-surface border border-outline-variant">
              <span className="material-symbols-outlined text-primary">check_circle</span>
              <span className="font-heading-md">Interactive Strategic Roadmap Deck</span>
            </div>
            <div className="flex items-center gap-space-4 p-space-4 rounded-lg bg-surface border border-outline-variant">
              <span className="material-symbols-outlined text-primary">check_circle</span>
              <span className="font-heading-md">ROI &amp; Growth Forecast</span>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 flex flex-wrap gap-space-4 justify-center">
          <div className="flex flex-col items-center gap-2 p-space-8 rounded-2xl bg-accent-subtle/50 w-48 text-center border border-primary/10 hover:border-primary/30 hover:scale-105 transition-all">
            <span className="material-symbols-outlined text-primary text-4xl">workspaces</span>
            <span className="font-heading-md">Jobs-to-be-Done</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-space-8 rounded-2xl bg-accent-subtle/50 w-48 text-center border border-primary/10 hover:border-primary/30 hover:scale-105 transition-all">
            <span className="material-symbols-outlined text-primary text-4xl">filter_list</span>
            <span className="font-heading-md">RICE Score</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-space-8 rounded-2xl bg-accent-subtle/50 w-48 text-center border border-primary/10 hover:border-primary/30 hover:scale-105 transition-all">
            <span className="material-symbols-outlined text-primary text-4xl">view_compact</span>
            <span className="font-heading-md">Lean Canvas</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-space-8 rounded-2xl bg-accent-subtle/50 w-48 text-center border border-primary/10 hover:border-primary/30 hover:scale-105 transition-all">
            <span className="material-symbols-outlined text-primary text-4xl">layers</span>
            <span className="font-heading-md">Agile Epics</span>
          </div>
        </div>
      </div>
    </section>
  );
}

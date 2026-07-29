export function UxUiCapabilities() {
  return (
    <section className="bg-bg-secondary py-space-24">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="mb-space-12 text-center">
          <h2 className="font-display-lg text-display-md md:text-display-lg mb-space-4">Core Capabilities</h2>
          <p className="text-text-secondary max-w-xl mx-auto">End-to-end design excellence tailored for modern digital ecosystems.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-8">
          {/* Card 1 */}
          <div className="bg-white p-space-8 rounded-xl border border-border hover:border-primary transition-colors group">
            <div className="w-12 h-12 bg-accent-subtle rounded-lg flex items-center justify-center mb-space-6 text-primary">
              <span className="material-symbols-outlined">search</span>
            </div>
            <h3 className="font-heading-md text-heading-md mb-space-3">User Research &amp; Testing</h3>
            <p className="text-text-secondary font-body-md">Heuristic evaluations, user interviews, and usability testing to validate every decision with real data.</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-space-8 rounded-xl border border-border hover:border-primary transition-colors group">
            <div className="w-12 h-12 bg-accent-subtle rounded-lg flex items-center justify-center mb-space-6 text-primary">
              <span className="material-symbols-outlined">layers</span>
            </div>
            <h3 className="font-heading-md text-heading-md mb-space-3">Wireframing &amp; Prototyping</h3>
            <p className="text-text-secondary font-body-md">Interactive low-to-high fidelity click-through prototypes that bring concepts to life before development.</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-space-8 rounded-xl border border-border hover:border-primary transition-colors group">
            <div className="w-12 h-12 bg-accent-subtle rounded-lg flex items-center justify-center mb-space-6 text-primary">
              <span className="material-symbols-outlined">auto_awesome_mosaic</span>
            </div>
            <h3 className="font-heading-md text-heading-md mb-space-3">Design Systems &amp; Tokens</h3>
            <p className="text-text-secondary font-body-md">Scalable Figma design systems and reusable UI components to ensure consistency across your entire product.</p>
          </div>
          {/* Card 4 */}
          <div className="bg-white p-space-8 rounded-xl border border-border hover:border-primary transition-colors group">
            <div className="w-12 h-12 bg-accent-subtle rounded-lg flex items-center justify-center mb-space-6 text-primary">
              <span className="material-symbols-outlined">devices</span>
            </div>
            <h3 className="font-heading-md text-heading-md mb-space-3">Mobile &amp; Web App Design</h3>
            <p className="text-text-secondary font-body-md">Responsive layouts and native iOS/Android design standards crafted for perfect performance on any screen.</p>
          </div>
          {/* Card 5 */}
          <div className="bg-white p-space-8 rounded-xl border border-border hover:border-primary transition-colors group">
            <div className="w-12 h-12 bg-accent-subtle rounded-lg flex items-center justify-center mb-space-6 text-primary">
              <span className="material-symbols-outlined">animation</span>
            </div>
            <h3 className="font-heading-md text-heading-md mb-space-3">Micro-Interactions &amp; Animation</h3>
            <p className="text-text-secondary font-body-md">Delightful UI transitions and purposeful motion design that guide users and elevate the premium feel.</p>
          </div>
          {/* Card 6 */}
          <div className="bg-white p-space-8 rounded-xl border border-border hover:border-primary transition-colors group">
            <div className="w-12 h-12 bg-accent-subtle rounded-lg flex items-center justify-center mb-space-6 text-primary">
              <span className="material-symbols-outlined">fact_check</span>
            </div>
            <h3 className="font-heading-md text-heading-md mb-space-3">UX Audit &amp; Optimization</h3>
            <p className="text-text-secondary font-body-md">Identifying friction points and conversion bottlenecks through expert analysis and data-driven insights.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BrandIdentityCapabilities() {
  return (
    <section className="py-space-32 bg-bg-secondary px-space-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-space-16">
          <h2 className="font-display-lg text-display-lg text-on-surface mb-space-4">Core Capabilities</h2>
          <div className="w-24 h-1.5 bg-primary rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-8">
          {/* Card 1 */}
          <div className="group bg-white p-space-10 rounded-xl border border-border hover:border-primary transition-all duration-300">
            <div className="w-12 h-12 bg-accent-subtle text-primary rounded-lg flex items-center justify-center mb-space-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">psychology</span>
            </div>
            <h3 className="font-heading-lg text-heading-lg mb-space-4">Brand Positioning &amp; Voice</h3>
            <p className="text-text-secondary">Definition of core mission, unique tone of voice, and comprehensive messaging architecture for unified communication.</p>
          </div>
          {/* Card 2 */}
          <div className="group bg-white p-space-10 rounded-xl border border-border hover:border-primary transition-all duration-300">
            <div className="w-12 h-12 bg-accent-subtle text-primary rounded-lg flex items-center justify-center mb-space-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">grid_view</span>
            </div>
            <h3 className="font-heading-lg text-heading-lg mb-space-4">Logo &amp; Icon Systems</h3>
            <p className="text-text-secondary">Scalable vector logos, mark variations, favicons, and custom icon sets optimized for all digital environments.</p>
          </div>
          {/* Card 3 */}
          <div className="group bg-white p-space-10 rounded-xl border border-border hover:border-primary transition-all duration-300">
            <div className="w-12 h-12 bg-accent-subtle text-primary rounded-lg flex items-center justify-center mb-space-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">palette</span>
            </div>
            <h3 className="font-heading-lg text-heading-lg mb-space-4">Color &amp; Typography</h3>
            <p className="text-text-secondary">WCAG-compliant accessible color palettes and meticulous web typography scales designed for long-term scalability.</p>
          </div>
          {/* Card 4 */}
          <div className="group bg-white p-space-10 rounded-xl border border-border hover:border-primary transition-all duration-300">
            <div className="w-12 h-12 bg-accent-subtle text-primary rounded-lg flex items-center justify-center mb-space-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">menu_book</span>
            </div>
            <h3 className="font-heading-lg text-heading-lg mb-space-4">Digital Brand Guidelines</h3>
            <p className="text-text-secondary">Interactive web-based brand portals featuring live documentation and dynamic asset downloads for global teams.</p>
          </div>
          {/* Card 5 */}
          <div className="group bg-white p-space-10 rounded-xl border border-border hover:border-primary transition-all duration-300">
            <div className="w-12 h-12 bg-accent-subtle text-primary rounded-lg flex items-center justify-center mb-space-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">auto_awesome_motion</span>
            </div>
            <h3 className="font-heading-lg text-heading-lg mb-space-4">Marketing &amp; Social Kits</h3>
            <p className="text-text-secondary">Modular templates for social media, executive pitch decks, and high-impact digital advertising assets.</p>
          </div>
          {/* Card 6 */}
          <div className="group bg-white p-space-10 rounded-xl border border-border hover:border-primary transition-all duration-300">
            <div className="w-12 h-12 bg-accent-subtle text-primary rounded-lg flex items-center justify-center mb-space-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">integration_instructions</span>
            </div>
            <h3 className="font-heading-lg text-heading-lg mb-space-4">Product Integration</h3>
            <p className="text-text-secondary">Seamless translation of visual brand identity directly into functional UI design systems and component libraries.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

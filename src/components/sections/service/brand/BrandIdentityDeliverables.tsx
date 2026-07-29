export function BrandIdentityDeliverables() {
  return (
    <section className="py-space-32 px-space-6 md:px-8 bg-bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-20 items-center">
          <div>
            <span className="text-primary font-caption text-caption uppercase tracking-widest mb-space-6 block">The Package</span>
            <h2 className="font-display-lg text-display-lg mb-space-8">What You Receive</h2>
            <ul className="space-y-space-6">
              <li className="flex items-start gap-space-4">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <div>
                  <h5 className="font-heading-md text-heading-md">Vector Master Kits</h5>
                  <p className="text-text-secondary">Fully scalable SVG/EPS logos in all variations (primary, secondary, monochrome).</p>
                </div>
              </li>
              <li className="flex items-start gap-space-4">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <div>
                  <h5 className="font-heading-md text-heading-md">Web Brand Book</h5>
                  <p className="text-text-secondary">A live, interactive documentation site that grows with your company.</p>
                </div>
              </li>
              <li className="flex items-start gap-space-4">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <div>
                  <h5 className="font-heading-md text-heading-md">Typography System</h5>
                  <p className="text-text-secondary">Fully licensed fonts and configured CSS/Tailwind typography hierarchies.</p>
                </div>
              </li>
              <li className="flex items-start gap-space-4">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <div>
                  <h5 className="font-heading-md text-heading-md">Marketing Core Kit</h5>
                  <p className="text-text-secondary">Plug-and-play templates for Google Slides, LinkedIn, and email signatures.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-space-4">
            <div className="bg-white p-space-6 rounded-xl border border-border shadow-sm transform translate-y-8 hover:-translate-y-2 transition-transform duration-500">
              <div className="text-caption font-caption text-text-secondary mb-space-4 uppercase tracking-tighter">Color Palette</div>
              <div className="flex flex-col gap-space-2">
                <div className="h-12 bg-primary rounded"></div>
                <div className="h-12 bg-accent-subtle rounded"></div>
                <div className="h-12 bg-bg-dark-primary rounded"></div>
              </div>
            </div>
            <div className="bg-white p-space-6 rounded-xl border border-border shadow-sm hover:-translate-y-2 transition-transform duration-500">
              <div className="text-caption font-caption text-text-secondary mb-space-4 uppercase tracking-tighter">Typography</div>
              <div className="space-y-2">
                <div className="font-display-md text-display-md leading-none">Aa</div>
                <div className="text-body-md opacity-60">Inter Tight</div>
                <div className="h-px bg-border my-4"></div>
                <div className="font-heading-md">H1 Headline</div>
                <div className="text-caption text-text-secondary">1.25 line-height</div>
              </div>
            </div>
            <div className="bg-white p-space-6 rounded-xl border border-border shadow-sm col-span-2 mt-space-4 hover:-translate-y-2 transition-transform duration-500">
              <div className="text-caption font-caption text-text-secondary mb-space-4 uppercase tracking-tighter">Iconography Library</div>
              <div className="grid grid-cols-6 gap-space-4">
                <span className="material-symbols-outlined text-primary">analytics</span>
                <span className="material-symbols-outlined text-primary">language</span>
                <span className="material-symbols-outlined text-primary">security</span>
                <span className="material-symbols-outlined text-primary">hub</span>
                <span className="material-symbols-outlined text-primary">auto_graph</span>
                <span className="material-symbols-outlined text-primary">diversity_3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

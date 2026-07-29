export function BrandIdentityProcess() {
  return (
    <section className="py-space-32 px-space-6 md:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-space-24">
          <h2 className="font-display-lg text-display-lg mb-space-4">Our Methodical Process</h2>
          <p className="text-text-secondary max-w-xl mx-auto">How we bridge the gap between engineering rigor and creative vision.</p>
        </div>
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-8 left-0 w-full h-[2px] bg-border hidden lg:block"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-space-12 relative">
            {/* Step 1 */}
            <div className="relative bg-white z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-on-primary flex items-center justify-center font-display-md text-display-md mb-space-8 ring-8 ring-accent-subtle group-hover:scale-110 transition-transform">1</div>
              <h4 className="font-heading-lg text-heading-lg mb-space-4">Strategy &amp; Immersion</h4>
              <p className="text-text-secondary font-body-md">Audit of core values, deep audience profiling, and strategic moodboarding to align vision.</p>
            </div>
            {/* Step 2 */}
            <div className="relative bg-white z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-on-primary flex items-center justify-center font-display-md text-display-md mb-space-8 ring-8 ring-accent-subtle">2</div>
              <h4 className="font-heading-lg text-heading-lg mb-space-4">Concept Exploration</h4>
              <p className="text-text-secondary font-body-md">Iterative logo concepts, typography pairing, and research-backed color psychology sessions.</p>
            </div>
            {/* Step 3 */}
            <div className="relative bg-white z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-on-primary flex items-center justify-center font-display-md text-display-md mb-space-8 ring-8 ring-accent-subtle">3</div>
              <h4 className="font-heading-lg text-heading-lg mb-space-4">System Refinement</h4>
              <p className="text-text-secondary font-body-md">Developing comprehensive guidelines, collateral mockups, and digital application stress-tests.</p>
            </div>
            {/* Step 4 */}
            <div className="relative bg-white z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-on-primary flex items-center justify-center font-display-md text-display-md mb-space-8 ring-8 ring-accent-subtle">4</div>
              <h4 className="font-heading-lg text-heading-lg mb-space-4">Asset Delivery</h4>
              <p className="text-text-secondary font-body-md">Deployment of a digital brand portal, vector master exports, and implementation of design tokens.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

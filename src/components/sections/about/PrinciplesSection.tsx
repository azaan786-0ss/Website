export function PrinciplesSection() {
  return (
    <section className="py-space-32 px-8 max-w-[1280px] mx-auto bg-bg-secondary">
      <div className="mb-space-16">
        <h2 className="font-display-lg text-display-lg text-on-surface">Operating principles.</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-8">
        <div className="p-space-6 bg-bg-primary border border-border rounded-lg hover:border-primary hover:shadow-[0_2px_8px_rgba(17,19,24,0.06)] transition-all">
          <div className="w-10 h-10 mb-space-4 text-primary">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>architecture</span>
          </div>
          <h4 className="font-heading-md text-heading-md text-on-surface mb-space-2">Architecture First</h4>
          <p className="font-body-md text-body-md text-text-secondary">We believe immediate execution without structural planning is a liability. Solid foundations dictate long-term success.</p>
        </div>
        <div className="p-space-6 bg-bg-primary border border-border rounded-lg hover:border-primary hover:shadow-[0_2px_8px_rgba(17,19,24,0.06)] transition-all">
          <div className="w-10 h-10 mb-space-4 text-primary">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>analytics</span>
          </div>
          <h4 className="font-heading-md text-heading-md text-on-surface mb-space-2">Data Over Dogma</h4>
          <p className="font-body-md text-body-md text-text-secondary">Decisions are driven by empirical evidence and performance metrics, not assumptions or fleeting industry trends.</p>
        </div>
        <div className="p-space-6 bg-bg-primary border border-border rounded-lg hover:border-primary hover:shadow-[0_2px_8px_rgba(17,19,24,0.06)] transition-all">
          <div className="w-10 h-10 mb-space-4 text-primary">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>handshake</span>
          </div>
          <h4 className="font-heading-md text-heading-md text-on-surface mb-space-2">Radical Transparency</h4>
          <p className="font-body-md text-body-md text-text-secondary">Clear, honest communication regarding timelines, challenges, and costs. No obfuscation, just partnership.</p>
        </div>
        <div className="p-space-6 bg-bg-primary border border-border rounded-lg hover:border-primary hover:shadow-[0_2px_8px_rgba(17,19,24,0.06)] transition-all">
          <div className="w-10 h-10 mb-space-4 text-primary">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>speed</span>
          </div>
          <h4 className="font-heading-md text-heading-md text-on-surface mb-space-2">Performance as Feature</h4>
          <p className="font-body-md text-body-md text-text-secondary">Speed and efficiency are not afterthoughts; they are core requirements engineered into every layer of the stack.</p>
        </div>
        <div className="p-space-6 bg-bg-primary border border-border rounded-lg hover:border-primary hover:shadow-[0_2px_8px_rgba(17,19,24,0.06)] transition-all">
          <div className="w-10 h-10 mb-space-4 text-primary">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>update</span>
          </div>
          <h4 className="font-heading-md text-heading-md text-on-surface mb-space-2">Continuous Evolution</h4>
          <p className="font-body-md text-body-md text-text-secondary">Technology is never finished. We build adaptable systems designed to embrace inevitable future change gracefully.</p>
        </div>
      </div>
    </section>
  );
}

export function ProblemFraming() {
  return (
    <section className="mb-space-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 bg-white/40 backdrop-blur-md rounded-xl border border-white/20 shadow-lg fadeUpReveal">
          <span className="material-symbols-outlined text-primary text-3xl mb-4">broken_image</span>
          <h3 className="font-heading-md text-heading-md text-on-surface mb-3">Outdated Design</h3>
          <p className="font-body-md text-body-md text-text-secondary">Your current site fails to reflect your brand's evolution and loses trust with modern audiences.</p>
        </div>
        <div className="p-8 bg-white/40 backdrop-blur-md rounded-xl border border-white/20 shadow-lg fadeUpReveal delay-100">
          <span className="material-symbols-outlined text-primary text-3xl mb-4">hourglass_empty</span>
          <h3 className="font-heading-md text-heading-md text-on-surface mb-3">Slow Load Times</h3>
          <p className="font-body-md text-body-md text-text-secondary">Bloated code and unoptimized assets drive away users before they even see your offering.</p>
        </div>
        <div className="p-8 bg-white/40 backdrop-blur-md rounded-xl border border-white/20 shadow-lg fadeUpReveal delay-200">
          <span className="material-symbols-outlined text-primary text-3xl mb-4">settings_alert</span>
          <h3 className="font-heading-md text-heading-md text-on-surface mb-3">Unmaintainable Architecture</h3>
          <p className="font-body-md text-body-md text-text-secondary">Content updates require developer intervention, slowing down your marketing velocity.</p>
        </div>
      </div>
    </section>
  );
}

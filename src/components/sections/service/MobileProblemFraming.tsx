export function MobileProblemFraming() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-8 py-space-32 border-t border-outline-variant/30">
      <div className="mb-space-24 fade-up transition-all duration-700 opacity-0 translate-y-5 [&.visible]:opacity-100 [&.visible]:translate-y-0">
        <h2 className="font-display-lg text-display-lg mb-6">The Mobile Dilemma</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
          Building for mobile often means choosing between reach and quality. We refuse to compromise.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-8">
        <div className="glass-card p-space-12 rounded-xl fade-up transition-all duration-700 opacity-0 translate-y-5 [&.visible]:opacity-100 [&.visible]:translate-y-0" style={{ transitionDelay: '0.1s' }}>
          <div className="w-14 h-14 rounded-full bg-error/10 flex items-center justify-center mb-8">
            <span className="material-symbols-outlined text-error text-3xl">devices</span>
          </div>
          <h3 className="font-heading-lg text-heading-lg mb-4">Fragmentation Issues</h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Managing distinct codebases for iOS, Android, and web leads to feature disparity, doubled QA costs, and slower time-to-market.</p>
        </div>
        <div className="glass-card p-space-12 rounded-xl fade-up transition-all duration-700 opacity-0 translate-y-5 [&.visible]:opacity-100 [&.visible]:translate-y-0" style={{ transitionDelay: '0.2s' }}>
          <div className="w-14 h-14 rounded-full bg-error/10 flex items-center justify-center mb-8">
            <span className="material-symbols-outlined text-error text-3xl">speed</span>
          </div>
          <h3 className="font-heading-lg text-heading-lg mb-4">Poor Performance</h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Suboptimal architectural choices result in UI jank, heavy battery drain, and sluggish load times that drive users to abandon your app.</p>
        </div>
        <div className="glass-card p-space-12 rounded-xl fade-up transition-all duration-700 opacity-0 translate-y-5 [&.visible]:opacity-100 [&.visible]:translate-y-0" style={{ transitionDelay: '0.3s' }}>
          <div className="w-14 h-14 rounded-full bg-error/10 flex items-center justify-center mb-8">
            <span className="material-symbols-outlined text-error text-3xl">touch_app</span>
          </div>
          <h3 className="font-heading-lg text-heading-lg mb-4">Non-Native Feel</h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Generic frameworks often fail to respect platform-specific interaction paradigms, creating an uncanny valley effect for users.</p>
        </div>
      </div>
    </section>
  );
}

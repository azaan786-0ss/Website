export function MobileBentoGrid() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-8 py-space-32 border-t border-outline-variant/30" id="features">
      <div className="mb-space-24 fade-up transition-all duration-700 opacity-0 translate-y-5 [&.visible]:opacity-100 [&.visible]:translate-y-0">
        <h2 className="font-display-lg text-display-lg mb-6">Engineering Capabilities</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
          A comprehensive approach to mobile development, ensuring excellence from architecture to App Store.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-space-6 auto-rows-[minmax(280px,auto)]">
        {/* React Native & Flutter */}
        <div className="md:col-span-8 glass-card p-space-12 rounded-2xl flex flex-col justify-end relative overflow-hidden group fade-up transition-all duration-700 opacity-0 translate-y-5 [&.visible]:opacity-100 [&.visible]:translate-y-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-container/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="relative z-10">
            <span className="material-symbols-outlined text-primary-container mb-6 text-5xl">layers</span>
            <h3 className="font-display-md text-display-md mb-4">Cross-Platform Excellence</h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              React Native & Flutter development that achieves near-native performance while sharing up to 90% of the codebase.
            </p>
          </div>
        </div>
        {/* Native Dev */}
        <div className="md:col-span-4 glass-card p-space-12 rounded-2xl flex flex-col justify-between group fade-up transition-all duration-700 opacity-0 translate-y-5 [&.visible]:opacity-100 [&.visible]:translate-y-0" style={{ transitionDelay: '0.1s' }}>
          <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary-container transition-colors text-4xl mb-8">smartphone</span>
          <div>
            <h3 className="font-heading-lg text-heading-lg mb-3">Native iOS/Android</h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Swift & Kotlin expertise for hardware-intensive applications.</p>
          </div>
        </div>
        {/* Offline Sync */}
        <div className="md:col-span-4 glass-card p-space-12 rounded-2xl flex flex-col justify-between group fade-up transition-all duration-700 opacity-0 translate-y-5 [&.visible]:opacity-100 [&.visible]:translate-y-0" style={{ transitionDelay: '0.2s' }}>
          <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary-container transition-colors text-4xl mb-8">sync_saved_locally</span>
          <div>
            <h3 className="font-heading-lg text-heading-lg mb-3">Offline Sync</h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Robust local-first architectures ensuring seamless operation without connectivity.</p>
          </div>
        </div>
        {/* Biometric Security */}
        <div className="md:col-span-4 glass-card p-space-12 rounded-2xl flex flex-col justify-between group fade-up transition-all duration-700 opacity-0 translate-y-5 [&.visible]:opacity-100 [&.visible]:translate-y-0" style={{ transitionDelay: '0.3s' }}>
          <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary-container transition-colors text-4xl mb-8">fingerprint</span>
          <div>
            <h3 className="font-heading-lg text-heading-lg mb-3">Biometric Security</h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Enterprise-grade authentication utilizing FaceID and TouchID APIs.</p>
          </div>
        </div>
        {/* App Store Optimization */}
        <div className="md:col-span-4 glass-card p-space-12 rounded-2xl flex flex-col justify-between group fade-up transition-all duration-700 opacity-0 translate-y-5 [&.visible]:opacity-100 [&.visible]:translate-y-0" style={{ transitionDelay: '0.4s' }}>
          <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary-container transition-colors text-4xl mb-8">storefront</span>
          <div>
            <h3 className="font-heading-lg text-heading-lg mb-3">ASO</h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">App Store Optimization and automated deployment pipelines.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

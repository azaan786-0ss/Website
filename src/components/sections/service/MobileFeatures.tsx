export function MobileFeatures() {
  return (
    <section className="mb-space-32">
      <div className="text-center mb-space-16 fadeUpReveal">
        <h2 className="font-display-md text-display-md text-on-surface mb-4">Uncompromising Standards</h2>
        <p className="font-body-lg text-body-lg text-text-secondary max-w-2xl mx-auto">We build mobile applications that feel native, responsive, and robust under any network condition.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 bg-surface-bright rounded-xl border border-border shadow-sm hover:border-primary/30 hover:shadow-md transition-all fadeUpReveal group">
          <div className="w-12 h-12 bg-accent-subtle text-primary flex items-center justify-center rounded-lg mb-6 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-2xl">offline_bolt</span>
          </div>
          <h3 className="font-heading-md text-heading-md text-on-surface mb-3">Offline-First Architecture</h3>
          <p className="font-body-md text-body-md text-text-secondary">Data synchronization and persistent caching ensure your app remains functional and responsive even with poor connectivity.</p>
        </div>
        <div className="p-8 bg-surface-bright rounded-xl border border-border shadow-sm hover:border-primary/30 hover:shadow-md transition-all fadeUpReveal delay-100 group">
          <div className="w-12 h-12 bg-accent-subtle text-primary flex items-center justify-center rounded-lg mb-6 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-2xl">speed</span>
          </div>
          <h3 className="font-heading-md text-heading-md text-on-surface mb-3">60fps Performance</h3>
          <p className="font-body-md text-body-md text-text-secondary">Optimized rendering pipelines and thread management to guarantee smooth, jitter-free animations and transitions.</p>
        </div>
        <div className="p-8 bg-surface-bright rounded-xl border border-border shadow-sm hover:border-primary/30 hover:shadow-md transition-all fadeUpReveal delay-200 group">
          <div className="w-12 h-12 bg-accent-subtle text-primary flex items-center justify-center rounded-lg mb-6 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-2xl">memory</span>
          </div>
          <h3 className="font-heading-md text-heading-md text-on-surface mb-3">Hardware Integration</h3>
          <p className="font-body-md text-body-md text-text-secondary">Deep hooks into native APIs for camera, biometrics, GPS, and push notifications to deliver immersive experiences.</p>
        </div>
      </div>
    </section>
  );
}

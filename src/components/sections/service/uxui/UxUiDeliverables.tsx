export function UxUiDeliverables() {
  return (
    <section className="bg-bg-secondary py-space-24">
      <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-space-16 items-center">
        <div>
          <h2 className="font-display-lg text-display-lg mb-space-8">Premium Deliverables</h2>
          <ul className="space-y-space-4">
            <li className="flex items-center gap-4 text-body-lg">
              <span className="material-symbols-outlined text-success">check_circle</span>
              <span>Figma master design source files</span>
            </li>
            <li className="flex items-center gap-4 text-body-lg">
              <span className="material-symbols-outlined text-success">check_circle</span>
              <span>Documented component library &amp; tokens</span>
            </li>
            <li className="flex items-center gap-4 text-body-lg">
              <span className="material-symbols-outlined text-success">check_circle</span>
              <span>Comprehensive UI Kit &amp; Style Guide</span>
            </li>
            <li className="flex items-center gap-4 text-body-lg">
              <span className="material-symbols-outlined text-success">check_circle</span>
              <span>Full-resolution interactive prototype</span>
            </li>
            <li className="flex items-center gap-4 text-body-lg">
              <span className="material-symbols-outlined text-success">check_circle</span>
              <span>Designer-to-developer handoff documentation</span>
            </li>
          </ul>
        </div>
        <div className="bg-white p-space-12 rounded-2xl border border-border">
          <p className="font-caption text-caption uppercase text-text-secondary mb-space-8 tracking-widest text-center">Powering our workflow</p>
          <div className="grid grid-cols-3 gap-space-8 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex flex-col items-center gap-2 hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[48px]">deployed_code</span>
              <span className="font-code text-code">Figma</span>
            </div>
            <div className="flex flex-col items-center gap-2 hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[48px]">motion_sensor_active</span>
              <span className="font-code text-code">Principle</span>
            </div>
            <div className="flex flex-col items-center gap-2 hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[48px]">web_asset</span>
              <span className="font-code text-code">Framer</span>
            </div>
            <div className="flex flex-col items-center gap-2 hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[48px]">auto_stories</span>
              <span className="font-code text-code">Storybook</span>
            </div>
            <div className="flex flex-col items-center gap-2 hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[48px]">play_circle</span>
              <span className="font-code text-code">Lottie</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

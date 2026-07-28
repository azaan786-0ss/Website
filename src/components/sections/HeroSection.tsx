import { FriendlyBotCanvas } from '../canvas/FriendlyBotCanvas';

export function HeroSection() {
  return (
    <section className="pt-space-32 pb-space-24 md:pt-48 md:pb-space-32 px-6 md:px-8 max-w-7xl mx-auto relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-subtle via-bg-primary to-bg-primary opacity-50"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-16 items-center">
        <div className="flex flex-col gap-space-8 z-10">
          <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl text-on-surface">
            Engineering,<br />elevated.
          </h1>
          <p className="font-body-lg text-body-lg text-secondary max-w-xl">
            We design, build, and scale digital products with the rigor of an in-house team. Focused on performance, architecture, and enduring value.
          </p>
          <div className="flex flex-wrap items-center gap-space-4">
            <button className="bg-primary text-on-primary px-space-8 py-space-4 rounded-DEFAULT font-caption text-caption hover:opacity-90 active:scale-[0.98] transition-all shadow-[0_4px_14px_0_rgba(79,70,229,0.39)]">
              Start a Project
            </button>
            <a className="px-space-8 py-space-4 rounded-DEFAULT border border-border text-on-surface font-caption text-caption hover:bg-bg-secondary transition-colors inline-flex items-center gap-2" href="#services">
              See our services
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
          </div>
        </div>
        <div className="relative h-[400px] lg:h-[600px] w-full flex items-center justify-center">
          <FriendlyBotCanvas />
        </div>
      </div>
    </section>
  );
}

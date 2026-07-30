import { Link } from "react-router-dom";

export function ProcessAutomationHero() {
  return (
    <section className="pt-32 pb-24 md:pt-48 md:pb-32 px-6">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-subtle text-primary border border-primary/20 rounded-full mb-6">
              <span className="material-symbols-outlined text-[18px]">settings_suggest</span>
              <span className="font-caption text-caption uppercase tracking-wider">Growth &amp; Ops / Process Automation</span>
            </div>
            <h1 className="font-display-lg text-display-lg md:text-display-xl mb-8 leading-tight text-on-surface">
              Streamlining Operations for Efficiency &amp; Scalable Growth
            </h1>
            <p className="font-body-lg text-body-lg text-text-secondary max-w-xl mb-10 leading-relaxed">
              We design and deploy custom automated workflows, AI integrations, and operational pipelines that eliminate repetitive manual tasks, reduce human error, and lower operational overhead.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/start-project">
                <button className="bg-primary text-on-primary px-8 py-4 rounded-lg font-semibold hover:shadow-[0_8px_30px_rgba(79,70,229,0.3)] transition-all active:scale-95">
                  Audit Your Workflows
                </button>
              </Link>
              <button className="bg-transparent border border-border text-on-surface px-8 py-4 rounded-lg font-semibold hover:bg-surface-container transition-all active:scale-95">
                Explore Automation Use-Cases
              </button>
            </div>
          </div>
          <div className="relative h-[500px] w-full hidden lg:block animate-in fade-in zoom-in-95 duration-1000 delay-300">
            {/* System Status Mockup */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl border border-border shadow-xl max-w-[240px] z-20 hover:scale-105 transition-transform">
              <p className="text-xs font-code text-primary uppercase mb-2">System Status</p>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
                <span className="text-sm font-medium text-on-surface">99.9% Autonomous</span>
              </div>
              <div className="h-1 w-full bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-primary w-4/5 animate-[pulse_2s_ease-in-out_infinite]"></div>
              </div>
            </div>
            {/* Abstract Tech Illustration Background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-subtle to-primary-container/10 rounded-3xl overflow-hidden border border-border shadow-inner">
               <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(79, 70, 229, 1) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
               <div className="absolute inset-0 flex items-center justify-center text-primary/10">
                   <span className="material-symbols-outlined text-[300px]">account_tree</span>
               </div>
            </div>
          </div>
        </div>
        
        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 border-t border-outline-variant/30 pt-16 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
          <div className="space-y-1 hover:-translate-y-1 transition-transform">
            <h3 className="font-display-md text-display-md text-primary">-70%</h3>
            <p className="font-caption text-caption text-text-secondary">Reduction in Manual Task Hours</p>
          </div>
          <div className="space-y-1 hover:-translate-y-1 transition-transform">
            <h3 className="font-display-md text-display-md text-primary">99.9%</h3>
            <p className="font-caption text-caption text-text-secondary">Automated Process Accuracy</p>
          </div>
          <div className="space-y-1 hover:-translate-y-1 transition-transform">
            <h3 className="font-display-md text-display-md text-primary">24/7</h3>
            <p className="font-caption text-caption text-text-secondary">Autonomous Operations Running</p>
          </div>
          <div className="space-y-1 hover:-translate-y-1 transition-transform">
            <h3 className="font-display-md text-display-md text-primary">&lt; 90 Days</h3>
            <p className="font-caption text-caption text-text-secondary">Average Investment ROI</p>
          </div>
        </div>
      </div>
    </section>
  );
}

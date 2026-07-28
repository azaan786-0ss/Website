import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AITechCore } from "../../canvas/AITechCore";

export function AIServiceHero() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-up-element').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative max-w-[1280px] mx-auto px-6 md:px-8 pt-space-16 pb-space-32 min-h-[716px] flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-12 items-center w-full z-10">
        <div className="flex flex-col gap-space-6 fade-up-element transition-all duration-700 opacity-0 translate-y-8 [&.visible]:opacity-100 [&.visible]:translate-y-0">
          <div className="flex items-center space-x-2 text-text-secondary font-caption text-caption mb-12 fade-up-element">
            <Link className="hover:text-primary transition-colors" to="/">Home</Link>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <span className="hover:text-primary transition-colors cursor-pointer">Services</span>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <span className="text-on-surface">AI Solutions</span>
          </div>
          <h1 className="font-display-xl-mobile md:font-display-xl text-display-xl-mobile md:text-display-xl text-on-surface">
            AI Solutions
          </h1>
          <p className="font-body-lg text-body-lg text-text-secondary max-w-xl">
            Integrating intelligent systems to automate the complex. Transform operational bottlenecks into strategic advantages with bespoke machine learning and generative AI architectures.
          </p>
          <div className="flex flex-wrap gap-4 mt-space-4">
            <button className="bg-primary text-white font-body-md text-body-md px-8 py-4 rounded-DEFAULT hover:bg-primary-container transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(53,37,205,0.2)]">
              Discuss Architecture
            </button>
            <button className="bg-transparent border border-border text-on-surface font-body-md text-body-md px-8 py-4 rounded-DEFAULT hover:bg-bg-secondary transition-all">
              View Case Studies
            </button>
          </div>
        </div>
        
        <div className="relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden glass-card fade-up-element flex items-center justify-center transition-all duration-700 opacity-0 translate-y-8 [&.visible]:opacity-100 [&.visible]:translate-y-0" style={{ transitionDelay: '0.2s' }}>
          <div className="absolute inset-0 w-full h-full">
            <AITechCore />
          </div>
          <div className="absolute inset-0 border border-border rounded-2xl pointer-events-none mix-blend-overlay"></div>
        </div>
      </div>
    </section>
  );
}

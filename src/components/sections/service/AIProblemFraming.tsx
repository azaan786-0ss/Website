import { useEffect } from "react";

export function AIProblemFraming() {
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
    <section className="bg-bg-secondary py-space-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="mb-space-16 max-w-2xl fade-up-element transition-all duration-700 opacity-0 translate-y-8 [&.visible]:opacity-100 [&.visible]:translate-y-0">
          <h2 className="font-display-lg text-display-lg text-on-surface mb-space-4">The Challenge Landscape</h2>
          <p className="font-body-lg text-body-lg text-text-secondary">
            Legacy systems struggle to process modern data volumes, leading to inefficiencies that compound at scale.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-8">
          {/* Problem Card 1 */}
          <div className="bg-bg-primary p-space-8 rounded-lg border border-border hover:border-primary/50 transition-colors duration-300 fade-up-element transition-all duration-700 opacity-0 translate-y-8 [&.visible]:opacity-100 [&.visible]:translate-y-0 hover:shadow-[0_2px_8px_rgba(17,19,24,0.06)] group">
            <div className="w-12 h-12 rounded-lg bg-error-container/30 flex items-center justify-center mb-space-6 text-error group-hover:bg-error group-hover:text-white transition-colors">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>hourglass_disabled</span>
            </div>
            <h3 className="font-heading-md text-heading-md text-on-surface mb-2">Manual operational bottlenecks</h3>
            <p className="font-body-md text-body-md text-text-secondary">High-friction workflows requiring constant human oversight degrade efficiency and increase error rates.</p>
          </div>
          {/* Problem Card 2 */}
          <div className="bg-bg-primary p-space-8 rounded-lg border border-border hover:border-primary/50 transition-colors duration-300 fade-up-element transition-all duration-700 opacity-0 translate-y-8 [&.visible]:opacity-100 [&.visible]:translate-y-0 hover:shadow-[0_2px_8px_rgba(17,19,24,0.06)] group" style={{ transitionDelay: '100ms' }}>
            <div className="w-12 h-12 rounded-lg bg-surface-variant flex items-center justify-center mb-space-6 text-outline group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>database</span>
            </div>
            <h3 className="font-heading-md text-heading-md text-on-surface mb-2">Untapped data potential</h3>
            <p className="font-body-md text-body-md text-text-secondary">Vast repositories of structured and unstructured data remain dormant, yielding zero strategic insight.</p>
          </div>
          {/* Problem Card 3 */}
          <div className="bg-bg-primary p-space-8 rounded-lg border border-border hover:border-primary/50 transition-colors duration-300 fade-up-element transition-all duration-700 opacity-0 translate-y-8 [&.visible]:opacity-100 [&.visible]:translate-y-0 hover:shadow-[0_2px_8px_rgba(17,19,24,0.06)] group" style={{ transitionDelay: '200ms' }}>
            <div className="w-12 h-12 rounded-lg bg-surface-variant flex items-center justify-center mb-space-6 text-outline group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>update</span>
            </div>
            <h3 className="font-heading-md text-heading-md text-on-surface mb-2">Slow decision-making cycles</h3>
            <p className="font-body-md text-body-md text-text-secondary">Reliance on retrospective analytics rather than predictive models delays critical market responses.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

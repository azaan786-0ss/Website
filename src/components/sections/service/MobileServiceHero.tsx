import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MobileTechCore } from "../../canvas/MobileTechCore";

export function MobileServiceHero() {
  const text = "High-performance iOS & Android applications built for scale.";
  const words = text.split(' ');

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

    document.querySelectorAll('.fade-up').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-8 pt-16 md:pt-space-16 pb-space-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-16 items-center">
        <div className="fade-up transition-all duration-700 opacity-0 translate-y-5 [&.visible]:opacity-100 [&.visible]:translate-y-0">
          <div className="flex items-center space-x-2 text-text-secondary font-caption text-caption mb-12 fade-up">
            <Link className="hover:text-primary transition-colors" to="/">Home</Link>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <span className="hover:text-primary transition-colors cursor-pointer">Services</span>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <span className="text-on-surface">Mobile App Development</span>
          </div>
          <h1 className="font-display-xl-mobile md:font-display-xl text-display-xl-mobile md:text-display-xl mb-8 leading-tight word-reveal" id="mobile-hero-headline">
            {words.map((word, index) => (
              <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                {word}{index < words.length - 1 ? ' ' : ''}
              </span>
            ))}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl leading-relaxed">
            We architect native and cross-platform mobile experiences that feel seamlessly integrated, perform under load, and convert users into advocates.
          </p>
          <div className="flex flex-wrap gap-4">
            <a className="inline-flex items-center justify-center px-8 py-4 bg-primary-container hover:bg-primary-container/90 text-on-primary font-heading-md text-heading-md rounded-DEFAULT transition-all duration-300 group shadow-lg shadow-primary-container/20" href="#contact">
              Start Building
              <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
            <a className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-outline hover:border-outline-variant hover:bg-black/5 text-on-surface font-heading-md text-heading-md rounded-DEFAULT transition-all duration-300" href="#features">
              Explore Features
            </a>
          </div>
        </div>
        <div className="relative h-[500px] lg:h-[700px] w-full rounded-2xl overflow-hidden glass-panel fade-up border border-outline-variant transition-all duration-700 opacity-0 translate-y-5 [&.visible]:opacity-100 [&.visible]:translate-y-0" style={{ transitionDelay: '0.2s' }}>
          <div className="w-full h-full">
            <MobileTechCore />
          </div>
        </div>
      </div>
    </section>
  );
}

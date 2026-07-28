import { useEffect } from "react";
import { Link } from "react-router-dom";
import { TechCore } from "../../canvas/TechCore";

export function ServiceDetailHero() {
  const text = "Web Design & Development";
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
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fadeUpReveal').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="mb-space-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <div className="flex items-center space-x-2 text-text-secondary font-caption text-caption mb-12 fadeUpReveal">
          <Link className="hover:text-primary transition-colors" to="/">Home</Link>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <span className="hover:text-primary transition-colors cursor-pointer">Services</span>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <span className="text-on-surface">Web Design & Development</span>
        </div>
        <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl text-on-surface mb-6 word-reveal" id="hero-headline">
          {words.map((word, index) => (
            <span key={index} style={{ animationDelay: `${index * 0.15}s` }}>
              {word}{index < words.length - 1 ? ' ' : ''}
            </span>
          ))}
        </h1>
        <p className="font-body-lg text-body-lg text-text-secondary mb-10 max-w-2xl fadeUpReveal delay-200">
          A website engineered to convert, not just look good. We build scalable, high-performance digital platforms tailored for your business objectives.
        </p>
        <div className="flex items-center space-x-4 fadeUpReveal delay-300">
          <a className="inline-flex items-center justify-center px-8 py-4 bg-primary text-on-primary font-body-md font-medium rounded-DEFAULT hover:bg-primary/90 transition-all shadow-[0_4px_14px_0_rgba(79,70,229,0.39)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.23)] hover:-translate-y-0.5" href="#contact">
            Start a Project
          </a>
        </div>
      </div>
      <div className="w-full h-[400px] fadeUpReveal delay-200">
        <TechCore />
      </div>
    </section>
  );
}

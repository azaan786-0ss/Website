import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export function ServicesIndex() {
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
    <div className="bg-bg-primary text-on-surface font-body-md antialiased selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col pt-20">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-space-24 md:py-space-32 fadeUpReveal">
          <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl text-on-surface mb-space-6">Our Services</h1>
          <p className="font-body-lg text-body-lg text-text-secondary max-w-2xl">Full-stack capabilities tailored for ambitious founders.</p>
        </section>

        {/* Service Groups */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 pb-space-32 space-y-space-24">

          {/* Group 1 */}
          <div className="fadeUpReveal delay-100">
            <h2 className="font-heading-lg text-heading-lg text-on-surface mb-space-8 border-b border-border pb-space-4">Product & Design</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-6">
              <Link to="/services/ux-ui-design" className="block border border-border rounded-lg p-space-6 bg-surface hover:border-primary hover:shadow-[0_2px_8px_rgba(17,19,24,0.06)] transition-all group cursor-pointer">
                <span className="material-symbols-outlined text-primary mb-space-4" style={{ fontVariationSettings: "'FILL' 1" }}>view_quilt</span>
                <h3 className="font-heading-md text-heading-md text-on-surface mb-space-2 group-hover:text-primary transition-colors">UX/UI Design</h3>
                <p className="font-body-md text-body-md text-text-secondary">Crafting intuitive and engaging user experiences backed by research.</p>
              </Link>
              <Link to="/services/product-strategy" className="block border border-border rounded-lg p-space-6 bg-surface hover:border-primary hover:shadow-[0_2px_8px_rgba(17,19,24,0.06)] transition-all group cursor-pointer">
                <span className="material-symbols-outlined text-primary mb-space-4" style={{ fontVariationSettings: "'FILL' 1" }}>architecture</span>
                <h3 className="font-heading-md text-heading-md text-on-surface mb-space-2 group-hover:text-primary transition-colors">Product Strategy</h3>
                <p className="font-body-md text-body-md text-text-secondary">Defining clear roadmaps and value propositions for market success.</p>
              </Link>
              <Link to="/services/brand-identity" className="block border border-border rounded-lg p-space-6 bg-surface hover:border-primary hover:shadow-[0_2px_8px_rgba(17,19,24,0.06)] transition-all group cursor-pointer">
                <span className="material-symbols-outlined text-primary mb-space-4" style={{ fontVariationSettings: "'FILL' 1" }}>branding_watermark</span>
                <h3 className="font-heading-md text-heading-md text-on-surface mb-space-2 group-hover:text-primary transition-colors">Brand Identity</h3>
                <p className="font-body-md text-body-md text-text-secondary">Developing cohesive visual systems that communicate core values.</p>
              </Link>
            </div>
          </div>

          {/* Group 2 */}
          <div className="fadeUpReveal delay-200">
            <h2 className="font-heading-lg text-heading-lg text-on-surface mb-space-8 border-b border-border pb-space-4">Engineering & Cloud</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-6">
              <Link to="/services/product-engineering" className="block border border-border rounded-lg p-space-6 bg-surface hover:border-primary hover:shadow-[0_2px_8px_rgba(17,19,24,0.06)] transition-all group cursor-pointer">
                <span className="material-symbols-outlined text-primary mb-space-4" style={{ fontVariationSettings: "'FILL' 1" }}>code</span>
                <h3 className="font-heading-md text-heading-md text-on-surface mb-space-2 group-hover:text-primary transition-colors">Full-Lifecycle Product Engineering</h3>
                <p className="font-body-md text-body-md text-text-secondary">Driving software and technology from initial concept to enterprise scale—building resilient systems that support and accelerate your business at every stage of growth</p>
              </Link>
              <Link to="/services/cloud-architecture" className="block border border-border rounded-lg p-space-6 bg-surface hover:border-primary hover:shadow-[0_2px_8px_rgba(17,19,24,0.06)] transition-all group cursor-pointer">
                <span className="material-symbols-outlined text-primary mb-space-4" style={{ fontVariationSettings: "'FILL' 1" }}>cloud</span>
                <h3 className="font-heading-md text-heading-md text-on-surface mb-space-2 group-hover:text-primary transition-colors">Cloud Architecture</h3>
                <p className="font-body-md text-body-md text-text-secondary">Resilient infrastructure design and deployment automation.</p>
              </Link>
              <Link to="/services/api-development" className="block border border-border rounded-lg p-space-6 bg-surface hover:border-primary hover:shadow-[0_2px_8px_rgba(17,19,24,0.06)] transition-all group cursor-pointer">
                <span className="material-symbols-outlined text-primary mb-space-4" style={{ fontVariationSettings: "'FILL' 1" }}>hub</span>
                <h3 className="font-heading-md text-heading-md text-on-surface mb-space-2 group-hover:text-primary transition-colors">API Development</h3>
                <p className="font-body-md text-body-md text-text-secondary">Robust integrations and microservices for complex ecosystems.</p>
              </Link>
            </div>
          </div>

          {/* Group 3 */}
          <div className="fadeUpReveal delay-300">
            <h2 className="font-heading-lg text-heading-lg text-on-surface mb-space-8 border-b border-border pb-space-4">Growth & Ops</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-6">
              <Link to="/services/data-analytics" className="block border border-border rounded-lg p-space-6 bg-surface hover:border-primary hover:shadow-[0_2px_8px_rgba(17,19,24,0.06)] transition-all group cursor-pointer">
                <span className="material-symbols-outlined text-primary mb-space-4" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
                <h3 className="font-heading-md text-heading-md text-on-surface mb-space-2 group-hover:text-primary transition-colors">Data Analytics</h3>
                <p className="font-body-md text-body-md text-text-secondary">Actionable insights driven by comprehensive data strategies.</p>
              </Link>
              <Link to="/services/process-automation" className="block border border-border rounded-lg p-space-6 bg-surface hover:border-primary hover:shadow-[0_2px_8px_rgba(17,19,24,0.06)] transition-all group cursor-pointer">
                <span className="material-symbols-outlined text-primary mb-space-4" style={{ fontVariationSettings: "'FILL' 1" }}>autorenew</span>
                <h3 className="font-heading-md text-heading-md text-on-surface mb-space-2 group-hover:text-primary transition-colors">Process Automation</h3>
                <p className="font-body-md text-body-md text-text-secondary">Streamlining operations for efficiency and reduced overhead.</p>
              </Link>
              <Link to="/services/performance-optimization" className="block border border-border rounded-lg p-space-6 bg-surface hover:border-primary hover:shadow-[0_2px_8px_rgba(17,19,24,0.06)] transition-all group cursor-pointer">
                <span className="material-symbols-outlined text-primary mb-space-4" style={{ fontVariationSettings: "'FILL' 1" }}>speed</span>
                <h3 className="font-heading-md text-heading-md text-on-surface mb-space-2 group-hover:text-primary transition-colors">Performance Optimization</h3>
                <p className="font-body-md text-body-md text-text-secondary">Ensuring systems run at peak efficiency under high load.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Band */}
        <section className="bg-bg-secondary py-space-16 border-t border-border fadeUpReveal">
          <div className="max-w-7xl mx-auto px-6 md:px-8 text-center flex flex-col md:flex-row items-center justify-between gap-space-6">
            <div className="text-left">
              <h2 className="font-heading-lg text-heading-lg text-on-surface mb-space-2">Ready to start a specific project?</h2>
              <p className="font-body-md text-body-md text-text-secondary">Let's discuss how our engineering rigor can accelerate your growth.</p>
            </div>
            <Link to="/start-project" className="bg-primary text-on-primary px-space-6 py-space-3 rounded font-body-md text-body-md hover:bg-surface-tint transition-colors flex-shrink-0 shadow-lg shadow-primary/20">
              Contact us
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

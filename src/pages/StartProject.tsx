import { useEffect } from "react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";

export function StartProject() {
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
    <div className="bg-bg-primary text-on-surface font-body-md min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-[144px] pb-space-32 px-8 max-w-[1280px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-16">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 space-y-space-8">
            <div className="fadeUpReveal">
              <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl text-on-surface mb-space-4">Let's build something.</h1>
              <p className="font-body-lg text-body-lg text-text-secondary">No obligation. 30-minute call. We'll respond within one business day.</p>
            </div>
            
            <form className="space-y-space-6 bg-surface p-space-8 rounded-lg border border-border shadow-[0_2px_8px_rgba(17,19,24,0.06)] hover:border-primary transition-colors duration-300 fadeUpReveal" style={{ transitionDelay: '100ms' }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-6">
                <div className="space-y-space-2 relative group">
                  <input type="text" id="name" name="name" required placeholder=" " className="w-full bg-transparent border border-border rounded px-4 py-3 text-on-surface focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none [&:not(:placeholder-shown)+label]:-translate-y-6 [&:not(:placeholder-shown)+label]:scale-75" />
                  <label htmlFor="name" className="block font-caption text-caption text-text-secondary transition-all duration-200 absolute top-3 left-4 origin-top-left group-focus-within:-translate-y-6 group-focus-within:scale-75 group-focus-within:text-primary pointer-events-none bg-surface px-1">Name</label>
                </div>
                
                <div className="space-y-space-2 relative group">
                  <input type="email" id="email" name="email" required placeholder=" " className="w-full bg-transparent border border-border rounded px-4 py-3 text-on-surface focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none [&:not(:placeholder-shown)+label]:-translate-y-6 [&:not(:placeholder-shown)+label]:scale-75" />
                  <label htmlFor="email" className="block font-caption text-caption text-text-secondary transition-all duration-200 absolute top-3 left-4 origin-top-left group-focus-within:-translate-y-6 group-focus-within:scale-75 group-focus-within:text-primary pointer-events-none bg-surface px-1">Work Email</label>
                </div>
              </div>
              
              <div className="space-y-space-2 relative group">
                <input type="text" id="company" name="company" required placeholder=" " className="w-full bg-transparent border border-border rounded px-4 py-3 text-on-surface focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none [&:not(:placeholder-shown)+label]:-translate-y-6 [&:not(:placeholder-shown)+label]:scale-75" />
                <label htmlFor="company" className="block font-caption text-caption text-text-secondary transition-all duration-200 absolute top-3 left-4 origin-top-left group-focus-within:-translate-y-6 group-focus-within:scale-75 group-focus-within:text-primary pointer-events-none bg-surface px-1">Company</label>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-6">
                <div className="space-y-space-2">
                  <label htmlFor="project-type" className="block font-caption text-caption text-text-secondary mb-1">Project Type</label>
                  <select id="project-type" name="project-type" defaultValue="" className="w-full bg-transparent border border-border rounded px-4 py-3 text-on-surface focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none appearance-none">
                    <option value="" disabled>Select type...</option>
                    <option value="web-app">Web Application</option>
                    <option value="mobile-app">Mobile App</option>
                    <option value="digital-transformation">Digital Transformation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="space-y-space-2">
                  <label htmlFor="project-stage" className="block font-caption text-caption text-text-secondary mb-1">Project Stage</label>
                  <select id="project-stage" name="project-stage" defaultValue="" className="w-full bg-transparent border border-border rounded px-4 py-3 text-on-surface focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none appearance-none">
                    <option value="" disabled>Select stage...</option>
                    <option value="idea">Idea / Concept</option>
                    <option value="spec">Specifications Ready</option>
                    <option value="redesign">Redesign / Scaling</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-6">
                <div className="space-y-space-2">
                  <label htmlFor="budget" className="block font-caption text-caption text-text-secondary mb-1">Budget Band</label>
                  <select id="budget" name="budget" defaultValue="" className="w-full bg-transparent border border-border rounded px-4 py-3 text-on-surface focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none appearance-none">
                    <option value="" disabled>Select budget...</option>
                    <option value="50k-100k">$50k - $100k</option>
                    <option value="100k-250k">$100k - $250k</option>
                    <option value="250k+">$250k+</option>
                  </select>
                </div>
                
                <div className="space-y-space-2">
                  <label htmlFor="timeline" className="block font-caption text-caption text-text-secondary mb-1">Timeline</label>
                  <select id="timeline" name="timeline" defaultValue="" className="w-full bg-transparent border border-border rounded px-4 py-3 text-on-surface focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none appearance-none">
                    <option value="" disabled>Select timeline...</option>
                    <option value="asap">ASAP (1-2 months)</option>
                    <option value="q-next">Next Quarter</option>
                    <option value="planning">Just Planning</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-space-2 relative group pt-2">
                <textarea id="details" name="details" rows={4} placeholder=" " className="w-full bg-transparent border border-border rounded px-4 py-3 text-on-surface focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none placeholder-transparent [&:not(:placeholder-shown)+label]:-translate-y-8 [&:not(:placeholder-shown)+label]:scale-75"></textarea>
                <label htmlFor="details" className="block font-caption text-caption text-text-secondary transition-all duration-200 absolute top-5 left-4 origin-top-left group-focus-within:-translate-y-8 group-focus-within:scale-75 group-focus-within:text-primary pointer-events-none bg-surface px-1">Project Details (Optional)</label>
              </div>
              
              <div className="pt-space-4">
                <button type="submit" className="w-full md:w-auto px-space-8 py-4 bg-primary text-on-primary rounded font-caption text-caption font-semibold hover:bg-primary/90 transition-all hover:-translate-y-0.5 hover:shadow-lg focus:ring-2 focus:ring-primary focus:ring-offset-2">
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
          
          {/* Right Column: Timeline */}
          <div className="lg:col-span-4 lg:col-start-9 lg:mt-space-24">
            <div className="bg-bg-secondary p-space-8 rounded-lg border border-border fadeUpReveal" style={{ transitionDelay: '200ms' }}>
              <h2 className="font-heading-md text-heading-md text-on-surface mb-space-8">What happens next</h2>
              <div className="relative">
                {/* Timeline Line Background */}
                <div className="absolute left-6 top-8 bottom-8 w-[1.5px] bg-border z-0"></div>
                
                {/* Timeline Items */}
                <div className="space-y-space-8 relative z-10">
                  <div className="flex gap-space-6 group cursor-default">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center text-primary group-hover:border-primary group-hover:scale-110 transition-all relative z-10 bg-white">
                      <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
                    </div>
                    <div className="pt-2">
                      <h3 className="font-caption text-caption font-semibold text-on-surface">1. Review</h3>
                      <p className="font-caption text-caption text-text-secondary mt-1">We review your details and align them with our engineering capabilities within 24 hours.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-space-6 group cursor-default">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center text-primary group-hover:border-primary group-hover:scale-110 transition-all relative z-10 bg-white">
                      <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_today</span>
                    </div>
                    <div className="pt-2">
                      <h3 className="font-caption text-caption font-semibold text-on-surface">2. Discovery Call</h3>
                      <p className="font-caption text-caption text-text-secondary mt-1">A focused 30-minute session to understand your architecture needs and business goals.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-space-6 group cursor-default">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center text-primary group-hover:border-primary group-hover:scale-110 transition-all relative z-10 bg-white">
                      <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>architecture</span>
                    </div>
                    <div className="pt-2">
                      <h3 className="font-caption text-caption font-semibold text-on-surface">3. Proposal</h3>
                      <p className="font-caption text-caption text-text-secondary mt-1">You receive a detailed technical proposal, timeline, and investment breakdown.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Trust Indicator */}
            <div className="mt-space-8 flex items-center gap-space-3 text-text-secondary fadeUpReveal" style={{ transitionDelay: '300ms' }}>
              <span className="material-symbols-outlined text-[20px]">lock</span>
              <span className="font-caption text-caption text-sm">Your data is secure and will never be shared.</span>
            </div>
          </div>
          
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

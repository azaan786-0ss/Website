import React from "react";
import { Link } from "react-router-dom";

export function UxUiHero() {
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    btn.style.transform = `translate(0, 0)`;
  };

  return (
    <section className="max-w-[1280px] mx-auto px-8 mb-space-32 pt-16">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-space-16">
        <div className="bg-accent-subtle text-primary px-4 py-1 rounded-full font-caption text-caption mb-space-6 border border-primary/10">
          Product &amp; Design / UX/UI Design
        </div>
        <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl mb-space-6">
          Crafting Intuitive, High-Converting <span className="text-primary">Digital Experiences</span>
        </h1>
        <p className="font-body-lg text-body-lg text-text-secondary mb-space-8 max-w-2xl">
          We blend deep user research, strategic interaction design, and pixel-perfect UI to transform complex workflows into effortless web and mobile products.
        </p>
        <div className="flex flex-col sm:flex-row gap-space-4">
          <Link to="/start-project">
            <button 
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="bg-primary text-on-primary px-space-8 py-space-4 rounded-lg font-semibold hover:opacity-90 transition-transform duration-100 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Schedule a UX Audit
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </button>
          </Link>
          <button className="border border-outline text-on-surface px-space-8 py-space-4 rounded-lg font-semibold hover:bg-surface-container-low transition-all">
            View Case Studies
          </button>
        </div>
      </div>
      {/* Impact Metrics Bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-space-4 mt-space-16">
        <div className="bg-white p-space-6 rounded-xl border border-border shadow-sm flex flex-col items-center text-center">
          <span className="text-primary font-display-md text-display-md mb-2">+45%</span>
          <span className="text-text-secondary font-caption text-caption uppercase tracking-wider">Avg. Conversion Rate</span>
        </div>
        <div className="bg-white p-space-6 rounded-xl border border-border shadow-sm flex flex-col items-center text-center">
          <span className="text-primary font-display-md text-display-md mb-2">120+</span>
          <span className="text-text-secondary font-caption text-caption uppercase tracking-wider">Screens Designed</span>
        </div>
        <div className="bg-white p-space-6 rounded-xl border border-border shadow-sm flex flex-col items-center text-center">
          <span className="text-primary font-display-md text-display-md mb-2">100%</span>
          <span className="text-text-secondary font-caption text-caption uppercase tracking-wider">Accessible (WCAG AA)</span>
        </div>
        <div className="bg-white p-space-6 rounded-xl border border-border shadow-sm flex flex-col items-center text-center">
          <span className="text-primary font-display-md text-display-md mb-2">&lt; 4 Wks</span>
          <span className="text-text-secondary font-caption text-caption uppercase tracking-wider">Avg. Delivery</span>
        </div>
      </div>
    </section>
  );
}

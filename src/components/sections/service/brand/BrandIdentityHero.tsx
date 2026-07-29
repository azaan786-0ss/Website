import React from "react";
import { Link } from "react-router-dom";

export function BrandIdentityHero() {
  return (
    <section className="relative pt-space-32 pb-space-24 px-space-6 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-accent-subtle text-primary font-caption text-caption uppercase tracking-wider mb-space-8 border border-primary/10">
            Product &amp; Design / Brand Identity
          </span>
          <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl text-on-surface mb-space-8">
            Developing Cohesive Visual Systems That Communicate Core Values
          </h1>
          <p className="font-body-lg text-body-lg text-text-secondary mb-space-12 max-w-2xl">
            We craft distinctive brand identities, design systems, and digital visual positioning that capture attention and build long-term enterprise trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-space-4 mb-space-24">
            <Link to="/start-project">
              <button className="px-space-8 py-space-4 bg-primary text-on-primary rounded-lg font-semibold shadow-lg hover:shadow-primary/20 transition-all hover:scale-105">
                Request Brand Deck
              </button>
            </Link>
            <button className="px-space-8 py-space-4 border border-border text-on-surface rounded-lg font-semibold hover:bg-surface-container transition-all">
              See Brand Work
            </button>
          </div>
        </div>
        
        {/* Impact Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-space-6">
          <div className="bg-white p-space-8 rounded-xl border border-border shadow-sm hover:border-primary/30 transition-all">
            <div className="text-primary font-display-md text-display-md mb-space-2">100%</div>
            <div className="font-caption text-caption text-text-secondary uppercase">Brand Consistency</div>
          </div>
          <div className="bg-white p-space-8 rounded-xl border border-border shadow-sm hover:border-primary/30 transition-all">
            <div className="text-primary font-display-md text-display-md mb-space-2">30+</div>
            <div className="font-caption text-caption text-text-secondary uppercase">Rebrands Completed</div>
          </div>
          <div className="bg-white p-space-8 rounded-xl border border-border shadow-sm hover:border-primary/30 transition-all">
            <div className="text-primary font-display-md text-display-md mb-space-2">10x</div>
            <div className="font-caption text-caption text-text-secondary uppercase">Recognition Impact</div>
          </div>
          <div className="bg-white p-space-8 rounded-xl border border-border shadow-sm hover:border-primary/30 transition-all">
            <div className="text-primary font-display-md text-display-md mb-space-2">Full</div>
            <div className="font-caption text-caption text-text-secondary uppercase">Token Handoff</div>
          </div>
        </div>
      </div>
    </section>
  );
}

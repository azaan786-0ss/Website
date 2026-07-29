import React from "react";
import { Link } from "react-router-dom";

export function ProductStrategyHero() {
  return (
    <header className="pt-space-32 pb-space-24 px-space-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-start gap-space-6">
        <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-accent-subtle text-primary font-caption text-caption uppercase tracking-wider">
          Product &amp; Design / Product Strategy
        </span>
        <h1 className="font-display-xl text-display-xl max-w-4xl text-on-surface">
          Defining Clear Roadmaps and Value Propositions for Market Success
        </h1>
        <p className="font-body-lg text-body-lg text-text-secondary max-w-2xl">
          De-risk your product investment with data-driven market validation, prioritized feature roadmaps, and agile execution strategies built for growth.
        </p>
        <div className="flex flex-wrap gap-space-4 mt-space-4">
          <Link to="/start-project">
            <button className="bg-primary text-white px-space-8 py-space-4 rounded-xl font-heading-md hover:shadow-lg transition-all flex items-center gap-2">
              Book Strategy Session
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </Link>
          <button className="border border-outline px-space-8 py-space-4 rounded-xl font-heading-md hover:bg-white transition-all">
            Explore Roadmaps
          </button>
        </div>
        {/* Impact Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-space-6 w-full mt-space-16 pt-space-12 border-t border-outline-variant">
          <div className="flex flex-col">
            <span className="font-display-md text-display-md text-primary">$50M+</span>
            <span className="font-caption text-caption text-text-secondary uppercase">Client Funding Raised</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display-md text-display-md text-primary">3x</span>
            <span className="font-caption text-caption text-text-secondary uppercase">Faster Time-to-Market</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display-md text-display-md text-primary">98%</span>
            <span className="font-caption text-caption text-text-secondary uppercase">Market Alignment</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display-md text-display-md text-primary">50+</span>
            <span className="font-caption text-caption text-text-secondary uppercase">MVPs Launched</span>
          </div>
        </div>
      </div>
      {/* Decorative Ambient Background */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
    </header>
  );
}

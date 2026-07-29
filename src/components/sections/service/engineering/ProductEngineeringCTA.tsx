import React from "react";
import { Link } from "react-router-dom";

export function ProductEngineeringCTA() {
  return (
    <section className="py-space-32 px-space-6 md:px-8">
      <div className="max-w-[1000px] mx-auto rounded-3xl p-space-16 text-center relative overflow-hidden bg-primary text-on-primary">
        <div className="relative z-10">
          <h2 className="font-display-md text-display-md mb-6">Need an engineering partner to take your business from 0 to 100?</h2>
          <p className="font-body-lg text-body-lg mb-10 text-on-primary/80 max-w-2xl mx-auto">
            Skip the technical debt and hire an engineering team that builds for the future. Let's discuss your product roadmap today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/start-project">
              <button className="bg-white text-primary px-10 py-4 rounded-lg font-heading-md hover:bg-white/95 transition-all shadow-md">
                Consult an Engineer
              </button>
            </Link>
            <button className="bg-transparent text-white border border-white/30 px-10 py-4 rounded-lg font-heading-md hover:bg-white/10 transition-all">
              View Pricing Framework
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

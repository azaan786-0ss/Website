import React from "react";
import { Link } from "react-router-dom";

export function CloudArchitectureCTA() {
  return (
    <section className="py-space-32 bg-white text-center px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display-lg text-display-md md:text-display-lg mb-space-4 text-on-surface">
          Need scalable, resilient cloud infrastructure?
        </h2>
        <p className="text-text-secondary text-body-lg mb-space-12">
          Partner with our senior cloud architects to audit your current stack, optimize infrastructure costs, and build a zero-downtime deployment pipeline.
        </p>
        <Link to="/start-project">
          <button className="bg-primary text-on-primary px-space-12 py-space-4 rounded-lg font-heading-lg hover:bg-primary-container transition-all shadow-lg hover:shadow-primary/20">
            Schedule Infrastructure Review
          </button>
        </Link>
      </div>
    </section>
  );
}

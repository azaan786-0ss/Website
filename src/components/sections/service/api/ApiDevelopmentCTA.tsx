import React from "react";
import { Link } from "react-router-dom";

export function ApiDevelopmentCTA() {
  return (
    <section className="bg-accent-subtle py-space-32 text-center px-space-6">
      <h2 className="font-display-lg text-display-lg text-on-surface mb-space-4">Ready to build secure, high-performance APIs?</h2>
      <p className="font-body-lg text-body-lg text-text-secondary mb-space-12 max-w-2xl mx-auto">
        Schedule a deep-dive session with our lead architects to discuss your technical challenges.
      </p>
      <Link to="/start-project">
        <button className="bg-primary text-on-primary px-space-12 py-space-4 rounded-xl font-heading-lg shadow-[0_4px_14px_0_rgba(79,70,229,0.39)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.23)] hover:bg-primary-container transition-all active:scale-95">
          Talk to an API Architect
        </button>
      </Link>
    </section>
  );
}

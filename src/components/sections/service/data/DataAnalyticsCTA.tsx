import React from "react";
import { Link } from "react-router-dom";

export function DataAnalyticsCTA() {
  return (
    <section className="py-space-32 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
        <h2 className="font-display-lg text-display-lg mb-space-6 text-on-surface">Ready to unlock actionable insights from your data?</h2>
        <p className="text-body-lg text-on-surface-variant mb-space-12 max-w-2xl mx-auto">
          Stop guessing. Start measuring. Our data audits provide a roadmap for engineering-led growth within 10 days.
        </p>
        <Link to="/start-project">
          <button className="bg-primary text-on-primary px-space-12 py-space-6 rounded-lg font-heading-lg hover:shadow-[0_8px_30px_rgba(79,70,229,0.3)] transition-all active:scale-95">
            Schedule a Data Consultation
          </button>
        </Link>
      </div>
      {/* Abstract Bg Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#3525cd 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
    </section>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export function PerformanceOptimizationCTA() {
  return (
    <section className="px-6 md:px-12 max-w-[1440px] mx-auto pb-space-32 pt-space-24">
      <div className="bg-primary-container rounded-3xl p-space-12 md:p-space-24 text-center text-white relative overflow-hidden group">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary rounded-full blur-[100px] opacity-50 group-hover:scale-110 transition-transform duration-1000"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="font-display-lg text-display-lg mb-6">Is slow performance costing you users and revenue?</h2>
          <p className="text-primary-fixed mb-space-12 font-body-lg text-body-lg max-w-xl mx-auto">Work with our performance engineers to identify hidden bottlenecks and scale your system to the next level of growth.</p>
          <Link to="/start-project">
            <button className="bg-white text-primary px-12 py-5 rounded-xl font-heading-md hover:shadow-[0_8px_30px_rgba(255,255,255,0.3)] hover:-translate-y-1 transition-all active:scale-95">Schedule Performance Review</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

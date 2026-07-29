import { Link } from "react-router-dom";

export function BrandIdentityCTA() {
  return (
    <section className="py-space-32 px-space-6 md:px-8">
      <div className="max-w-5xl mx-auto bg-primary rounded-3xl p-space-16 md:p-space-24 text-center relative overflow-hidden group">
        <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity"></div>
        <div className="relative z-10">
          <h2 className="text-white font-display-lg text-display-lg mb-space-8">Ready to build an unforgettable brand?</h2>
          <p className="text-primary-fixed font-body-lg text-body-lg mb-space-12 max-w-2xl mx-auto">
            Partner with our strategic design team to transform your visual identity into a competitive advantage.
          </p>
          <Link to="/start-project">
            <button className="px-space-10 py-space-5 bg-white text-primary rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              Start Your Rebrand
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

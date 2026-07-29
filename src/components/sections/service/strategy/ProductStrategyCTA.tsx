import { Link } from "react-router-dom";

export function ProductStrategyCTA() {
  return (
    <section className="py-space-24 px-space-6 bg-bg-secondary">
      <div className="max-w-4xl mx-auto text-center bg-white p-space-16 rounded-[40px] border border-outline-variant shadow-xl relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="font-display-lg text-display-lg mb-space-6">
            Turn your product vision into a <span className="text-primary">scalable roadmap.</span>
          </h2>
          <p className="text-text-secondary text-body-lg max-w-xl mx-auto mb-space-8">
            Stop guessing and start building with precision. Our strategists are ready to de-risk your next big move.
          </p>
          <Link to="/start-project">
            <button className="bg-primary text-white px-space-12 py-space-6 rounded-2xl font-heading-lg hover:scale-105 transition-all shadow-xl shadow-primary/20">
              Schedule a Discovery Call
            </button>
          </Link>
        </div>
        {/* Decorative blobs */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}

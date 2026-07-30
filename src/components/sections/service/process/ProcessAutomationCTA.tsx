import { Link } from "react-router-dom";

export function ProcessAutomationCTA() {
  return (
    <section className="py-24 px-6 bg-primary text-on-primary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display-md text-display-md mb-6">Ready to eliminate manual overhead and scale operations?</h2>
        <p className="font-body-lg text-body-lg mb-10 opacity-90">Talk to our automation specialists to identify bottlenecks, streamline your workflows, and build autonomous systems.</p>
        <Link to="/start-project">
          <button className="bg-white text-primary px-10 py-5 rounded-lg font-bold text-lg hover:bg-surface-container-low transition-all shadow-xl active:scale-95 hover:shadow-[0_8px_30px_rgba(255,255,255,0.3)]">
            Book an Operational Audit
          </button>
        </Link>
      </div>
    </section>
  );
}

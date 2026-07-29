import { Link } from "react-router-dom";

export function UxUiCTA() {
  return (
    <section className="bg-primary py-space-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
        {/* Decorative elements can go here if needed */}
      </div>
      <div className="max-w-[1280px] mx-auto px-8 text-center text-on-primary relative z-10">
        <h2 className="font-display-lg text-display-lg mb-space-6">Ready to elevate your product UI?</h2>
        <p className="text-primary-fixed font-body-lg mb-space-12 max-w-xl mx-auto">
          Join dozens of companies scaling faster with user-centric design that actually works.
        </p>
        <Link to="/start-project">
          <button className="bg-white text-primary px-space-12 py-space-4 rounded-lg font-bold text-body-lg hover:scale-105 transition-all shadow-xl">
            Book a Free UX Consultation
          </button>
        </Link>
      </div>
    </section>
  );
}

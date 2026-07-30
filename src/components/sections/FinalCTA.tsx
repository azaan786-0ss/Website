import { Link } from 'react-router-dom';

export function FinalCTA() {
  return (
    <section className="bg-bg-dark-primary text-on-secondary py-space-32 px-6 md:px-8">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-space-8">
        <h2 className="font-display-xl text-display-xl-mobile md:text-display-xl">Let's build something.</h2>
        <p className="font-body-lg text-body-lg text-secondary-fixed-dim max-w-2xl">
          Ready to elevate your engineering output? Partner with Nexus Strategy for your next major technical initiative.
        </p>
        <Link to="/start-project" className="bg-primary text-on-primary px-space-8 py-space-4 rounded-DEFAULT font-caption text-caption hover:bg-primary-container active:scale-[0.98] transition-all mt-space-4 inline-block">
          Start a Project
        </Link>
      </div>
    </section>
  );
}

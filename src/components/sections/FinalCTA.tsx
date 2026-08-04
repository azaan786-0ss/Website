import { Link } from 'react-router-dom';
import homeData from '../../data/Home.json';

const { finalCTA } = homeData;

export function FinalCTA() {
  return (
    <section className="bg-bg-dark-primary text-on-secondary py-20 md:py-32 px-6 md:px-8">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6 md:gap-8">
        <h2 className="font-display-xl text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">{finalCTA.title}</h2>
        <p className="font-body-lg text-base sm:text-lg md:text-xl text-secondary-fixed-dim max-w-2xl leading-relaxed">
          {finalCTA.subtitle}
        </p>
        <Link to="/start-project" className="bg-primary text-on-primary px-8 py-4 rounded-xl font-medium hover:bg-primary-container active:scale-[0.98] transition-all mt-4 md:mt-6 inline-block shadow-lg shadow-primary/25">
          {finalCTA.cta}
        </Link>
      </div>
    </section>
  );
}

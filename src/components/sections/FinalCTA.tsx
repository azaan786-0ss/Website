import { Link } from 'react-router-dom';
import homeData from '../../data/Home.json';

const { finalCTA } = homeData;

export function FinalCTA() {
  return (
    <section className="bg-slate-900 dark:bg-black text-white border-t border-slate-800 dark:border-zinc-800 py-20 md:py-32 px-6 md:px-8 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6 md:gap-8">
        <h2 className="font-display-xl text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">{finalCTA.title}</h2>
        <p className="font-body-lg text-base sm:text-lg md:text-xl text-indigo-100/90 dark:text-zinc-400 max-w-2xl leading-relaxed">
          {finalCTA.subtitle}
        </p>
        <Link to="/start-project" className="bg-indigo-600 dark:bg-white text-white dark:text-slate-900 hover:bg-indigo-700 dark:hover:bg-zinc-100 px-8 py-4 rounded-xl font-bold text-base md:text-lg active:scale-[0.98] transition-all mt-4 md:mt-6 inline-block shadow-xl">
          {finalCTA.cta}
        </Link>
      </div>
    </section>
  );
}

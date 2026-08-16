import homeData from '../../data/Home.json';

const { trustBar } = homeData;

export function TrustBar() {
  const items = trustBar.items;

  return (
    <section className="border-y border-slate-200 dark:border-zinc-800 bg-transparent py-space-8 overflow-hidden">
      <div className="relative w-full flex overflow-hidden">
        <div className="flex w-max animate-logo-loop items-center opacity-60 dark:opacity-75 grayscale hover:grayscale-0 transition-all duration-500 hover:[animation-play-state:paused]">
          {[...items, ...items, ...items, ...items].map((item, index) => (
            <span key={index} className="group font-code text-code text-slate-600 dark:text-zinc-400 flex items-center gap-2 mx-8 whitespace-nowrap hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 cursor-default">
              <span className="material-symbols-outlined transition-colors duration-300 drop-shadow-sm text-indigo-600 dark:text-indigo-400">{item.icon}</span> 
              <span className="transition-colors duration-300">{item.text}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

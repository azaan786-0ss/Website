import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import homeData from '../../data/Home.json';

const { servicesOverview } = homeData;

export function ServicesOverview() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="py-16 md:py-24 relative overflow-hidden group" 
      id="services"
    >
      {/* Interactive Glowing Grid */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100 z-0"
        style={{
          backgroundSize: "40px 40px",
          backgroundImage: "linear-gradient(to right, rgba(99, 102, 241, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(99, 102, 241, 0.4) 1px, transparent 1px)",
          maskImage: `radial-gradient(120px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(120px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
        }}
      ></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-8 xl:px-12 relative z-10">
        <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl xl:max-w-3xl">
            <h2 className="font-display-xl text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white">{servicesOverview.title}</h2>
            <p className="font-body-lg text-base sm:text-lg xl:text-xl text-slate-600 dark:text-zinc-400 leading-relaxed">{servicesOverview.subtitle}</p>
          </div>
          <Link 
            to="/services" 
            className="inline-flex items-center font-heading-md text-base font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors group flex-shrink-0 pb-1 border-b border-transparent hover:border-indigo-500/30"
          >
            {servicesOverview.linkText}
            <span className="material-symbols-outlined ml-1.5 text-[20px] transition-transform group-hover:translate-x-1">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {servicesOverview.services.map((service, idx) => (
            <Link key={idx} to={service.link} className="block p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-[#0A0A0A] hover:border-indigo-300 dark:hover:border-indigo-500/50 hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-[#050505] border border-transparent dark:border-zinc-800 flex items-center justify-center mb-6 group-hover:bg-indigo-600 dark:group-hover:bg-indigo-600 group-hover:text-white dark:group-hover:text-white transition-colors duration-300 text-indigo-600 dark:text-indigo-400">
                <span className="material-symbols-outlined text-[24px]">{service.icon}</span>
              </div>
              <h3 className="font-bold text-lg sm:text-xl text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{service.title}</h3>
              <p className="text-slate-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

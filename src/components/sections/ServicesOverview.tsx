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
      className="py-space-32 relative overflow-hidden group trust-grid" 
      id="services"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-transparent to-bg-primary z-0 pointer-events-none"></div>
      
      {/* Interactive Glowing Grid */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100 z-0"
        style={{
          backgroundSize: "40px 40px",
          backgroundImage: "linear-gradient(to right, rgba(168, 85, 247, 0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(168, 85, 247, 0.6) 1px, transparent 1px)",
          maskImage: `radial-gradient(120px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(120px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
        }}
      ></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-8 xl:px-12 relative z-10">
        <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl xl:max-w-3xl">
            <h2 className="font-display-xl text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-4 text-on-surface dark:text-white">{servicesOverview.title}</h2>
            <p className="font-body-lg text-base sm:text-lg xl:text-xl text-secondary dark:text-secondary-fixed-dim leading-relaxed">{servicesOverview.subtitle}</p>
          </div>
          <Link 
            to="/services" 
            className="inline-flex items-center font-heading-md text-base font-semibold text-primary hover:text-primary-container transition-colors group flex-shrink-0 pb-1 border-b border-transparent hover:border-primary/30"
          >
            {servicesOverview.linkText}
            <span className="material-symbols-outlined ml-1.5 text-[20px] transition-transform group-hover:translate-x-1">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-6 xl:gap-8">
          {servicesOverview.services.map((service, idx) => (
            <Link key={idx} to={service.link} className="block p-space-8 rounded-lg border border-border bg-bg-primary hover:border-primary hover:shadow-[0_2px_8px_rgba(17,19,24,0.06)] transition-all group cursor-pointer">
              <div className="w-12 h-12 rounded-DEFAULT bg-accent-subtle flex items-center justify-center mb-space-6 group-hover:bg-primary group-hover:text-on-primary transition-colors text-primary">
                <span className="material-symbols-outlined">{service.icon}</span>
              </div>
              <h3 className="font-heading-md text-heading-md mb-space-2">{service.title}</h3>
              <p className="font-body-md text-body-md text-secondary">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

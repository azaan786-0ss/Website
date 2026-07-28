import { Link } from "react-router-dom";
import { useRef, useState } from "react";

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

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="mb-space-16 max-w-2xl">
          <h2 className="font-display-md text-display-md mb-space-4">Engineering Capabilities</h2>
          <p className="font-body-lg text-body-lg text-secondary">A unified approach to digital product creation, spanning robust architecture to polished interfaces.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-6">
          <Link to="/services/web-design" className="block p-space-8 rounded-lg border border-border bg-bg-primary hover:border-primary hover:shadow-[0_2px_8px_rgba(17,19,24,0.06)] transition-all group cursor-pointer">
            <div className="w-12 h-12 rounded-DEFAULT bg-accent-subtle flex items-center justify-center mb-space-6 group-hover:bg-primary group-hover:text-on-primary transition-colors text-primary">
              <span className="material-symbols-outlined">devices</span>
            </div>
            <h3 className="font-heading-md text-heading-md mb-space-2">Web Design & Development</h3>
            <p className="font-body-md text-body-md text-secondary">High-performance web applications built on modern frameworks (React, Next.js) ensuring scalability and speed.</p>
          </Link>
          <Link to="/services/mobile-app" className="block p-space-8 rounded-lg border border-border bg-bg-primary hover:border-primary hover:shadow-[0_2px_8px_rgba(17,19,24,0.06)] transition-all group cursor-pointer">
            <div className="w-12 h-12 rounded-DEFAULT bg-accent-subtle flex items-center justify-center mb-space-6 group-hover:bg-primary group-hover:text-on-primary transition-colors text-primary">
              <span className="material-symbols-outlined">smartphone</span>
            </div>
            <h3 className="font-heading-md text-heading-md mb-space-2">Mobile App Development</h3>
            <p className="font-body-md text-body-md text-secondary">Native and cross-platform mobile solutions designed for intuitive user experiences and hardware integration.</p>
          </Link>
          <Link to="/services/ai-solutions" className="block p-space-8 rounded-lg border border-border bg-bg-primary hover:border-primary hover:shadow-[0_2px_8px_rgba(17,19,24,0.06)] transition-all group cursor-pointer">
            <div className="w-12 h-12 rounded-DEFAULT bg-accent-subtle flex items-center justify-center mb-space-6 group-hover:bg-primary group-hover:text-on-primary transition-colors text-primary">
              <span className="material-symbols-outlined">smart_toy</span>
            </div>
            <h3 className="font-heading-md text-heading-md mb-space-2">AI Solutions</h3>
            <p className="font-body-md text-body-md text-secondary">Integrating machine learning models and LLMs to automate processes and unlock new product capabilities.</p>
          </Link>
        </div>
      </div>
    </section>
  );
}

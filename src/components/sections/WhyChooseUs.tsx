import { TrueFocus } from "../ui/TrueFocus";
import { useEffect, useRef, useState } from "react";

// --- AdvantageCard Component for Spotlight and Hover Logic ---
function AdvantageCard({ 
  title, 
  description, 
  icon, 
  delayIndex 
}: { 
  title: string, 
  description: string, 
  icon: string, 
  delayIndex: number 
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Determine icon animation classes based on the icon name
  const getIconAnimation = () => {
    if (!isHovered) return "";
    switch (icon) {
      case "architecture": return "rotate-12 scale-110 transition-transform duration-300 text-primary"; 
      case "palette": return "scale-110 text-accent transition-all duration-300"; 
      case "layers": return "-translate-y-1 scale-110 transition-transform duration-300 text-primary"; 
      case "handshake": return "animate-heartbeat text-primary"; 
      default: return "";
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group rounded-2xl p-8 bg-bg-primary border border-outline-variant/60 shadow-sm transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}
        hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.15)] overflow-hidden`}
      style={{ transitionDelay: `${delayIndex * 150}ms` }}
    >
      {/* Radial Spotlight Border/Glow effect */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.08), transparent 40%)`,
        }}
      />
      
      {/* Spotlight Border Mask */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl border-2 border-transparent"
        style={{
          background: `radial-gradient(250px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.5), transparent 40%) border-box`,
          WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      <div className="relative z-10 flex flex-col items-start">
        {/* Icon Badge */}
        <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 ring-1 ring-primary/20 shadow-inner group-hover:bg-primary/15 transition-colors duration-300">
          <span className={`material-symbols-outlined text-[24px] transition-all duration-300 ${getIconAnimation()}`}>
            {icon}
          </span>
        </div>
        
        {/* Content */}
        <h4 className="font-heading-md text-xl font-semibold text-on-surface mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h4>
        <p className="font-body-md text-secondary leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export function WhyChooseUs() {
  const advantages = [
    {
      icon: "architecture",
      title: "Engineering Rigor",
      description: "We don't cut corners. Code quality, test coverage, and scalable architecture are baseline requirements.",
    },
    {
      icon: "palette",
      title: "Design Craft",
      description: "Pixel-perfect execution. We bridge the gap between Figma mockups and production reality.",
    },
    {
      icon: "layers",
      title: "Full-stack Capability",
      description: "From database schema design to complex frontend state management, we handle the entire stack.",
    },
    {
      icon: "handshake",
      title: "Long-term Partnership",
      description: "We operate as an extension of your team, providing ongoing support and strategic technical guidance.",
    }
  ];

  return (
    <section className="bg-bg-secondary py-space-32 relative overflow-hidden">
      {/* Subtle top border gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="mb-space-24 text-center max-w-3xl mx-auto">
          <h2 className="font-display-lg text-display-lg lg:text-display-xl mb-space-6 flex justify-center">
            <TrueFocus sentence="The Nexus Advantage" />
          </h2>
          <p className="font-heading-md text-heading-md text-secondary">
            Why technical leaders choose us as their <span className="text-primary font-medium">engineering partner.</span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((adv, idx) => (
            <AdvantageCard 
              key={adv.title}
              title={adv.title}
              description={adv.description}
              icon={adv.icon}
              delayIndex={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

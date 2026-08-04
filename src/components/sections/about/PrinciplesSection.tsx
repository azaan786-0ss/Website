import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import React, { useRef, useState } from "react";

interface PrincipleItem {
  number: string;
  tag: string;
  title: string;
  desc: string;
  icon: string;
  containerClass: string;
  tagClass: string;
  iconContainerClass: string;
  titleClass: string;
  descClass: string;
  renderVisual?: () => React.ReactNode;
}

export function PrinciplesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const principles: PrincipleItem[] = [
    {
      number: "01",
      tag: "FOUNDATIONAL STRATEGY",
      title: "Architecture First",
      desc: "Immediate execution without structural planning is technical debt in disguise. We architect resilient foundations for long-term scalability.",
      icon: "architecture",
      containerClass: "bg-indigo-600",
      tagClass: "bg-white/20 text-white",
      iconContainerClass: "bg-white/10 text-white",
      titleClass: "text-white",
      descClass: "text-indigo-100",
    },
    {
      number: "02",
      tag: "EMPIRICAL METRICS",
      title: "Data Over Dogma",
      desc: "Decisions are dictated by real user telemetry and performance benchmarks, not subjective opinions or fleeting industry hypes.",
      icon: "analytics",
      containerClass: "bg-blue-600",
      tagClass: "bg-white/20 text-white",
      iconContainerClass: "bg-white/10 text-white",
      titleClass: "text-white",
      descClass: "text-blue-100",
    },
    {
      number: "03",
      tag: "100% AUDITABLE",
      title: "Radical Transparency",
      desc: "Uncompromising clarity across project roadmaps, code ownership, and pricing. Full visibility with zero obfuscation.",
      icon: "handshake",
      containerClass: "bg-violet-600",
      tagClass: "bg-white/20 text-white",
      iconContainerClass: "bg-white/10 text-white",
      titleClass: "text-white",
      descClass: "text-violet-100",
    },
    {
      number: "04",
      tag: "CORE METRIC",
      title: "Performance as Feature",
      desc: "Sub-second load times and zero-lag interactions are non-negotiable standards baked directly into our codebases.",
      icon: "speed",
      containerClass: "bg-rose-600",
      tagClass: "bg-white/20 text-white",
      iconContainerClass: "bg-white/10 text-white",
      titleClass: "text-white",
      descClass: "text-rose-100",
    },
    {
      number: "05",
      tag: "FUTURE-PROOFING",
      title: "Continuous Evolution",
      desc: "Software systems must adapt seamlessly to market shifts. We build decoupled, change-ready architectures that grow with your ambitions.",
      icon: "update",
      containerClass: "bg-amber-600",
      tagClass: "bg-white/20 text-white",
      iconContainerClass: "bg-white/10 text-white",
      titleClass: "text-white",
      descClass: "text-amber-100",
    },
    {
      number: "06",
      tag: "ENTERPRISE COMPLIANCE",
      title: "Security by Design",
      desc: "Threat modeling, zero-trust protocols, and rigorous data encryption implemented from line one of code.",
      icon: "shield_lock",
      containerClass: "bg-emerald-600",
      tagClass: "bg-white/20 text-white",
      iconContainerClass: "bg-white/10 text-white",
      titleClass: "text-white",
      descClass: "text-emerald-100",
    },
  ];

  // Map scroll progress to the active index
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsCount = principles.length;
    // Calculate which card should be active based on scroll progress (0 to 1)
    const rawIndex = latest * cardsCount;
    // Math.min ensures we don't go out of bounds at exactly 1.0 scroll progress
    const index = Math.min(Math.floor(rawIndex), cardsCount - 1);
    setActiveIndex(index);
  });

  return (
    // Outer container needs to be very tall to allow scrolling. 
    // 100vh per card = 600vh total height.
    <section ref={containerRef} className="relative h-[600vh] bg-slate-950">
      
      {/* Sticky Inner Viewport */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Static Column: Header & Context */}
          <div className="lg:col-span-5 relative z-10">
            <h2 className="font-display-lg text-4xl sm:text-5xl md:text-[3.5rem] font-extrabold text-white tracking-tight leading-[1.1]">
              Engineering<br className="hidden lg:block" />
              <span className="lg:hidden"> </span>
              Operating<br className="hidden lg:block" />
              <span className="lg:hidden"> </span>
              <span className="text-indigo-400">Principles</span>
            </h2>
            <p className="text-slate-400 text-lg sm:text-xl mt-6 leading-relaxed max-w-md">
              The non-negotiable technical standards that govern how we architect software, make decisions, and deliver value at enterprise scale.
            </p>
            
            {/* Scroll Progress Indicator */}
            <div className="hidden lg:flex items-center gap-3 mt-12">
              {principles.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-2 rounded-full transition-all duration-500 ease-out ${
                    i === activeIndex 
                      ? 'w-12 bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]' 
                      : i < activeIndex 
                        ? 'w-4 bg-indigo-900/50' 
                        : 'w-4 bg-slate-800'
                  }`} 
                />
              ))}
            </div>
            
            <div className="hidden lg:flex items-center gap-4 mt-6 opacity-60">
              <span className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase">Scroll to explore</span>
              <div className="w-12 h-px bg-slate-800"></div>
            </div>
          </div>

          {/* Right Dynamic Column: The Cards */}
          <div className="lg:col-span-7 relative h-[400px] sm:h-[450px] w-full">
            <AnimatePresence mode="popLayout">
              {principles.map((item, index) => (
                index === activeIndex && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40, scale: 0.98, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -40, scale: 1.02, filter: 'blur(10px)' }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className={`absolute inset-0 overflow-hidden rounded-[2rem] shadow-2xl sm:p-10 p-8 transition-colors duration-300 ${item.containerClass} group`}
                  >
                    <div className="relative z-10 flex flex-col h-full justify-between">
                      {/* Top section: Icon */}
                      <div className="flex items-center justify-end">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:scale-110 ${item.iconContainerClass}`}>
                          <span className="material-symbols-outlined text-[28px]">
                            {item.icon}
                          </span>
                        </div>
                      </div>
                      
                      {/* Bottom section: Text content */}
                      <div>
                        <span className={`inline-block text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-6 shadow-sm ${item.tagClass}`}>
                          {item.tag}
                        </span>
                        
                        <h3 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${item.titleClass}`}>
                          {item.title}
                        </h3>
                        
                        <p className={`text-base sm:text-lg leading-relaxed font-medium ${item.descClass} max-w-lg`}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}




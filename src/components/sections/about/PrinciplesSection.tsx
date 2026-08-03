import { motion } from "framer-motion";
import React from "react";

interface PrincipleItem {
  number: string;
  tag: string;
  title: string;
  desc: string;
  icon: string;
  className: string;
  iconClass: string;
  titleClass: string;
  descClass: string;
  renderVisual?: () => React.ReactNode;
}

export function PrinciplesSection() {
  const principles: PrincipleItem[] = [
    {
      number: "01",
      tag: "FOUNDATIONAL STRATEGY",
      title: "Architecture First",
      desc: "Immediate execution without structural planning is technical debt in disguise. We architect resilient, modular foundations engineered for long-term scalability and effortless maintainability.",
      icon: "architecture",
      className: "md:col-span-2 lg:col-span-2 row-span-2 bg-slate-950 text-white border-slate-800 relative overflow-hidden group min-h-[380px] flex flex-col justify-between p-8 sm:p-10",
      iconClass: "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-inner",
      titleClass: "text-white text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight",
      descClass: "text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl",
      renderVisual: () => (
        <>
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-600/20 transition-all duration-700"></div>
          <div className="absolute -bottom-10 -right-6 text-[180px] font-black text-slate-800/20 select-none pointer-events-none leading-none tracking-tighter">
            01
          </div>
          {/* Subtle architectural schematic visual */}
          <div className="absolute bottom-6 right-8 hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-md text-xs font-mono text-indigo-300 pointer-events-none">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
            BLUEPRINT // VERIFIED
          </div>
        </>
      ),
    },
    {
      number: "02",
      tag: "EMPIRICAL METRICS",
      title: "Data Over Dogma",
      desc: "Decisions are dictated by real user telemetry and performance benchmarks, not subjective opinions or fleeting industry hypes.",
      icon: "analytics",
      className: "col-span-1 bg-white border-slate-200/80 hover:border-indigo-300 relative overflow-hidden group p-6 sm:p-8 flex flex-col justify-between",
      iconClass: "bg-indigo-50 text-indigo-600 border border-indigo-100",
      titleClass: "text-slate-900 text-xl font-bold",
      descClass: "text-slate-600 text-sm leading-relaxed",
      renderVisual: () => (
        <div className="absolute top-4 right-6 text-6xl font-black text-slate-100/80 select-none pointer-events-none font-mono">
          02
        </div>
      ),
    },
    {
      number: "03",
      tag: "100% AUDITABLE",
      title: "Radical Transparency",
      desc: "Uncompromising clarity across project roadmaps, code ownership, and pricing. Full visibility with zero obfuscation.",
      icon: "handshake",
      className: "col-span-1 bg-indigo-50/40 border-indigo-100/80 hover:border-indigo-300 relative overflow-hidden group p-6 sm:p-8 flex flex-col justify-between",
      iconClass: "bg-indigo-100 text-indigo-700",
      titleClass: "text-indigo-950 text-xl font-bold",
      descClass: "text-indigo-900/70 text-sm leading-relaxed",
      renderVisual: () => (
        <div className="absolute top-4 right-6 text-6xl font-black text-indigo-100/60 select-none pointer-events-none font-mono">
          03
        </div>
      ),
    },
    {
      number: "04",
      tag: "CORE METRIC",
      title: "Performance as Feature",
      desc: "Sub-second load times and zero-lag interactions are non-negotiable standards baked directly into our codebases.",
      icon: "speed",
      className: "col-span-1 bg-rose-50/30 border-rose-100/80 hover:border-rose-300 relative overflow-hidden group p-6 sm:p-8 flex flex-col justify-between",
      iconClass: "bg-rose-100 text-rose-700",
      titleClass: "text-slate-900 text-xl font-bold",
      descClass: "text-slate-600 text-sm leading-relaxed",
      renderVisual: () => (
        <div className="absolute top-4 right-6 text-6xl font-black text-rose-100/50 select-none pointer-events-none font-mono">
          04
        </div>
      ),
    },
    {
      number: "05",
      tag: "FUTURE-PROOFING",
      title: "Continuous Evolution",
      desc: "Software systems must adapt seamlessly to market shifts. We build decoupled, change-ready architectures that grow with your ambitions.",
      icon: "update",
      className: "col-span-1 md:col-span-2 lg:col-span-2 bg-sky-50/40 border-sky-100/80 hover:border-sky-300 relative overflow-hidden group p-6 sm:p-8 flex flex-col justify-between",
      iconClass: "bg-sky-100 text-sky-700",
      titleClass: "text-sky-950 text-xl md:text-2xl font-bold",
      descClass: "text-sky-900/70 text-sm md:text-base leading-relaxed max-w-xl",
      renderVisual: () => (
        <div className="absolute top-4 right-6 text-7xl font-black text-sky-100/60 select-none pointer-events-none font-mono">
          05
        </div>
      ),
    },
    {
      number: "06",
      tag: "ENTERPRISE COMPLIANCE",
      title: "Security by Design",
      desc: "Threat modeling, zero-trust protocols, and rigorous data encryption implemented from line one of code.",
      icon: "shield_lock",
      className: "col-span-1 md:col-span-2 lg:col-span-3 bg-emerald-50/40 border-emerald-100 hover:border-emerald-300 relative overflow-hidden group p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6",
      iconClass: "bg-emerald-100 text-emerald-700",
      titleClass: "text-emerald-950 text-xl sm:text-2xl font-bold",
      descClass: "text-emerald-900/70 text-sm sm:text-base leading-relaxed max-w-2xl",
      renderVisual: () => (
        <div className="flex items-center gap-3 bg-white/80 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-emerald-200/60 shadow-xs">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono font-bold text-emerald-900 tracking-wider">
            SOC2 & ZERO-TRUST COMPLIANT
          </span>
        </div>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="py-20 md:py-32 px-6 md:px-8 max-w-[1280px] mx-auto relative">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
        <span className="inline-flex items-center gap-2 py-1.5 px-4 bg-indigo-50 text-indigo-700 border border-indigo-200/60 rounded-full font-caption text-xs font-bold tracking-widest uppercase mb-4 shadow-xs">
          <span className="material-symbols-outlined text-[16px] text-indigo-600">auto_awesome</span>
          OPERATING PHILOSOPHY
        </span>
        <h2 className="font-display-lg text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Engineering Operating Principles
        </h2>
        <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
          The non-negotiable technical standards that govern how we architect software, make decisions, and deliver value.
        </p>
      </div>

      {/* Editorial Magazine Bento Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(200px,auto)] gap-5 sm:gap-6"
      >
        {principles.map((item, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className={`rounded-3xl border shadow-sm hover:shadow-xl transition-all duration-300 ${item.className}`}
          >
            {item.renderVisual && item.renderVisual()}
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-xs ${item.iconClass}`}>
                  <span className="material-symbols-outlined text-[26px]">
                    {item.icon}
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-black/5 dark:bg-white/10 text-slate-500 dark:text-slate-400">
                  {item.tag}
                </span>
              </div>
              
              <h3 className={`mb-3 transition-colors ${item.titleClass}`}>
                {item.title}
              </h3>
              
              <p className={`leading-relaxed ${item.descClass}`}>
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

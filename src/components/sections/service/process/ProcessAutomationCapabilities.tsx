import { motion } from 'framer-motion';
import React from 'react';

interface CapabilityItem {
  icon: string;
  title: string;
  desc: string;
  className: string;
  iconClass: string;
  titleClass: string;
  descClass: string;
  renderVisual?: () => React.ReactNode;
}

export function ProcessAutomationCapabilities() {
  const capabilities: CapabilityItem[] = [
    {
      icon: 'hub',
      title: 'Custom Workflow Automation',
      desc: 'End-to-end automation of cross-departmental operations, syncing data seamlessly between internal platforms, CRMs, and communication tools.',
      className: 'md:col-span-2 lg:col-span-2 row-span-2 bg-gradient-to-br from-indigo-50/80 via-white to-white border-indigo-100 overflow-hidden relative',
      iconClass: 'bg-indigo-600 text-white shadow-md shadow-indigo-200',
      titleClass: 'text-2xl md:text-3xl font-bold text-slate-900',
      descClass: 'text-slate-600 text-base sm:text-lg md:text-xl',
      renderVisual: () => (
        <div className="absolute -bottom-8 -right-8 opacity-[0.03] pointer-events-none">
          <span className="material-symbols-outlined text-[240px] text-indigo-900">account_tree</span>
        </div>
      )
    },
    {
      icon: 'smart_toy',
      title: 'Operational AI & LLM Agents',
      desc: 'Integrating custom AI agents into business workflows.',
      className: 'col-span-1 bg-violet-50/40 border-violet-100',
      iconClass: 'bg-violet-100 text-violet-700',
      titleClass: 'text-lg font-bold text-violet-950',
      descClass: 'text-violet-800/80 text-sm',
    },
    {
      icon: 'integration_instructions',
      title: 'Enterprise Integration',
      desc: 'Connecting isolated software with robust custom APIs.',
      className: 'col-span-1 bg-sky-50/40 border-sky-100',
      iconClass: 'bg-sky-100 text-sky-700',
      titleClass: 'text-lg font-bold text-sky-950',
      descClass: 'text-sky-800/80 text-sm',
    },
    {
      icon: 'description',
      title: 'Automated Data Processing',
      desc: 'Intelligent OCR workflows to extract database records.',
      className: 'col-span-1 bg-emerald-50/40 border-emerald-100',
      iconClass: 'bg-emerald-100 text-emerald-700',
      titleClass: 'text-lg font-bold text-emerald-950',
      descClass: 'text-emerald-800/80 text-sm',
    },
    {
      icon: 'dynamic_feed',
      title: 'Trigger-Based Lifecycle',
      desc: 'Automated messaging and account triggers based on real-time customer behavior.',
      className: 'md:col-span-2 lg:col-span-2 bg-slate-900 border-slate-800 relative overflow-hidden',
      iconClass: 'bg-white/10 text-white shadow-inner',
      titleClass: 'text-xl font-bold text-white',
      descClass: 'text-slate-400 text-sm sm:text-base',
      renderVisual: () => (
         <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-indigo-500/10 to-transparent pointer-events-none"></div>
      )
    },
    {
      icon: 'precision_manufacturing',
      title: 'Robotic Process Automation (RPA)',
      desc: 'Software bots engineered to navigate legacy user interfaces, handling repetitive data entry where traditional APIs are unavailable.',
      className: 'md:col-span-2 lg:col-span-3 bg-indigo-50/30 border-indigo-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden',
      iconClass: 'bg-indigo-100 text-indigo-700',
      titleClass: 'text-xl font-bold text-indigo-950',
      descClass: 'text-indigo-900/70 text-sm sm:text-base max-w-2xl',
      renderVisual: () => (
        <div className="hidden md:flex flex-1 items-center justify-end mr-4">
           <div className="flex items-end gap-1.5 h-12 opacity-40">
              {[40, 70, 45, 90, 60, 100, 80, 50, 75, 100, 85, 60, 95].map((h, i) => (
                 <motion.div 
                   key={i}
                   initial={{ height: 0 }}
                   whileInView={{ height: `${h}%` }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.6, delay: i * 0.05, ease: "easeOut" }}
                   className="w-2.5 bg-indigo-600 rounded-t-sm"
                 ></motion.div>
              ))}
           </div>
        </div>
      )
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="py-20 md:py-28 px-6 md:px-8 max-w-[1280px] mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mb-16"
      >
        <span className="inline-flex items-center gap-2 py-1.5 px-4 bg-indigo-50 text-indigo-700 border border-indigo-200/60 rounded-full font-caption text-xs sm:text-sm font-semibold mb-4 shadow-xs">
          <span className="material-symbols-outlined text-[18px] text-indigo-600">
            settings_suggest
          </span>
          CORE CAPABILITIES
        </span>
        <h2 className="font-display-lg text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          Autonomous Infrastructure Built for Scale
        </h2>
        <p className="font-body-lg text-base sm:text-lg text-slate-600 leading-relaxed">
          Engineering-grade solutions designed to bridge the gap between human creativity and
          operational scale.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(180px,auto)] gap-4 sm:gap-6"
      >
        {capabilities.map((item, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className={`p-6 sm:p-8 rounded-3xl border shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between ${item.className}`}
          >
            <div className={item.renderVisual && "relative z-10"}>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${item.iconClass}`}>
                <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
              </div>
              <div className={item.renderVisual && "mb-2"}>
                <h3 className={`mb-3 transition-colors ${item.titleClass}`}>
                  {item.title}
                </h3>
                <p className={`leading-relaxed ${item.descClass}`}>{item.desc}</p>
              </div>
            </div>
            {item.renderVisual && item.renderVisual()}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

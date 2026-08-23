import { motion, useScroll, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import { useRef } from 'react';

interface CapabilityItem {
  id: string;
  icon: string;
  title: string;
  desc: string;
  image: string;
}

const CapabilityPanel = ({ 
  item, 
  idx, 
  totalItems,
  scrollYProgress 
}: { 
  item: CapabilityItem; 
  idx: number; 
  totalItems: number;
  scrollYProgress: MotionValue<number>;
}) => {
  const step = 1 / (totalItems - 1);
  const targetProgress = idx * step;
  
  const start = Math.max(0, targetProgress - step * 0.5);
  const mid = targetProgress;
  const end = Math.min(1, targetProgress + step * 0.5);

  const inputRange = idx === 0 
    ? [0, mid, end] 
    : idx === totalItems - 1 
    ? [start, mid, 1] 
    : [start, mid, end];

  // Subtle scale transition for focal depth (always 100% visible opacity)
  const scale = useTransform(
    scrollYProgress, 
    inputRange, 
    idx === 0 ? [1, 1, 0.95] : idx === totalItems - 1 ? [0.95, 1, 1] : [0.95, 1, 0.95]
  );

  return (
    <motion.div 
      style={{ scale }}
      className="w-full max-w-5xl h-[60vh] md:h-[68vh] shrink-0 flex flex-col lg:flex-row relative group bg-slate-900 dark:bg-[#111111] rounded-3xl overflow-hidden border border-slate-800 dark:border-[#262626] shadow-2xl shadow-indigo-950/50 dark:shadow-[#c084fc]/10"
    >
      {/* Left Side: Content */}
      <div className="w-full lg:w-1/2 h-[55%] lg:h-full flex items-center justify-center p-6 sm:p-10 md:p-14 relative z-10 bg-slate-900/95 dark:bg-[#111111]/95 backdrop-blur-md">
        <div className="max-w-md w-full">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-indigo-500/10 dark:bg-[#c084fc]/10 text-indigo-400 dark:text-[#c084fc] rounded-2xl flex items-center justify-center mb-5 sm:mb-6 border border-indigo-500/20 dark:border-[#c084fc]/20 shadow-inner">
            <span className="material-symbols-outlined text-[26px] sm:text-[30px]">{item.icon}</span>
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400/80 dark:text-[#4f46e5] mb-2 block">
            Phase 0{idx + 1}
          </span>
          <h3 className="font-heading-lg text-2xl sm:text-3xl md:text-4xl font-extrabold text-white dark:text-[#fafafa] mb-3 sm:mb-4 leading-tight">
            {item.title}
          </h3>
          <p className="text-slate-400 dark:text-[#a3a3a3] text-sm sm:text-base md:text-lg leading-relaxed">
            {item.desc}
          </p>
        </div>
      </div>

      {/* Right Side: Visual */}
      <div className="w-full lg:w-1/2 h-[45%] lg:h-full relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-slate-950/20 z-10 transition-opacity duration-700 group-hover:opacity-0"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent z-10 hidden lg:block"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 block lg:hidden"></div>
        
        <img 
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
      </div>
    </motion.div>
  );
};

const IndicatorDot = ({ 
  scrollYProgress, 
  i, 
  totalItems 
}: { 
  scrollYProgress: MotionValue<number>; 
  i: number; 
  totalItems: number;
}) => {
  const step = 1 / (totalItems - 1);
  const target = i * step;

  const start = Math.max(0, target - step * 0.4);
  const end = Math.min(1, target + step * 0.4);

  const opacity = useTransform(
    scrollYProgress,
    i === 0 
      ? [0, step * 0.5] 
      : i === totalItems - 1 
      ? [1 - step * 0.5, 1] 
      : [start, target, end],
    i === 0 
      ? [1, 0.3] 
      : i === totalItems - 1 
      ? [0.3, 1] 
      : [0.3, 1, 0.3]
  );

  const scale = useTransform(
    scrollYProgress,
    i === 0 
      ? [0, step * 0.5] 
      : i === totalItems - 1 
      ? [1 - step * 0.5, 1] 
      : [start, target, end],
    i === 0 
      ? [1.3, 1] 
      : i === totalItems - 1 
      ? [1, 1.3] 
      : [1, 1.3, 1]
  );

  return (
    <motion.div 
      style={{ opacity, scale }}
      className="w-3 h-3 rounded-full bg-indigo-500 dark:bg-[#c084fc] transition-all"
    />
  );
};

export function ProductEngineeringCapabilities() {
  const capabilities: CapabilityItem[] = [
    {
      id: 'mvp',
      icon: 'rocket_launch',
      title: '0-to-1 Rapid MVP Buildout',
      desc: 'Translating business strategy into robust, market-ready digital products with a focus on speed-to-market without compromising quality.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: 'architecture',
      icon: 'architecture',
      title: 'High-Scale System Architecture',
      desc: 'Designing adaptable tech foundations capable of handling massive growth and extreme concurrency through cloud-native distributed patterns.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: 'integration',
      icon: 'hub',
      title: 'Core Business Logic Integration',
      desc: 'Connecting complex workflows, payments, CRMs, and internal operations into a unified, high-integrity technical core.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: 'security',
      icon: 'security',
      title: 'Continuous Performance & Security',
      desc: 'Hardening platforms with proactive threat detection, automated compliance, and enterprise-grade data security protocols.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: 'legacy',
      icon: 'history_edu',
      title: 'Legacy Modernization',
      desc: 'Evolving initial prototypes and monolithic systems into maintainable, modern, and highly scalable microservices architectures.',
      image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: 'infrastructure',
      icon: 'settings_suggest',
      title: 'Tech Governance & Infrastructure',
      desc: 'Monitoring, cost optimization, CI/CD pipelines, and strategic ops support to ensure your technology remains an asset, not a liability.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200'
    },
  ];

  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const maxTranslate = -((capabilities.length - 1) / capabilities.length) * 100;
  const xNum = useTransform(scrollYProgress, [0, 1], [0, maxTranslate]);
  const x = useTransform(xNum, (v) => `${v}%`);

  return (
    <section ref={targetRef} className="relative h-[500vh] bg-slate-950 dark:bg-[#050505] transition-colors duration-300">
      <div className="sticky top-0 h-screen flex flex-col justify-between pt-24 pb-8 overflow-hidden bg-slate-950 dark:bg-[#050505] transition-colors duration-300">
        
        {/* Floating Section Title - Below Fixed Navbar */}
        <div className="px-6 md:px-12 z-20 pointer-events-none flex justify-between items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 dark:text-[#4f46e5] block mb-1">
              Core Capabilities
            </span>
            <h2 className="font-heading-lg text-2xl md:text-3xl font-extrabold text-white dark:text-[#fafafa]">
              Engineering Ecosystem
            </h2>
          </div>
          <div className="hidden sm:block text-slate-500 dark:text-[#a3a3a3] text-xs tracking-wider uppercase font-semibold">
            Scroll to explore →
          </div>
        </div>

        {/* Horizontal Scrolling Track */}
        <div className="flex-1 flex items-center overflow-hidden my-auto">
          <motion.div style={{ x }} className="flex w-[600vw] items-center text-white dark:text-[#fafafa] flex-nowrap">
            {capabilities.map((item, idx) => (
              <div key={item.id} className="w-screen shrink-0 flex justify-center items-center px-4 md:px-8">
                <CapabilityPanel 
                  item={item} 
                  idx={idx} 
                  totalItems={capabilities.length}
                  scrollYProgress={scrollYProgress} 
                />
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Progress Indicator Dots */}
        <div className="z-20 flex justify-center items-center">
          <div className="flex items-center gap-4 bg-slate-900/90 dark:bg-[#111111]/90 backdrop-blur-md px-6 py-3 rounded-full border border-slate-800 dark:border-[#262626] shadow-xl">
            {capabilities.map((_, i) => (
              <IndicatorDot 
                key={i} 
                scrollYProgress={scrollYProgress} 
                i={i} 
                totalItems={capabilities.length} 
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}


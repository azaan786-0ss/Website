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
      className="w-full max-w-5xl h-[60vh] md:h-[68vh] shrink-0 flex flex-col lg:flex-row relative group bg-white dark:bg-[#12151C] rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-2xl shadow-slate-200/50 dark:shadow-none"
    >
      {/* Left Side: Content */}
      <div className="w-full lg:w-1/2 h-[55%] lg:h-full flex items-center justify-center p-6 sm:p-10 md:p-14 relative z-10 bg-white/95 dark:bg-[#12151C]/95 backdrop-blur-md">
        <div className="max-w-md w-full">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-center mb-5 sm:mb-6 border border-indigo-100 dark:border-indigo-800/50 shadow-sm">
            <span className="material-symbols-outlined text-[26px] sm:text-[30px]">{item.icon}</span>
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2 block">
            Phase 0{idx + 1}
          </span>
          <h3 className="font-heading-lg text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-[#f3f4f6] mb-3 sm:mb-4 leading-tight group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors">
            {item.title}
          </h3>
          <p className="text-slate-600 dark:text-[#9ca3af] text-sm sm:text-base md:text-lg leading-relaxed">
            {item.desc}
          </p>
        </div>
      </div>

      {/* Right Side: Visual */}
      <div className="w-full lg:w-1/2 h-[45%] lg:h-full relative overflow-hidden bg-slate-100 dark:bg-slate-900">
        <div className="absolute inset-0 bg-indigo-900/10 dark:bg-indigo-900/30 z-10 transition-opacity duration-700 group-hover:opacity-0"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white dark:from-[#12151C] via-white/20 dark:via-[#12151C]/20 to-transparent z-10 hidden lg:block"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#12151C] via-white/20 dark:via-[#12151C]/20 to-transparent z-10 block lg:hidden"></div>
        
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
      className="w-3 h-3 rounded-full bg-indigo-600 dark:bg-indigo-400 transition-all shadow-sm"
    />
  );
};

export function ProductStrategyCapabilities() {
  const capabilities: CapabilityItem[] = [
    {
      id: 'market',
      icon: 'analytics',
      title: 'Market & Discovery',
      desc: 'Benchmarking, market positioning, and gap analysis to find your unfair advantage.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: 'mvp',
      icon: 'view_kanban',
      title: 'MVP Scoping',
      desc: 'Feature prioritization, scope management, and phase planning for initial launch.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: 'journey',
      icon: 'route',
      title: 'User Journey Mapping',
      desc: 'Customer touchpoint analysis and friction elimination for seamless experiences.',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: 'monetization',
      icon: 'payments',
      title: 'Monetization Models',
      desc: 'Value metric definition and SaaS pricing strategy optimized for maximum LTV.',
      image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: 'growth',
      icon: 'insights',
      title: 'Growth Frameworks',
      desc: 'North Star metric setup and retention analytics strategy for sustainable growth.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: 'lifecycle',
      icon: 'rocket_launch',
      title: 'Lifecycle Management',
      desc: 'Scaling product strategy from seed stage through enterprise-level expansion.',
      image: 'https://images.unsplash.com/photo-1507099985932-87a4520ed1d5?auto=format&fit=crop&q=80&w=1200'
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
    <section ref={targetRef} className="relative h-[500vh] bg-slate-950 dark:bg-[#0B0E14] transition-colors duration-300">
      <div className="sticky top-0 h-screen flex flex-col justify-between pt-24 pb-8 overflow-hidden bg-slate-950 dark:bg-[#0B0E14] transition-colors duration-300">
        
        {/* Floating Section Title - Below Fixed Navbar */}
        <div className="px-6 md:px-12 z-20 pointer-events-none flex justify-between items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 dark:text-[#818cf8] block mb-1">
              Core Capabilities
            </span>
            <h2 className="font-heading-lg text-2xl md:text-3xl font-extrabold text-white dark:text-[#f3f4f6]">
              Strategic Ecosystem
            </h2>
          </div>
          <div className="hidden sm:block text-slate-400 dark:text-slate-500 text-xs tracking-wider uppercase font-semibold">
            Scroll to explore →
          </div>
        </div>

        {/* Horizontal Scrolling Track */}
        <div className="flex-1 flex items-center overflow-hidden my-auto">
          <motion.div style={{ x }} className="flex w-[600vw] items-center text-slate-900 dark:text-[#f3f4f6] flex-nowrap">
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
          <div className="flex items-center gap-4 bg-white/90 dark:bg-[#12151C]/90 backdrop-blur-md px-6 py-3 rounded-full border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none">
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

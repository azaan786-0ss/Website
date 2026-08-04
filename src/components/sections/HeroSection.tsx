import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FriendlyBotCanvas } from '../canvas/FriendlyBotCanvas';
import { 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  TrendingUp, 
  Activity
} from 'lucide-react';
import homeData from '../../data/Home.json';

const { heroSection } = homeData;

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const trustMetrics = heroSection.trustMetrics.map((item) => {
    let iconComp;
    switch(item.icon) {
      case 'Zap': iconComp = Zap; break;
      case 'ShieldCheck': iconComp = ShieldCheck; break;
      case 'Cpu': iconComp = Cpu; break;
      default: iconComp = Zap;
    }
    return { icon: iconComp, label: item.label };
  });

  return (
    <section className="relative pt-24 pb-16 md:pt-36 md:pb-28 lg:pt-40 lg:pb-32 px-6 md:px-8 max-w-[1400px] mx-auto overflow-hidden">
      {/* Dynamic Ambient Background Elements */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-sky-400/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      
      {/* Background Micro Grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-center">
        
        {/* Left Column: Hero Text Content */}
        <motion.div 
          className="lg:col-span-7 xl:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          {/* Main Title */}
          <motion.h1 
            variants={itemVariants} 
            className="font-display-xl text-4xl sm:text-5xl md:text-6xl lg:text-[64px] xl:text-[72px] font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.08] mb-6 md:mb-8"
          >
            {heroSection.title1}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 dark:from-indigo-400 dark:via-indigo-300 dark:to-purple-400">
              {heroSection.title2}
            </span>
          </motion.h1>

          {/* Body Subtitle */}
          <motion.p 
            variants={itemVariants} 
            className="font-body-lg text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-8"
          >
            {heroSection.subtitle}
          </motion.p>

          {/* CTA Button Group */}
          <motion.div 
            variants={itemVariants} 
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10 w-full sm:w-auto"
          >
            <Link 
              to="/start-project" 
              className="relative group overflow-hidden rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-base px-7 py-3.5 shadow-[0_10px_25px_-5px_rgba(79,70,229,0.4)] transition-all duration-300 hover:shadow-[0_15px_30px_-5px_rgba(79,70,229,0.5)] active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <span>{heroSection.cta1}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
            </Link>

            <a 
              href="#services" 
              className="rounded-xl border border-slate-300 dark:border-slate-700 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md px-6 py-3.5 text-slate-700 dark:text-slate-200 font-semibold text-base hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-xs"
            >
              <span>{heroSection.cta2}</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200 transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          {/* Trust Metrics Pill Bar */}
          <motion.div 
            variants={itemVariants}
            className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 w-full flex flex-wrap items-center justify-center lg:justify-start gap-y-3 gap-x-6 text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400"
          >
            {trustMetrics.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="flex items-center gap-2">
                  <div className="p-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                    <IconComp className="w-3.5 h-3.5" />
                  </div>
                  <span>{item.label}</span>
                </div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Right Column: 3D Robot Canvas & Interactive HUD Overlay */}
        <motion.div 
          className="order-first lg:order-last lg:col-span-5 xl:col-span-5 relative w-full h-[380px] sm:h-[460px] lg:h-[580px] xl:h-[640px] flex items-center justify-center mb-8 lg:mb-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Subtle Glow Ring behind the Bot */}
          <div className="absolute w-72 h-72 lg:w-96 lg:h-96 rounded-full bg-indigo-400/20 blur-3xl pointer-events-none" />

          {/* 3D Canvas */}
          <div className="w-full h-full relative z-10">
            <FriendlyBotCanvas />
          </div>

          {/* Floating HUD Widget 1: System Operational (Top-Left) */}
          <motion.div 
            className="absolute top-4 left-2 sm:-left-4 z-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 p-3 rounded-2xl shadow-xl flex items-center gap-3 cursor-default"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover={{ y: -4, scale: 1.02 }}
          >
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <Activity className="w-4 h-4 animate-pulse" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-800 dark:text-slate-100 flex items-center gap-1.5">
                <span>{heroSection.widget1.title}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">{heroSection.widget1.subtitle}</p>
            </div>
          </motion.div>

          {/* Floating HUD Widget 2: Architecture Score Card (Bottom-Right) */}
          <motion.div 
            className="absolute bottom-6 right-2 sm:-right-4 z-20 bg-white/85 dark:bg-slate-900/85 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 p-3.5 rounded-2xl shadow-xl flex items-center gap-3.5 cursor-default"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            whileHover={{ y: -4, scale: 1.02 }}
          >
            <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-800 dark:text-slate-100">{heroSection.widget2.title}</div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">{heroSection.widget2.score}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-semibold">
                  {heroSection.widget2.badge}
                </span>
              </div>
            </div>
          </motion.div>



        </motion.div>

      </div>
    </section>
  );
}


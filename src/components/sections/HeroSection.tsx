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

  const trustMetrics = [
    { icon: Zap, label: "99.9% Uptime SLA" },
    { icon: ShieldCheck, label: "Enterprise Security" },
    { icon: Cpu, label: "AI & Full-Stack Rigor" },
  ];

  return (
    <section className="relative pt-24 pb-16 md:pt-36 md:pb-28 px-6 md:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Dynamic Ambient Background Elements */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-sky-400/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      
      {/* Background Micro Grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Hero Text Content */}
        <motion.div 
          className="lg:col-span-7 flex flex-col items-start text-left z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >


          {/* Main Title */}
          <motion.h1 
            variants={itemVariants} 
            className="font-display-xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.08] mb-6"
          >
            Engineering,{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 dark:from-indigo-400 dark:via-indigo-300 dark:to-purple-400">
              elevated.
            </span>
          </motion.h1>

          {/* Body Subtitle */}
          <motion.p 
            variants={itemVariants} 
            className="font-body-lg text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-8"
          >
            We design, build, and scale digital products with the rigor of an in-house team. 
            Focused on high-performance architecture, human-centered UI/UX, and enduring enterprise value.
          </motion.p>

          {/* CTA Button Group */}
          <motion.div 
            variants={itemVariants} 
            className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto"
          >
            <Link 
              to="/start-project" 
              className="relative group overflow-hidden rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-base px-7 py-3.5 shadow-[0_10px_25px_-5px_rgba(79,70,229,0.4)] transition-all duration-300 hover:shadow-[0_15px_30px_-5px_rgba(79,70,229,0.5)] active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
            </Link>

            <a 
              href="#services" 
              className="rounded-xl border border-slate-300 dark:border-slate-700 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md px-6 py-3.5 text-slate-700 dark:text-slate-200 font-semibold text-base hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-xs"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200 transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          {/* Trust Metrics Pill Bar */}
          <motion.div 
            variants={itemVariants}
            className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 w-full flex flex-wrap items-center gap-y-3 gap-x-6 text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400"
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
          className="lg:col-span-5 relative w-full h-[460px] sm:h-[520px] lg:h-[580px] flex items-center justify-center"
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
                <span>System Health</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">100% Operational • 12ms</p>
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
              <div className="text-xs font-semibold text-slate-800 dark:text-slate-100">Quality Score</div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">99.8/100</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-semibold">
                  Enterprise
                </span>
              </div>
            </div>
          </motion.div>



        </motion.div>

      </div>
    </section>
  );
}


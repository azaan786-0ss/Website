import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function PerformanceOptimizationHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="relative pt-space-24 pb-space-24 px-6 md:px-8 max-w-[1280px] mx-auto overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[length:40px_40px] -z-10 opacity-60"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7"
        >
          <motion.span variants={itemVariants} className="inline-flex items-center gap-2 py-1.5 px-4 bg-indigo-50 text-indigo-700 border border-indigo-200/60 rounded-full font-caption text-xs sm:text-sm font-semibold mb-space-6 shadow-xs">
            <span className="material-symbols-outlined text-[18px] text-indigo-600">speed</span>
            Growth &amp; Ops / Performance Optimization
          </motion.span>

          <motion.h1 variants={itemVariants} className="font-display-xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-space-6 text-slate-900 leading-tight tracking-tight">
            Maximizing System <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-800">Speed, Efficiency</span>, and High-Load Resilience
          </motion.h1>

          <motion.p variants={itemVariants} className="font-body-lg text-base sm:text-lg text-slate-600 mb-space-10 max-w-2xl leading-relaxed">
            We audit, tune, and refactor applications to achieve sub-second load times, eliminate server bottlenecks, reduce cloud costs, and guarantee stability during extreme traffic spikes.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-space-12">
            <Link to="/start-project">
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/25"
              >
                Get a Performance Audit
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </motion.button>
            </Link>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="border border-slate-300 bg-white text-slate-800 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 transition-all"
            >
              View Tuning Benchmarks
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Speedometer HUD Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5"
        >
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xl relative overflow-hidden">
            {/* HUD Visualization element */}
            <div className="mb-6 bg-slate-900 rounded-2xl p-6 text-white font-mono text-xs overflow-hidden relative">
              <div className="absolute top-2 right-3 text-indigo-400 font-bold animate-pulse text-[10px]">● LIVE TELEMETRY</div>
              <div className="text-slate-400 mb-2">// Network Speed & Latency</div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-extrabold text-green-400">98/100</span>
                <span className="text-slate-500">Lighthouse Score</span>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <span>FCP (First Contentful Paint)</span>
                  <span className="text-green-400">0.3s</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-green-400 h-full w-[96%]" />
                </div>
                <div className="flex justify-between">
                  <span>TTI (Time to Interactive)</span>
                  <span className="text-green-400">0.7s</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-green-400 h-full w-[93%]" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                whileHover={{ y: -4 }}
                className="bg-slate-50 p-4 rounded-xl border border-slate-200/60 flex flex-col justify-between"
              >
                <div className="font-extrabold text-2xl text-indigo-600 mb-1">&lt; 1s</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Page Load &amp; Core Web Vitals</div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -4 }}
                className="bg-slate-50 p-4 rounded-xl border border-slate-200/60 flex flex-col justify-between"
              >
                <div className="font-extrabold text-2xl text-indigo-600 mb-1">10x</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Traffic Capacity</div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -4 }}
                className="bg-slate-50 p-4 rounded-xl border border-slate-200/60 flex flex-col justify-between"
              >
                <div className="font-extrabold text-2xl text-indigo-600 mb-1">-50%</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Server Latency</div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -4 }}
                className="bg-slate-50 p-4 rounded-xl border border-slate-200/60 flex flex-col justify-between"
              >
                <div className="font-extrabold text-2xl text-indigo-600 mb-1">100%</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Stress Test Pass</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

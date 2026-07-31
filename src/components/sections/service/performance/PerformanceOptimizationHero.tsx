import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import { SplitText } from '../../../ui/SplitText';

export function PerformanceOptimizationHero() {
  const titleText = 'Maximizing System Speed, Efficiency, & Resilience';

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative pt-6 sm:pt-10 pb-16 px-6 md:px-8 max-w-[1280px] mx-auto overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-2 text-slate-500 font-caption text-xs sm:text-sm mb-4"
          >
            <Link className="hover:text-indigo-600 transition-colors" to="/">
              Home
            </Link>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <Link className="hover:text-indigo-600 transition-colors" to="/services">
              Services
            </Link>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <span className="text-slate-900 font-medium">Performance Optimization</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="animate-shine bg-clip-text text-transparent bg-[linear-gradient(110deg,#0f172a,45%,#6366f1,55%,#0f172a)] bg-[length:200%_100%] font-display-xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-slate-900 leading-tight"
          >
            <SplitText text={titleText} />
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-body-lg text-base sm:text-lg text-slate-600 mb-8 max-w-2xl leading-relaxed"
          >
            We audit, tune, and refactor applications to achieve sub-second load times, eliminate
            server bottlenecks, reduce cloud costs, and guarantee stability during extreme traffic
            spikes.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link to="/start-project" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto shadow-lg shadow-indigo-600/25"
              >
                Get a Performance Audit
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="border border-slate-300 bg-white text-slate-800 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 transition-all duration-300 w-full sm:w-auto"
            >
              View Tuning Benchmarks
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Speedometer HUD Telemetry Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5"
        >
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-200/50 relative overflow-hidden group">
            <div className="mb-6 bg-slate-900 rounded-2xl p-6 text-white font-mono text-xs overflow-hidden relative">
              <div className="absolute top-2.5 right-3 text-emerald-400 font-bold animate-pulse text-[10px] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                LIVE TELEMETRY
              </div>
              <div className="text-slate-400 mb-2">// Network Speed & Latency</div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-extrabold text-emerald-400">98/100</span>
                <span className="text-slate-400">Lighthouse Score</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-slate-300">
                  <span>FCP (First Contentful Paint)</span>
                  <span className="text-emerald-400 font-bold">0.3s</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-emerald-400 h-full w-[96%]" />
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>TTI (Time to Interactive)</span>
                  <span className="text-emerald-400 font-bold">0.7s</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-emerald-400 h-full w-[93%]" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-slate-50 p-4 rounded-2xl border border-slate-200/60 flex flex-col justify-between"
              >
                <div className="font-extrabold text-2xl text-indigo-600 mb-1">&lt; 1s</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  Page Load Speed
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-slate-50 p-4 rounded-2xl border border-slate-200/60 flex flex-col justify-between"
              >
                <div className="font-extrabold text-2xl text-indigo-600 mb-1">10x</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  Traffic Capacity
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-slate-50 p-4 rounded-2xl border border-slate-200/60 flex flex-col justify-between"
              >
                <div className="font-extrabold text-2xl text-indigo-600 mb-1">-50%</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  Server Latency
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-slate-50 p-4 rounded-2xl border border-slate-200/60 flex flex-col justify-between"
              >
                <div className="font-extrabold text-2xl text-indigo-600 mb-1">100%</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  Stress Test Pass
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

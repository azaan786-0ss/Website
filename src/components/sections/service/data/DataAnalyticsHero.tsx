import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function DataAnalyticsHero() {
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
            <span className="material-symbols-outlined text-[18px] text-indigo-600">bar_chart</span>
            Growth &amp; Ops / Data Analytics
          </motion.span>

          <motion.h1 variants={itemVariants} className="font-display-xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-space-6 text-slate-900 leading-tight tracking-tight">
            Turn Raw Data into <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-800">Actionable Growth</span> &amp; Product Insights
          </motion.h1>

          <motion.p variants={itemVariants} className="font-body-lg text-base sm:text-lg text-slate-600 mb-space-10 max-w-2xl leading-relaxed">
            We design, build, and deploy modern data pipelines, real-time analytics dashboards, and telemetry tracking that empower founders and product teams to make confident, data-backed decisions.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-space-12">
            <Link to="/start-project">
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/25"
              >
                Request Data Audit
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </motion.button>
            </Link>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="border border-slate-300 bg-white text-slate-800 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 transition-all"
            >
              Explore Data Stack
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Analytics Widget Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5"
        >
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xl relative overflow-hidden">
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                whileHover={{ y: -4 }}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200/60 flex flex-col justify-between"
              >
                <span className="material-symbols-outlined text-indigo-600 text-3xl mb-4">analytics</span>
                <div>
                  <div className="font-extrabold text-3xl text-indigo-600 mb-1">100%</div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Accuracy</div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -4 }}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200/60 flex flex-col justify-between"
              >
                <span className="material-symbols-outlined text-indigo-600 text-3xl mb-4">speed</span>
                <div>
                  <div className="font-extrabold text-3xl text-indigo-600 mb-1">10x</div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Query Speed</div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -4 }}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200/60 flex flex-col justify-between"
              >
                <span className="material-symbols-outlined text-indigo-600 text-3xl mb-4">radar</span>
                <div>
                  <div className="font-extrabold text-xl text-slate-900 mb-1">Real-Time</div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Telemetry</div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -4 }}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200/60 flex flex-col justify-between"
              >
                <span className="material-symbols-outlined text-indigo-600 text-3xl mb-4">verified_user</span>
                <div>
                  <div className="font-extrabold text-xl text-slate-900 mb-1">SOC2</div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Compliance</div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

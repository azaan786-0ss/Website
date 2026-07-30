import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function ProductEngineeringHero() {
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

  const metrics = [
    { icon: "bolt", value: "0-to-1", label: "MVP Velocity" },
    { icon: "cloud_done", value: "99.99%", label: "Enterprise Uptime" },
    { icon: "account_tree", value: "Zero-Debt", label: "Architecture" },
    { icon: "verified", value: "End-to-End", label: "Ownership" },
  ];

  return (
    <section className="relative pt-space-24 pb-space-16 px-6 md:px-8 overflow-hidden bg-slate-50/70">
      {/* Decorative ambient background glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1280px] mx-auto text-center relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center px-4 py-1.5 bg-indigo-50 text-indigo-700 rounded-full font-caption text-xs sm:text-sm font-semibold mb-space-8 border border-indigo-200/60 shadow-sm">
            <span className="material-symbols-outlined text-[18px] mr-2 text-indigo-600">settings_input_component</span>
            Engineering &amp; Cloud / Full-Lifecycle Product Engineering
          </motion.div>

          <motion.h1 variants={itemVariants} className="font-display-xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 max-w-5xl mx-auto mb-space-6 tracking-tight leading-tight">
            Engineering Built to Scale Your Business from <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-800">0 to 100</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="font-body-lg text-base sm:text-lg text-slate-600 max-w-3xl mx-auto mb-space-12 leading-relaxed">
            We don't just write code—we act as your technical engine. From rapid MVP deployment to enterprise infrastructure and continuous operations, we build software engineered for long-term business impact.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center mb-space-20">
            <Link to="/start-project">
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/25"
              >
                Plan Your Tech Strategy
                <span className="material-symbols-outlined text-[20px]">trending_up</span>
              </motion.button>
            </Link>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-slate-800 border border-slate-300 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 transition-all"
            >
              Explore Lifecycle Framework
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Impact Metrics */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-slate-200"
        >
          {metrics.map((m, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -4 }}
              className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm text-left hover:border-indigo-400 hover:shadow-xl transition-all group"
            >
              <span className="material-symbols-outlined text-indigo-600 mb-2 text-2xl group-hover:scale-110 transition-transform">{m.icon}</span>
              <div className="font-display-md text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1">{m.value}</div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{m.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

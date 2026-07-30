import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function CloudArchitectureHero() {
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
    { value: "99.99%", label: "Uptime & System Availability" },
    { value: "-40%", label: "Avg. Cloud Spend Optimization" },
    { value: "< 5 Min", label: "Zero-Downtime Deployments" },
    { value: "100%", label: "SOC2 & HIPAA Compliance" },
  ];

  return (
    <section className="relative pt-space-24 pb-space-24 px-6 md:px-8 max-w-[1280px] mx-auto overflow-hidden">
      {/* Background glow and subtle grid pattern */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[length:40px_40px] -z-10 opacity-60"></div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl"
      >
        <motion.span variants={itemVariants} className="inline-flex items-center gap-2 py-1.5 px-4 bg-indigo-50 text-indigo-700 border border-indigo-200/60 rounded-full font-caption text-xs sm:text-sm font-semibold mb-space-6 shadow-xs">
          <span className="material-symbols-outlined text-[18px] text-indigo-600">cloud</span>
          Engineering &amp; Cloud / Cloud Architecture
        </motion.span>

        <motion.h1 variants={itemVariants} className="font-display-xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-space-6 text-slate-900 leading-tight tracking-tight">
          Resilient Infrastructure Design &amp; <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-800">Automated Cloud Deployment</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="font-body-lg text-base sm:text-lg text-slate-600 mb-space-10 max-w-2xl leading-relaxed">
          Architecting high-availability, auto-scaling cloud foundations on AWS and GCP designed to handle traffic spikes, reduce cloud spend, and eliminate downtime.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-space-16">
          <Link to="/start-project">
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/25"
            >
              Audit Your Infrastructure
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </motion.button>
          </Link>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="border border-slate-300 bg-white text-slate-800 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 transition-all"
          >
            Explore Cloud Services
          </motion.button>
        </motion.div>
      </motion.div>
      
      {/* Metrics Grid */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-space-12 pt-8 border-t border-slate-200/80"
      >
        {metrics.map((m, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -4 }}
            className="p-6 border border-slate-200/80 rounded-2xl bg-white shadow-xs hover:border-indigo-400 hover:shadow-xl transition-all"
          >
            <div className="font-display-md text-2xl sm:text-3xl font-extrabold text-indigo-600 mb-1">{m.value}</div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{m.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

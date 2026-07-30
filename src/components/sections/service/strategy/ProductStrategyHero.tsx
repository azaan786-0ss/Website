import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function ProductStrategyHero() {
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
    { value: "$50M+", label: "Client Funding Raised" },
    { value: "3x", label: "Faster Time-to-Market" },
    { value: "98%", label: "Market Alignment" },
    { value: "50+", label: "MVPs Launched" },
  ];

  return (
    <header className="pt-space-32 pb-space-24 px-6 md:px-8 relative overflow-hidden">
      {/* Decorative Ambient Glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto flex flex-col items-start gap-space-6"
      >
        <motion.span variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 font-caption text-xs sm:text-sm font-semibold uppercase tracking-wider border border-indigo-200/60 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
          Product &amp; Design / Product Strategy
        </motion.span>

        <motion.h1 variants={itemVariants} className="font-display-xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold max-w-4xl text-slate-900 leading-tight">
          Defining Clear Roadmaps and Value Propositions for <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-800">Market Success</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="font-body-lg text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
          De-risk your product investment with data-driven market validation, prioritized feature roadmaps, and agile execution strategies built for growth.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-space-4">
          <Link to="/start-project">
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-indigo-600/25"
            >
              Book Strategy Session
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </motion.button>
          </Link>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="border border-slate-300 text-slate-800 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 transition-all duration-300"
          >
            Explore Roadmaps
          </motion.button>
        </motion.div>

        {/* Impact Metrics Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full mt-space-16 pt-space-12 border-t border-slate-200"
        >
          {metrics.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -4 }}
              className="flex flex-col bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-indigo-400 transition-all group"
            >
              <span className="font-display-md text-3xl sm:text-4xl font-extrabold text-indigo-600 mb-1 group-hover:scale-105 transition-transform">{item.value}</span>
              <span className="font-caption text-xs sm:text-sm text-slate-500 uppercase tracking-wider font-semibold">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </header>
  );
}

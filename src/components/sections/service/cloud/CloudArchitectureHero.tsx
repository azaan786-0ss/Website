import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import { SplitText } from '../../../ui/SplitText';

export function CloudArchitectureHero() {
  const titleText = 'Resilient Infrastructure & Automated Cloud Deployment';

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

  const metrics = [
    { value: '99.99%', label: 'Uptime & System Availability' },
    { value: '-40%', label: 'Avg. Cloud Spend Optimization' },
    { value: '< 5 Min', label: 'Zero-Downtime Deployments' },
    { value: '100%', label: 'SOC2 & HIPAA Compliance' },
  ];

  return (
    <section className="relative pt-6 sm:pt-10 pb-16 px-6 md:px-8 max-w-[1280px] mx-auto overflow-hidden">
      {/* Background glow and subtle grid pattern */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl"
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
          <span className="text-slate-900 font-medium">Cloud Architecture</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-slate-900 font-display-xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-slate-900 leading-tight tracking-tight"
        >
          <SplitText text={titleText} />
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="font-body-lg text-base sm:text-lg text-slate-600 mb-8 max-w-2xl leading-relaxed"
        >
          Architecting high-availability, auto-scaling cloud foundations on AWS and GCP designed to
          handle traffic spikes, reduce cloud spend, and eliminate downtime.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-12">
          <Link to="/start-project" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/25 w-full sm:w-auto"
            >
              Audit Your Infrastructure
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </motion.button>
          </Link>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="border border-slate-300 bg-white text-slate-800 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 transition-all w-full sm:w-auto"
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
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-slate-200/80"
      >
        {metrics.map((m, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -4 }}
            className="p-6 border border-slate-200/80 rounded-2xl bg-white shadow-xs hover:border-indigo-400 hover:shadow-xl transition-all"
          >
            <div className="font-display-md text-2xl sm:text-3xl font-extrabold text-indigo-600 mb-1">
              {m.value}
            </div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              {m.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

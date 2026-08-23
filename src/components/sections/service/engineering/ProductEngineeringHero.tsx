import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import { SplitText } from '../../../ui/SplitText';

export function ProductEngineeringHero() {
  const titleText = 'Engineering Built to Scale Your Business from 0 to 100';

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
    { icon: 'bolt', value: '0-to-1', label: 'MVP Velocity' },
    { icon: 'cloud_done', value: '99.99%', label: 'Enterprise Uptime' },
    { icon: 'account_tree', value: 'Zero-Debt', label: 'Architecture' },
    { icon: 'verified', value: 'End-to-End', label: 'Ownership' },
  ];

  return (
    <section className="relative pt-6 sm:pt-10 pb-16 px-6 md:px-8 overflow-hidden bg-slate-50/70 dark:bg-[#050505] transition-colors duration-300">
      {/* Decorative ambient background glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1280px] mx-auto relative z-10">
        {/* Left-Aligned Breadcrumbs */}
        <div className="w-full flex items-center justify-start text-left mb-6">
          <div className="flex items-center space-x-2 text-slate-500 dark:text-[#a3a3a3] font-caption text-xs sm:text-sm">
            <Link className="hover:text-indigo-600 dark:hover:text-[#4f46e5] transition-colors" to="/">
              Home
            </Link>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <Link className="hover:text-indigo-600 dark:hover:text-[#4f46e5] transition-colors" to="/services">
              Services
            </Link>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <span className="text-slate-900 dark:text-[#fafafa] font-medium">Product Engineering</span>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-slate-900 dark:text-[#fafafa] font-display-xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold max-w-5xl mx-auto mb-6 tracking-tight leading-tight"
          >
            <SplitText text={titleText} />
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-body-lg text-base sm:text-lg text-slate-600 dark:text-[#a3a3a3] max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            We don't just write code—we act as your technical engine. From rapid MVP deployment to
            enterprise infrastructure and continuous operations, we build software engineered for
            long-term business impact.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center mb-12">
            <Link to="/start-project">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-indigo-600 dark:bg-[#4f46e5] text-white dark:text-[#fafafa] px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 dark:hover:bg-[#4338ca] transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/25 dark:shadow-[#4f46e5]/20"
              >
                Plan Your Tech Strategy
                <span className="material-symbols-outlined text-[20px]">trending_up</span>
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white dark:bg-transparent text-slate-800 dark:text-[#fafafa] border border-slate-300 dark:border-[#262626] px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-[#111111] transition-all"
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
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-slate-200 dark:border-[#262626]"
        >
          {metrics.map((m, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-[#111111] p-6 rounded-2xl border border-slate-200/80 dark:border-[#262626] shadow-sm text-left hover:border-indigo-400 dark:hover:border-[#c084fc] hover:shadow-xl dark:hover:shadow-[#c084fc]/10 transition-all group"
            >
              <span className="material-symbols-outlined text-indigo-600 dark:text-[#c084fc] mb-2 text-2xl group-hover:scale-110 transition-transform">
                {m.icon}
              </span>
              <div className="font-display-md text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-[#fafafa] mb-1">
                {m.value}
              </div>
              <div className="text-xs font-semibold text-slate-500 dark:text-[#a3a3a3] uppercase tracking-wider">
                {m.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

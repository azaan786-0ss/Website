import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import { SplitText } from '../../../ui/SplitText';

export function ProductStrategyHero() {
  const titleText = 'Defining Clear Roadmaps & Value Propositions for Market Success';

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
    { value: '$50M+', label: 'Client Funding Raised' },
    { value: '3x', label: 'Faster Time-to-Market' },
    { value: '98%', label: 'Market Alignment' },
    { value: '50+', label: 'MVPs Launched' },
  ];

  return (
    <header className="pt-6 sm:pt-10 pb-16 px-6 md:px-8 relative overflow-hidden max-w-[1280px] mx-auto">
      {/* Decorative Ambient Glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Left-Aligned Breadcrumb Navigation */}
      <div className="w-full flex items-center justify-start text-left mb-6 relative z-20">
        <div className="flex items-center space-x-2 text-slate-500 font-caption text-xs sm:text-sm">
          <Link className="hover:text-indigo-600 transition-colors" to="/">
            Home
          </Link>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <Link className="hover:text-indigo-600 transition-colors" to="/services">
            Services
          </Link>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <span className="text-slate-900 font-medium">Product Strategy</span>
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full flex flex-col items-start gap-6"
      >
        <motion.h1
          variants={itemVariants}
          className="animate-shine bg-clip-text text-transparent bg-[linear-gradient(110deg,#0f172a,45%,#6366f1,55%,#0f172a)] bg-[length:200%_100%] font-display-xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold max-w-4xl text-slate-900 leading-tight tracking-tight"
        >
          <SplitText text={titleText} />
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="font-body-lg text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed"
        >
          De-risk your product investment with data-driven market validation, prioritized feature
          roadmaps, and agile execution strategies built for growth.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-2">
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
          className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full mt-12 pt-8 border-t border-slate-200"
        >
          {metrics.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="flex flex-col bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-indigo-400 transition-all group"
            >
              <span className="font-display-md text-3xl sm:text-4xl font-extrabold text-indigo-600 mb-1 group-hover:scale-105 transition-transform">
                {item.value}
              </span>
              <span className="font-caption text-xs sm:text-sm text-slate-500 uppercase tracking-wider font-semibold">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </header>
  );
}

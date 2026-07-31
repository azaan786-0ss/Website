import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import { SplitText } from '../../../ui/SplitText';

export function BrandIdentityHero() {
  const titleText = 'Developing Cohesive Visual Systems That Communicate Core Values';

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
    { value: '100%', label: 'Brand Consistency' },
    { value: '30+', label: 'Rebrands Completed' },
    { value: '10x', label: 'Recognition Impact' },
    { value: 'Full', label: 'Token Handoff' },
  ];

  return (
    <section className="relative pt-6 sm:pt-10 pb-16 px-6 md:px-8 max-w-[1280px] mx-auto overflow-hidden">
      {/* Decorative Background Radial Glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

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
          <span className="text-slate-900 font-medium">Brand Identity</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          <motion.h1
            variants={itemVariants}
            className="animate-shine bg-clip-text text-transparent bg-[linear-gradient(110deg,#0f172a,45%,#6366f1,55%,#0f172a)] bg-[length:200%_100%] font-display-xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight"
          >
            <SplitText text={titleText} />
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-body-lg text-base sm:text-lg text-slate-600 mb-8 max-w-2xl leading-relaxed"
          >
            We craft distinctive brand identities, design systems, and digital visual positioning
            that capture attention and build long-term enterprise trust.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            <Link to="/start-project">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold shadow-lg shadow-indigo-600/25 hover:bg-indigo-700 transition-all flex items-center gap-2"
              >
                Request Brand Deck
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border border-slate-300 text-slate-800 rounded-xl font-semibold hover:bg-slate-50 transition-all"
            >
              See Brand Work
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Impact Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-slate-200"
        >
          {metrics.map((m, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:border-indigo-400 hover:shadow-xl transition-all group"
            >
              <div className="text-indigo-600 font-display-md text-3xl sm:text-4xl font-extrabold mb-1 group-hover:scale-105 transition-transform">
                {m.value}
              </div>
              <div className="font-caption text-xs sm:text-sm text-slate-500 uppercase font-semibold tracking-wider">
                {m.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

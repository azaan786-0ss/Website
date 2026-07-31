import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import { SplitText } from '../../../ui/SplitText';

export function UxUiHero() {
  const titleText = 'Crafting Intuitive, High-Converting Digital Experiences';

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
    { value: '+45%', label: 'Avg. Conversion Rate' },
    { value: '120+', label: 'Screens Designed' },
    { value: '100%', label: 'Accessible (WCAG AA)' },
    { value: '< 4 Wks', label: 'Avg. Delivery' },
  ];

  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-8 mb-16 pt-6 sm:pt-10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Left-Aligned Breadcrumb Back Navigation */}
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
          <span className="text-slate-900 font-medium">UX/UI Design</span>
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16"
      >
        <motion.h1
          variants={itemVariants}
          className="animate-shine bg-clip-text text-transparent bg-[linear-gradient(110deg,#0f172a,45%,#6366f1,55%,#0f172a)] bg-[length:200%_100%] font-display-xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-slate-900 leading-tight"
        >
          <SplitText text={titleText} />
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="font-body-lg text-sm sm:text-base md:text-lg text-slate-600 mb-8 max-w-2xl leading-relaxed"
        >
          We blend deep user research, strategic interaction design, and pixel-perfect UI to
          transform complex workflows into effortless web and mobile products.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
        >
          <Link to="/start-project" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto shadow-lg shadow-indigo-600/25"
            >
              Schedule a UX Audit
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </motion.button>
          </Link>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="border border-slate-300 text-slate-800 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 transition-all duration-300 w-full sm:w-auto"
          >
            View Case Studies
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Impact Metrics Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
      >
        {metrics.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-indigo-400 hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col items-center text-center group"
          >
            <span className="text-indigo-600 font-display-md text-3xl sm:text-4xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300">
              {item.value}
            </span>
            <span className="text-slate-500 font-caption text-xs sm:text-sm uppercase tracking-wider font-medium">
              {item.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

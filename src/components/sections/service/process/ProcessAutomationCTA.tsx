import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function ProcessAutomationCTA() {
  return (
    <section className="py-20 md:py-24 px-6 md:px-8 max-w-[1280px] mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="bg-slate-900 dark:bg-[#111111] text-white dark:text-[#fafafa] rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden shadow-2xl shadow-slate-950/20 dark:shadow-[#050505]/50 border border-slate-800 dark:border-[#262626]"
      >
        {/* Ambient Gradient Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 bg-indigo-500/10 text-indigo-300 dark:text-[#c084fc] border border-indigo-500/20 dark:border-[#c084fc]/30 rounded-full font-caption text-xs sm:text-sm font-semibold uppercase tracking-wider">
            <span className="material-symbols-outlined text-[18px]">bolt</span>
            AUTOMATE YOUR OPERATIONS
          </span>

          <h2 className="font-display-lg text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white dark:text-[#fafafa] leading-tight">
            Ready to eliminate manual overhead & scale faster?
          </h2>

          <p className="font-body-lg text-base sm:text-lg text-slate-300 dark:text-[#a3a3a3] max-w-2xl mx-auto leading-relaxed">
            Schedule an operational audit with our senior automation architects to identify
            bottlenecks and design bespoke autonomous workflows.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/start-project" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-4 bg-indigo-600 dark:bg-[#4f46e5] hover:bg-indigo-500 dark:hover:bg-[#4338ca] text-white dark:text-[#fafafa] font-bold rounded-xl text-base shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2"
              >
                Book an Operational Audit
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

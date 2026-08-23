import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function ProductStrategyCTA() {
  return (
    <section className="py-space-24 px-6 md:px-8 bg-slate-50/60 dark:bg-[#0B0E14] transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center bg-white dark:bg-[#12151C] p-8 sm:p-12 md:p-16 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xl relative overflow-hidden"
      >
        <div className="relative z-10">
          <h2 className="font-display-lg text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-[#f3f4f6] mb-space-6 tracking-tight">
            Turn your product vision into a{' '}
            <span className="text-indigo-600 dark:text-[#818cf8]">scalable roadmap.</span>
          </h2>
          <p className="text-slate-600 dark:text-[#9ca3af] text-base sm:text-lg max-w-xl mx-auto mb-space-8 leading-relaxed">
            Stop guessing and start building with precision. Our strategists are ready to de-risk
            your next big move.
          </p>
          <Link to="/start-project">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-indigo-600 dark:bg-[#818cf8] text-white dark:text-[#1e1b4b] px-8 sm:px-12 py-4 rounded-xl font-bold text-base sm:text-lg shadow-xl shadow-indigo-600/25 dark:shadow-indigo-500/20 hover:bg-indigo-700 dark:hover:bg-[#6366f1] transition-all"
            >
              Schedule a Discovery Call
            </motion.button>
          </Link>
        </div>
        {/* Decorative blobs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"
        />
      </motion.div>
    </section>
  );
}

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function PerformanceOptimizationCTA() {
  return (
    <section className="py-space-32 px-6 md:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[1000px] mx-auto rounded-3xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden bg-indigo-600 text-white shadow-2xl"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-24 -right-24 w-96 h-96 bg-white/20 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-400/30 rounded-full blur-3xl pointer-events-none"
        />

        <div className="relative z-10">
          <h2 className="font-display-md text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 tracking-tight leading-tight">
            Is slow performance costing you users and revenue?
          </h2>
          <p className="font-body-lg text-base sm:text-lg mb-10 text-indigo-100 max-w-2xl mx-auto leading-relaxed">
            Work with our performance engineers to identify hidden bottlenecks and scale your system
            to the next level of growth.
          </p>
          <Link to="/start-project">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-indigo-600 px-10 py-4 rounded-xl font-bold text-base shadow-xl shadow-indigo-900/20 hover:shadow-2xl transition-all"
            >
              Schedule Performance Review
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

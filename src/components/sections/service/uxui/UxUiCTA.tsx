import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function UxUiCTA() {
  return (
    <section className="bg-indigo-600 dark:bg-[#12151C] py-space-24 relative overflow-hidden transition-colors duration-300 dark:border-t dark:border-slate-800">
      {/* Animated background glow circles */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-24 -right-24 w-96 h-96 bg-white/20 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-400/30 dark:bg-purple-500/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-[1280px] mx-auto px-6 md:px-8 text-center text-white relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display-lg text-3xl sm:text-4xl md:text-5xl font-extrabold mb-space-6 tracking-tight dark:text-[#f3f4f6]"
        >
          Ready to elevate your product UI?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-indigo-100 dark:text-[#9ca3af] font-body-lg text-base sm:text-lg mb-space-12 max-w-xl mx-auto leading-relaxed"
        >
          Join dozens of companies scaling faster with user-centric design that actually works.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link to="/start-project">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white dark:bg-[#818cf8] text-indigo-600 dark:text-[#1e1b4b] px-8 sm:px-12 py-4 rounded-xl font-bold text-base sm:text-lg shadow-xl shadow-indigo-900/20 dark:shadow-indigo-500/10 hover:shadow-2xl transition-all"
            >
              Book a Free UX Consultation
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

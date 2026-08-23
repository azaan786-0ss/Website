import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function ProductEngineeringCTA() {
  return (
    <section className="py-space-32 px-6 md:px-8 dark:bg-[#050505] transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[1000px] mx-auto rounded-3xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden bg-indigo-600 dark:bg-[#111111] text-white shadow-2xl dark:border dark:border-[#262626]"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-24 -right-24 w-96 h-96 bg-white/20 dark:bg-[#c084fc]/10 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-400/30 dark:bg-[#4f46e5]/10 rounded-full blur-3xl pointer-events-none"
        />

        <div className="relative z-10">
          <h2 className="text-white dark:text-[#fafafa] font-display-md text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 tracking-tight leading-tight">
            Need an engineering partner to take your business from 0 to 100?
          </h2>
          <p className="font-body-lg text-base sm:text-lg mb-10 text-indigo-100 dark:text-[#a3a3a3] max-w-2xl mx-auto leading-relaxed">
            Skip the technical debt and hire an engineering team that builds for the future. Let's
            discuss your product roadmap today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/start-project">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white dark:bg-[#4f46e5] text-indigo-600 dark:text-[#fafafa] px-8 py-4 rounded-xl font-bold text-base shadow-xl shadow-indigo-900/20 dark:shadow-[#4f46e5]/20 hover:shadow-2xl dark:hover:bg-[#4338ca] transition-all"
              >
                Consult an Engineer
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-transparent text-white dark:text-[#fafafa] border border-white/40 dark:border-[#262626] px-8 py-4 rounded-xl font-bold text-base hover:bg-white/10 dark:hover:bg-[#262626] transition-all"
            >
              View Pricing Framework
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

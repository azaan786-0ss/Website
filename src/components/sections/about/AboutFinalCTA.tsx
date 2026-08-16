import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function AboutFinalCTA() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-8 max-w-[1400px] mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-slate-900 dark:from-[#0A0A0A] dark:via-black dark:to-[#050505] dark:border dark:border-zinc-800 text-white rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl"
      >
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/10 dark:bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-indigo-500/20 dark:bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="font-display-lg text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Ready to elevate your engineering?
          </h2>

          <p className="font-body-lg text-base sm:text-lg md:text-xl text-indigo-100/90 dark:text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Partner with a team that values architecture, performance, and transparency as much as you do.
          </p>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link 
              to="/start-project" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white dark:bg-[#050505] text-indigo-700 dark:text-white hover:bg-slate-50 dark:hover:bg-zinc-900 border border-transparent dark:border-zinc-850 font-bold text-base sm:text-lg rounded-2xl shadow-xl transition-all duration-300 group"
            >
              Start a Conversation
              <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

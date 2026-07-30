import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function AboutFinalCTA() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-8 max-w-[1280px] mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-slate-900 text-white rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl"
      >
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 py-1 px-3.5 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-caption text-xs font-semibold mb-6">
            <span className="material-symbols-outlined text-[16px]">rocket_launch</span>
            READY TO SCALE?
          </span>

          <h2 className="font-display-lg text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Ready to elevate your engineering?
          </h2>

          <p className="font-body-lg text-base sm:text-lg md:text-xl text-indigo-100/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Partner with a team that values architecture, performance, and transparency as much as you do.
          </p>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link 
              to="/start-project" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-indigo-700 hover:bg-slate-50 font-bold text-base sm:text-lg rounded-2xl shadow-xl transition-all duration-300 group"
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

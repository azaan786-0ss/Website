import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function BrandIdentityCTA() {
  return (
    <section className="py-space-32 px-6 md:px-8">
      <motion.div 
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-indigo-600 rounded-3xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden shadow-2xl"
      >
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -right-24 w-96 h-96 bg-white/20 rounded-full blur-3xl pointer-events-none" 
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-400/30 rounded-full blur-3xl pointer-events-none" 
        />

        <div className="relative z-10">
          <h2 className="text-white font-display-lg text-2xl sm:text-3xl md:text-4xl font-extrabold mb-space-6 tracking-tight">
            Ready to build an unforgettable brand?
          </h2>
          <p className="text-indigo-100 font-body-lg text-base sm:text-lg mb-space-12 max-w-2xl mx-auto leading-relaxed">
            Partner with our strategic design team to transform your visual identity into a competitive advantage.
          </p>
          <Link to="/start-project">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-white text-indigo-600 rounded-xl font-bold text-base sm:text-lg shadow-xl shadow-indigo-900/20 hover:shadow-2xl transition-all"
            >
              Start Your Rebrand
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

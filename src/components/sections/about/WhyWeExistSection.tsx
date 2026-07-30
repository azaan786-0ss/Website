import { motion } from "framer-motion";

export function WhyWeExistSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="py-20 md:py-32 px-6 md:px-8 max-w-[1100px] mx-auto">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col md:flex-row gap-12 md:gap-24 items-start"
      >
        <motion.div variants={itemVariants} className="md:w-1/3 shrink-0">
          <span className="inline-flex items-center gap-2 py-1 px-3.5 bg-indigo-50 text-indigo-700 border border-indigo-200/60 rounded-full font-caption text-xs font-semibold mb-6">
            OUR ORIGIN STORY
          </span>
          <h2 className="font-display-lg text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Why We Exist.
          </h2>
        </motion.div>

        <motion.div variants={itemVariants} className="md:w-2/3 space-y-8">
          <p className="font-display-md text-xl sm:text-2xl text-slate-900 font-medium leading-relaxed">
            Nexus Strategy was born from a frustration with the ephemeral nature of modern digital agencies. Too often, we saw brilliant ideas hampered by fragile execution and short-term thinking.
          </p>
          
          <div className="w-12 h-1 bg-indigo-600 rounded-full" />
          
          <p className="font-body-lg text-lg text-slate-600 leading-relaxed">
            We exist to bridge the gap between visionary strategy and meticulous technical execution. We don't just build products; we engineer systems that empower ambitious companies to lead their industries with unshakeable digital foundations.
          </p>
          
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-2 font-bold text-slate-900 text-lg mb-2">
                <span className="material-symbols-outlined text-indigo-600">code_blocks</span>
                Zero Technical Debt
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                We write clean, scalable code standards from day one, ensuring your platform never slows down your growth.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2 font-bold text-slate-900 text-lg mb-2">
                <span className="material-symbols-outlined text-indigo-600">track_changes</span>
                Strategic Clarity
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                Every architectural decision is mapped directly to your business objectives and data-backed roadmaps.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

import { motion } from "framer-motion";
import { PhilosophyStats } from "./PhilosophyStats";

export function AboutHeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
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
    <>
      <section className="relative pt-24 pb-16 md:pb-24 px-6 md:px-8 max-w-[1400px] mx-auto overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1 variants={itemVariants} className="font-display-xl text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
            Engineering, <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-800 dark:from-indigo-400 dark:via-indigo-300 dark:to-indigo-500">Elevated.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="font-body-lg text-base sm:text-lg md:text-xl text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-4">
            We build digital infrastructure that scales. Not just code, but sustainable systems designed for long-term strategic advantage. We believe in the quiet confidence of exceptional engineering.
          </motion.p>
        </motion.div>
      </section>

      {/* Philosophy Stats */}
      <div className="w-full mx-auto pb-16 px-6 md:px-8">
        <PhilosophyStats />
      </div>
    </>
  );
}

import { motion } from "framer-motion";

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

  const stats = [
    { label: "Years Experience", value: "10+" },
    { label: "Enterprise Projects", value: "150+" },
    { label: "Uptime Guaranteed", value: "99.99%" },
    { label: "Client Retention", value: "98%" },
  ];

  return (
    <section className="relative pt-12 pb-16 md:pb-24 px-6 md:px-8 max-w-[1280px] mx-auto overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 py-1.5 px-4 bg-indigo-50 text-indigo-700 border border-indigo-200/60 rounded-full font-caption text-xs sm:text-sm font-semibold mb-6 shadow-xs">
          <span className="material-symbols-outlined text-[18px] text-indigo-600">stars</span>
          OUR MISSION &amp; VISION
        </motion.div>

        <motion.h1 variants={itemVariants} className="font-display-xl text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
          Engineering, <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-800">Elevated.</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="font-body-lg text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-12">
          We build digital infrastructure that scales. Not just code, but sustainable systems designed for long-term strategic advantage. We believe in the quiet confidence of exceptional engineering.
        </motion.p>

        {/* Stats Grid */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-4"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="bg-white/80 backdrop-blur-sm p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:border-indigo-300 hover:shadow-md transition-all duration-300"
            >
              <div className="font-display-md text-2xl sm:text-3xl font-bold text-indigo-600 mb-1">{stat.value}</div>
              <div className="text-xs sm:text-sm font-medium text-slate-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

import { motion } from "framer-motion";

export function PrinciplesSection() {
  const principles = [
    {
      title: "Architecture First",
      desc: "We believe immediate execution without structural planning is a liability. Solid foundations dictate long-term success.",
      icon: "architecture",
    },
    {
      title: "Data Over Dogma",
      desc: "Decisions are driven by empirical evidence and performance metrics, not assumptions or fleeting industry trends.",
      icon: "analytics",
    },
    {
      title: "Radical Transparency",
      desc: "Clear, honest communication regarding timelines, challenges, and costs. No obfuscation, just partnership.",
      icon: "handshake",
    },
    {
      title: "Performance as Feature",
      desc: "Speed and efficiency are not afterthoughts; they are core requirements engineered into every layer of the stack.",
      icon: "speed",
    },
    {
      title: "Continuous Evolution",
      desc: "Technology is never finished. We build adaptable systems designed to embrace inevitable future change gracefully.",
      icon: "update",
    },
    {
      title: "Security by Design",
      desc: "Enterprise compliance, threat modeling, and zero-trust paradigms embedded directly into our development lifecycle.",
      icon: "shield_lock",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="py-16 md:py-24 px-6 md:px-8 max-w-[1280px] mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-flex items-center gap-2 py-1 px-3.5 bg-indigo-50 text-indigo-700 border border-indigo-200/60 rounded-full font-caption text-xs font-semibold mb-4">
          CORE VALUES
        </span>
        <h2 className="font-display-lg text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Operating Principles
        </h2>
        <p className="text-slate-600 text-base sm:text-lg mt-4">
          The non-negotiable standards that guide how we engineer software and build client partnerships.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        {principles.map((item, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -6 }}
            className="p-6 sm:p-8 bg-white border border-slate-200/80 rounded-2xl shadow-sm hover:shadow-xl hover:border-indigo-300 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 mb-6 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shadow-xs">
                <span className="material-symbols-outlined text-[26px]">
                  {item.icon}
                </span>
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              LEARN MORE <span className="material-symbols-outlined text-[16px] ml-1">arrow_forward</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

import { motion } from "framer-motion";

export function AboutTimeline() {
  const steps = [
    {
      num: "01",
      title: "Discover",
      desc: "Deep systemic analysis of your current technical debt, market position, and strategic objectives to define a clear architectural roadmap.",
      icon: "search",
    },
    {
      num: "02",
      title: "Design",
      desc: "Creating robust blueprints for user experience and system architecture. We prioritize elegant, scalable patterns over immediate, fragile solutions.",
      icon: "architecture",
    },
    {
      num: "03",
      title: "Build",
      desc: "Meticulous execution by senior engineers. We employ rigorous testing, code reviews, and continuous integration to ensure enterprise-grade stability.",
      icon: "code",
    },
    {
      num: "04",
      title: "Launch",
      desc: "Orchestrated deployment with zero-downtime strategies. We manage the complexity of transition so your operations remain uninterrupted.",
      icon: "rocket_launch",
    },
    {
      num: "05",
      title: "Support",
      desc: "Long-term partnership ensuring system evolution, security patching, and strategic scaling as your business demands grow.",
      icon: "published_with_changes",
    },
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="py-16 md:py-24 px-6 md:px-8 max-w-[1400px] mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-display-lg text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          The Engineering Process
        </h2>
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Vertical line indicator */}
        <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 bg-indigo-100 -translate-x-1/2 hidden md:block" />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8 md:space-y-12"
        >
          {steps.map((step, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className={`flex flex-col md:flex-row items-start ${isEven ? "md:flex-row-reverse" : ""} group`}
              >
                {/* Content Card */}
                <div className="w-full md:w-[calc(50%-2.5rem)]">
                  <motion.div 
                    whileHover={{ y: -4 }}
                    className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-indigo-300 transition-all duration-300 relative"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 font-bold flex items-center justify-center text-sm group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                        {step.num}
                      </span>
                      <span className="material-symbols-outlined text-slate-400 group-hover:text-indigo-600 transition-colors">
                        {step.icon}
                      </span>
                    </div>
                    <h3 className="font-bold text-xl text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>
                </div>

                {/* Node icon in center for desktop */}
                <div className="hidden md:flex w-20 justify-center items-center relative z-10 my-auto">
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-indigo-200 group-hover:border-indigo-600 group-hover:bg-indigo-600 text-indigo-600 group-hover:text-white flex items-center justify-center font-bold text-xs shadow-md transition-colors duration-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 group-hover:bg-white transition-colors" />
                  </div>
                </div>

                {/* Empty space for grid symmetry */}
                <div className="hidden md:block w-[calc(50%-2.5rem)]" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

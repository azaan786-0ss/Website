import { motion } from "framer-motion";

export function UxUiCapabilities() {
  const capabilities = [
    {
      icon: "search",
      title: "User Research & Testing",
      desc: "Heuristic evaluations, user interviews, and usability testing to validate every decision with real data.",
    },
    {
      icon: "layers",
      title: "Wireframing & Prototyping",
      desc: "Interactive low-to-high fidelity click-through prototypes that bring concepts to life before development.",
    },
    {
      icon: "auto_awesome_mosaic",
      title: "Design Systems & Tokens",
      desc: "Scalable Figma design systems and reusable UI components to ensure consistency across your entire product.",
    },
    {
      icon: "devices",
      title: "Mobile & Web App Design",
      desc: "Responsive layouts and native iOS/Android design standards crafted for perfect performance on any screen.",
    },
    {
      icon: "animation",
      title: "Micro-Interactions & Motion",
      desc: "Delightful UI transitions and purposeful motion design that guide users and elevate the premium feel.",
    },
    {
      icon: "fact_check",
      title: "UX Audit & Optimization",
      desc: "Identifying friction points and conversion bottlenecks through expert analysis and data-driven insights.",
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

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="bg-slate-50/70 py-space-24 relative">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-space-12 text-center"
        >
          <h2 className="font-display-lg text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-space-4">Core Capabilities</h2>
          <p className="text-slate-600 max-w-xl mx-auto font-body-md text-base">End-to-end design excellence tailored for modern digital ecosystems.</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {capabilities.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-space-6 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
                </div>
                <h3 className="font-heading-md text-lg sm:text-xl font-bold text-slate-900 mb-space-3 group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 font-body-md leading-relaxed text-sm sm:text-base">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

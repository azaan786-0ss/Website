import { motion } from "framer-motion";

export function ProductStrategyCapabilities() {
  const capabilities = [
    {
      icon: "analytics",
      title: "Market & Discovery",
      desc: "Benchmarking, market positioning, and gap analysis to find your unfair advantage.",
    },
    {
      icon: "view_kanban",
      title: "MVP Scoping",
      desc: "Feature prioritization, scope management, and phase planning for initial launch.",
    },
    {
      icon: "route",
      title: "User Journey Mapping",
      desc: "Customer touchpoint analysis and friction elimination for seamless experiences.",
    },
    {
      icon: "payments",
      title: "Monetization Models",
      desc: "Value metric definition and SaaS pricing strategy optimized for LTV.",
    },
    {
      icon: "insights",
      title: "Growth Frameworks",
      desc: "North Star metric setup and retention analytics strategy for sustainable growth.",
    },
    {
      icon: "rocket_launch",
      title: "Lifecycle Management",
      desc: "Scaling strategy from seed stage through enterprise-level expansion.",
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
    <section className="py-space-24 px-6 md:px-8 bg-slate-50/60 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-space-12 text-center md:text-left"
        >
          <h2 className="font-display-lg text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900">Core Capabilities</h2>
          <p className="text-slate-600 mt-2 text-base">Comprehensive strategic support across the product lifecycle.</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {capabilities.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="p-8 rounded-2xl border border-slate-200/80 bg-white hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <span className="material-symbols-outlined text-indigo-600 mb-4 text-3xl group-hover:scale-110 transition-transform inline-block">
                  {item.icon}
                </span>
                <h3 className="font-heading-lg text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
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

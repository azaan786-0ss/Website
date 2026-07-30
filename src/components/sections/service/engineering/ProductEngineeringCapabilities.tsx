
import { motion } from "framer-motion";

export function ProductEngineeringCapabilities() {
  const capabilities = [
    {
      icon: "rocket_launch",
      title: "0-to-1 Rapid MVP Buildout",
      desc: "Translating business strategy into robust, market-ready digital products with a focus on speed-to-market without compromising quality.",
    },
    {
      icon: "architecture",
      title: "High-Scale System Architecture",
      desc: "Designing adaptable tech foundations capable of handling massive growth and extreme concurrency through cloud-native distributed patterns.",
    },
    {
      icon: "hub",
      title: "Core Business Logic Integration",
      desc: "Connecting complex workflows, payments, CRMs, and internal operations into a unified, high-integrity technical core.",
    },
    {
      icon: "security",
      title: "Continuous Performance & Security",
      desc: "Hardening platforms with proactive threat detection, automated compliance, and enterprise-grade data security protocols.",
    },
    {
      icon: "history_edu",
      title: "Legacy Modernization",
      desc: "Evolving initial prototypes and monolithic systems into maintainable, modern, and highly scalable microservices architectures.",
    },
    {
      icon: "settings_suggest",
      title: "Tech Governance & Infrastructure",
      desc: "Monitoring, cost optimization, CI/CD pipelines, and strategic ops support to ensure your technology remains an asset, not a liability.",
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
    <section className="py-space-32 bg-white px-6 md:px-8">
      <div className="max-w-[1280px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-space-16 gap-6"
        >
          <div className="max-w-2xl">
            <h2 className="font-heading-lg text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Comprehensive Engineering Ecosystem</h2>
            <p className="font-body-lg text-slate-600 text-base sm:text-lg">We bridge the gap between strategic business objectives and high-performance technical execution with a multi-disciplinary approach.</p>
          </div>
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
              className="group p-8 rounded-2xl border border-slate-200/80 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 bg-slate-50/50 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
                </div>
                <h3 className="font-heading-md text-lg sm:text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
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

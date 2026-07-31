import { motion, type Variants } from 'framer-motion';

export function ProcessAutomationCapabilities() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const capabilities = [
    {
      icon: 'hub',
      title: 'Custom Workflow Automation',
      desc: 'End-to-end automation of cross-departmental operations, syncing data seamlessly between internal platforms, CRMs, and communication tools.',
    },
    {
      icon: 'smart_toy',
      title: 'Operational AI & LLM Agents',
      desc: 'Integrating custom AI agents into business workflows to automate document parsing, customer ticket routing, and intelligent decisioning.',
    },
    {
      icon: 'integration_instructions',
      title: 'Enterprise Software Integration',
      desc: 'Connecting isolated business software—from accounting and ERPs to HR systems—with robust custom APIs and middleware.',
    },
    {
      icon: 'description',
      title: 'Automated Document & Data Processing',
      desc: 'Intelligent OCR and data extraction workflows that convert unstructured documents, invoices, and forms into structured database records.',
    },
    {
      icon: 'dynamic_feed',
      title: 'Trigger-Based Customer Lifecycle',
      desc: 'Automated messaging, onboarding sequences, and account management triggers based on real-time customer behavioral activity.',
    },
    {
      icon: 'precision_manufacturing',
      title: 'Robotic Process Automation (RPA)',
      desc: 'Software bots engineered to navigate legacy user interfaces, handling repetitive data entry where traditional APIs are unavailable.',
    },
  ];

  return (
    <section className="py-20 md:py-28 px-6 md:px-8 max-w-[1280px] mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mb-16"
      >
        <span className="inline-flex items-center gap-2 py-1.5 px-4 bg-indigo-50 text-indigo-700 border border-indigo-200/60 rounded-full font-caption text-xs sm:text-sm font-semibold mb-4 shadow-xs">
          <span className="material-symbols-outlined text-[18px] text-indigo-600">
            settings_suggest
          </span>
          CORE CAPABILITIES
        </span>
        <h2 className="font-display-lg text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          Autonomous Infrastructure Built for Scale
        </h2>
        <p className="font-body-lg text-base sm:text-lg text-slate-600 leading-relaxed">
          Engineering-grade solutions designed to bridge the gap between human creativity and
          operational scale.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        {capabilities.map((item, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl border border-slate-200/80 shadow-md hover:shadow-2xl hover:border-indigo-400 hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shadow-xs">
                <span className="material-symbols-outlined text-[28px]">{item.icon}</span>
              </div>
              <h3 className="font-display-sm text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                {item.title}
              </h3>
              <p className="font-body-md text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

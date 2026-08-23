import { motion } from 'framer-motion';

export function ProductStrategyDeliverables() {
  const deliverables = [
    'Product Requirement Documents (PRD)',
    'Feature Prioritization Matrix',
    'GTM Launch Playbook',
    'Interactive Strategic Roadmap Deck',
    'ROI & Growth Forecast',
  ];

  const frameworks = [
    { icon: 'workspaces', name: 'Jobs-to-be-Done' },
    { icon: 'filter_list', name: 'RICE Score' },
    { icon: 'view_compact', name: 'Lean Canvas' },
    { icon: 'layers', name: 'Agile Epics' },
  ];

  return (
    <section className="py-space-24 px-6 md:px-8 bg-white dark:bg-[#0B0E14] border-y border-slate-200/80 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2"
        >
          <h2 className="font-display-lg text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-[#f3f4f6] mb-space-8">
            Tangible Deliverables
          </h2>
          <div className="space-y-4">
            {deliverables.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-[#12151C] border border-slate-200/80 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500/50 transition-colors"
              >
                <span className="material-symbols-outlined text-indigo-600 dark:text-[#818cf8]">check_circle</span>
                <span className="font-semibold text-slate-900 dark:text-[#f3f4f6] text-sm sm:text-base">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 flex flex-wrap gap-4 justify-center"
        >
          {frameworks.map((fw, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.06, y: -4 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="flex flex-col items-center gap-3 p-8 rounded-2xl bg-indigo-50/50 dark:bg-[#12151C]/80 w-44 sm:w-48 text-center border border-indigo-100 dark:border-slate-800 shadow-sm hover:shadow-lg hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-indigo-600 dark:text-[#818cf8] text-4xl">{fw.icon}</span>
              <span className="font-bold text-slate-900 dark:text-[#f3f4f6] text-sm sm:text-base">{fw.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

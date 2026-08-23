import { motion } from 'framer-motion';

export function ApiDevelopmentDeliverables() {
  const deliverables = [
    'Production-ready OpenAPI (Swagger) specifications',
    'Shared Postman workspaces for testing & QA',
    'TypeScript & Python client-side SDKs',
    'API Gateway & WAF security configurations',
    'Comprehensive load testing & JMeter suites',
  ];

  const techStack = [
    { code: 'JS', name: 'Node.js' },
    { code: 'TS', name: 'TypeScript' },
    { code: 'Go', name: 'Golang' },
    { code: 'GQL', name: 'GraphQL' },
    { code: 'AWS', name: 'API Gateway' },
    { code: 'Redis', name: 'Redis Caching' },
    { code: 'Kong', name: 'Kong Gateway' },
    { code: 'PG', name: 'PostgreSQL' },
  ];

  return (
    <section className="py-space-32 bg-slate-50/80 dark:bg-[#050505] border-y border-slate-200/80 dark:border-[#262626] overflow-hidden transition-colors duration-300">
      <div className="px-6 md:px-8 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-display-md text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-[#fafafa] mb-8">
            Standard Deliverables
          </h3>
          <ul className="space-y-4">
            {deliverables.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-[#111111] border border-slate-200/80 dark:border-[#262626] shadow-xs hover:border-indigo-300 dark:hover:border-[#c084fc] transition-all group"
              >
                <span
                  className="material-symbols-outlined text-indigo-600 dark:text-[#c084fc] text-[24px] group-hover:scale-110 transition-transform"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <span className="font-semibold text-slate-800 dark:text-[#a3a3a3] text-sm sm:text-base">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-[#111111] p-8 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-[#262626] shadow-lg hover:shadow-2xl transition-all"
        >
          <h4 className="font-caption text-xs uppercase font-bold text-slate-400 dark:text-[#a3a3a3] tracking-widest mb-6 text-center">
            Engineering Stack
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {techStack.map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08, y: -4 }}
                className="flex flex-col items-center gap-2 cursor-pointer group"
              >
                <div className="w-12 h-12 bg-slate-50 dark:bg-[#050505] group-hover:bg-indigo-50 dark:group-hover:bg-[#4f46e5]/10 border border-slate-200 dark:border-[#262626] group-hover:border-indigo-300 dark:group-hover:border-[#c084fc] rounded-xl flex items-center justify-center font-extrabold text-sm text-slate-800 dark:text-[#fafafa] group-hover:text-indigo-600 dark:group-hover:text-[#c084fc] shadow-xs transition-all">
                  {t.code}
                </div>
                <span className="text-xs font-semibold text-slate-500 dark:text-[#a3a3a3] group-hover:text-slate-900 dark:group-hover:text-[#fafafa] transition-colors">
                  {t.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

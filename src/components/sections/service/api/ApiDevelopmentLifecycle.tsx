import { motion } from 'framer-motion';

export function ApiDevelopmentLifecycle() {
  const steps = [
    {
      step: 1,
      title: 'Schema & Contract Design',
      desc: 'Defining types, endpoints, and data flows using OpenAPI/Swagger specifications.',
    },
    {
      step: 2,
      title: 'Core Engineering & Middleware',
      desc: 'Building highly concurrent backend logic with robust logging and error handling.',
    },
    {
      step: 3,
      title: 'Security Hardening & Caching',
      desc: 'Implementing Redis layers, WAF rules, and comprehensive identity management.',
    },
    {
      step: 4,
      title: 'Docs, SDKs & Monitoring',
      desc: 'Continuous integration with automated testing and real-time observability dashboards.',
    },
  ];

  return (
    <section className="bg-white dark:bg-[#050505] py-space-32 overflow-hidden transition-colors duration-300">
      <div className="px-6 md:px-8 max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-space-16 text-center"
        >
          <h2 className="font-display-lg text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-[#fafafa] mb-space-4">
            The API Lifecycle
          </h2>
          <p className="font-body-lg text-slate-600 dark:text-[#a3a3a3] max-w-2xl mx-auto text-base sm:text-lg">
            A methodical approach to building robust digital bridges.
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-indigo-100 dark:bg-[#262626] -translate-y-6 z-0" />

          {steps.map((stg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{ y: -6 }}
              className="relative z-10 bg-slate-50 dark:bg-[#111111] p-8 border border-slate-200/80 dark:border-[#262626] rounded-2xl group transition-all duration-300 hover:border-indigo-300 dark:hover:border-[#c084fc] hover:shadow-xl hover:bg-white dark:hover:bg-[#111111] cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-600 dark:bg-[#4f46e5] text-white dark:text-[#fafafa] flex items-center justify-center font-extrabold text-lg mb-6 shadow-md shadow-indigo-600/20 dark:shadow-[#4f46e5]/20 group-hover:scale-110 transition-transform">
                  {stg.step}
                </div>
                <h4 className="font-bold text-slate-900 dark:text-[#fafafa] text-xl mb-3 group-hover:text-indigo-600 dark:group-hover:text-[#c084fc] transition-colors">
                  {stg.title}
                </h4>
                <p className="text-slate-600 dark:text-[#a3a3a3] text-sm leading-relaxed">{stg.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

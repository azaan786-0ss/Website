import { motion } from 'framer-motion';

export function CloudArchitectureRoadmap() {
  const steps = [
    {
      num: 'Step 1',
      title: 'Cloud Audit & Risk Assessment',
      desc: 'In-depth evaluation of existing workloads, identifying security gaps and cost bottlenecks.',
      alignLeft: true,
    },
    {
      num: 'Step 2',
      title: 'Architecture Blueprint & Topology',
      desc: 'Declarative IaC templates and VPC network design tailored for security and speed.',
      alignLeft: false,
    },
    {
      num: 'Step 3',
      title: 'Automated Migration & Execution',
      desc: 'Phased, zero-downtime data migration and container orchestration deployment.',
      alignLeft: true,
    },
    {
      num: 'Step 4',
      title: 'Continuous Observability & Tuning',
      desc: 'Real-time dashboards, FinOps controls, and proactive infrastructure scaling.',
      alignLeft: false,
    },
  ];

  return (
    <section className="py-space-32 bg-white dark:bg-[#050505] overflow-hidden transition-colors duration-300">
      <div className="px-6 md:px-8 max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-space-16"
        >
          <h2 className="font-display-lg text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-[#fafafa] mb-space-4">
            Modernization Roadmap
          </h2>
          <p className="text-slate-600 dark:text-[#a3a3a3] max-w-xl mx-auto text-base sm:text-lg">
            A proven engineering process to transition legacy stacks into high-performance cloud
            ecosystems.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Progress Line */}
          <div className="absolute left-5 sm:left-6 md:left-1/2 top-4 bottom-4 w-[2px] bg-indigo-200 dark:bg-[#c084fc]/30 -translate-x-1/2"></div>

          <div className="space-y-10 sm:space-y-12 md:space-y-16">
            {steps.map((stg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="relative flex flex-row md:flex-row items-start md:items-center group"
              >
                {stg.alignLeft ? (
                  <>
                    <div className="order-2 md:order-1 flex-1 pl-4 sm:pl-6 md:pl-0 md:pr-12 text-left md:text-right">
                      <span className="text-indigo-600 dark:text-[#c084fc] font-bold text-xs uppercase tracking-wider mb-1 block">
                        {stg.num}
                      </span>
                      <h3 className="font-bold text-slate-900 dark:text-[#fafafa] text-lg sm:text-xl md:text-2xl mb-1.5 sm:mb-2 group-hover:text-indigo-600 dark:group-hover:text-[#c084fc] transition-colors">
                        {stg.title}
                      </h3>
                      <p className="text-slate-600 dark:text-[#a3a3a3] text-xs sm:text-sm md:text-base leading-relaxed max-w-md md:ml-auto">
                        {stg.desc}
                      </p>
                    </div>
                    <div className="order-1 md:order-2 z-10 w-10 h-10 rounded-full bg-indigo-600 dark:bg-[#111111] text-white dark:text-[#c084fc] flex items-center justify-center font-bold text-xs sm:text-sm border-4 border-white dark:border-[#4f46e5] shadow-md shrink-0 group-hover:scale-110 transition-transform">
                      0{idx + 1}
                    </div>
                    <div className="order-3 md:order-3 flex-1 md:pl-12 hidden md:block"></div>
                  </>
                ) : (
                  <>
                    <div className="order-3 md:order-1 flex-1 md:pr-12 hidden md:block"></div>
                    <div className="order-1 md:order-2 z-10 w-10 h-10 rounded-full bg-indigo-600 dark:bg-[#111111] text-white dark:text-[#c084fc] flex items-center justify-center font-bold text-xs sm:text-sm border-4 border-white dark:border-[#4f46e5] shadow-md shrink-0 group-hover:scale-110 transition-transform">
                      0{idx + 1}
                    </div>
                    <div className="order-2 md:order-3 flex-1 pl-4 sm:pl-6 md:pl-12 text-left">
                      <span className="text-indigo-600 dark:text-[#c084fc] font-bold text-xs uppercase tracking-wider mb-1 block">
                        {stg.num}
                      </span>
                      <h3 className="font-bold text-slate-900 dark:text-[#fafafa] text-lg sm:text-xl md:text-2xl mb-1.5 sm:mb-2 group-hover:text-indigo-600 dark:group-hover:text-[#c084fc] transition-colors">
                        {stg.title}
                      </h3>
                      <p className="text-slate-600 dark:text-[#a3a3a3] text-xs sm:text-sm md:text-base leading-relaxed max-w-md">
                        {stg.desc}
                      </p>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

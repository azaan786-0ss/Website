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
    <section className="py-space-32 bg-white overflow-hidden">
      <div className="px-6 md:px-8 max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-space-16"
        >
          <h2 className="font-display-lg text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-space-4">
            Modernization Roadmap
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-base sm:text-lg">
            A proven engineering process to transition legacy stacks into high-performance cloud
            ecosystems.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Progress Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-indigo-200 -translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-16">
            {steps.map((stg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="relative flex flex-col md:flex-row items-center group"
              >
                {stg.alignLeft ? (
                  <>
                    <div className="flex-1 md:text-right md:pr-12 text-center mb-6 md:mb-0">
                      <span className="text-indigo-600 font-bold text-xs uppercase tracking-wider mb-1 block">
                        {stg.num}
                      </span>
                      <h3 className="font-bold text-slate-900 text-xl sm:text-2xl mb-2 group-hover:text-indigo-600 transition-colors">
                        {stg.title}
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-md md:ml-auto">
                        {stg.desc}
                      </p>
                    </div>
                    <div className="z-10 w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm border-4 border-white shadow-md group-hover:scale-110 transition-transform">
                      0{idx + 1}
                    </div>
                    <div className="flex-1 md:pl-12 hidden md:block"></div>
                  </>
                ) : (
                  <>
                    <div className="flex-1 md:pr-12 hidden md:block"></div>
                    <div className="z-10 w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm border-4 border-white shadow-md group-hover:scale-110 transition-transform">
                      0{idx + 1}
                    </div>
                    <div className="flex-1 md:pl-12 text-center md:text-left mt-6 md:mt-0">
                      <span className="text-indigo-600 font-bold text-xs uppercase tracking-wider mb-1 block">
                        {stg.num}
                      </span>
                      <h3 className="font-bold text-slate-900 text-xl sm:text-2xl mb-2 group-hover:text-indigo-600 transition-colors">
                        {stg.title}
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-md">
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

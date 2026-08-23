import { motion } from 'framer-motion';

export function ProductEngineeringRoadmap() {
  const stages = [
    {
      num: '01',
      stage: 'Stage 1: 0 to 1',
      title: 'Launch & Validate',
      desc: 'Rapid MVP engineering focused on core features and market validation. We prioritize fast time-to-market and high-quality initial execution to secure early traction.',
      alignLeft: true,
    },
    {
      num: '02',
      stage: 'Stage 2: 1 to 10',
      title: 'Scale & Automate',
      desc: 'Hardening the foundation for growth. Implementation of high-concurrency architecture, process automation, and deep performance tuning to handle increasing user volume.',
      alignLeft: false,
    },
    {
      num: '03',
      stage: 'Stage 3: 10 to 100',
      title: 'Enterprise & Expand',
      desc: 'Building for market dominance. Multi-region reliability, continuous refactoring, and system expansion to support enterprise-level complexity and international scale.',
      alignLeft: true,
    },
  ];

  return (
    <section className="py-space-32 px-6 md:px-8 bg-slate-50/70 dark:bg-[#050505] overflow-hidden transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-space-16"
        >
          <h2 className="font-heading-lg text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-[#fafafa] mb-4">
            The 0-to-100 Growth Journey
          </h2>
          <p className="font-body-lg text-slate-600 dark:text-[#a3a3a3] max-w-2xl mx-auto text-base sm:text-lg">
            A structured roadmap designed to align technical maturity with business expansion
            phases.
          </p>
        </motion.div>

        <div className="relative">
          {/* Roadmap Line (Left-stem on mobile/tablet, centered on desktop) */}
          <div className="absolute left-6 sm:left-8 lg:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-indigo-500/20 via-indigo-500 to-indigo-500/20 dark:from-[#c084fc]/20 dark:via-[#c084fc] dark:to-[#c084fc]/20 -translate-x-1/2"></div>

          <div className="space-y-10 sm:space-y-12 lg:space-y-16">
            {stages.map((stg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative flex flex-row lg:flex-row items-start lg:items-center group"
              >
                {stg.alignLeft ? (
                  <>
                    <div className="order-2 lg:order-1 flex-1 pl-4 sm:pl-6 lg:pl-0 lg:pr-12 text-left lg:text-right">
                      <span className="text-indigo-600 dark:text-[#c084fc] font-bold text-xs sm:text-sm tracking-wider uppercase mb-1 block">
                        {stg.stage}
                      </span>
                      <div className="font-display-md text-lg sm:text-xl md:text-2xl font-extrabold text-slate-900 dark:text-[#fafafa] mb-2 sm:mb-3 group-hover:text-indigo-600 dark:group-hover:text-[#c084fc] transition-colors">
                        {stg.title}
                      </div>
                      <p className="text-slate-600 dark:text-[#a3a3a3] text-xs sm:text-sm md:text-base leading-relaxed max-w-lg lg:ml-auto">
                        {stg.desc}
                      </p>
                    </div>
                    <div className="order-1 lg:order-2 z-10 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-indigo-600 dark:bg-[#111111] text-white dark:text-[#c084fc] flex items-center justify-center font-extrabold text-sm sm:text-lg border-4 border-white dark:border-[#4f46e5] shadow-lg shadow-indigo-600/30 dark:shadow-[#c084fc]/20 shrink-0 group-hover:scale-110 transition-transform">
                      {stg.num}
                    </div>
                    <div className="order-3 lg:order-3 flex-1 lg:pl-12 hidden lg:block"></div>
                  </>
                ) : (
                  <>
                    <div className="order-3 lg:order-1 flex-1 lg:pr-12 hidden lg:block"></div>
                    <div className="order-1 lg:order-2 z-10 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-indigo-600 dark:bg-[#111111] text-white dark:text-[#c084fc] flex items-center justify-center font-extrabold text-sm sm:text-lg border-4 border-white dark:border-[#4f46e5] shadow-lg shadow-indigo-600/30 dark:shadow-[#c084fc]/20 shrink-0 group-hover:scale-110 transition-transform">
                      {stg.num}
                    </div>
                    <div className="order-2 lg:order-3 flex-1 pl-4 sm:pl-6 lg:pl-12 text-left">
                      <span className="text-indigo-600 dark:text-[#c084fc] font-bold text-xs sm:text-sm tracking-wider uppercase mb-1 block">
                        {stg.stage}
                      </span>
                      <div className="font-display-md text-lg sm:text-xl md:text-2xl font-extrabold text-slate-900 dark:text-[#fafafa] mb-2 sm:mb-3 group-hover:text-indigo-600 dark:group-hover:text-[#c084fc] transition-colors">
                        {stg.title}
                      </div>
                      <p className="text-slate-600 dark:text-[#a3a3a3] text-xs sm:text-sm md:text-base leading-relaxed max-w-lg">
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

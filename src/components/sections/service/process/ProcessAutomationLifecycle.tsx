import { motion, type Variants } from 'framer-motion';

export function ProcessAutomationLifecycle() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const steps = [
    {
      num: '01',
      title: 'Workflow Audit & Bottleneck Discovery',
      desc: 'Mapping internal operations, analyzing human labor costs, and identifying high-ROI automation targets through deep-dive technical analysis.',
    },
    {
      num: '02',
      title: 'Architecture & Integration Blueprint',
      desc: 'Designing fault-tolerant workflow logic, data validation checks, and comprehensive error-handling mechanisms built for enterprise scale.',
    },
    {
      num: '03',
      title: 'Custom Bot & Pipeline Deployment',
      desc: 'Engineering middleware, configuring API webhooks, and training custom AI parsing models to handle your unique data requirements.',
    },
    {
      num: '04',
      title: 'Operational Monitoring & Refinement',
      desc: 'Setting up real-time execution logs, automated fallback alerts, and ongoing workflow speed tuning for maximum efficiency.',
    },
  ];

  return (
    <section className="py-20 md:py-28 px-6 md:px-8 max-w-[1280px] mx-auto relative z-10">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-6 lg:sticky lg:top-32"
        >
          <span className="inline-flex items-center gap-2 py-1.5 px-4 bg-indigo-50 text-indigo-700 border border-indigo-200/60 rounded-full font-caption text-xs sm:text-sm font-semibold shadow-xs">
            <span className="material-symbols-outlined text-[18px] text-indigo-600">route</span>
            EXECUTION METHODOLOGY
          </span>
          <h2 className="font-display-lg text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Automation Lifecycle
          </h2>
          <p className="font-body-lg text-base text-slate-600 leading-relaxed">
            Our rigorous engineering approach ensures that automation doesn't just work—it creates
            lasting enterprise value without accumulating technical debt.
          </p>

          <div className="p-6 bg-white rounded-3xl border border-slate-200/80 shadow-md space-y-4">
            <div className="flex items-center justify-between text-sm font-bold text-slate-900">
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                Engineering Standards
              </span>
              <span className="text-indigo-600 font-mono">100% Quality Assurance</span>
            </div>
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-indigo-600 w-full animate-pulse" />
            </div>
          </div>
        </motion.div>

        {/* Right Column: Timeline Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="lg:col-span-7 relative space-y-8"
        >
          {/* Vertical Connecting Line */}
          <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-indigo-100 hidden sm:block z-0" />

          {steps.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ x: 4 }}
              className="relative z-10 flex flex-col sm:flex-row gap-6 p-6 sm:p-8 bg-white/90 backdrop-blur-sm rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-indigo-300 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-base shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shadow-xs">
                {item.num}
              </div>
              <div className="space-y-2">
                <h3 className="font-display-sm text-lg sm:text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h3>
                <p className="font-body-md text-sm sm:text-base text-slate-600 leading-relaxed">
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

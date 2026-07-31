import { motion } from 'framer-motion';

export function ProcessAutomationDeliverables() {
  const deliverables = [
    'Production-Ready Custom Workflow Scripts & Middleware',
    'Custom AI Agent & Document Parsing Models',
    'Comprehensive Operational Flowcharts & API Maps',
    'Real-Time Workflow Execution & Error Monitoring Dashboard',
    'Team Standard Operating Procedures (SOP) & Admin Guides',
  ];

  const techStack = [
    'Python',
    'Node.js',
    'n8n',
    'Make',
    'Temporal',
    'Airflow',
    'OpenAI API',
    'LangChain',
    'UiPath',
    'PostgreSQL',
  ];

  return (
    <section className="py-20 md:py-28 px-6 md:px-8 max-w-[1280px] mx-auto relative z-10">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Deliverables Checklist */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 space-y-8"
        >
          <div>
            <span className="inline-flex items-center gap-2 py-1.5 px-4 bg-indigo-50 text-indigo-700 border border-indigo-200/60 rounded-full font-caption text-xs sm:text-sm font-semibold mb-4 shadow-xs">
              <span className="material-symbols-outlined text-[18px] text-indigo-600">
                inventory_2
              </span>
              SYSTEM HANDOFF
            </span>
            <h2 className="font-display-lg text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Production Deliverables
            </h2>
          </div>

          <ul className="space-y-4">
            {deliverables.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-start gap-4 p-4 bg-white/80 rounded-2xl border border-slate-200/80 shadow-xs hover:border-indigo-300 transition-colors group"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200/60 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[20px]">check</span>
                </div>
                <span className="font-body-md text-sm sm:text-base font-semibold text-slate-800 pt-1">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right Column: Tech Ecosystem Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-200/50 space-y-8 relative overflow-hidden"
        >
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

          <div>
            <h3 className="font-display-md text-2xl font-bold text-slate-900 mb-2">
              Integrated Tech Ecosystem
            </h3>
            <p className="font-body-md text-sm text-slate-600">
              We leverage modern, battle-tested open standards and enterprise automation tooling.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, idx) => (
              <motion.span
                key={idx}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 bg-slate-50 border border-slate-200 text-slate-700 font-mono text-xs sm:text-sm font-semibold rounded-xl hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200 transition-all duration-200 cursor-default shadow-xs"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          <div className="pt-6 border-t border-dashed border-slate-200">
            <p className="text-sm italic text-slate-500 leading-relaxed">
              "Our stack is chosen for maximum uptime reliability and elastic scale, ensuring your
              automated infrastructure grows seamlessly with business volume."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

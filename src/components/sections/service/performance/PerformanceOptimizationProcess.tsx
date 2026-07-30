
import { motion } from "framer-motion";

export function PerformanceOptimizationProcess() {
  const steps = [
    {
      num: "01",
      title: "Deep Diagnostic Audit",
      desc: "Using real-user monitoring (RUM) and synthetic profiling to map every millisecond of the user journey and identify precise friction points.",
    },
    {
      num: "02",
      title: "Bottleneck Remediation",
      desc: "Surgical refactoring of critical path code and infrastructure configuration to unlock immediate speed gains.",
    },
    {
      num: "03",
      title: "Stress Testing",
      desc: "Pushing systems to their theoretical limits to ensure the newly optimized architecture can handle 10x normal load without degradation.",
    },
    {
      num: "04",
      title: "Telemetry & Guardrails",
      desc: "Implementing continuous performance monitoring and automated budgets to prevent future 'regression creep'.",
    },
  ];

  return (
    <section className="py-space-32 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 grid lg:grid-cols-12 gap-12 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 text-white"
        >
          <span className="text-indigo-400 font-mono text-xs uppercase tracking-widest font-bold block mb-3">Methodology</span>
          <h2 className="font-display-lg text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 leading-tight">Our Engineering Process</h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-md">
            Performance isn't a one-time fix; it's a rigorous process of measurement, remediation, and maintenance.
          </p>
        </motion.div>

        <div className="lg:col-span-7 relative">
          {/* Vertical Line */}
          <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-slate-800"></div>

          <div className="space-y-10">
            {steps.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="relative pl-14 group"
              >
                <div className="absolute left-[19px] top-1.5 w-3 h-3 rounded-full bg-indigo-500 border-4 border-slate-900 z-10 group-hover:scale-125 transition-transform"></div>
                <div>
                  <span className="font-mono text-xs font-bold text-indigo-400 mb-1 block group-hover:text-indigo-300 transition-colors">STEP {p.num}</span>
                  <h3 className="font-bold text-xl sm:text-2xl text-white mb-2 group-hover:text-indigo-300 transition-colors">{p.title}</h3>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-lg">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


import { motion } from "framer-motion";

export function DataAnalyticsRoadmap() {
  const phases = [
    {
      phase: "PHASE 01",
      title: "Audit & Strategy",
      desc: "We analyze your existing stack, identify data gaps, and define a tracking plan aligned with business goals.",
    },
    {
      phase: "PHASE 02",
      title: "Infrastructure Engineering",
      desc: "Setting up the modern data stack: warehouse provisioning, ETL connector setup, and schema design.",
    },
    {
      phase: "PHASE 03",
      title: "Telemetry Setup",
      desc: "Implementing event tracking across web and mobile apps to capture every meaningful user interaction.",
    },
    {
      phase: "PHASE 04",
      title: "Continuous Tuning",
      desc: "Iterative refinement of dashboards, anomaly detection alerts, and executive reporting cadences.",
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
          <span className="text-indigo-400 font-mono text-xs uppercase tracking-widest font-bold block mb-3">Roadmap</span>
          <h2 className="font-display-lg text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 leading-tight">The Engineering Roadmap</h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-md">
            Our 4-phase engagement model ensures we don't just ship code, but build a lasting data culture.
          </p>
        </motion.div>

        <div className="lg:col-span-7 relative">
          {/* Vertical Line */}
          <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-slate-800"></div>

          <div className="space-y-10">
            {phases.map((p, idx) => (
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
                  <span className="font-mono text-xs font-bold text-indigo-400 mb-1 block group-hover:text-indigo-300 transition-colors">{p.phase}</span>
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

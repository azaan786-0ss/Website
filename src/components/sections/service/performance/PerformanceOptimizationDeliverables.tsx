
import { motion } from "framer-motion";

export function PerformanceOptimizationDeliverables() {
  const deliverables = [
    {
      title: "Comprehensive Audit Report",
      desc: "A 50+ page breakdown of every latency source and cost-saving opportunity.",
    },
    {
      title: "Optimized Production Codebase",
      desc: "Clean, modular refactors delivered via pull requests for your team to review.",
    },
    {
      title: "Infrastructure as Code (IaC) Updates",
      desc: "Terraform or CloudFormation scripts for optimized server clusters.",
    },
    {
      title: "Performance Dashboard",
      desc: "Custom Datadog or Grafana views for real-time health tracking.",
    },
  ];

  const tools = [
    { icon: "analytics", name: "Lighthouse" },
    { icon: "speed", name: "k6.io" },
    { icon: "monitoring", name: "Datadog" },
    { icon: "layers", name: "Redis" },
    { icon: "dns", name: "Cloudflare" },
    { icon: "cloud", name: "AWS X-Ray" },
    { icon: "settings_ethernet", name: "New Relic" },
  ];

  return (
    <section className="py-space-32 bg-slate-50/85 border-y border-slate-200/80 overflow-hidden">
      <div className="px-6 md:px-8 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display-md text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-8">Key Deliverables</h2>
          <ul className="space-y-4">
            {deliverables.map((item, idx) => (
              <motion.li 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs hover:border-indigo-300 transition-all group"
              >
                <span className="material-symbols-outlined text-indigo-600 text-[24px] mt-0.5 group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">{item.title}</h4>
                  <p className="text-slate-600 text-sm mt-0.5">{item.desc}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-lg hover:shadow-2xl transition-all"
        >
          <h3 className="font-caption text-xs uppercase font-bold text-slate-400 tracking-widest mb-6 text-center">Our Optimization Stack</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
            {tools.map((tool, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.05, y: -2 }}
                className="p-4 bg-slate-50 border border-slate-200 rounded-xl font-bold text-sm text-slate-800 hover:text-indigo-600 hover:border-indigo-300 hover:bg-indigo-50/50 shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-indigo-600 text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>{tool.icon}</span>
                {tool.name}
              </motion.div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-indigo-50/60 rounded-2xl border border-indigo-100">
            <p className="text-slate-700 text-sm italic leading-relaxed">
              "We leverage enterprise-grade telemetry to ensure data-driven decision making at every architectural junction."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

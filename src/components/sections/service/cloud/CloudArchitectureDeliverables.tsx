import { motion } from 'framer-motion';

export function CloudArchitectureDeliverables() {
  const deliverables = [
    {
      title: 'Production-Ready Terraform Codebase',
      desc: 'Clean, modular, and reusable IaC templates.',
    },
    {
      title: 'Interactive Topology Diagrams',
      desc: 'Visual mapping of all VPCs, subnets, and routing.',
    },
    {
      title: 'CI/CD Pipeline Configurations',
      desc: 'Fully automated build, test, and deploy workflows.',
    },
    {
      title: 'Disaster Recovery (DR) Plan',
      desc: 'Verified failover and recovery documentation.',
    },
  ];

  const tools = [
    { code: 'AWS', name: 'AWS' },
    { code: 'GCP', name: 'Google Cloud' },
    { code: 'Dk', name: 'Docker' },
    { code: 'K8s', name: 'Kubernetes' },
    { code: 'Tf', name: 'Terraform' },
    { code: 'Dd', name: 'Datadog' },
    { code: 'GH', name: 'GitHub Actions' },
    { code: 'Hm', name: 'Helm' },
  ];

  return (
    <section className="py-space-32 bg-slate-50/80 border-y border-slate-200/80 overflow-hidden">
      <div className="px-6 md:px-8 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display-lg text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-space-8">
            Engineered Deliverables
          </h2>
          <ul className="space-y-6">
            {deliverables.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-start gap-4 group"
              >
                <span
                  className="material-symbols-outlined text-indigo-600 mt-1 text-[24px] group-hover:scale-110 transition-transform"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <div>
                  <span className="font-bold text-slate-900 text-base sm:text-lg block mb-0.5">
                    {item.title}
                  </span>
                  <span className="text-slate-600 text-sm">{item.desc}</span>
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
          <h4 className="font-caption text-xs uppercase font-bold text-slate-400 tracking-widest mb-6 text-center">
            Cloud &amp; DevOps Stack
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {tools.map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08, y: -4 }}
                className="flex flex-col items-center gap-2 cursor-pointer group"
              >
                <div className="w-12 h-12 bg-slate-50 group-hover:bg-indigo-50 border border-slate-200 group-hover:border-indigo-300 rounded-xl flex items-center justify-center font-extrabold text-sm text-slate-800 group-hover:text-indigo-600 shadow-xs transition-all">
                  {t.code}
                </div>
                <span className="text-xs font-semibold text-slate-500 group-hover:text-slate-900 transition-colors">
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

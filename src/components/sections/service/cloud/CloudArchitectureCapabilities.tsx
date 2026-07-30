
import { motion } from "framer-motion";

export function CloudArchitectureCapabilities() {
  const capabilities = [
    {
      icon: "cloud_done",
      title: "Cloud-Native Architecture",
      desc: "Serverless, containerized microservices, and multi-region setups for maximum resilience.",
    },
    {
      icon: "code_blocks",
      title: "Infrastructure as Code (IaC)",
      desc: "Terraform, AWS CDK, and reproducible environments ensuring zero configuration drift.",
    },
    {
      icon: "rocket_launch",
      title: "Automated CI/CD Pipelines",
      desc: "GitHub Actions and automated testing for safe, frequent, and zero-downtime releases.",
    },
    {
      icon: "payments",
      title: "FinOps & Cost Tuning",
      desc: "Expenditure audits, rightsizing, and auto-scaling logic to optimize every dollar spent.",
    },
    {
      icon: "admin_panel_settings",
      title: "Security & Recovery",
      desc: "IAM least-privilege, automated backups, and multi-region failover strategies.",
    },
    {
      icon: "monitoring",
      title: "Observability",
      desc: "Full telemetry using Datadog and Prometheus with intelligent, noise-free alerting.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="py-space-32 bg-slate-50/70 border-y border-slate-200/60">
      <div className="px-6 md:px-8 max-w-[1280px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-space-16 text-center md:text-left"
        >
          <h2 className="font-display-lg text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-space-4">Core Capabilities</h2>
          <p className="text-slate-600 max-w-xl text-base sm:text-lg">
            Deep technical expertise across the modern cloud stack to ensure your infrastructure scales as fast as your business.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {capabilities.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-indigo-300 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
                </div>
                <h3 className="font-bold text-slate-900 text-xl mb-3 group-hover:text-indigo-600 transition-colors">{item.title}</h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

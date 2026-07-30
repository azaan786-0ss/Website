
import { motion } from "framer-motion";

export function ProductEngineeringDeliverables() {
  const deliverables = [
    {
      title: "Scalable Architecture Blueprint",
      desc: "Comprehensive technical documentation mapping every system component and data flow.",
    },
    {
      title: "Production-Ready Codebase",
      desc: "Clean, tested, and documented code following industry-best practices and security standards.",
    },
    {
      title: "Automated CI/CD Pipelines",
      desc: "Fully automated deployment workflows to ensure rapid and reliable release cycles.",
    },
    {
      title: "Security & Compliance Setup",
      desc: "Implementation of SOC2/HIPAA ready security layers and automated auditing tools.",
    },
  ];

  const techStack = [
    "System Architecture", "AWS/GCP/Azure", "Full-Stack Frameworks",
    "Kubernetes & Docker", "DevOps Automation", "Security & Audit",
    "Performance Optimization", "Event-Driven Design", "Database Sharding"
  ];

  return (
    <section className="py-space-32 px-6 md:px-8 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        {/* Left: Tangible Deliverables */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <h2 className="font-heading-lg text-2xl sm:text-3xl font-extrabold text-slate-900 mb-space-8">Tangible Deliverables</h2>
          <ul className="space-y-6">
            {deliverables.map((item, idx) => (
              <motion.li 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-start gap-4"
              >
                <span className="material-symbols-outlined text-indigo-600 mt-1 text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <div>
                  <div className="font-bold text-slate-900 text-base sm:text-lg mb-1">{item.title}</div>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        
        {/* Right: Tech Pills */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1 w-full"
        >
          <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm">
            <h4 className="font-caption text-xs uppercase font-bold text-slate-400 tracking-widest mb-6">Expertise Stack</h4>
            <div className="flex flex-wrap gap-2.5">
              {techStack.map((tech, i) => (
                <motion.span 
                  key={i}
                  whileHover={{ scale: 1.05, borderColor: "rgba(99, 102, 241, 0.4)" }}
                  className="px-4 py-2 bg-white rounded-xl font-mono text-xs font-medium text-slate-700 border border-slate-200 shadow-2xs transition-all cursor-pointer hover:text-indigo-600"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-200/80">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrU1pqUtK2zJCEu3ERmhaXpnF4vc8q9F3F3m-yfWKY_EVWkpR_-jFSCWinpUZDOl1BujcPsG_tvYH_deBV5mogbJmucx2D1_DXI8IMHY6WVcv0NmswF1kxOES87gFmF9ya_OjXGJrC-yNFxz4gULRQenUnqe_Ho3CJncM12k4fIuIaLAESRLt2-9M7pEUzxcc_RSbcfAdTiqAxqpFhV22UbrYBhUt1FRnfBEb24PcKctHny6gPs6LQgg" alt="Avatar 1" />
                  <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyFidLhEuJKkMXDCYpW1xks2o9SCadWn0VvabohlQfAUrGCq6V3dOKMorPaiXpaJnOwYj45KXSuHORMvLuaaCmXaqlQDoiA0BhWYL_P-6JGPUl42X1YENkarm-URzgffANvPILRT-5yFjqNGvJ_6e-4qLAD8Cjf0QNunzz9qws7TPdIrNui-Gpl_79sutQiaf85uAjX8b-VYWR_woTUaSwE5m2sbeG1YhJNtfJyjvFU8lRUawLi5QbFQ" alt="Avatar 2" />
                  <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTuzX0faphiqZ9oKraqmSPKuE2DI4MLJvThrhAJsMVIvA-xTC6JPfLXZtRccmzBMtvLRzOIcb-cRaovSO8RjJ0Sl8qmnZJJj683n_442LWQoHbpRkK2Mf8O2Df0bSVdXinrXxC0-g1IxX_iK6EPgp5fGq91zROCMt7BDiGeYvAdVJUNfsOrq1Nupkd_niAM9e4rfUP2hhYS8jzHu70GaxmqGj2RvF3ehvAwRKe02QjIEfu2S_EAEJ_EQ" alt="Avatar 3" />
                </div>
                <div className="text-xs font-semibold text-slate-500">Managed by elite engineering teams</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

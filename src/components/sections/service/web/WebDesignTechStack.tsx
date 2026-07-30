import { motion } from "framer-motion";

const technologies = [
  { name: "React / Next.js", icon: "code_blocks", color: "text-blue-500" },
  { name: "TypeScript", icon: "data_object", color: "text-blue-600" },
  { name: "Tailwind CSS", icon: "format_paint", color: "text-cyan-500" },
  { name: "Three.js", icon: "3d_rotation", color: "text-zinc-800 dark:text-zinc-200" },
  { name: "Framer Motion", icon: "animation", color: "text-purple-500" },
  { name: "WCAG Accessibility", icon: "accessibility_new", color: "text-emerald-500" },
];

export function WebDesignTechStack() {
  return (
    <section className="mb-space-32 py-12 border-y border-slate-200/60 dark:border-white/5 bg-slate-50/50 dark:bg-bg-dark-secondary/20 rounded-2xl px-6 md:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left shrink-0"
        >
          <h3 className="text-lg font-semibold text-on-surface dark:text-white">Core Technology Stack</h3>
          <p className="text-sm text-text-secondary dark:text-secondary-fixed-dim mt-1">Enterprise-grade tooling & standards.</p>
        </motion.div>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-3 md:gap-4 w-full">
            {technologies.map((tech, idx) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex items-center gap-2 bg-white dark:bg-bg-dark-primary px-4 py-2 rounded-full border border-slate-200/60 dark:border-white/10 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
              >
                <span className={`material-symbols-outlined text-[18px] ${tech.color}`}>{tech.icon}</span>
                <span className="text-sm font-medium text-on-surface dark:text-on-secondary">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
    </section>
  );
}

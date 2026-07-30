import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discovery & Architecture",
    description: "We audit your existing platform, define user journeys, and establish the technical architecture required for scale.",
  },
  {
    num: "02",
    title: "UI/UX & Prototyping",
    description: "Our design team crafts high-fidelity wireframes and interactive prototypes, ensuring intuitive navigation and premium aesthetics.",
  },
  {
    num: "03",
    title: "Frontend Engineering",
    description: "We build the platform using React/Next.js, focusing on component reusability, state management, and pixel-perfect implementation.",
  },
  {
    num: "04",
    title: "Testing & Launch",
    description: "Rigorous QA testing for accessibility, performance, and cross-browser compatibility before executing a seamless production deployment.",
  }
];

export function WebDesignProcess() {
  return (
    <section className="mb-space-32 relative bg-bg-secondary dark:bg-bg-dark-secondary rounded-3xl p-8 md:p-12 transition-colors duration-300 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="font-display-lg text-3xl md:text-4xl font-bold tracking-tight text-on-surface dark:text-white">
          Our Development Process
        </h2>
        <p className="text-text-secondary dark:text-secondary-fixed-dim mt-4 max-w-2xl text-lg">
          A structured, transparent approach to delivering world-class digital experiences on time and on budget.
        </p>
      </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
          {/* Connecting line for desktop with animated beam */}
          <div className="hidden lg:block absolute top-10 left-12 right-12 h-[2px] bg-slate-200 dark:bg-white/10 z-0 overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-transparent via-primary to-transparent w-48"
              animate={{ x: ['-100%', '400%'] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative bg-white dark:bg-bg-dark-primary p-8 rounded-2xl border border-slate-200/60 dark:border-white/10 shadow-sm hover:shadow-lg hover:border-primary/40 dark:hover:border-primary/50 transition-all duration-300 group"
            >
              {/* Number Badge */}
              <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-bg-dark-secondary text-primary font-display-md text-xl font-bold flex items-center justify-center mb-6 border border-slate-200/60 dark:border-white/10 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {step.num}
              </div>
              
              <h3 className="text-xl font-semibold text-on-surface dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-text-secondary dark:text-secondary-fixed-dim text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
    </section>
  );
}

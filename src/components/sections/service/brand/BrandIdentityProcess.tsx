import { motion } from 'framer-motion';

export function BrandIdentityProcess() {
  const steps = [
    {
      num: 1,
      title: 'Strategy & Immersion',
      desc: 'Audit of core values, deep audience profiling, and strategic moodboarding to align vision.',
    },
    {
      num: 2,
      title: 'Concept Exploration',
      desc: 'Iterative logo concepts, typography pairing, and research-backed color psychology sessions.',
    },
    {
      num: 3,
      title: 'System Refinement',
      desc: 'Developing comprehensive guidelines, collateral mockups, and digital application stress-tests.',
    },
    {
      num: 4,
      title: 'Asset Delivery',
      desc: 'Deployment of a digital brand portal, vector master exports, and implementation of design tokens.',
    },
  ];

  return (
    <section className="py-space-32 px-6 md:px-8 bg-white dark:bg-[#0B0E14] overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-space-20"
        >
          <h2 className="font-display-lg text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-[#f3f4f6] mb-space-4">
            Our Methodical Process
          </h2>
          <p className="text-slate-600 dark:text-[#9ca3af] max-w-xl mx-auto text-base">
            How we bridge the gap between engineering rigor and creative vision.
          </p>
        </motion.div>

        <div className="relative">
          {/* Progress Line: Horizontal on Desktop, Vertical on Mobile */}
          <div className="absolute top-8 left-0 w-full h-[2px] bg-slate-200 dark:bg-slate-800 hidden lg:block"></div>
          <div className="absolute top-8 bottom-8 left-1/2 w-[2px] bg-slate-200 dark:bg-slate-800 -translate-x-1/2 block sm:hidden"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -6 }}
                className="relative z-10 bg-white dark:bg-[#12151C] p-6 rounded-2xl border border-slate-200/70 dark:border-slate-800 hover:border-indigo-500/40 dark:hover:border-indigo-500/50 hover:shadow-lg group transition-all flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-full bg-indigo-600 dark:bg-[#818cf8] text-white dark:text-[#1e1b4b] flex items-center justify-center font-extrabold text-xl mb-6 shadow-md shadow-indigo-600/30 dark:shadow-indigo-500/20 group-hover:scale-110 transition-transform">
                  {step.num}
                </div>
                <h4 className="font-heading-lg text-lg font-bold text-slate-900 dark:text-[#f3f4f6] mb-3 group-hover:text-indigo-600 dark:group-hover:text-[#818cf8] transition-colors">
                  {step.title}
                </h4>
                <p className="text-slate-600 dark:text-[#9ca3af] text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

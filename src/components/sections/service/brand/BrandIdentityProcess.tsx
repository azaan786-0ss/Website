import { motion } from "framer-motion";

export function BrandIdentityProcess() {
  const steps = [
    {
      num: 1,
      title: "Strategy & Immersion",
      desc: "Audit of core values, deep audience profiling, and strategic moodboarding to align vision.",
    },
    {
      num: 2,
      title: "Concept Exploration",
      desc: "Iterative logo concepts, typography pairing, and research-backed color psychology sessions.",
    },
    {
      num: 3,
      title: "System Refinement",
      desc: "Developing comprehensive guidelines, collateral mockups, and digital application stress-tests.",
    },
    {
      num: 4,
      title: "Asset Delivery",
      desc: "Deployment of a digital brand portal, vector master exports, and implementation of design tokens.",
    },
  ];

  return (
    <section className="py-space-32 px-6 md:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-space-20"
        >
          <h2 className="font-display-lg text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-space-4">Our Methodical Process</h2>
          <p className="text-slate-600 max-w-xl mx-auto text-base">How we bridge the gap between engineering rigor and creative vision.</p>
        </motion.div>

        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-8 left-0 w-full h-[2px] bg-slate-200 hidden lg:block"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -6 }}
                className="relative z-10 bg-white p-6 rounded-2xl border border-slate-200/70 hover:border-indigo-500/40 hover:shadow-lg transition-all flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 rounded-full bg-indigo-600 text-white flex items-center justify-center font-extrabold text-xl mb-6 shadow-md shadow-indigo-600/30 group-hover:scale-110 transition-transform">
                  {step.num}
                </div>
                <h4 className="font-heading-lg text-lg font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {step.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

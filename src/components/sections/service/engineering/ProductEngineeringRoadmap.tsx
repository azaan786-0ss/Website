
import { motion } from "framer-motion";

export function ProductEngineeringRoadmap() {
  const stages = [
    {
      num: "01",
      stage: "Stage 1: 0 to 1",
      title: "Launch & Validate",
      desc: "Rapid MVP engineering focused on core features and market validation. We prioritize fast time-to-market and high-quality initial execution to secure early traction.",
      alignLeft: true,
    },
    {
      num: "02",
      stage: "Stage 2: 1 to 10",
      title: "Scale & Automate",
      desc: "Hardening the foundation for growth. Implementation of high-concurrency architecture, process automation, and deep performance tuning to handle increasing user volume.",
      alignLeft: false,
    },
    {
      num: "03",
      stage: "Stage 3: 10 to 100",
      title: "Enterprise & Expand",
      desc: "Building for market dominance. Multi-region reliability, continuous refactoring, and system expansion to support enterprise-level complexity and international scale.",
      alignLeft: true,
    },
  ];

  return (
    <section className="py-space-32 px-6 md:px-8 bg-slate-50/70 overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-space-16"
        >
          <h2 className="font-heading-lg text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">The 0-to-100 Growth Journey</h2>
          <p className="font-body-lg text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
            A structured roadmap designed to align technical maturity with business expansion phases.
          </p>
        </motion.div>

        <div className="relative">
          {/* Roadmap Line (Hidden on Mobile) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-indigo-500 to-transparent -translate-x-1/2"></div>
          
          <div className="space-y-12 lg:space-y-16">
            {stages.map((stg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative flex flex-col lg:flex-row items-center group"
              >
                {stg.alignLeft ? (
                  <>
                    <div className="flex-1 lg:pr-12 text-center lg:text-right mb-6 lg:mb-0">
                      <span className="text-indigo-600 font-bold text-sm tracking-wider uppercase mb-1 block">{stg.stage}</span>
                      <div className="font-display-md text-xl sm:text-2xl font-extrabold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">{stg.title}</div>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg lg:ml-auto">{stg.desc}</p>
                    </div>
                    <div className="z-10 w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center font-extrabold text-lg border-4 border-white shadow-lg shadow-indigo-600/30 group-hover:scale-110 transition-transform">
                      {stg.num}
                    </div>
                    <div className="flex-1 lg:pl-12 hidden lg:block"></div>
                  </>
                ) : (
                  <>
                    <div className="flex-1 lg:pr-12 hidden lg:block"></div>
                    <div className="z-10 w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center font-extrabold text-lg border-4 border-white shadow-lg shadow-indigo-600/30 group-hover:scale-110 transition-transform">
                      {stg.num}
                    </div>
                    <div className="flex-1 lg:pl-12 text-center lg:text-left mt-6 lg:mt-0">
                      <span className="text-indigo-600 font-bold text-sm tracking-wider uppercase mb-1 block">{stg.stage}</span>
                      <div className="font-display-md text-xl sm:text-2xl font-extrabold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">{stg.title}</div>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg">{stg.desc}</p>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

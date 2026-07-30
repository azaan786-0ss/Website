
import { motion } from "framer-motion";

export function ApiDevelopmentLifecycle() {
  const steps = [
    {
      step: 1,
      title: "Schema & Contract Design",
      desc: "Defining types, endpoints, and data flows using OpenAPI/Swagger specifications.",
    },
    {
      step: 2,
      title: "Core Engineering & Middleware",
      desc: "Building highly concurrent backend logic with robust logging and error handling.",
    },
    {
      step: 3,
      title: "Security Hardening & Caching",
      desc: "Implementing Redis layers, WAF rules, and comprehensive identity management.",
    },
    {
      step: 4,
      title: "Docs, SDKs & Monitoring",
      desc: "Continuous integration with automated testing and real-time observability dashboards.",
    },
  ];

  return (
    <section className="bg-white py-space-32 overflow-hidden">
      <div className="px-6 md:px-8 max-w-[1280px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-space-16 text-center"
        >
          <h2 className="font-display-lg text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-space-4">The API Lifecycle</h2>
          <p className="font-body-lg text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">A methodical approach to building robust digital bridges.</p>
        </motion.div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-indigo-100 -translate-y-6 z-0" />
          
          {steps.map((stg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{ y: -6 }}
              className="relative z-10 bg-slate-50 p-8 border border-slate-200/80 rounded-2xl group transition-all duration-300 hover:border-indigo-300 hover:shadow-xl hover:bg-white cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-extrabold text-lg mb-6 shadow-md shadow-indigo-600/20 group-hover:scale-110 transition-transform">
                  {stg.step}
                </div>
                <h4 className="font-bold text-slate-900 text-xl mb-3 group-hover:text-indigo-600 transition-colors">{stg.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{stg.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

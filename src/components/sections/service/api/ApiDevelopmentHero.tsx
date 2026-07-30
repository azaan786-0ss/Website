import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function ApiDevelopmentHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const metrics = [
    { value: "< 50ms", label: "Latency Performance" },
    { value: "10M+", label: "Daily Requests Handled" },
    { value: "100%", label: "OpenAPI Documented" },
    { value: "Zero-Trust", label: "Security Protocol" },
  ];

  return (
    <section className="relative pt-space-24 pb-space-24 px-6 md:px-8 max-w-[1280px] mx-auto overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[length:40px_40px] -z-10 opacity-60"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-8"
        >
          <motion.span variants={itemVariants} className="inline-flex items-center gap-2 py-1.5 px-4 bg-indigo-50 text-indigo-700 border border-indigo-200/60 rounded-full font-caption text-xs sm:text-sm font-semibold mb-space-6 shadow-xs">
            <span className="material-symbols-outlined text-[18px] text-indigo-600">api</span>
            Engineering &amp; Cloud / API Development
          </motion.span>

          <motion.h1 variants={itemVariants} className="font-display-xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-space-6 text-slate-900 leading-tight tracking-tight">
            Robust Integrations &amp; <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-800">High-Performance APIs</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="font-body-lg text-base sm:text-lg text-slate-600 mb-space-10 max-w-2xl leading-relaxed">
            We design, build, and secure enterprise-grade RESTful, GraphQL, and gRPC APIs that connect complex ecosystems, support high data throughput, and accelerate system integration.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-space-16">
            <Link to="/start-project">
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/25"
              >
                Discuss API Architecture
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </motion.button>
            </Link>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="border border-slate-300 bg-white text-slate-800 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 transition-all"
            >
              Explore Integration Stack
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Hero Visual Node Graphic */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-4 hidden lg:flex justify-center"
        >
          <div className="relative w-full max-w-sm aspect-square bg-slate-900 rounded-3xl p-6 border border-slate-800 shadow-2xl overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-800 pb-3">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                API GATEWAY
              </span>
              <span className="text-emerald-400">200 OK</span>
            </div>
            
            <div className="space-y-3 font-mono text-xs my-4">
              <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700/60 text-slate-300 flex items-center justify-between">
                <span className="text-indigo-400">POST /v1/auth/token</span>
                <span className="text-slate-500">12ms</span>
              </div>
              <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700/60 text-slate-300 flex items-center justify-between">
                <span className="text-emerald-400">GET /v2/data/stream</span>
                <span className="text-slate-500">18ms</span>
              </div>
              <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700/60 text-slate-300 flex items-center justify-between">
                <span className="text-amber-400">gRPC /events.Subscribe</span>
                <span className="text-slate-500">4ms</span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>RATE LIMIT: 10k/sec</span>
              <span>TLS v1.3</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Metrics Grid */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-space-12 pt-8 border-t border-slate-200/80"
      >
        {metrics.map((m, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -4 }}
            className="p-6 border border-slate-200/80 rounded-2xl bg-white shadow-xs hover:border-indigo-400 hover:shadow-xl transition-all"
          >
            <div className="font-display-md text-2xl sm:text-3xl font-extrabold text-indigo-600 mb-1">{m.value}</div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{m.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

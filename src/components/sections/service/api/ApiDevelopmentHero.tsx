import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import { SplitText } from '../../../ui/SplitText';

export function ApiDevelopmentHero() {
  const titleText = 'Robust Integrations & High-Performance APIs';

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const metrics = [
    { value: '< 50ms', label: 'Latency Performance' },
    { value: '10M+', label: 'Daily Requests Handled' },
    { value: '100%', label: 'OpenAPI Documented' },
    { value: 'Zero-Trust', label: 'Security Protocol' },
  ];

  return (
    <section className="relative pt-6 sm:pt-10 pb-16 px-6 md:px-8 max-w-[1280px] mx-auto overflow-hidden dark:bg-[#050505] transition-colors duration-300">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-8"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-2 text-slate-500 dark:text-[#a3a3a3] font-caption text-xs sm:text-sm mb-4"
          >
            <Link className="hover:text-indigo-600 dark:hover:text-[#4f46e5] transition-colors" to="/">
              Home
            </Link>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <Link className="hover:text-indigo-600 dark:hover:text-[#4f46e5] transition-colors" to="/services">
              Services
            </Link>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <span className="text-slate-900 dark:text-[#fafafa] font-medium">API Development</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-slate-900 dark:text-[#fafafa] font-display-xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight"
          >
            <SplitText text={titleText} />
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-body-lg text-base sm:text-lg text-slate-600 dark:text-[#a3a3a3] mb-8 max-w-2xl leading-relaxed"
          >
            We design, build, and secure enterprise-grade RESTful, GraphQL, and gRPC APIs that
            connect complex ecosystems, support high data throughput, and accelerate system
            integration.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link to="/start-project" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-indigo-600 dark:bg-[#4f46e5] text-white dark:text-[#fafafa] px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 dark:hover:bg-[#4338ca] transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/25 dark:shadow-[#4f46e5]/20 w-full sm:w-auto"
              >
                Discuss API Architecture
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="border border-slate-300 dark:border-[#262626] bg-white dark:bg-transparent text-slate-800 dark:text-[#fafafa] px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-[#111111] transition-all w-full sm:w-auto"
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
          <div className="relative w-full max-w-sm aspect-square bg-slate-900 dark:bg-[#111111] rounded-3xl p-6 border border-slate-800 dark:border-[#262626] shadow-2xl overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-800 dark:border-[#262626] pb-3">
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

            <div className="pt-3 border-t border-slate-800 dark:border-[#262626] flex items-center justify-between text-[11px] font-mono text-slate-500">
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
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-slate-200/80"
      >
        {metrics.map((m, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -4 }}
            className="p-6 border border-slate-200/80 dark:border-[#262626] rounded-2xl bg-white dark:bg-[#111111] shadow-xs hover:border-indigo-400 dark:hover:border-[#c084fc] hover:shadow-xl dark:hover:shadow-[#c084fc]/10 transition-all"
          >
            <div className="font-display-md text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-[#c084fc] mb-1">
              {m.value}
            </div>
            <div className="text-xs font-semibold text-slate-500 dark:text-[#a3a3a3] uppercase tracking-wider">
              {m.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import { SplitText } from '../../../ui/SplitText';

export function ProcessAutomationHero() {
  const titleText = 'Streamlining Operations for Scalable Growth';

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
    { value: '-70%', label: 'Reduction in Manual Task Hours' },
    { value: '99.9%', label: 'Automated Process Accuracy' },
    { value: '24/7', label: 'Autonomous Operations Running' },
    { value: '< 90 Days', label: 'Average Investment ROI' },
  ];

  return (
    <section className="relative pt-6 sm:pt-10 pb-16 px-6 md:px-8 max-w-[1280px] mx-auto overflow-hidden">
      {/* Decorative ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-2 text-slate-500 font-caption text-xs sm:text-sm mb-4"
            >
              <Link className="hover:text-indigo-600 transition-colors" to="/">
                Home
              </Link>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              <Link className="hover:text-indigo-600 transition-colors" to="/services">
                Services
              </Link>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              <span className="text-slate-900 font-medium">Process Automation</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="animate-shine bg-clip-text text-transparent bg-[linear-gradient(110deg,#0f172a,45%,#6366f1,55%,#0f172a)] bg-[length:200%_100%] font-display-xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-slate-900 leading-tight"
            >
              <SplitText text={titleText} />
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="font-body-lg text-base sm:text-lg text-slate-600 mb-8 max-w-2xl leading-relaxed"
            >
              We design and deploy custom automated workflows, AI integrations, and operational
              pipelines that eliminate repetitive manual tasks, reduce human error, and lower
              operational overhead.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Link to="/start-project" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto shadow-lg shadow-indigo-600/25"
                >
                  Audit Your Workflows
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border border-slate-300 text-slate-800 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 transition-all duration-300 w-full sm:w-auto"
              >
                Explore Automation Use-Cases
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Interactive Tech HUD Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative h-[380px] sm:h-[420px] w-full rounded-3xl overflow-hidden border border-slate-200/80 bg-white/80 backdrop-blur-md shadow-xl shadow-indigo-500/5 p-6 flex flex-col justify-between group"
          >
            {/* Ambient inner glow */}
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Workflow Engine Live
                </span>
              </div>
              <span className="material-symbols-outlined text-indigo-600 text-xl">
                account_tree
              </span>
            </div>

            <div className="space-y-4 my-auto">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between group-hover:border-indigo-200 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">
                    <span className="material-symbols-outlined text-[20px]">smart_toy</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">AI Document Parser</div>
                    <div className="text-xs text-slate-500">Invoices & Contracts</div>
                  </div>
                </div>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200/60">
                  99.9% Autonomous
                </span>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between group-hover:border-indigo-200 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">
                    <span className="material-symbols-outlined text-[20px]">sync_alt</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">CRM & ERP Data Sync</div>
                    <div className="text-xs text-slate-500">Real-time Webhook Pipeline</div>
                  </div>
                </div>
                <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded-full border border-indigo-200/60">
                  Active
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
              <span>Status: Operational</span>
              <span className="text-indigo-600 font-semibold">Zero Human Lag</span>
            </div>
          </motion.div>
        </div>

        {/* Impact Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16 pt-8 border-t border-slate-200"
        >
          {metrics.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-indigo-400 hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col items-center text-center group"
            >
              <span className="text-indigo-600 font-display-md text-3xl sm:text-4xl font-extrabold mb-2 group-hover:scale-105 transition-transform duration-300">
                {item.value}
              </span>
              <span className="text-slate-500 font-caption text-xs sm:text-sm uppercase tracking-wider font-medium">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

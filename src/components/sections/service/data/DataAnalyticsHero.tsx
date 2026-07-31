import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import { SplitText } from '../../../ui/SplitText';

export function DataAnalyticsHero() {
  const titleText = 'Turn Raw Data into Actionable Growth & Insights';

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

  return (
    <section className="relative pt-6 sm:pt-10 pb-16 px-6 md:px-8 max-w-[1280px] mx-auto overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7"
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
            <span className="text-slate-900 font-medium">Data Analytics</span>
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
            We design, build, and deploy modern data pipelines, real-time analytics dashboards, and
            telemetry tracking that empower founders and product teams to make confident,
            data-backed decisions.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link to="/start-project" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto shadow-lg shadow-indigo-600/25"
              >
                Request Data Audit
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="border border-slate-300 bg-white text-slate-800 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 transition-all duration-300 w-full sm:w-auto"
            >
              Explore Data Stack
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Analytics Widget Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5"
        >
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-200/50 relative overflow-hidden">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200/60 flex flex-col justify-between group hover:border-indigo-300 transition-colors"
              >
                <span className="material-symbols-outlined text-indigo-600 text-3xl mb-4 group-hover:scale-110 transition-transform">
                  analytics
                </span>
                <div>
                  <div className="font-extrabold text-3xl text-indigo-600 mb-1">100%</div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Accuracy
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200/60 flex flex-col justify-between group hover:border-indigo-300 transition-colors"
              >
                <span className="material-symbols-outlined text-indigo-600 text-3xl mb-4 group-hover:scale-110 transition-transform">
                  speed
                </span>
                <div>
                  <div className="font-extrabold text-3xl text-indigo-600 mb-1">10x</div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Query Speed
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200/60 flex flex-col justify-between group hover:border-indigo-300 transition-colors"
              >
                <span className="material-symbols-outlined text-indigo-600 text-3xl mb-4 group-hover:scale-110 transition-transform">
                  radar
                </span>
                <div>
                  <div className="font-extrabold text-xl text-slate-900 mb-1">Real-Time</div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Telemetry
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200/60 flex flex-col justify-between group hover:border-indigo-300 transition-colors"
              >
                <span className="material-symbols-outlined text-indigo-600 text-3xl mb-4 group-hover:scale-110 transition-transform">
                  verified_user
                </span>
                <div>
                  <div className="font-extrabold text-xl text-slate-900 mb-1">SOC2</div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Compliance
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

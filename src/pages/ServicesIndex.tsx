import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SplitText } from '../components/ui/SplitText';
import { ServicesHero } from '../components/sections/service/ServicesHero';
import { TrustSection } from '../components/sections/TrustSection';

export function ServicesIndex() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const productServices = [
    {
      to: '/services/ux-ui-design',
      icon: 'view_quilt',
      title: 'UX/UI Design',
      desc: 'Crafting intuitive and engaging user experiences backed by research.',
    },
    {
      to: '/services/product-strategy',
      icon: 'architecture',
      title: 'Product Strategy',
      desc: 'Defining clear roadmaps and value propositions for market success.',
    },
    {
      to: '/services/brand-identity',
      icon: 'branding_watermark',
      title: 'Brand Identity',
      desc: 'Developing cohesive visual systems that communicate core values.',
    },
  ];

  const engineeringServices = [
    {
      to: '/services/product-engineering',
      icon: 'code',
      title: 'Full-Lifecycle Product Engineering',
      desc: 'Driving software and technology from initial concept to enterprise scale—building resilient systems that support and accelerate your business at every stage of growth.',
    },
    {
      to: '/services/cloud-architecture',
      icon: 'cloud',
      title: 'Cloud Architecture',
      desc: 'Resilient infrastructure design and deployment automation.',
    },
    {
      to: '/services/api-development',
      icon: 'hub',
      title: 'API Development',
      desc: 'Robust integrations and microservices for complex ecosystems.',
    },
  ];

  const growthServices = [
    {
      to: '/services/data-analytics',
      icon: 'trending_up',
      title: 'Data Analytics',
      desc: 'Actionable insights driven by comprehensive data strategies.',
    },
    {
      to: '/services/process-automation',
      icon: 'autorenew',
      title: 'Process Automation',
      desc: 'Streamlining operations for efficiency and reduced overhead.',
    },
    {
      to: '/services/performance-optimization',
      icon: 'speed',
      title: 'Performance Optimization',
      desc: 'Ensuring systems run at peak efficiency under high load.',
    },
  ];

  return (
    <div className="bg-slate-50 dark:bg-black text-slate-900 dark:text-white font-body-md antialiased selection:bg-indigo-100 dark:selection:bg-indigo-500/30 selection:text-indigo-900 dark:selection:text-indigo-200 min-h-screen flex flex-col transition-colors duration-300">
      {/* Global Page Grid Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 global-grid"></div>
      </div>
      <Navbar />

      <main className="flex-grow relative z-10">
        <ServicesHero />

        {/* Thin divider and Trust Section */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 xl:px-12 relative z-20">
          <hr className="border-slate-200 dark:border-zinc-800" />
          <div className="py-16 sm:py-20">
            <TrustSection />
          </div>
        </div>

        {/* Service Groups */}
        <section className="max-w-[1400px] mx-auto px-6 md:px-8 xl:px-12 pb-24 xl:pb-32 space-y-16 xl:space-y-24">
          {/* Group 1: Product & Design */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h2
              variants={itemVariants}
              className="font-bold text-xl sm:text-2xl border-b border-slate-200 dark:border-zinc-800 pb-4 flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-indigo-600 dark:text-indigo-400">palette</span>
              <span className="animate-shine bg-clip-text text-transparent bg-[linear-gradient(110deg,#0f172a,45%,#818cf8,55%,#0f172a)] dark:bg-[linear-gradient(110deg,#ffffff,45%,#818cf8,55%,#ffffff)] bg-[length:200%_100%]">
                <SplitText text="Product & Design" />
              </span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
              {productServices.map((service, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <Link
                    to={service.to}
                    className="block h-full border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 bg-white dark:bg-[#0A0A0A] hover:border-indigo-300 dark:hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-indigo-50 dark:bg-[#050505] rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 border border-transparent dark:border-zinc-800 group-hover:bg-indigo-600 dark:group-hover:bg-indigo-600 group-hover:text-white dark:group-hover:text-white transition-colors duration-300">
                      <span
                        className="material-symbols-outlined text-[24px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        {service.icon}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
                      {service.desc}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Group 2: Engineering & Cloud */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h2
              variants={itemVariants}
              className="font-bold text-xl sm:text-2xl border-b border-slate-200 dark:border-zinc-800 pb-4 flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-indigo-600 dark:text-indigo-400">terminal</span>
              <span className="animate-shine bg-clip-text text-transparent bg-[linear-gradient(110deg,#0f172a,45%,#818cf8,55%,#0f172a)] dark:bg-[linear-gradient(110deg,#ffffff,45%,#818cf8,55%,#ffffff)] bg-[length:200%_100%]">
                <SplitText text="Engineering & Cloud" />
              </span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
              {engineeringServices.map((service, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <Link
                    to={service.to}
                    className="block h-full border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 bg-white dark:bg-[#0A0A0A] hover:border-indigo-300 dark:hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-indigo-50 dark:bg-[#050505] rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 border border-transparent dark:border-zinc-800 group-hover:bg-indigo-600 dark:group-hover:bg-indigo-600 group-hover:text-white dark:group-hover:text-white transition-colors duration-300">
                      <span
                        className="material-symbols-outlined text-[24px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        {service.icon}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
                      {service.desc}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Group 3: Growth & Ops */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h2
              variants={itemVariants}
              className="font-bold text-xl sm:text-2xl border-b border-slate-200 dark:border-zinc-800 pb-4 flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-indigo-600 dark:text-indigo-400">trending_up</span>
              <span className="animate-shine bg-clip-text text-transparent bg-[linear-gradient(110deg,#0f172a,45%,#818cf8,55%,#0f172a)] dark:bg-[linear-gradient(110deg,#ffffff,45%,#818cf8,55%,#ffffff)] bg-[length:200%_100%]">
                <SplitText text="Growth & Ops" />
              </span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
              {growthServices.map((service, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <Link
                    to={service.to}
                    className="block h-full border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 bg-white dark:bg-[#0A0A0A] hover:border-indigo-300 dark:hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-indigo-50 dark:bg-[#050505] rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 border border-transparent dark:border-zinc-800 group-hover:bg-indigo-600 dark:group-hover:bg-indigo-600 group-hover:text-white dark:group-hover:text-white transition-colors duration-300">
                      <span
                        className="material-symbols-outlined text-[24px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        {service.icon}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
                      {service.desc}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA Band */}
        <section className="bg-indigo-600 dark:bg-black py-16 xl:py-24 text-white overflow-hidden relative border-t-0 dark:border-t dark:border-zinc-800">
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-24 right-10 w-96 h-96 bg-white/20 dark:bg-white/5 rounded-full blur-3xl pointer-events-none"
          />
          <div className="max-w-[1400px] mx-auto px-6 md:px-8 xl:px-12 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="text-center md:text-left w-full md:w-auto">
              <h2 className="font-display-md text-2xl sm:text-3xl font-extrabold mb-2 text-white">
                Ready to start a specific project?
              </h2>
              <p className="text-indigo-100 dark:text-zinc-400 text-sm sm:text-base max-w-xl mx-auto md:mx-0">
                Let's discuss how our engineering rigor can accelerate your growth.
              </p>
            </div>
            <Link to="/start-project" className="w-full md:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="w-full md:w-auto bg-white dark:bg-[#050505] text-indigo-600 dark:text-white px-8 py-4 rounded-xl font-bold text-base shadow-xl shadow-indigo-900/20 hover:shadow-2xl transition-all flex items-center justify-center border border-transparent dark:border-zinc-800"
              >
                Contact us
              </motion.button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

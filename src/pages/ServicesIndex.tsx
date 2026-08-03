import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SplitText } from '../components/ui/SplitText';
import { ServicesHero } from '../components/sections/service/ServicesHero';

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
    <div className="bg-slate-50 text-slate-900 font-body-md antialiased selection:bg-indigo-100 selection:text-indigo-900 min-h-screen flex flex-col">
      {/* Global Page Grid Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[length:64px_64px]"></div>
      </div>
      <Navbar />

      <main className="flex-grow relative z-10">
        <ServicesHero />

        {/* Our Services Title Section */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-8 pt-16 pb-8 relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 py-1.5 px-4 bg-indigo-50 text-indigo-700 border border-indigo-200/60 rounded-full font-caption text-xs sm:text-sm font-semibold mb-4 shadow-xs">
              <span className="material-symbols-outlined text-[18px] text-indigo-600">
                workspaces
              </span>
              OUR EXPERTISE
            </span>
            <h1 className="font-display-xl text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Our Services
            </h1>
            <p className="font-body-lg text-lg text-slate-600 max-w-2xl leading-relaxed mx-auto">
              Full-stack capabilities tailored for ambitious founders. From robust cloud and product
              engineering to data analytics and design systems.
            </p>
          </motion.div>
        </section>

        {/* Rich Content Section Below Hero */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-8 py-16 sm:py-20 relative bg-white z-20 rounded-3xl shadow-xl shadow-slate-200/50 mb-16 border border-slate-100">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-slate-900 font-display-xl text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight"
            >
              <SplitText text="Transforming Ideas Into Digital Reality" />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-body-lg text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed"
            >
              We craft distinctive brand identities, robust cloud architectures, and scalable digital products tailored for ambitious founders.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4 mb-16 sm:mb-20"
            >
              <Link to="/start-project">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold shadow-lg shadow-indigo-600/25 hover:bg-indigo-700 transition-all flex items-center gap-2"
                >
                  Start a Project
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border border-slate-300 text-slate-800 rounded-xl font-semibold hover:bg-slate-50 transition-all shadow-sm"
              >
                View Case Studies
              </motion.button>
            </motion.div>
          </div>

          {/* Impact Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-slate-200/60 w-full max-w-4xl mx-auto"
          >
            {[
              { value: '10+', label: 'Years Experience' },
              { value: '50+', label: 'Products Launched' },
              { value: '100%', label: 'Client Satisfaction' },
              { value: '24/7', label: 'Support & Maintenance' },
            ].map((m, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:border-indigo-400 hover:shadow-xl transition-all group"
              >
                <div className="text-indigo-600 font-display-md text-3xl sm:text-4xl font-extrabold mb-1 group-hover:scale-105 transition-transform">
                  {m.value}
                </div>
                <div className="font-caption text-xs sm:text-sm text-slate-500 uppercase font-semibold tracking-wider">
                  {m.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Service Groups */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-8 pb-24 space-y-16">
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
              className="font-bold text-xl sm:text-2xl border-b border-slate-200 pb-4 flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-indigo-600">palette</span>
              <span className="animate-shine bg-clip-text text-transparent bg-[linear-gradient(110deg,#0f172a,45%,#818cf8,55%,#0f172a)] bg-[length:200%_100%]">
                <SplitText text="Product & Design" />
              </span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productServices.map((service, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <Link
                    to={service.to}
                    className="block h-full border border-slate-200 rounded-2xl p-6 sm:p-8 bg-white hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                      <span
                        className="material-symbols-outlined text-[24px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        {service.icon}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
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
              className="font-bold text-xl sm:text-2xl border-b border-slate-200 pb-4 flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-indigo-600">terminal</span>
              <span className="animate-shine bg-clip-text text-transparent bg-[linear-gradient(110deg,#0f172a,45%,#818cf8,55%,#0f172a)] bg-[length:200%_100%]">
                <SplitText text="Engineering & Cloud" />
              </span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {engineeringServices.map((service, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <Link
                    to={service.to}
                    className="block h-full border border-slate-200 rounded-2xl p-6 sm:p-8 bg-white hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                      <span
                        className="material-symbols-outlined text-[24px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        {service.icon}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
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
              className="font-bold text-xl sm:text-2xl border-b border-slate-200 pb-4 flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-indigo-600">trending_up</span>
              <span className="animate-shine bg-clip-text text-transparent bg-[linear-gradient(110deg,#0f172a,45%,#818cf8,55%,#0f172a)] bg-[length:200%_100%]">
                <SplitText text="Growth & Ops" />
              </span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {growthServices.map((service, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <Link
                    to={service.to}
                    className="block h-full border border-slate-200 rounded-2xl p-6 sm:p-8 bg-white hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                      <span
                        className="material-symbols-outlined text-[24px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        {service.icon}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {service.desc}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA Band */}
        <section className="bg-indigo-600 py-16 text-white overflow-hidden relative">
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-24 right-10 w-96 h-96 bg-white/20 rounded-full blur-3xl pointer-events-none"
          />
          <div className="max-w-[1280px] mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="text-center md:text-left">
              <h2 className="font-display-md text-2xl sm:text-3xl font-extrabold mb-2">
                Ready to start a specific project?
              </h2>
              <p className="text-indigo-100 text-sm sm:text-base max-w-xl">
                Let's discuss how our engineering rigor can accelerate your growth.
              </p>
            </div>
            <Link to="/start-project">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold text-base shadow-xl shadow-indigo-900/20 hover:shadow-2xl transition-all"
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

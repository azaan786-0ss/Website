import { motion } from 'framer-motion';

export function UxUiCapabilities() {
    const colorThemes = {
      indigo: {
        cardBg: 'bg-indigo-500/10 dark:bg-[#12151C]',
        cardBorder: 'border-indigo-500/20 dark:border-slate-800',
        hoverCardBg: 'hover:bg-indigo-500/15 dark:hover:bg-[#1a1e28]',
        iconBg: 'bg-white dark:bg-[#0B0E14] shadow-sm dark:shadow-none border dark:border-slate-800',
        iconText: 'text-indigo-600 dark:text-[#818cf8]',
        hoverIconBg: 'group-hover:bg-indigo-600 dark:group-hover:bg-[#818cf8]',
        hoverBorder: 'hover:border-indigo-500/50 dark:hover:border-indigo-500/50',
        hoverShadow: 'hover:shadow-indigo-500/20 dark:hover:shadow-indigo-500/10',
        hoverTitle: 'group-hover:text-indigo-700 dark:group-hover:text-[#818cf8]',
      },
      purple: {
        cardBg: 'bg-purple-500/10 dark:bg-[#12151C]',
        cardBorder: 'border-purple-500/20 dark:border-slate-800',
        hoverCardBg: 'hover:bg-purple-500/15 dark:hover:bg-[#1a1e28]',
        iconBg: 'bg-white dark:bg-[#0B0E14] shadow-sm dark:shadow-none border dark:border-slate-800',
        iconText: 'text-purple-600 dark:text-purple-400',
        hoverIconBg: 'group-hover:bg-purple-600 dark:group-hover:bg-purple-500',
        hoverBorder: 'hover:border-purple-500/50 dark:hover:border-purple-500/50',
        hoverShadow: 'hover:shadow-purple-500/20 dark:hover:shadow-purple-500/10',
        hoverTitle: 'group-hover:text-purple-700 dark:group-hover:text-purple-400',
      },
      emerald: {
        cardBg: 'bg-emerald-500/10 dark:bg-[#12151C]',
        cardBorder: 'border-emerald-500/20 dark:border-slate-800',
        hoverCardBg: 'hover:bg-emerald-500/15 dark:hover:bg-[#1a1e28]',
        iconBg: 'bg-white dark:bg-[#0B0E14] shadow-sm dark:shadow-none border dark:border-slate-800',
        iconText: 'text-emerald-600 dark:text-emerald-400',
        hoverIconBg: 'group-hover:bg-emerald-600 dark:group-hover:bg-emerald-500',
        hoverBorder: 'hover:border-emerald-500/50 dark:hover:border-emerald-500/50',
        hoverShadow: 'hover:shadow-emerald-500/20 dark:hover:shadow-emerald-500/10',
        hoverTitle: 'group-hover:text-emerald-700 dark:group-hover:text-emerald-400',
      },
      blue: {
        cardBg: 'bg-blue-500/10 dark:bg-[#12151C]',
        cardBorder: 'border-blue-500/20 dark:border-slate-800',
        hoverCardBg: 'hover:bg-blue-500/15 dark:hover:bg-[#1a1e28]',
        iconBg: 'bg-white dark:bg-[#0B0E14] shadow-sm dark:shadow-none border dark:border-slate-800',
        iconText: 'text-blue-600 dark:text-blue-400',
        hoverIconBg: 'group-hover:bg-blue-600 dark:group-hover:bg-blue-500',
        hoverBorder: 'hover:border-blue-500/50 dark:hover:border-blue-500/50',
        hoverShadow: 'hover:shadow-blue-500/20 dark:hover:shadow-blue-500/10',
        hoverTitle: 'group-hover:text-blue-700 dark:group-hover:text-blue-400',
      },
      amber: {
        cardBg: 'bg-amber-500/10 dark:bg-[#12151C]',
        cardBorder: 'border-amber-500/20 dark:border-slate-800',
        hoverCardBg: 'hover:bg-amber-500/15 dark:hover:bg-[#1a1e28]',
        iconBg: 'bg-white dark:bg-[#0B0E14] shadow-sm dark:shadow-none border dark:border-slate-800',
        iconText: 'text-amber-600 dark:text-amber-400',
        hoverIconBg: 'group-hover:bg-amber-600 dark:group-hover:bg-amber-500',
        hoverBorder: 'hover:border-amber-500/50 dark:hover:border-amber-500/50',
        hoverShadow: 'hover:shadow-amber-500/20 dark:hover:shadow-amber-500/10',
        hoverTitle: 'group-hover:text-amber-700 dark:group-hover:text-amber-400',
      },
      rose: {
        cardBg: 'bg-rose-500/10 dark:bg-[#12151C]',
        cardBorder: 'border-rose-500/20 dark:border-slate-800',
        hoverCardBg: 'hover:bg-rose-500/15 dark:hover:bg-[#1a1e28]',
        iconBg: 'bg-white dark:bg-[#0B0E14] shadow-sm dark:shadow-none border dark:border-slate-800',
        iconText: 'text-rose-600 dark:text-rose-400',
        hoverIconBg: 'group-hover:bg-rose-600 dark:group-hover:bg-rose-500',
        hoverBorder: 'hover:border-rose-500/50 dark:hover:border-rose-500/50',
        hoverShadow: 'hover:shadow-rose-500/20 dark:hover:shadow-rose-500/10',
        hoverTitle: 'group-hover:text-rose-700 dark:group-hover:text-rose-400',
      },
    };

  const capabilities = [
    {
      icon: 'search',
      title: 'User Research & Testing',
      desc: 'Heuristic evaluations, user interviews, and usability testing to validate every decision with real data. We dive deep into user behavior to ensure every design choice is backed by concrete insights, eliminating guesswork and maximizing ROI while creating experiences that truly resonate.',
      className: 'md:col-span-2 lg:col-span-2 lg:row-span-2',
      isLarge: true,
      color: 'indigo',
      stat: {
        value: '98%',
        label: 'Task Success Rate',
        icon: 'trending_up'
      },
      tags: [
        { name: 'A/B Testing', icon: 'compare_arrows' },
        { name: 'Heatmaps', icon: 'local_fire_department' },
        { name: 'User Interviews', icon: 'groups' },
        { name: 'Journey Mapping', icon: 'route' },
        { name: 'Usability Audits', icon: 'fact_check' },
      ]
    },
    {
      icon: 'layers',
      title: 'Wireframing & Prototyping',
      desc: 'Interactive low-to-high fidelity click-through prototypes that bring concepts to life before development.',
      className: 'md:col-span-1 lg:col-span-1 lg:row-span-1',
      color: 'purple',
    },
    {
      icon: 'auto_awesome_mosaic',
      title: 'Design Systems & Tokens',
      desc: 'Scalable Figma design systems and reusable UI components to ensure consistency across your entire product.',
      className: 'md:col-span-1 lg:col-span-1 lg:row-span-1',
      color: 'emerald',
    },
    {
      icon: 'devices',
      title: 'Mobile & Web App Design',
      desc: 'Responsive layouts and native iOS/Android design standards crafted for perfect performance on any screen.',
      className: 'md:col-span-1 lg:col-span-1 lg:row-span-1',
      color: 'blue',
    },
    {
      icon: 'animation',
      title: 'Micro-Interactions & Motion',
      desc: 'Delightful UI transitions and purposeful motion design that guide users and elevate the premium feel.',
      className: 'md:col-span-1 lg:col-span-1 lg:row-span-1',
      color: 'amber',
    },
    {
      icon: 'fact_check',
      title: 'UX Audit & Optimization',
      desc: 'Identifying friction points and conversion bottlenecks through expert analysis and data-driven insights.',
      className: 'md:col-span-2 lg:col-span-1 lg:row-span-1',
      color: 'rose',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="bg-slate-50/50 dark:bg-[#0B0E14] py-space-24 relative overflow-hidden transition-colors duration-300">
      {/* Glassmorphism Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-300/20 blur-[120px]" />
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] rounded-full bg-purple-300/20 blur-[120px]" />
        <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[50%] rounded-full bg-blue-300/20 blur-[120px]" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-space-12 text-center"
        >
          <h2 className="font-display-lg text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-[#f3f4f6] mb-space-4">
            Core Capabilities
          </h2>
          <p className="text-slate-600 dark:text-[#9ca3af] max-w-xl mx-auto font-body-md text-base">
            End-to-end design excellence tailored for modern digital ecosystems.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(180px,auto)] gap-4 md:gap-6"
        >
          {capabilities.map((item, idx) => {
            const theme = colorThemes[item.color as keyof typeof colorThemes];
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className={`p-6 sm:p-8 rounded-2xl md:rounded-[32px] border backdrop-blur-xl transition-all duration-300 group flex flex-col hover:shadow-2xl ${item.isLarge ? 'justify-end' : 'justify-between'} ${item.className} ${theme.cardBg} ${theme.cardBorder} ${theme.hoverCardBg} ${theme.hoverBorder} ${theme.hoverShadow}`}
              >
                <div className={`${item.isLarge ? 'h-full flex flex-col justify-between relative' : ''}`}>
                  <div className="flex justify-between items-start">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:text-white group-hover:scale-110 transition-all duration-300 ${theme.iconBg} ${theme.iconText} ${theme.hoverIconBg} ${item.isLarge ? 'mb-8 md:mb-12' : 'mb-6'}`}>
                      <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
                    </div>

                    {item.stat && (
                      <div className="bg-white/50 dark:bg-[#12151C]/80 backdrop-blur-md border border-white/60 dark:border-slate-800 px-5 py-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col items-start transform group-hover:-translate-y-1 transition-transform duration-300">
                        <div className="flex items-center gap-2.5 mb-1.5">
                          <div className={`w-8 h-8 rounded-full ${theme.cardBg} flex items-center justify-center`}>
                            <span className={`material-symbols-outlined ${theme.iconText} text-[16px]`}>{item.stat.icon}</span>
                          </div>
                          <span className="font-heading-md text-3xl font-extrabold text-slate-800 dark:text-[#f3f4f6]">{item.stat.value}</span>
                        </div>
                        <span className="text-slate-600 dark:text-[#9ca3af] font-body-md text-sm font-semibold">{item.stat.label}</span>
                      </div>
                    )}
                  </div>

                  {item.isLarge && item.tags && (
                    <div className="flex-1 flex flex-col items-center justify-center py-6 sm:py-8 lg:py-10">
                      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-[85%] mx-auto">
                        {item.tags.map((tag, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * i, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border backdrop-blur-md text-xs sm:text-sm font-semibold shadow-sm flex items-center gap-2 transition-transform duration-300 hover:scale-105 hover:-translate-y-1 ${
                              i % 2 === 0 
                                ? 'bg-indigo-500/10 dark:bg-indigo-500/20 border-indigo-500/20 dark:border-indigo-500/30 text-indigo-700 dark:text-[#818cf8]' 
                                : 'bg-white/50 dark:bg-[#12151C]/80 border-white/60 dark:border-slate-800 text-slate-700 dark:text-[#f3f4f6]'
                            }`}
                          >
                            <span className="material-symbols-outlined text-[16px]">{tag.icon}</span>
                            {tag.name}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div>
                    <h3 className={`font-heading-md font-bold text-slate-900 dark:text-[#f3f4f6] transition-colors ${item.isLarge ? 'text-2xl sm:text-3xl mb-4' : 'text-lg sm:text-xl mb-3'} ${theme.hoverTitle}`}>
                      {item.title}
                    </h3>
                    <p className={`text-slate-700 dark:text-[#9ca3af] font-body-md leading-relaxed ${item.isLarge ? 'text-base sm:text-lg max-w-2xl' : 'text-sm sm:text-base'}`}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

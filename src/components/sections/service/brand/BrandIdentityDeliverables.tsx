import { motion } from 'framer-motion';

export function BrandIdentityDeliverables() {
  const items = [
    {
      title: 'Vector Master Kits',
      desc: 'Fully scalable SVG/EPS logos in all variations (primary, secondary, monochrome).',
    },
    {
      title: 'Web Brand Book',
      desc: 'A live, interactive documentation site that grows with your company.',
    },
    {
      title: 'Typography System',
      desc: 'Fully licensed fonts and configured CSS/Tailwind typography hierarchies.',
    },
    {
      title: 'Marketing Core Kit',
      desc: 'Plug-and-play templates for Google Slides, LinkedIn, and email signatures.',
    },
  ];

  return (
    <section className="py-space-32 px-6 md:px-8 bg-slate-50/60 dark:bg-[#0B0E14] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-indigo-600 dark:text-[#818cf8] font-caption text-xs uppercase tracking-widest mb-space-4 block font-bold">
              The Package
            </span>
            <h2 className="font-display-lg text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-[#f3f4f6] mb-space-8">
              What You Receive
            </h2>
            <ul className="space-y-6">
              {items.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <span
                    className="material-symbols-outlined text-indigo-600 dark:text-[#818cf8] text-[24px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <div>
                    <h5 className="font-heading-md text-base sm:text-lg font-bold text-slate-900 dark:text-[#f3f4f6]">
                      {item.title}
                    </h5>
                    <p className="text-slate-600 dark:text-[#9ca3af] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4 sm:gap-6"
          >
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-[#12151C] p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-md transform sm:translate-y-6 hover:shadow-xl transition-all"
            >
              <div className="text-xs font-semibold text-slate-400 dark:text-[#9ca3af] mb-4 uppercase tracking-wider">
                Color Palette
              </div>
              <div className="flex flex-col gap-2">
                <div className="h-10 bg-indigo-600 dark:bg-[#818cf8] rounded-lg shadow-sm"></div>
                <div className="h-10 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg"></div>
                <div className="h-10 bg-slate-900 dark:bg-slate-300 rounded-lg"></div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-[#12151C] p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-xl transition-all"
            >
              <div className="text-xs font-semibold text-slate-400 dark:text-[#9ca3af] mb-4 uppercase tracking-wider">
                Typography
              </div>
              <div className="space-y-2">
                <div className="font-display-md text-3xl font-extrabold text-slate-900 dark:text-[#f3f4f6] leading-none">
                  Aa
                </div>
                <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Inter Tight / Plus</div>
                <div className="h-px bg-slate-200 dark:bg-slate-700 my-3"></div>
                <div className="font-bold text-slate-800 dark:text-slate-300 text-sm">H1 Headline</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">1.2 line-height</div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-[#12151C] p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-md col-span-2 hover:shadow-xl transition-all"
            >
              <div className="text-xs font-semibold text-slate-400 dark:text-[#9ca3af] mb-4 uppercase tracking-wider">
                Iconography Library
              </div>
              <div className="grid grid-cols-6 gap-4 items-center justify-items-center">
                {['analytics', 'language', 'security', 'hub', 'auto_graph', 'diversity_3'].map(
                  (icon, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.25 }}
                      className="material-symbols-outlined text-indigo-600 dark:text-[#818cf8] text-[26px] cursor-pointer"
                    >
                      {icon}
                    </motion.span>
                  )
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';

export function UxUiDeliverables() {
  const deliverables = [
    'Figma master design source files',
    'Documented component library & tokens',
    'Comprehensive UI Kit & Style Guide',
    'Full-resolution interactive prototype',
    'Designer-to-developer handoff documentation',
  ];

  const tools = [
    { icon: 'deployed_code', name: 'Figma' },
    { icon: 'motion_sensor_active', name: 'Principle' },
    { icon: 'web_asset', name: 'Framer' },
    { icon: 'auto_stories', name: 'Storybook' },
    { icon: 'play_circle', name: 'Lottie' },
  ];

  return (
    <section className="bg-slate-50/70 py-space-24">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display-lg text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-space-8">
            Premium Deliverables
          </h2>
          <ul className="space-y-4">
            {deliverables.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-center gap-4 text-slate-700 text-sm sm:text-base font-medium"
              >
                <span className="material-symbols-outlined text-emerald-500 text-[22px]">
                  check_circle
                </span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-md"
        >
          <p className="font-caption text-xs uppercase text-slate-500 mb-space-8 tracking-widest text-center font-semibold">
            Powering our workflow
          </p>
          <div className="grid grid-cols-3 gap-6 sm:gap-8 items-center justify-items-center">
            {tools.map((tool, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.15, y: -4 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="flex flex-col items-center gap-2 cursor-pointer group"
              >
                <span className="material-symbols-outlined text-[42px] text-slate-600 group-hover:text-indigo-600 transition-colors">
                  {tool.icon}
                </span>
                <span className="font-mono text-xs font-semibold text-slate-600 group-hover:text-indigo-600 transition-colors">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

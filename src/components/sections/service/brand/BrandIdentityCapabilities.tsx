import { motion } from "framer-motion";

export function BrandIdentityCapabilities() {
  const capabilities = [
    {
      icon: "psychology",
      title: "Brand Positioning & Voice",
      desc: "Definition of core mission, unique tone of voice, and comprehensive messaging architecture for unified communication.",
    },
    {
      icon: "grid_view",
      title: "Logo & Icon Systems",
      desc: "Scalable vector logos, mark variations, favicons, and custom icon sets optimized for all digital environments.",
    },
    {
      icon: "palette",
      title: "Color & Typography",
      desc: "WCAG-compliant accessible color palettes and meticulous web typography scales designed for long-term scalability.",
    },
    {
      icon: "menu_book",
      title: "Digital Brand Guidelines",
      desc: "Interactive web-based brand portals featuring live documentation and dynamic asset downloads for global teams.",
    },
    {
      icon: "auto_awesome_motion",
      title: "Marketing & Social Kits",
      desc: "Modular templates for social media, executive pitch decks, and high-impact digital advertising assets.",
    },
    {
      icon: "integration_instructions",
      title: "Product Integration",
      desc: "Seamless translation of visual brand identity directly into functional UI design systems and component libraries.",
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
    <section className="py-space-32 bg-slate-50/70 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-space-16"
        >
          <h2 className="font-display-lg text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-space-4">Core Capabilities</h2>
          <div className="w-24 h-1.5 bg-indigo-600 rounded-full"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {capabilities.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group bg-white p-8 rounded-2xl border border-slate-200/80 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
                </div>
                <h3 className="font-heading-lg text-lg sm:text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

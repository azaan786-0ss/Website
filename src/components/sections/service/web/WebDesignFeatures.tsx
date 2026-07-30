import { motion } from "framer-motion";

const features = [
  {
    title: "Sub-1s Load Times",
    description: "We engineer for performance. By leveraging Next.js static generation, edge caching, and optimized asset delivery, your site loads instantly, boosting SEO and conversion rates.",
    icon: "bolt",
  },
  {
    title: "Pixel-Perfect UI & Micro-interactions",
    description: "Design isn't just about how it looks, but how it feels. We implement buttery-smooth Framer Motion animations and precise layouts to create a premium, tactile user experience.",
    icon: "animation",
  },
  {
    title: "Headless CMS Flexibility",
    description: "Take full control of your content without compromising frontend performance. We integrate headless architectures like Sanity or Contentful for a seamless editorial workflow.",
    icon: "hub",
  }
];

export function WebDesignFeatures() {
  return (
    <section className="mb-space-32 relative z-10 transition-colors duration-300">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
        >
          <span className="material-symbols-outlined text-[16px]">verified</span>
          Technical Excellence
        </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display-lg text-4xl md:text-5xl font-bold tracking-tight text-on-surface dark:text-on-secondary mb-6"
          >
            Engineered for <span className="text-primary">Performance</span> & Polish
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-text-secondary dark:text-secondary-fixed-dim"
          >
            We don't rely on generic templates. Every platform is custom-built with modern React architecture to deliver unmatched speed and aesthetic precision.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              className="group relative bg-bg-secondary dark:bg-bg-dark-secondary rounded-2xl p-8 border border-slate-200/60 dark:border-white/10 hover:border-primary/30 dark:hover:border-primary/40 hover:shadow-[0_8px_30px_rgb(79,70,229,0.12)] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Subtle gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
              
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 ring-1 ring-primary/20 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined text-[28px]">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-on-surface dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-text-secondary dark:text-secondary-fixed-dim leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
    </section>
  );
}

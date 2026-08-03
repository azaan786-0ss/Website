import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const CapabilityCard = ({ item, idx, total }: { item: any; idx: number; total: number }) => {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start 15%', 'end 15%'],
  });

  const isLast = idx === total - 1;

  const scale = useTransform(scrollYProgress, [0, 1], [1, isLast ? 1 : 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, isLast ? 1 : 0.3]);
  const y = useTransform(scrollYProgress, [0, 1], [0, isLast ? 0 : -40]);

  return (
    <div ref={targetRef} className="w-full relative" style={{ zIndex: idx + 1 }}>
      <motion.div
        className="sticky top-[15vh] group bg-white p-8 sm:p-10 rounded-[32px] border border-slate-200 shadow-2xl flex flex-col sm:flex-row gap-6 sm:gap-8 items-start origin-top"
        style={{
          scale,
          opacity,
          y,
        }}
      >
        <div className="w-16 h-16 shrink-0 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white group-hover:-rotate-3 transition-all duration-300 shadow-sm">
          <span className="material-symbols-outlined text-[32px]">{item.icon}</span>
        </div>
        <div className="flex-1 pt-1">
          <h3 className="font-heading-lg text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
            {item.title}
          </h3>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
            {item.desc}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export function BrandIdentityCapabilities() {
  const capabilities = [
    {
      icon: 'psychology',
      title: 'Brand Positioning & Voice',
      desc: 'Definition of core mission, unique tone of voice, and comprehensive messaging architecture for unified communication.',
    },
    {
      icon: 'grid_view',
      title: 'Logo & Icon Systems',
      desc: 'Scalable vector logos, mark variations, favicons, and custom icon sets optimized for all digital environments.',
    },
    {
      icon: 'palette',
      title: 'Color & Typography',
      desc: 'WCAG-compliant accessible color palettes and meticulous web typography scales designed for long-term scalability.',
    },
    {
      icon: 'menu_book',
      title: 'Digital Brand Guidelines',
      desc: 'Interactive web-based brand portals featuring live documentation and dynamic asset downloads for global teams.',
    },
    {
      icon: 'auto_awesome_motion',
      title: 'Marketing & Social Kits',
      desc: 'Modular templates for social media, executive pitch decks, and high-impact digital advertising assets.',
    },
    {
      icon: 'integration_instructions',
      title: 'Product Integration',
      desc: 'Seamless translation of visual brand identity directly into functional UI design systems and component libraries.',
    },
  ];

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
          <h2 className="font-display-lg text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-space-4">
            Core Capabilities
          </h2>
          <div className="w-24 h-1.5 bg-indigo-600 rounded-full"></div>
        </motion.div>

        <div className="flex flex-col max-w-4xl mx-auto w-full gap-8 pb-[10vh]">
          {capabilities.map((item, idx) => (
            <CapabilityCard key={idx} item={item} idx={idx} total={capabilities.length} />
          ))}
        </div>
      </div>
    </section>
  );
}

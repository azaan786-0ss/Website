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
          <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
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

export function PerformanceOptimizationCapabilities() {
  const capabilities = [
    {
      icon: 'speed',
      title: 'Frontend Speed Tuning',
      desc: 'Eliminating render-blocking resources, implementing critical CSS, and optimizing asset delivery pipelines.',
    },
    {
      icon: 'database',
      title: 'Database Optimization',
      desc: 'Query refactoring, strategic indexing, and schema normalization to reduce I/O overhead and lock contention.',
    },
    {
      icon: 'memory',
      title: 'Server-Side Caching',
      desc: 'Multi-layer caching strategies using Redis and Memcached to minimize expensive compute operations.',
    },
    {
      icon: 'bolt',
      title: 'Load Testing',
      desc: 'Simulating extreme traffic patterns to identify failure points before they impact real users.',
    },
    {
      icon: 'code',
      title: 'Codebase Optimization',
      desc: 'Algorithmic improvements and removal of bloat to ensure lean, efficient execution cycles.',
    },
    {
      icon: 'search_insights',
      title: 'Memory Leak Profiling',
      desc: 'Deep forensic analysis to prevent silent resource exhaustion and application crashes.',
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
            Core Engineering Capabilities
          </h2>
          <div className="w-24 h-1.5 bg-indigo-600 rounded-full mb-6"></div>
          <p className="font-body-lg text-slate-600 max-w-2xl text-base sm:text-lg">
            Meticulous optimization across every layer of your technology stack.
          </p>
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

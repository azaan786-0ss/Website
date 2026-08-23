import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export function ProductStrategyRoadmap() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const visibleHeight = window.innerHeight;
      if (rect.top < visibleHeight && rect.bottom > 0) {
        const scrollPercent = Math.min(
          100,
          Math.max(0, ((visibleHeight - rect.top) / (rect.height + visibleHeight)) * 100)
        );
        setScrollProgress(scrollPercent);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const phases = [
    {
      num: 1,
      title: 'Opportunity Assessment',
      desc: 'In-depth market research, competitive landscape auditing, and internal stakeholder alignment workshops.',
      tags: ['Market Audit', 'SWOT'],
      thresh: 10,
    },
    {
      num: 2,
      title: 'Concept Validation',
      desc: 'Rapid hypothesis testing, targeted user interviews, and landing page experiments to confirm demand.',
      tags: ['User Interviews', 'Demand Testing'],
      thresh: 35,
    },
    {
      num: 3,
      title: 'Product Blueprint',
      desc: 'Feature prioritization matrix using RICE scoring and detailed technical architecture roadmap.',
      tags: ['PRD', 'Feature Matrix'],
      thresh: 60,
    },
    {
      num: 4,
      title: 'Go-to-Market Playbook',
      desc: 'Full launch sequence, telemetry setup for tracking KPIs, and iterative feedback loop establishment.',
      tags: ['GTM Strategy', 'Analytics Plan'],
      thresh: 85,
    },
  ];

  return (
    <section className="py-space-24 px-6 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:sticky md:top-32 md:w-1/3"
        >
          <h2 className="font-display-lg text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-[#f3f4f6]">
            The IronStack Systems Roadmap Process
          </h2>
          <p className="text-slate-600 dark:text-[#9ca3af] mt-space-4 text-sm sm:text-base leading-relaxed">
            A proven 4-phase methodology designed to turn concepts into market-ready leaders.
          </p>
        </motion.div>

        <div className="md:w-2/3 space-y-6 relative" ref={sectionRef}>
          {/* Vertical Progress Line */}
          <div
            className="absolute left-8 sm:left-10 top-8 bottom-8 w-[2px] z-0 block rounded-full bg-slate-200 dark:bg-slate-800"
          >
            <div
              className="absolute top-0 left-0 w-full transition-all duration-75 bg-indigo-600 dark:bg-[#818cf8] rounded-full"
              style={{ height: `${scrollProgress}%` }}
            />
          </div>

          {phases.map((phase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="relative z-10 flex gap-6 items-start bg-white dark:bg-[#12151C] p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm transition-all hover:border-indigo-500/50 dark:hover:border-indigo-500/50 hover:shadow-lg group"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold shrink-0 transition-colors duration-300 shadow-md ${scrollProgress >= phase.thresh ? 'bg-indigo-600 dark:bg-[#818cf8] text-white dark:text-[#1e1b4b] scale-105' : 'bg-slate-100 dark:bg-[#0B0E14] text-slate-600 dark:text-[#9ca3af]'}`}
              >
                {phase.num}
              </div>
              <div>
                <h4 className="font-heading-lg text-lg sm:text-xl font-bold text-slate-900 dark:text-[#f3f4f6] mb-2 group-hover:text-indigo-600 dark:group-hover:text-[#818cf8] transition-colors">
                  {phase.title}
                </h4>
                <p className="text-slate-600 dark:text-[#9ca3af] text-sm sm:text-base mb-4 leading-relaxed">
                  {phase.desc}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {phase.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="bg-slate-100 dark:bg-[#0B0E14] px-3 py-1 rounded-md text-xs font-semibold text-slate-700 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

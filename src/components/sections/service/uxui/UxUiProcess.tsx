import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export function UxUiProcess() {
  const [progress, setProgress] = useState(0);
  const processRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!processRef.current) return;
      const processSection = processRef.current;
      const scrollPos = window.scrollY + window.innerHeight / 2;
      const sectionTop = processSection.offsetTop;
      const sectionHeight = processSection.offsetHeight;

      if (scrollPos > sectionTop) {
        let p = ((scrollPos - sectionTop) / sectionHeight) * 100;
        p = Math.min(Math.max(p, 0), 100);
        setProgress(p);
      } else {
        setProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    {
      num: 1,
      title: 'Discover & Research',
      desc: 'User mapping, stakeholder interviews, and persona development to set the strategic foundation.',
      thresh: 0,
    },
    {
      num: 2,
      title: 'Architecture & Wireframing',
      desc: 'Building information architecture and logical user flows before a single pixel is styled.',
      thresh: 33,
    },
    {
      num: 3,
      title: 'Visual UI & Prototyping',
      desc: 'Crafting the high-fidelity visual identity and high-resolution interactive prototypes.',
      thresh: 66,
    },
    {
      num: 4,
      title: 'Testing & Handoff',
      desc: 'Developer-ready documentation, design tokens, and final spec alignment for seamless builds.',
      thresh: 95,
    },
  ];

  return (
    <section className="py-space-32 bg-white dark:bg-[#0B0E14] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-space-16 text-center md:text-left"
        >
          <h2 className="font-display-lg text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-[#f3f4f6] mb-2">
            The IronStack Systems Process
          </h2>
          <p className="text-slate-600 dark:text-[#9ca3af] text-base">
            A meticulous, four-phase engineering approach to creative problem solving.
          </p>
        </motion.div>

        <div className="relative" ref={processRef}>
          {/* Progress Line background */}
          <div className="absolute top-8 left-0 w-full h-[2px] bg-slate-200 dark:bg-slate-800 hidden md:block"></div>
          <div
            className="absolute top-8 left-0 h-[2px] bg-indigo-600 dark:bg-[#818cf8] transition-all duration-300 ease-out hidden md:block shadow-sm shadow-indigo-600 dark:shadow-indigo-500/20"
            style={{ width: `${progress}%` }}
          ></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 relative">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="relative pt-space-10 bg-slate-50/50 dark:bg-[#12151C]/50 p-6 rounded-2xl border border-slate-200/70 dark:border-slate-800/80 hover:border-indigo-500/40 dark:hover:border-indigo-500/50 hover:shadow-lg transition-all group"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm z-10 transition-all duration-300 mb-4 shadow-md ${progress >= step.thresh ? 'bg-indigo-600 dark:bg-[#818cf8] text-white dark:text-[#1e1b4b] scale-110' : 'bg-white dark:bg-[#12151C] border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-[#9ca3af]'}`}
                >
                  {step.num}
                </div>
                <h4 className="font-heading-md text-lg font-bold text-slate-900 dark:text-[#f3f4f6] mb-2 group-hover:text-indigo-600 dark:group-hover:text-[#818cf8] transition-colors">
                  {step.title}
                </h4>
                <p className="text-slate-600 dark:text-[#9ca3af] font-body-md text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

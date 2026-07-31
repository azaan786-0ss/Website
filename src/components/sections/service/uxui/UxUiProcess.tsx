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
    <section className="py-space-32 bg-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-space-16 text-center md:text-left"
        >
          <h2 className="font-display-lg text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
            The Nexus Process
          </h2>
          <p className="text-slate-600 text-base">
            A meticulous, four-phase engineering approach to creative problem solving.
          </p>
        </motion.div>

        <div className="relative" ref={processRef}>
          {/* Progress Line background */}
          <div className="absolute top-8 left-0 w-full h-[2px] bg-slate-200 hidden md:block"></div>
          <div
            className="absolute top-8 left-0 h-[2px] bg-indigo-600 transition-all duration-300 ease-out hidden md:block shadow-sm shadow-indigo-600"
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
                className="relative pt-space-10 bg-slate-50/50 p-6 rounded-2xl border border-slate-200/70 hover:border-indigo-500/40 hover:shadow-lg transition-all group"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm z-10 transition-all duration-300 mb-4 shadow-md ${progress >= step.thresh ? 'bg-indigo-600 text-white scale-110' : 'bg-white border border-slate-300 text-slate-700'}`}
                >
                  {step.num}
                </div>
                <h4 className="font-heading-md text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {step.title}
                </h4>
                <p className="text-slate-600 font-body-md text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

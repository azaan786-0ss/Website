import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  SiFramer,
  SiVercel,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiStripe,
  SiGithub,
  SiFigma,
  SiSupabase,
  SiDocker,
  SiPrisma,
  SiPostgresql,
  SiGraphql,
  SiGooglecloud,
} from 'react-icons/si';
import { FaSlack } from 'react-icons/fa';

const brandIcons = [
  { Icon: SiFramer, top: '15%', left: '10%', delay: 0.2, duration: 3.5, size: 40, color: '#0055FF' },
  { Icon: SiVercel, top: '25%', left: '80%', delay: 1.1, duration: 4.1, size: 48, color: '#000000' },
  { Icon: SiReact, top: '65%', left: '15%', delay: 0.5, duration: 3.8, size: 56, color: '#61DAFB' },
  { Icon: SiTailwindcss, top: '75%', left: '85%', delay: 1.5, duration: 4.5, size: 44, color: '#06B6D4' },
  { Icon: SiSupabase, top: '45%', left: '5%', delay: 0.8, duration: 3.2, size: 40, color: '#3ECF8E' },
  { Icon: SiTypescript, top: '55%', left: '90%', delay: 0.3, duration: 4.0, size: 36, color: '#3178C6' },
  { Icon: SiStripe, top: '10%', left: '70%', delay: 1.2, duration: 3.7, size: 52, color: '#008CDD' },
  { Icon: SiGithub, top: '85%', left: '25%', delay: 0.9, duration: 3.9, size: 48, color: '#181717' },
  { Icon: SiFigma, top: '35%', left: '20%', delay: 0.6, duration: 4.2, size: 44, color: '#F24E1E' },
  { Icon: FaSlack, top: '15%', left: '35%', delay: 1.4, duration: 3.6, size: 32, color: '#4A154B' },
  { Icon: SiGooglecloud, top: '85%', left: '75%', delay: 0.1, duration: 4.8, size: 48, color: '#4285F4' },
  { Icon: SiDocker, top: '50%', left: '80%', delay: 1.7, duration: 3.3, size: 40, color: '#2496ED' },
  { Icon: SiPrisma, top: '30%', left: '12%', delay: 0.4, duration: 3.9, size: 36, color: '#2D3748' },
  { Icon: SiPostgresql, top: '70%', left: '35%', delay: 1.3, duration: 4.1, size: 44, color: '#4169E1' },
  { Icon: SiGraphql, top: '20%', left: '55%', delay: 0.7, duration: 3.5, size: 38, color: '#E10098' },
];

export function ServicesHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const iconsOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0]);
  const iconsScale = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0.9]);

  // Text 1: 0% to 35%
  const text1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.25, 0.35], [0, 1, 1, 0]);
  const text1Y = useTransform(scrollYProgress, [0, 0.1, 0.25, 0.35], [50, 0, 0, -50]);

  // Text 2: 30% to 65%
  const text2Opacity = useTransform(scrollYProgress, [0.3, 0.4, 0.55, 0.65], [0, 1, 1, 0]);
  const text2Y = useTransform(scrollYProgress, [0.3, 0.4, 0.55, 0.65], [50, 0, 0, -50]);

  // Text 3: 60% to 100%
  const text3Opacity = useTransform(scrollYProgress, [0.6, 0.7, 1, 1], [0, 1, 1, 1]);
  const text3Y = useTransform(scrollYProgress, [0.6, 0.7, 1, 1], [50, 0, 0, 0]);



  return (
    <section ref={containerRef} className="relative h-[400vh] w-full bg-white border-b border-slate-200/50">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* Decorative Background Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none z-0" />

        {/* Floating Icons Layer */}
        <motion.div 
          style={{ opacity: iconsOpacity, scale: iconsScale }}
          className="absolute inset-0 pointer-events-none z-0"
        >
          {brandIcons.map((item, idx) => (
            <motion.div
              key={idx}
              className="absolute z-0 flex items-center justify-center"
              initial={{ top: '50%', left: '50%', x: '-50%', y: '-50%', scale: 0, opacity: 0 }}
              animate={{ top: item.top, left: item.left, x: '-50%', y: '-50%', scale: 1, opacity: 0.5 }}
              transition={{
                duration: 2.8,
                delay: item.delay * 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.div
                className="drop-shadow-sm"
                style={{ color: item.color }}
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: item.duration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: (item.delay * 0.8) + 2.8,
                }}
              >
                <item.Icon size={item.size} />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Sequence Text Elements */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 px-6">
          <motion.h2
            style={{ opacity: text1Opacity, y: text1Y }}
            className="absolute text-3xl sm:text-4xl md:text-5xl font-display-xl font-extrabold text-slate-900 text-center max-w-3xl leading-tight"
          >
            We build digital products that scale.
          </motion.h2>
          <motion.h2
            style={{ opacity: text2Opacity, y: text2Y }}
            className="absolute text-3xl sm:text-4xl md:text-5xl font-display-xl font-extrabold text-slate-900 text-center max-w-3xl leading-tight"
          >
            From intuitive interfaces to robust cloud architectures.
          </motion.h2>
          <motion.h2
            style={{ opacity: text3Opacity, y: text3Y }}
            className="absolute text-3xl sm:text-4xl md:text-5xl font-display-xl font-extrabold text-slate-900 text-center max-w-3xl leading-tight text-indigo-600"
          >
            Full-stack capabilities tailored for ambitious founders.
          </motion.h2>
        </div>

        {/* Left-Aligned Breadcrumb Navigation */}
        <div className="absolute top-6 sm:top-10 left-6 md:left-8 xl:left-12 z-20 max-w-[1400px] w-full mx-auto right-6 md:right-8 xl:right-12">
          <div className="flex items-center space-x-2 text-slate-500 font-caption text-xs sm:text-sm">
            <Link className="hover:text-indigo-600 transition-colors" to="/">
              Home
            </Link>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <span className="text-slate-900 font-medium">Services</span>
          </div>
        </div>
      </div>
    </section>
  );
}

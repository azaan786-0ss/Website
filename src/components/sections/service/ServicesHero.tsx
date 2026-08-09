import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useMotionValue, useSpring, useReducedMotion, type Variants } from 'framer-motion';
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
    offset: ['start start', 'end start'],
  });

  const prefersReducedMotion = useReducedMotion();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 150]);
  
  const iconsOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0]);
  const iconsScale = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0.9]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    if (!prefersReducedMotion) {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [mouseX, mouseY, prefersReducedMotion]);

  const badgeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const lineVariants: Variants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(12px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    },
  };

  const fadeVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-24 overflow-hidden">
      
      {!prefersReducedMotion && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
          style={{ opacity: 0.5 }}
        >
          <motion.div
            className="absolute w-[800px] h-[800px] rounded-full will-change-transform"
            style={{
              x: cursorX,
              y: cursorY,
              translateX: '-50%',
              translateY: '-50%',
              background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, rgba(99, 102, 241, 0) 60%)',
            }}
          />
        </motion.div>
      )}

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

      <motion.div 
        className="relative z-10 flex flex-col items-center text-center max-w-[1200px] mx-auto px-6 md:px-8 xl:px-12 w-full"
        style={{ y: yParallax }}
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <motion.div variants={badgeVariants} className="mb-8">
          <div className="group relative inline-flex items-center gap-2 py-1.5 px-4 bg-indigo-50/50 text-indigo-700 border border-indigo-200/50 rounded-full font-caption text-xs sm:text-sm font-semibold shadow-sm hover:bg-indigo-50 hover:border-indigo-300 hover:shadow-indigo-500/10 transition-all duration-300 cursor-default overflow-hidden">
            <div className="absolute inset-0 bg-white/40 group-hover:bg-transparent transition-colors duration-300" />
            <span className="material-symbols-outlined text-[18px] text-indigo-600 group-hover:rotate-12 transition-transform duration-300 relative z-10">
              workspaces
            </span>
            <span className="relative z-10">OUR EXPERTISE</span>
          </div>
        </motion.div>

        <h1 className="font-display-xl text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-extrabold text-slate-900 mb-8 tracking-tight leading-[1.05] max-w-4xl mx-auto cursor-default group">
          <motion.div variants={lineVariants} className="overflow-hidden pb-1">
            <span className="block bg-clip-text text-transparent bg-slate-900 group-hover:bg-[linear-gradient(110deg,#0f172a,35%,#6366f1,50%,#0f172a)] group-hover:bg-[length:200%_100%] group-hover:animate-shine transition-all duration-700">
              Engineering Digital Products
            </span>
          </motion.div>
          <motion.div variants={lineVariants} className="overflow-hidden pb-2">
            <span className="block bg-clip-text text-transparent bg-slate-900 group-hover:bg-[linear-gradient(110deg,#0f172a,55%,#6366f1,70%,#0f172a)] group-hover:bg-[length:200%_100%] group-hover:animate-shine transition-all duration-700 delay-100">
              That Scale With Your Business
            </span>
          </motion.div>
        </h1>

        <motion.p 
          variants={fadeVariants}
          className="font-body-lg text-lg sm:text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          We craft distinctive brand identities, robust cloud architectures, and scalable digital products tailored for ambitious founders.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          <Link to="/start-project" className="w-full sm:w-auto">
            <motion.button
              variants={buttonVariants}
              className="group relative w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-2xl font-semibold shadow-lg hover:shadow-2xl hover:shadow-slate-900/20 hover:-translate-y-[3px] transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 text-[15px]">Start a Project</span>
              <span className="relative z-10 material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform duration-300">
                arrow_forward
              </span>
            </motion.button>
          </Link>
          
          <motion.button
            variants={buttonVariants}
            className="w-full sm:w-auto px-8 py-4 border border-slate-200 text-slate-700 bg-white/50 backdrop-blur-sm rounded-2xl font-semibold hover:bg-white hover:border-slate-300 hover:text-slate-900 hover:shadow-lg hover:shadow-slate-200/50 hover:-translate-y-[3px] transition-all duration-300 flex items-center justify-center text-[15px]"
          >
            View Case Studies
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}

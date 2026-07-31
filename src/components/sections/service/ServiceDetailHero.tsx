import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LighthousePerformanceHUD } from './web/LighthousePerformanceHUD';
import { SplitText } from '../../ui/SplitText';

export function ServiceDetailHero() {
  const text = 'Web Design & Development';

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="mb-space-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div variants={containerVariants} initial="hidden" animate="visible">
        <motion.div
          variants={itemVariants}
          className="flex items-center space-x-2 text-text-secondary font-caption text-caption mb-12"
        >
          <Link className="hover:text-primary transition-colors" to="/">
            Home
          </Link>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <Link className="hover:text-primary transition-colors" to="/services">
            Services
          </Link>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <span className="text-on-surface">Web Design & Development</span>
        </motion.div>
        <motion.h1
          variants={itemVariants}
          className={`animate-shine bg-clip-text text-transparent bg-[linear-gradient(110deg,#1b1b24,45%,#fff,55%,#1b1b24)] dark:bg-[linear-gradient(110deg,#fff,45%,#000,55%,#fff)] bg-[length:200%_100%] font-display-xl-mobile text-3xl sm:text-4xl md:text-5xl xl:font-display-xl xl:text-display-xl  mb-6`}
        >
          <SplitText text={text} />
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="font-body-lg text-sm sm:text-base md:text-lg xl:text-body-lg text-text-secondary mb-8 md:mb-10 max-w-2xl"
        >
          A website engineered to convert, not just look good. We build scalable, high-performance
          digital platforms tailored for your business objectives.
        </motion.p>
        <motion.div variants={itemVariants} className="flex items-center space-x-4">
          <Link
            to="/start-project"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-primary text-on-primary font-body-md text-sm sm:text-base font-medium rounded-DEFAULT hover:bg-primary/90 transition-all shadow-[0_4px_14px_0_rgba(79,70,229,0.39)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.23)] hover:-translate-y-0.5"
          >
            Start a Project
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-full sm:max-w-[560px] mx-auto lg:ml-auto lg:mr-0"
      >
        <LighthousePerformanceHUD />
      </motion.div>
    </section>
  );
}

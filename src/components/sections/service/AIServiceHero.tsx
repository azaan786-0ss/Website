import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AIAgentNodeCanvas } from './ai/AIAgentNodeCanvas';
import { SplitText } from '../../ui/SplitText';

export function AIServiceHero() {
  const titleText = 'AI Solutions';

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
    <section className="relative max-w-[1280px] mx-auto px-6 md:px-8 pt-space-16 pb-space-32 min-h-[716px] flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-12 items-center w-full z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-space-6"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-2 text-text-secondary font-caption text-caption mb-4"
          >
            <Link className="hover:text-primary transition-colors" to="/">
              Home
            </Link>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <Link className="hover:text-primary transition-colors" to="/services">
              Services
            </Link>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <span className="text-on-surface">AI Solutions</span>
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className={`text-slate-900 dark:text-white font-display-xl-mobile text-3xl sm:text-4xl md:text-5xl xl:font-display-xl xl:text-display-xl `}
          >
            <SplitText text={titleText} />
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="font-body-lg text-sm sm:text-base md:text-lg xl:text-body-lg text-text-secondary max-w-xl leading-relaxed"
          >
            Integrating intelligent systems to automate the complex. Transform operational
            bottlenecks into strategic advantages with bespoke machine learning and generative AI
            architectures.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-space-4">
            <Link
              to="/start-project"
              className="bg-primary text-white font-body-md text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-DEFAULT hover:bg-primary-container transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(79,70,229,0.3)] active:translate-y-0 inline-flex items-center gap-2 group"
            >
              <span>Discuss Architecture</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
            <a
              href="#capabilities"
              className="bg-transparent border border-border text-on-surface font-body-md text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-DEFAULT hover:bg-bg-secondary hover:border-primary/40 transition-all duration-300 inline-flex items-center"
            >
              Explore Capabilities
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[340px] sm:h-[380px] lg:h-[420px] xl:h-[380px] w-full max-w-[640px] mx-auto lg:ml-auto lg:mr-0 rounded-2xl overflow-hidden flex items-center justify-center group"
        >
          <AIAgentNodeCanvas />
        </motion.div>
      </div>
    </section>
  );
}

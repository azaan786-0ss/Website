import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { AppStorePipelineHUD } from "./mobile/AppStorePipelineHUD";

export function MobileServiceHero() {
  const text = "High-performance iOS & Android applications built for scale.";
  const words = text.split(' ');

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-8 pt-16 md:pt-space-16 pb-space-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-16 items-center">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="flex items-center space-x-2 text-text-secondary font-caption text-caption mb-12">
            <Link className="hover:text-primary transition-colors" to="/">Home</Link>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <Link className="hover:text-primary transition-colors" to="/services">Services</Link>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <span className="text-on-surface">Mobile App Development</span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="font-display-xl-mobile text-3xl sm:text-4xl md:text-5xl xl:font-display-xl xl:text-display-xl mb-6 md:mb-8 leading-tight">
            {words.map((word, index) => (
              <span key={index} className="inline-block mr-[0.25em]">
                {word}
              </span>
            ))}
          </motion.h1>
          <motion.p variants={itemVariants} className="font-body-lg text-sm sm:text-base md:text-lg xl:text-body-lg text-on-surface-variant mb-8 md:mb-10 max-w-2xl leading-relaxed">
            We architect native and cross-platform mobile experiences that feel seamlessly integrated, perform under load, and convert users into advocates.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <Link to="/start-project" className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-primary-container hover:bg-primary-container/90 text-on-primary font-heading-md text-sm sm:text-base rounded-DEFAULT transition-all duration-300 group shadow-lg shadow-primary-container/20">
              Start Building
              <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform text-lg sm:text-xl">arrow_forward</span>
            </Link>
            <a className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-transparent border border-outline hover:border-outline-variant hover:bg-black/5 text-on-surface font-heading-md text-sm sm:text-base rounded-DEFAULT transition-all duration-300" href="#features">
              Explore Features
            </a>
          </motion.div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[360px] sm:h-[440px] lg:h-[540px] w-full max-w-[640px] mx-auto lg:ml-auto lg:mr-0 rounded-2xl overflow-hidden flex items-center justify-center group"
        >
          <AppStorePipelineHUD />
        </motion.div>
      </div>
    </section>
  );
}

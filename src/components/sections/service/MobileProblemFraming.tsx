import { motion } from "framer-motion";

export function MobileProblemFraming() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-8 py-space-32 border-t border-outline-variant/30">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-space-24"
      >
        <h2 className="font-display-lg text-display-lg mb-6">The Mobile Dilemma</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
          Building for mobile often means choosing between reach and quality. We refuse to compromise.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 border-y border-outline-variant/30 divide-y md:divide-y-0 md:divide-x divide-outline-variant/30">
        
        {/* Item 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="group relative px-6 md:px-8 xl:px-10 py-8 md:py-12 xl:py-16 min-h-[220px] md:min-h-[280px] xl:min-h-[380px] flex flex-col justify-center overflow-hidden cursor-default transition-colors duration-500 hover:bg-slate-50/50"
        >
          <div className="relative z-10 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] xl:group-hover:-translate-y-12">
            <span className="text-indigo-600 font-mono text-sm font-bold tracking-widest mb-3 xl:mb-6 block opacity-80 xl:opacity-60 xl:group-hover:opacity-100 transition-opacity duration-500">01 //</span>
            <h3 className="font-display-sm text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-3 xl:mb-6 transition-colors duration-500 xl:group-hover:text-indigo-600 text-on-surface">
              Fragmentation<br className="hidden xl:block"/> Issues
            </h3>
          </div>
          <div className="relative xl:absolute bottom-0 xl:bottom-12 left-0 xl:left-10 right-0 xl:right-10 opacity-100 xl:opacity-0 translate-y-0 xl:translate-y-8 xl:group-hover:opacity-100 xl:group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">
            <p className="font-body-md text-on-surface-variant text-xs sm:text-sm xl:text-base leading-relaxed border-l-2 border-indigo-600 pl-4 xl:pl-5">
              Managing distinct codebases for iOS, Android, and web leads to feature disparity, doubled QA costs, and slower time-to-market.
            </p>
          </div>
        </motion.div>

        {/* Item 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="group relative px-6 md:px-8 xl:px-10 py-8 md:py-12 xl:py-16 min-h-[220px] md:min-h-[280px] xl:min-h-[380px] flex flex-col justify-center overflow-hidden cursor-default transition-colors duration-500 hover:bg-slate-50/50"
        >
          <div className="relative z-10 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] xl:group-hover:-translate-y-12">
            <span className="text-indigo-600 font-mono text-sm font-bold tracking-widest mb-3 xl:mb-6 block opacity-80 xl:opacity-60 xl:group-hover:opacity-100 transition-opacity duration-500">02 //</span>
            <h3 className="font-display-sm text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-3 xl:mb-6 transition-colors duration-500 xl:group-hover:text-indigo-600 text-on-surface">
              Poor<br className="hidden xl:block"/> Performance
            </h3>
          </div>
          <div className="relative xl:absolute bottom-0 xl:bottom-12 left-0 xl:left-10 right-0 xl:right-10 opacity-100 xl:opacity-0 translate-y-0 xl:translate-y-8 xl:group-hover:opacity-100 xl:group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">
            <p className="font-body-md text-on-surface-variant text-xs sm:text-sm xl:text-base leading-relaxed border-l-2 border-indigo-600 pl-4 xl:pl-5">
              Suboptimal architectural choices result in UI jank, heavy battery drain, and sluggish load times that drive users to abandon your app.
            </p>
          </div>
        </motion.div>

        {/* Item 3 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="group relative px-6 md:px-8 xl:px-10 py-8 md:py-12 xl:py-16 min-h-[220px] md:min-h-[280px] xl:min-h-[380px] flex flex-col justify-center overflow-hidden cursor-default transition-colors duration-500 hover:bg-slate-50/50"
        >
          <div className="relative z-10 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] xl:group-hover:-translate-y-12">
            <span className="text-indigo-600 font-mono text-sm font-bold tracking-widest mb-3 xl:mb-6 block opacity-80 xl:opacity-60 xl:group-hover:opacity-100 transition-opacity duration-500">03 //</span>
            <h3 className="font-display-sm text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-3 xl:mb-6 transition-colors duration-500 xl:group-hover:text-indigo-600 text-on-surface">
              Non-Native<br className="hidden xl:block"/> Feel
            </h3>
          </div>
          <div className="relative xl:absolute bottom-0 xl:bottom-12 left-0 xl:left-10 right-0 xl:right-10 opacity-100 xl:opacity-0 translate-y-0 xl:translate-y-8 xl:group-hover:opacity-100 xl:group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">
            <p className="font-body-md text-on-surface-variant text-xs sm:text-sm xl:text-base leading-relaxed border-l-2 border-indigo-600 pl-4 xl:pl-5">
              Generic frameworks often fail to respect platform-specific interaction paradigms, creating an uncanny valley effect for users.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

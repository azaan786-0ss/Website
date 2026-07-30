import { useState } from 'react';
import { motion } from 'framer-motion';

export function MobileLifecycleGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number>(1);

  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-8 py-24 border-t border-outline-variant/30">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col md:flex-row gap-12 items-center mb-20"
      >
        <div className="md:w-1/2">
          <h2 className="font-display-lg text-4xl md:text-5xl font-bold mb-6 text-slate-900">Mobile Release Lifecycle</h2>
          <p className="font-body-lg text-lg text-slate-600 leading-relaxed">
            From initial sketch to global app store dominance, our proven methodology ensures risk-free deployments and five-star user experiences.
          </p>
        </div>
        
        {/* The Dynamic Counter Block */}
        <div className="md:w-1/2 w-full flex justify-end">
          <div className="w-full md:w-80 h-48 bg-indigo-50/50 rounded-3xl border border-indigo-100 relative overflow-hidden flex items-center justify-center shadow-inner">
             <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:24px_24px]"></div>
             <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100/40 to-transparent"></div>
             
             {/* Animated Number Box */}
             <div className="relative z-10 w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center text-indigo-600 font-bold text-4xl transition-all duration-500 transform hover:scale-110" style={{ transform: `rotate(${hoveredIndex * 12}deg)` }}>
               <span className="animate-in fade-in zoom-in duration-300" key={hoveredIndex}>
                 0{hoveredIndex}
               </span>
             </div>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 border-y border-outline-variant/30 divide-y sm:divide-y-0 xl:divide-x divide-outline-variant/30 gap-y-8 sm:gap-y-0">
        
        {/* Item 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="group relative px-6 py-8 sm:py-10 xl:py-16 min-h-[220px] sm:min-h-[280px] xl:min-h-[380px] flex flex-col justify-center overflow-hidden cursor-pointer transition-colors duration-500 hover:bg-slate-50/50 sm:border-r xl:border-r-0 border-outline-variant/30"
          onMouseEnter={() => setHoveredIndex(1)}
          onClick={() => setHoveredIndex(1)}
        >
          <div className="relative z-10 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] xl:group-hover:-translate-y-12">
            <span className="text-indigo-600 font-mono text-sm font-bold tracking-widest mb-3 xl:mb-6 block opacity-80 xl:opacity-60 xl:group-hover:opacity-100 transition-opacity duration-500">01 //</span>
            <h3 className="font-display-sm text-xl sm:text-2xl xl:text-3xl font-semibold mb-3 xl:mb-6 transition-colors duration-500 xl:group-hover:text-indigo-600 text-slate-900">
              UX & Gesture<br className="hidden xl:block"/> Design
            </h3>
          </div>
          <div className="relative xl:absolute bottom-0 xl:bottom-12 left-0 xl:left-6 right-0 xl:right-6 opacity-100 xl:opacity-0 translate-y-0 xl:translate-y-8 xl:group-hover:opacity-100 xl:group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">
            <p className="font-body-md text-slate-600 leading-relaxed border-l-2 border-indigo-600 pl-4 text-xs sm:text-sm">
              Crafting intuitive touch-first experiences with fluid gestures, responsive layouts, and platform-specific design language.
            </p>
          </div>
        </motion.div>

        {/* Item 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="group relative px-6 py-8 sm:py-10 xl:py-16 min-h-[220px] sm:min-h-[280px] xl:min-h-[380px] flex flex-col justify-center overflow-hidden cursor-pointer transition-colors duration-500 hover:bg-slate-50/50"
          onMouseEnter={() => setHoveredIndex(2)}
          onClick={() => setHoveredIndex(2)}
        >
          <div className="relative z-10 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] xl:group-hover:-translate-y-12">
            <span className="text-indigo-600 font-mono text-sm font-bold tracking-widest mb-3 xl:mb-6 block opacity-80 xl:opacity-60 xl:group-hover:opacity-100 transition-opacity duration-500">02 //</span>
            <h3 className="font-display-sm text-xl sm:text-2xl xl:text-3xl font-semibold mb-3 xl:mb-6 transition-colors duration-500 xl:group-hover:text-indigo-600 text-slate-900">
              Architecture<br className="hidden xl:block"/> & Offline DB
            </h3>
          </div>
          <div className="relative xl:absolute bottom-0 xl:bottom-12 left-0 xl:left-6 right-0 xl:right-6 opacity-100 xl:opacity-0 translate-y-0 xl:translate-y-8 xl:group-hover:opacity-100 xl:group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">
            <p className="font-body-md text-slate-600 leading-relaxed border-l-2 border-indigo-600 pl-4 text-xs sm:text-sm">
              Designing robust state management and local-first databases to ensure full functionality without an internet connection.
            </p>
          </div>
        </motion.div>

        {/* Item 3 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="group relative px-6 py-8 sm:py-10 xl:py-16 min-h-[220px] sm:min-h-[280px] xl:min-h-[380px] flex flex-col justify-center overflow-hidden cursor-pointer transition-colors duration-500 hover:bg-slate-50/50 sm:border-t sm:border-r xl:border-t-0 xl:border-r-0 border-outline-variant/30 pt-8 sm:pt-10"
          onMouseEnter={() => setHoveredIndex(3)}
          onClick={() => setHoveredIndex(3)}
        >
          <div className="relative z-10 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] xl:group-hover:-translate-y-12">
            <span className="text-indigo-600 font-mono text-sm font-bold tracking-widest mb-3 xl:mb-6 block opacity-80 xl:opacity-60 xl:group-hover:opacity-100 transition-opacity duration-500">03 //</span>
            <h3 className="font-display-sm text-xl sm:text-2xl xl:text-3xl font-semibold mb-3 xl:mb-6 transition-colors duration-500 xl:group-hover:text-indigo-600 text-slate-900">
              Automated<br className="hidden xl:block"/> Testing
            </h3>
          </div>
          <div className="relative xl:absolute bottom-0 xl:bottom-12 left-0 xl:left-6 right-0 xl:right-6 opacity-100 xl:opacity-0 translate-y-0 xl:translate-y-8 xl:group-hover:opacity-100 xl:group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">
            <p className="font-body-md text-slate-600 leading-relaxed border-l-2 border-indigo-600 pl-4 text-xs sm:text-sm">
              Implementing rigorous automated testing suites and utilizing TestFlight for seamless beta distribution and feedback.
            </p>
          </div>
        </motion.div>
        
        {/* Item 4 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="group relative px-6 py-8 sm:py-10 xl:py-16 min-h-[220px] sm:min-h-[280px] xl:min-h-[380px] flex flex-col justify-center overflow-hidden cursor-pointer transition-colors duration-500 hover:bg-slate-50/50 sm:border-t xl:border-t-0 border-outline-variant/30 pt-8 sm:pt-10"
          onMouseEnter={() => setHoveredIndex(4)}
          onClick={() => setHoveredIndex(4)}
        >
          <div className="relative z-10 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] xl:group-hover:-translate-y-12">
            <span className="text-indigo-600 font-mono text-sm font-bold tracking-widest mb-3 xl:mb-6 block opacity-80 xl:opacity-60 xl:group-hover:opacity-100 transition-opacity duration-500">04 //</span>
            <h3 className="font-display-sm text-xl sm:text-2xl xl:text-3xl font-semibold mb-3 xl:mb-6 transition-colors duration-500 xl:group-hover:text-indigo-600 text-slate-900">
              App Store<br className="hidden xl:block"/> Publishing
            </h3>
          </div>
          <div className="relative xl:absolute bottom-0 xl:bottom-12 left-0 xl:left-6 right-0 xl:right-6 opacity-100 xl:opacity-0 translate-y-0 xl:translate-y-8 xl:group-hover:opacity-100 xl:group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">
            <p className="font-body-md text-slate-600 leading-relaxed border-l-2 border-indigo-600 pl-4 text-xs sm:text-sm">
              Navigating complex review guidelines, handling App Store Optimization (ASO), and executing flawless production rollouts.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

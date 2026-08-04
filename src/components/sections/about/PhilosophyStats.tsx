import { useState } from "react";
import { motion } from "framer-motion";

const PHILOSOPHY_STATS = [
  {
    value: "100%",
    title: "Custom Development",
    description: "Every solution is designed specifically for your business—never copied, never recycled.",
  },
  {
    value: "No",
    title: "Templates",
    description: "Every interface, workflow, and architecture is purpose-built from the ground up.",
  },
  {
    value: "24/7",
    title: "Engineering Mindset",
    description: "We think beyond delivery, focusing on maintainability, scalability, and long-term success.",
  },
  {
    value: "∞",
    title: "Built to Scale",
    description: "Architecture that grows with your business without requiring expensive rebuilds.",
  },
];

export function PhilosophyStats() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full bg-[#0A0A0A] py-16 md:py-20 lg:py-24 px-6 md:px-8 overflow-hidden z-10 rounded-3xl mt-16 max-w-[1400px] mx-auto border border-white/5 shadow-2xl">
      {/* Background Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* 8-Second Shimmer Effect */}
      <motion.div
        animate={{ x: ["-100%", "200%"] }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 8,
          repeatType: "loop"
        }}
        className="absolute inset-0 z-20 w-[200%] md:w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg] pointer-events-none"
      />

      {/* Soft Radial Purple Glow */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.12 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[400px] bg-purple-600 rounded-full blur-[80px] md:blur-[120px] pointer-events-none z-0" 
      />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-0 lg:gap-y-16">
        {PHILOSOPHY_STATS.map((stat, idx) => {
          const isHovered = hoveredIndex === idx;
          const isPrevHovered = hoveredIndex !== null && hoveredIndex === idx - 1;
          const isPrevRowHovered = hoveredIndex !== null && hoveredIndex === idx - 2;

          return (
            <div key={idx} className="relative flex justify-center py-10 lg:py-0 w-full">
              
              {/* =========================================
                  DIVIDERS
                 ========================================= */}
              
              {/* Desktop Vertical Divider */}
              {idx !== 0 && (
                <div className="hidden lg:flex absolute left-0 top-0 bottom-0 w-px items-center justify-center">
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    whileInView={{ height: "100%", opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.6 + (idx * 0.1), duration: 1, ease: [0.22, 0.61, 0.36, 1] }}
                    className="w-full h-full flex items-center"
                  >
                    <div className={`w-full h-full bg-white transition-all duration-400 ease-[cubic-bezier(0.22,0.61,0.36,1)] ${isHovered || isPrevHovered ? 'opacity-40 shadow-[0_0_8px_rgba(255,255,255,0.8)]' : 'opacity-10'}`} />
                  </motion.div>
                </div>
              )}

              {/* Tablet Vertical Divider */}
              {idx % 2 !== 0 && (
                <div className="hidden md:flex lg:hidden absolute left-0 top-8 bottom-8 w-px items-center justify-center">
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    whileInView={{ height: "100%", opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.6 + (idx * 0.1), duration: 1, ease: [0.22, 0.61, 0.36, 1] }}
                    className="w-full h-full flex items-center"
                  >
                    <div className={`w-full h-full bg-white transition-all duration-400 ease-[cubic-bezier(0.22,0.61,0.36,1)] ${isHovered || isPrevHovered ? 'opacity-40 shadow-[0_0_8px_rgba(255,255,255,0.8)]' : 'opacity-10'}`} />
                  </motion.div>
                </div>
              )}

              {/* Tablet Horizontal Divider */}
              {idx > 1 && (
                <div className="hidden md:flex lg:hidden absolute top-0 left-8 right-8 h-px items-center justify-center">
                  <motion.div 
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: "100%", opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.8 + (idx * 0.1), duration: 1, ease: [0.22, 0.61, 0.36, 1] }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    <div className={`w-full h-full bg-white transition-all duration-400 ease-[cubic-bezier(0.22,0.61,0.36,1)] ${isHovered || isPrevRowHovered ? 'opacity-40 shadow-[0_0_8px_rgba(255,255,255,0.8)]' : 'opacity-10'}`} />
                  </motion.div>
                </div>
              )}

              {/* Mobile Horizontal Divider */}
              {idx !== 0 && (
                <div className="flex md:hidden absolute top-0 left-6 right-6 h-px items-center justify-center">
                  <motion.div 
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: "100%", opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.6 + (idx * 0.1), duration: 1, ease: [0.22, 0.61, 0.36, 1] }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    <div className={`w-full h-full bg-white transition-all duration-400 ease-[cubic-bezier(0.22,0.61,0.36,1)] ${isHovered || isPrevHovered ? 'opacity-40 shadow-[0_0_8px_rgba(255,255,255,0.8)]' : 'opacity-10'}`} />
                  </motion.div>
                </div>
              )}

              {/* =========================================
                  CONTENT
                 ========================================= */}
              <motion.div
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 1.2 + (idx * 0.15), duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ scale: 1.03, y: -8 }}
                className="flex flex-col items-center text-center w-full max-w-[280px] group cursor-default relative"
              >
                {/* Radial Glow behind number */}
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-24 h-24 bg-indigo-500 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-400 ease-[cubic-bezier(0.22,0.61,0.36,1)] z-0" />

                {/* Number */}
                <motion.div
                  initial={{ opacity: 0, filter: "brightness(0.5)" }}
                  whileInView={{ opacity: 1, filter: "brightness(1)" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 1.6 + (idx * 0.15), duration: 1, ease: "easeOut" }}
                >
                  <div className="relative z-10 font-bold text-[56px] md:text-[64px] lg:text-[72px] xl:text-[80px] leading-none mb-4 md:mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-purple-400 to-indigo-600 group-hover:from-purple-300 group-hover:to-indigo-500 transition-colors duration-400">
                    {stat.value}
                  </div>
                </motion.div>

                {/* Title */}
                <div className="relative z-10 mb-3 md:mb-4 inline-block">
                  <h3 className="text-[18px] md:text-[20px] font-semibold text-white">
                    {stat.title}
                  </h3>
                  {/* Thin underline beneath title */}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-indigo-400/50 group-hover:w-full transition-all duration-400 ease-[cubic-bezier(0.22,0.61,0.36,1)]" />
                </div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 2.0 + (idx * 0.15), duration: 0.8, ease: "easeOut" }}
                >
                  <p className="relative z-10 text-[14px] md:text-[15px] text-[#A0A7B8] max-w-[220px] leading-[1.7] opacity-70 group-hover:opacity-100 transition-opacity duration-400 ease-[cubic-bezier(0.22,0.61,0.36,1)]">
                    {stat.description}
                  </p>
                </motion.div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

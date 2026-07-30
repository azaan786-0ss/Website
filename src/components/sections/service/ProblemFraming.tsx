import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const problems = [
  {
    id: 0,
    title: "Outdated Design",
    description: "Your current site fails to reflect your brand's evolution and loses trust with modern audiences.",
    icon: "broken_image"
  },
  {
    id: 1,
    title: "Slow Load Times",
    description: "Bloated code and unoptimized assets drive away users before they even see your offering.",
    icon: "hourglass_empty"
  },
  {
    id: 2,
    title: "Unmaintainable Architecture",
    description: "Content updates require developer intervention, slowing down your marketing velocity.",
    icon: "settings_alert"
  }
];

// -- Visualizations --

function DesignVisualization() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-rose-500/10 rounded-2xl border border-rose-500/20 p-8 relative overflow-hidden">
      <div className="absolute top-4 left-4 text-xs font-mono text-rose-400 opacity-50">ui_render_error.log</div>
      <div className="w-full max-w-[200px] space-y-4 relative z-10">
        <motion.div 
          className="h-8 bg-rose-500/20 rounded border border-rose-500/30"
          animate={{ x: [-10, 10, -5, 5, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
        />
        <motion.div 
          className="h-24 bg-rose-500/20 rounded border border-rose-500/30 w-[110%]"
          animate={{ rotate: [-2, 2, -1, 1, 0] }}
          transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 1.5 }}
        />
        <motion.div 
          className="h-12 bg-rose-500/20 rounded border border-rose-500/30 w-[80%] -ml-4"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
        <span className="material-symbols-outlined text-[120px] text-rose-500">warning</span>
      </div>
    </div>
  );
}

function PerformanceVisualization() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-amber-500/10 rounded-2xl border border-amber-500/20 p-8 relative overflow-hidden">
      <div className="absolute top-4 left-4 text-xs font-mono text-amber-400 opacity-50">network_waterfall.json</div>
      
      {/* Loading Spinner */}
      <motion.div 
        className="w-16 h-16 border-4 border-amber-500/20 border-t-amber-500 rounded-full mb-8"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Simulated slow network bars */}
      <div className="w-full max-w-[240px] space-y-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-full h-2 bg-amber-500/10 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-amber-500"
              initial={{ width: "0%" }}
              animate={{ width: "95%" }}
              transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        ))}
      </div>
      <div className="mt-6 text-amber-500/80 font-mono text-sm animate-pulse">
        TTFB: &gt; 3500ms (Critical)
      </div>
    </div>
  );
}

function ArchitectureVisualization() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-red-500/10 rounded-2xl border border-red-500/20 p-8 relative overflow-hidden">
      <div className="absolute top-4 left-4 text-xs font-mono text-red-400 opacity-50">dependency_graph.err</div>
      
      <div className="relative w-full max-w-[280px] h-[200px]">
        {/* Tangled SVG Lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path 
            d="M 10 50 Q 30 10, 50 50 T 90 50" 
            fill="none" 
            stroke="rgba(239, 68, 68, 0.4)" 
            strokeWidth="2"
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <motion.path 
            d="M 10 20 C 40 80, 60 20, 90 80" 
            fill="none" 
            stroke="rgba(239, 68, 68, 0.2)" 
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          <motion.path 
            d="M 20 90 Q 50 10, 80 90" 
            fill="none" 
            stroke="rgba(239, 68, 68, 0.5)" 
            strokeWidth="1.5"
            animate={{ strokeDashoffset: [0, 100] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </svg>
        
        {/* Conflicting Nodes */}
        <motion.div className="absolute top-[20%] left-[10%] w-8 h-8 bg-red-500/20 border border-red-500 rounded-md flex items-center justify-center animate-bounce shadow-[0_0_15px_rgba(239,68,68,0.3)]">
          <span className="material-symbols-outlined text-[14px] text-red-500">api</span>
        </motion.div>
        <motion.div className="absolute top-[70%] left-[40%] w-8 h-8 bg-red-500/20 border border-red-500 rounded-md flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.3)]" style={{ animationDelay: '0.5s' }}>
          <span className="material-symbols-outlined text-[14px] text-red-500">database</span>
        </motion.div>
        <motion.div className="absolute top-[30%] right-[10%] w-8 h-8 bg-red-500/20 border border-red-500 rounded-md flex items-center justify-center animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.3)]">
          <span className="material-symbols-outlined text-[14px] text-red-500">code</span>
        </motion.div>

        {/* Central Error Hub */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-red-500/90 rounded-full flex items-center justify-center shadow-lg shadow-red-500/50">
          <span className="material-symbols-outlined text-white text-[20px]">close</span>
        </div>
      </div>
    </div>
  );
}

export function ProblemFraming() {
  const [activeId, setActiveId] = useState(0);

  const getVisualization = () => {
    switch (activeId) {
      case 0: return <DesignVisualization />;
      case 1: return <PerformanceVisualization />;
      case 2: return <ArchitectureVisualization />;
      default: return <DesignVisualization />;
    }
  };

  return (
    <section className="mb-space-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="font-display-lg text-3xl md:text-4xl font-bold tracking-tight text-on-surface dark:text-white mb-4">
          The Cost of Compromise
        </h2>
        <p className="text-text-secondary dark:text-secondary-fixed-dim text-lg">
          Legacy platforms don't just look bad—they actively harm your business metrics. Here is what we fix.
        </p>
      </motion.div>

      <div className="bg-white/50 dark:bg-bg-dark-secondary/50 backdrop-blur-xl border border-slate-200/60 dark:border-white/10 rounded-3xl p-6 md:p-8 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Problem Tabs */}
          <div className="lg:col-span-5 flex flex-col gap-4 relative z-10">
            {problems.map((problem) => {
              const isActive = activeId === problem.id;
              
              return (
                <button
                  key={problem.id}
                  onClick={() => setActiveId(problem.id)}
                  onMouseEnter={() => setActiveId(problem.id)}
                  className={`group relative text-left p-6 rounded-2xl border transition-all duration-300 flex items-start gap-5
                    ${isActive 
                      ? 'bg-white dark:bg-bg-dark-primary border-primary/30 shadow-[0_4px_20px_-4px_rgba(99,102,241,0.15)]' 
                      : 'bg-transparent border-transparent hover:bg-white/40 dark:hover:bg-white/5'}`}
                >
                  {/* Active Indicator Line */}
                  {isActive && (
                    <motion.div
                      layoutId="problemIndicator"
                      className="absolute left-0 top-0 bottom-0 w-[4px] bg-primary rounded-l-2xl"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  
                  <div className={`w-12 h-12 shrink-0 rounded-xl flex items-center justify-center transition-colors duration-300
                    ${isActive ? 'bg-primary/15 text-primary ring-1 ring-primary/30' : 'bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-white/40 group-hover:text-primary/70'}`}
                  >
                    <span className="material-symbols-outlined text-[24px]">
                      {problem.icon}
                    </span>
                  </div>
                  
                  <div>
                    <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ${isActive ? 'text-on-surface dark:text-white' : 'text-slate-600 dark:text-white/60 group-hover:text-on-surface dark:group-hover:text-white/90'}`}>
                      {problem.title}
                    </h3>
                    <p className={`text-sm leading-relaxed transition-colors duration-300 ${isActive ? 'text-text-secondary dark:text-secondary-fixed-dim' : 'text-transparent h-0 overflow-hidden opacity-0'}`}>
                      {problem.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
          
          {/* Right Column: Visualization Window */}
          <div className="lg:col-span-7 h-[400px] lg:h-[480px]">
            <div className="w-full h-full bg-[#0a0a0a] rounded-2xl p-2 md:p-4 shadow-inner ring-1 ring-white/10 relative overflow-hidden">
              {/* Window Controls */}
              <div className="flex items-center gap-2 mb-4 px-2 relative z-20">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <div className="ml-4 text-xs font-mono text-white/30">diagnostic_tool.exe</div>
              </div>
              
              <div className="relative w-full h-[calc(100%-2.5rem)] rounded-xl overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeId}
                    initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    {getVisualization()}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

import { TrueFocus } from "../ui/TrueFocus";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- RIGOR CONSOLE (CI/CD Terminal Simulator) ---
function RigorConsole() {
  const [logs, setLogs] = useState<string[]>([]);
  
  useEffect(() => {
    const rawLogs = [
      "» npm run test",
      "✓ PASS  src/tests/auth.test.ts (241ms)",
      "✓ PASS  src/tests/performance.test.ts (189ms)",
      "✓ PASS  src/tests/api-gateway.test.ts (312ms)",
      "✓ PASS  src/tests/db-pool.test.ts (95ms)",
      "✓ PASS  src/tests/security-headers.test.ts (110ms)",
      "Test Suites: 5 passed, 5 total",
      "Tests:       32 passed, 32 total",
      "Snapshots:   0 total",
      "Time:        1.057s, estimated 2s",
      "Ran all test suites. Active coverage: 99.8%",
    ];
    let currentIdx = 0;
    const interval = setInterval(() => {
      if (currentIdx < rawLogs.length) {
        setLogs(prev => [...prev, rawLogs[currentIdx]]);
        currentIdx++;
      } else {
        setLogs([]);
        currentIdx = 0;
      }
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full bg-slate-950 font-mono text-[10px] md:text-xs p-4 rounded-xl flex flex-col justify-between border border-white/10 shadow-2xl relative overflow-hidden">
      <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
        </div>
        <div className="text-white/40 text-[9px]">terminal ~ testrunner</div>
        <div className="w-4"></div>
      </div>
      <div className="flex-grow space-y-1.5 text-green-400 overflow-y-auto max-h-[220px] scrollbar-thin">
        {logs.map((log, idx) => {
          if (!log) return null;
          let styleClass = "text-slate-400";
          if (log.startsWith("✓ PASS")) styleClass = "text-emerald-400 font-semibold";
          else if (log.startsWith("»")) styleClass = "text-sky-400 font-semibold";
          else if (log.includes("Test Suites") || log.includes("Tests") || log.includes("Time")) styleClass = "text-white font-medium";
          
          return (
            <div key={idx} className={styleClass}>
              {log}
            </div>
          );
        })}
        {logs.length < 11 && (
          <div className="inline-block w-1.5 h-3 bg-white/70 animate-pulse"></div>
        )}
      </div>
      <div className="border-t border-white/5 pt-3 mt-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
          <span className="text-white/60 text-[9px]">CI Pipeline Online</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="text-[9px] text-white/40 font-semibold">Coverage</div>
            <div className="text-emerald-400 font-bold text-[10px]">99.8%</div>
          </div>
          <div className="text-right">
            <div className="text-[9px] text-white/40 font-semibold">Build Time</div>
            <div className="text-emerald-400 font-bold text-[10px]">42s</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- DESIGN CONSOLE (Figma Blueprint to Pixel Perfect Sandbox) ---
function DesignConsole() {
  const [hovered, setHovered] = useState(false);
  return (
    <div 
      className="w-full h-full bg-zinc-900 border border-white/10 rounded-xl p-4 flex flex-col justify-between relative overflow-hidden select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Design Workspace Grid */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:16px_16px]"></div>
      
      <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3 relative z-10">
        <div className="text-white/60 text-xs font-semibold">Workspace Inspector</div>
        <div className="flex items-center gap-1.5 text-white/40 text-[9px]">
          <span className="material-symbols-outlined text-[12px]">grid_on</span>
          Grid Align
        </div>
      </div>

      <div className="flex-grow flex items-center justify-center relative z-10">
        <div className="relative p-5 bg-zinc-800/80 border border-white/5 rounded-lg w-64 shadow-lg transition-all duration-300">
          {/* Dimension Guidelines */}
          <div className="absolute -left-6 top-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="h-6 w-[1px] bg-sky-400"></div>
            <div className="text-[8px] text-sky-400 font-semibold my-0.5">H: 120</div>
            <div className="h-6 w-[1px] bg-sky-400"></div>
          </div>
          
          <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 flex items-center gap-1">
            <div className="w-8 h-[1px] bg-sky-400"></div>
            <div className="text-[8px] text-sky-400 font-semibold mx-0.5">W: 256</div>
            <div className="w-8 h-[1px] bg-sky-400"></div>
          </div>

          {/* Figma-like Padding Indicator */}
          <div className="absolute top-0 left-0 bg-rose-500/10 border border-rose-500/30 w-full h-4 flex items-center justify-center pointer-events-none">
            <span className="text-[7px] text-rose-500 font-semibold">padding: 16px</span>
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-[16px] text-primary">draw</span>
            </div>
            <div className="h-3 w-20 bg-white/20 rounded"></div>
            <div className="h-2 w-32 bg-white/10 rounded"></div>
            <div className="h-2 w-24 bg-white/10 rounded"></div>
          </div>

          {/* Morphing overlay on hover */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-primary/50 rounded-lg flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center">
              <div className="text-xs font-semibold text-white">Pixel-Perfect Render</div>
              <div className="text-[9px] text-primary-fixed mt-1">✓ Constraints Aligned</div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-white/5 pt-3 mt-3 flex items-center justify-between text-[9px] text-white/40 relative z-10">
        <div>Inspect Mode</div>
        <div className="text-sky-400 font-semibold">Hover to Render Card</div>
      </div>
    </div>
  );
}

// --- FULL STACK CONSOLE (Reactive Dataflow Topology) ---
function StackConsole() {
  return (
    <div className="w-full h-full bg-zinc-950 border border-white/10 rounded-xl p-4 flex flex-col justify-between relative overflow-hidden">
      <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3">
        <div className="text-white/60 text-xs font-semibold">Architectural Telemetry</div>
        <div className="flex items-center gap-1.5 text-white/40 text-[9px]">
          <span className="material-symbols-outlined text-[12px]">hub</span>
          Node Topology
        </div>
      </div>

      <div className="flex-grow flex items-center justify-around relative">
        {/* Layer 1: Client */}
        <div className="flex flex-col items-center z-10">
          <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center">
            <span className="material-symbols-outlined text-[20px] text-indigo-400">devices</span>
          </div>
          <span className="text-[9px] text-white/70 mt-2 font-medium">Web Client</span>
        </div>

        {/* Dynamic Connectors */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg className="w-full h-12" fill="none">
            {/* Path 1 */}
            <path
              d="M 64 24 L 140 24"
              stroke="rgba(99, 102, 241, 0.2)"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            {/* Path 2 */}
            <path
              d="M 176 24 L 252 24"
              stroke="rgba(168, 85, 247, 0.2)"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            {/* Pulsing signals */}
            <motion.circle
              r="3.5"
              fill="#818cf8"
              animate={{ cx: [64, 140] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
            <motion.circle
              r="3.5"
              fill="#c084fc"
              animate={{ cx: [176, 252] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: 0.5 }}
            />
          </svg>
        </div>

        {/* Layer 2: API Server */}
        <div className="flex flex-col items-center z-10">
          <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center animate-pulse">
            <span className="material-symbols-outlined text-[20px] text-purple-400">dns</span>
          </div>
          <span className="text-[9px] text-white/70 mt-2 font-medium">Node API</span>
        </div>

        {/* Layer 3: Database */}
        <div className="flex flex-col items-center z-10">
          <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
            <span className="material-symbols-outlined text-[20px] text-emerald-400">database</span>
          </div>
          <span className="text-[9px] text-white/70 mt-2 font-medium">Postgres DB</span>
        </div>
      </div>

      <div className="border-t border-white/5 pt-3 mt-3 flex items-center justify-between text-[9px] text-white/40">
        <div>Data Stream</div>
        <div className="text-purple-400 font-semibold">Latency: 0.4ms</div>
      </div>
    </div>
  );
}

// --- PARTNERSHIP CONSOLE (Compounding Delivery Dashboard) ---
function PartnershipConsole() {
  return (
    <div className="w-full h-full bg-zinc-950 border border-white/10 rounded-xl p-4 flex flex-col justify-between relative overflow-hidden">
      <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3">
        <div className="text-white/60 text-xs font-semibold">Velocity Dashboard</div>
        <div className="flex items-center gap-1.5 text-white/40 text-[9px]">
          <span className="material-symbols-outlined text-[12px]">insights</span>
          Sprint Speed
        </div>
      </div>

      <div className="flex-grow flex flex-col justify-around gap-2">
        <div className="flex items-center justify-between bg-white/5 p-2 rounded border border-white/5">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[14px] text-sky-400">sync</span>
            <span className="text-[9px] text-white/80">Linear 2-way sync</span>
          </div>
          <span className="text-[8px] px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-400 font-semibold">Connected</span>
        </div>
        
        <div className="flex items-center justify-between bg-white/5 p-2 rounded border border-white/5">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[14px] text-emerald-400">deployed_code</span>
            <span className="text-[9px] text-white/80">Continuous Delivery</span>
          </div>
          <span className="text-[8px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-semibold">Active</span>
        </div>

        {/* Mini Line Chart / Speed graph */}
        <div className="h-12 w-full relative border-b border-white/10 flex items-end">
          <svg className="w-full h-full" viewBox="0 0 100 40">
            <motion.path
              d="M0,40 Q15,30 30,25 T60,10 T90,2 T100,5"
              fill="none"
              stroke="#6366f1"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5 }}
            />
          </svg>
          <div className="absolute top-1 left-2 text-[7px] text-white/30 font-semibold">Sprint Velocity</div>
        </div>
      </div>

      <div className="border-t border-white/5 pt-3 mt-3 flex items-center justify-between text-[9px] text-white/40">
        <div>Release Freq</div>
        <div className="text-indigo-400 font-semibold">Daily Deploys</div>
      </div>
    </div>
  );
}

// --- MAIN WHY CHOOSE US SECTION ---
export function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState(0);

  const advantages = [
    {
      id: 0,
      icon: "architecture",
      title: "Engineering Rigor",
      description: "We don't cut corners. Code quality, test coverage, and scalable architecture are baseline requirements.",
    },
    {
      id: 1,
      icon: "palette",
      title: "Design Craft",
      description: "Pixel-perfect execution. We bridge the gap between Figma mockups and production reality.",
    },
    {
      id: 2,
      icon: "layers",
      title: "Full-stack Capability",
      description: "From database schema design to complex frontend state management, we handle the entire stack.",
    },
    {
      id: 3,
      icon: "handshake",
      title: "Long-term Partnership",
      description: "We operate as an extension of your team, providing ongoing support and strategic technical guidance.",
    }
  ];

  const getConsole = () => {
    switch (activeTab) {
      case 0: return <RigorConsole />;
      case 1: return <DesignConsole />;
      case 2: return <StackConsole />;
      case 3: return <PartnershipConsole />;
      default: return <RigorConsole />;
    }
  };

  return (
    <section className="bg-bg-secondary py-space-32 relative overflow-hidden">
      {/* Subtle top border gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="mb-space-24 text-center max-w-3xl mx-auto">
          <h2 className="font-display-lg text-display-lg lg:text-display-xl mb-space-6 flex justify-center">
            <TrueFocus sentence="The Nexus Advantage" />
          </h2>
          <p className="font-heading-md text-heading-md text-secondary">
            Why technical leaders choose us as their <span className="text-primary font-medium">engineering partner.</span>
          </p>
        </div>
        
        {/* Mobile View (Standard Accordion/Horizontal Tab Stack) */}
        <div className="lg:hidden flex flex-col gap-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {advantages.map((adv) => (
              <button
                key={adv.id}
                onClick={() => setActiveTab(adv.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-medium border transition-all duration-300
                  ${activeTab === adv.id 
                    ? 'bg-primary text-on-primary border-primary shadow-lg' 
                    : 'bg-white border-outline-variant/60 text-secondary dark:bg-bg-dark-secondary dark:border-white/10 dark:text-secondary-fixed-dim'}`}
              >
                <span className="material-symbols-outlined text-[16px]">{adv.icon}</span>
                {adv.title}
              </button>
            ))}
          </div>
          
          <div className="bg-bg-primary dark:bg-bg-dark-secondary rounded-2xl border border-outline-variant/60 dark:border-white/10 p-4 h-[320px] shadow-sm">
            {getConsole()}
          </div>
          
          <div className="text-center px-4">
            <p className="font-body-md text-secondary leading-relaxed">
              {advantages[activeTab].description}
            </p>
          </div>
        </div>

        {/* Desktop View (Premium Split Console UI) */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-center">
          {/* Left Column: Vertical Control Tabs */}
          <div className="col-span-5 flex flex-col gap-4">
            {advantages.map((adv) => {
              const isActive = activeTab === adv.id;
              return (
                <div
                  key={adv.id}
                  onMouseEnter={() => setActiveTab(adv.id)}
                  onClick={() => setActiveTab(adv.id)}
                  className={`group relative rounded-xl p-5 border cursor-pointer transition-all duration-300 flex items-start gap-4 select-none
                    ${isActive 
                      ? 'bg-bg-primary border-primary/40 shadow-[0_4px_20px_-4px_rgba(99,102,241,0.12)]' 
                      : 'bg-transparent border-transparent hover:bg-bg-primary/50 hover:border-outline-variant/30'}`}
                >
                  {/* Left edge accent indicator line */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary rounded-l-xl"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  {/* Icon badge */}
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 flex-shrink-0
                    ${isActive 
                      ? 'bg-primary/10 text-primary' 
                      : 'bg-neutral-100 dark:bg-zinc-800 text-secondary'}`}
                  >
                    <span className="material-symbols-outlined text-[20px]">{adv.icon}</span>
                  </div>

                  <div>
                    <h4 className={`font-heading-md text-base font-semibold transition-colors duration-300
                      ${isActive ? 'text-primary' : 'text-on-surface'}`}
                    >
                      {adv.title}
                    </h4>
                    <p className="font-body-md text-xs text-secondary mt-1.5 leading-relaxed">
                      {adv.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Console/Visualization Workspace */}
          <div className="col-span-7 h-[380px] rounded-2xl bg-zinc-900 border border-white/15 p-6 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            {/* Top workspace bar */}
            <div className="flex items-center justify-between text-[10px] text-white/40 pb-3 border-b border-white/5 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
                <span>WORKSPACE PREVIEW</span>
              </div>
              <div className="font-mono text-[9px]">nexus_engine_core_v1.0</div>
            </div>

            {/* Core Visualization Display */}
            <div className="flex-grow relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10, scale: 0.99 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.99 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="w-full h-full absolute inset-0"
                >
                  {getConsole()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

import { motion, type Variants } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap, Smartphone, Play } from "lucide-react";
import { useEffect, useState } from "react";

export function AppStorePipelineHUD() {
  const [buildStep, setBuildStep] = useState(0);

  // Simulate a live build process stepping through the items
  useEffect(() => {
    const timer = setInterval(() => {
      setBuildStep((prev) => (prev < 4 ? prev + 1 : prev));
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 12 } }
  };

  return (
    <div className="w-full h-full min-h-[360px] sm:min-h-[380px] bg-slate-50/50 relative overflow-hidden flex flex-col justify-center items-center p-4 sm:p-6 lg:p-8">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}
      />
      
      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Glass HUD Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-full sm:max-w-md relative z-10 bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-2xl shadow-2xl shadow-indigo-500/5 p-4 sm:p-6"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono font-bold text-slate-700 tracking-wider">RELEASE PIPELINE</span>
          </div>
          <div className="text-[10px] font-mono text-slate-400 bg-slate-100 px-2 py-1 rounded-md">
            CI/CD: AUTOMATED
          </div>
        </div>

        {/* Pipeline Items */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-4"
        >
          {/* Item 1: TestFlight */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 group">
            <div className={`p-2.5 rounded-lg border transition-colors duration-500 ${buildStep >= 1 ? 'bg-indigo-50 border-indigo-200 text-indigo-600' : 'bg-slate-50 border-slate-200 text-slate-400'}`}>
              <Smartphone className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-slate-800">TestFlight Build #184</h4>
                {buildStep >= 1 ? (
                  <span className="flex items-center gap-1 text-[10px] font-bold text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3" /> PASSED
                  </span>
                ) : (
                  <span className="text-[10px] font-mono text-slate-400">BUILDING...</span>
                )}
              </div>
              <p className="text-xs text-slate-500 mt-0.5">Automated QA & Unit Tests complete.</p>
            </div>
          </motion.div>

          {/* Item 2: App Store Review */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 group">
            <div className={`p-2.5 rounded-lg border transition-colors duration-500 ${buildStep >= 2 ? 'bg-emerald-50 border-emerald-200 text-emerald-600' : 'bg-slate-50 border-slate-200 text-slate-400'}`}>
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-slate-800">App Store Review</h4>
                {buildStep >= 2 ? (
                  <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3" /> PRE-APPROVED
                  </span>
                ) : (
                  <span className="text-[10px] font-mono text-slate-400">PENDING</span>
                )}
              </div>
              <p className="text-xs text-slate-500 mt-0.5">Apple HIG fully compliant.</p>
            </div>
          </motion.div>

          {/* Item 3: Google Play CI/CD */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 group">
            <div className={`p-2.5 rounded-lg border transition-colors duration-500 ${buildStep >= 3 ? 'bg-blue-50 border-blue-200 text-blue-600' : 'bg-slate-50 border-slate-200 text-slate-400'}`}>
              <Play className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-slate-800">Google Play Pipeline</h4>
                {buildStep >= 3 ? (
                  <span className="text-xs font-mono font-bold text-blue-600">100% DONE</span>
                ) : (
                  <span className="text-[10px] font-mono text-slate-400">SYNCING...</span>
                )}
              </div>
              
              {/* Progress Bar */}
              <div className="h-1.5 w-full bg-slate-100 rounded-full mt-1.5 overflow-hidden">
                <motion.div 
                  className="h-full bg-blue-500 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: buildStep >= 3 ? "100%" : "30%" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
            </div>
          </motion.div>

          {/* Item 4: Bundle Size */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 group">
            <div className={`p-2.5 rounded-lg border transition-colors duration-500 ${buildStep >= 4 ? 'bg-violet-50 border-violet-200 text-violet-600' : 'bg-slate-50 border-slate-200 text-slate-400'}`}>
              <Zap className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-slate-800">Bundle Optimization</h4>
                {buildStep >= 4 ? (
                  <span className="text-xs font-mono font-bold text-violet-600">14.2 MB</span>
                ) : (
                  <span className="text-[10px] font-mono text-slate-400">ANALYZING...</span>
                )}
              </div>
              <p className="text-xs text-slate-500 mt-0.5">Optimized for fast cellular download.</p>
            </div>
          </motion.div>
        </motion.div>

      </motion.div>
    </div>
  );
}

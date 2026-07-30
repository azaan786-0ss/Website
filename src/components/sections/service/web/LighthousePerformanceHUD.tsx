import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Gauge, Activity } from "lucide-react";

interface GaugeProps {
  score: number;
  label: string;
  delay?: number;
}

function CircularGauge({ score, label, delay = 0 }: GaugeProps) {
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const strokeOffset = circumference - (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center group">
      <div className="relative w-24 h-24 flex items-center justify-center">
        {/* Background glow circle */}
        <div className="absolute inset-0 rounded-full bg-indigo-500/5 blur-md group-hover:bg-indigo-500/10 transition-colors duration-500"></div>

        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="indigoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4f46e5" /> {/* indigo-600 */}
              <stop offset="100%" stopColor="#7c3aed" /> {/* violet-600 */}
            </linearGradient>
          </defs>
          {/* Base track */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            className="stroke-slate-200"
            strokeWidth="8"
            fill="transparent"
          />
          {/* Animated score ring */}
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            stroke="url(#indigoGradient)"
            strokeWidth="8"
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: strokeOffset }}
            transition={{ duration: 1.5, delay: delay + 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              filter: "drop-shadow(0px 0px 4px rgba(79, 70, 229, 0.3))"
            }}
          />
        </svg>

        {/* Score Number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: delay + 0.5 }}
          className="absolute flex flex-col items-center justify-center text-center"
        >
          <span className="font-mono font-bold text-2xl text-slate-900 tracking-tight">
            {score}
          </span>
        </motion.div>
      </div>

      <span className="mt-3 text-xs font-semibold text-slate-500 tracking-wide uppercase group-hover:text-indigo-600 transition-colors duration-300">
        {label}
      </span>
    </div>
  );
}

export function LighthousePerformanceHUD() {
  const gauges = [
    { score: 100, label: "Performance" },
    { score: 100, label: "Accessibility" },
    { score: 100, label: "Best Practices" },
    { score: 100, label: "SEO" },
  ];

  const metrics = [
    { name: "LCP", value: "0.4s", desc: "Largest Contentful Paint", status: "PASSED" },
    { name: "FID", value: "2ms", desc: "First Input Delay", status: "OPTIMAL" },
    { name: "CLS", value: "0.00", desc: "Cumulative Layout Shift", status: "ZERO SHIFT" },
    { name: "TTFB", value: "42ms", desc: "Time to First Byte", status: "EDGE FAST" },
  ];

  return (
    <div className="w-full relative group">
      <div className="relative bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-2xl shadow-indigo-500/10 overflow-hidden text-slate-900">
        
        {/* Top Header HUD */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600">
              <Gauge className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold tracking-widest text-indigo-700 uppercase">
                  LIGHTHOUSE HUD v4.2
                </span>
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
              </div>
              <p className="text-xs text-slate-500 font-mono">PROD_AUDIT // 100/100 VERIFIED</p>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-medium shadow-sm">
            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
            <span>0.0s Speed Tax</span>
          </div>
        </div>

        {/* Circular Progress Gauges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-2 mb-8 bg-slate-50/60 rounded-2xl p-4 border border-slate-100">
          {gauges.map((gauge, idx) => (
            <CircularGauge
              key={gauge.label}
              score={gauge.score}
              label={gauge.label}
              delay={idx * 0.1}
            />
          ))}
        </div>

        {/* Live Core Web Vitals Metrics */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {metrics.map((metric, idx) => (
            <motion.div
              key={metric.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
              className="bg-white border border-slate-200 rounded-xl p-3 flex flex-col justify-between hover:border-indigo-300 hover:shadow-md transition-all duration-300 shadow-sm"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono text-xs font-bold text-slate-500">{metric.name}</span>
                <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200">
                  {metric.status}
                </span>
              </div>
              <div className="font-mono text-xl font-bold text-slate-900 tracking-tight">
                {metric.value}
              </div>
              <span className="text-[10px] text-slate-500 font-mono mt-1 truncate">
                {metric.desc}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Footer Status Bar */}
        <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <Activity className="w-3.5 h-3.5 text-indigo-600 animate-pulse" />
            <span>Real-Time Edge CDN Benchmark</span>
          </div>
          <div className="flex items-center gap-1.5 text-indigo-600">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Zero Bloat Guarantee</span>
          </div>
        </div>

      </div>
    </div>
  );
}

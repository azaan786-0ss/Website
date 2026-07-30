import { motion } from "framer-motion";
import { Database, Cpu, Braces, Terminal, Zap, Activity, Sparkles } from "lucide-react";
import { useState } from "react";

// --- Node Component ---
interface WorkflowNodeProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  metrics: { latency: string; tokens?: string };
  type: "input" | "process" | "output";
  position?: { x: number; y: number };
  isAbsolute?: boolean;
  activeId: string | null;
  onHover: (id: string | null) => void;
}

function WorkflowNode({ id, icon, title, subtitle, metrics, type, position = { x: 0, y: 0 }, isAbsolute = true, activeId, onHover }: WorkflowNodeProps) {
  const isHovered = activeId === id;
  const isDimmed = activeId !== null && activeId !== id;

  const getStyleClasses = () => {
    switch (type) {
      case "input": return "bg-indigo-50/90 border-indigo-200 text-indigo-700";
      case "process": return "bg-white border-slate-200 text-slate-800";
      case "output": return "bg-emerald-50/90 border-emerald-200 text-emerald-700";
    }
  };

  const getIconClasses = () => {
    switch (type) {
      case "input": return "bg-indigo-100 text-indigo-600 border border-indigo-200";
      case "process": return "bg-slate-50 text-indigo-600 border border-slate-200";
      case "output": return "bg-emerald-100 text-emerald-600 border border-emerald-200";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ 
        opacity: isDimmed ? 0.4 : 1, 
        scale: isHovered ? 1.03 : 1,
        y: isAbsolute ? position.y : 0,
        x: isAbsolute ? position.x : 0
      }}
      transition={{ duration: 0.3 }}
      className={`${isAbsolute ? "absolute w-44" : "relative w-full max-w-xs mx-auto"} rounded-xl border p-3.5 shadow-sm cursor-pointer transition-all ${getStyleClasses()} ${isHovered ? "shadow-md z-20 border-indigo-400" : "z-10"}`}
      onClick={() => onHover(isHovered ? null : id)}
      onMouseEnter={() => onHover(id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="flex items-center md:items-start gap-3">
        <div className={`p-2 rounded-lg flex-shrink-0 ${getIconClasses()}`}>
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-[13px] font-bold tracking-tight truncate">{title}</h4>
          <p className="text-[11px] font-medium opacity-80 truncate">{subtitle}</p>
        </div>
      </div>
      
      {/* Node Metrics Panel (Appears on Hover / Tap) */}
      <motion.div 
        initial={{ height: 0, opacity: 0, marginTop: 0 }}
        animate={{ 
          height: isHovered ? "auto" : 0, 
          opacity: isHovered ? 1 : 0,
          marginTop: isHovered ? 12 : 0
        }}
        className="overflow-hidden border-t border-black/5"
      >
        <div className="pt-2 flex items-center justify-between text-[10px] font-mono">
          <div className="flex items-center gap-1 text-slate-500">
            <Activity className="w-3 h-3 text-indigo-500" />
            {metrics.latency}
          </div>
          {metrics.tokens && (
            <div className="flex items-center gap-1 text-slate-500">
              <Sparkles className="w-3 h-3 text-emerald-500" />
              {metrics.tokens}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

// --- Connection Line Component ---
interface ConnectionProps {
  start: { x: number, y: number };
  end: { x: number, y: number };
  isActive: boolean;
}

function ConnectionLine({ start, end, isActive }: ConnectionProps) {
  // Simple cubic bezier curve calculation for nodes connecting left to right
  const midX = (start.x + end.x) / 2;
  const path = `M ${start.x} ${start.y} C ${midX} ${start.y}, ${midX} ${end.y}, ${end.x} ${end.y}`;

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
      {/* Base Line */}
      <path
        d={path}
        fill="none"
        stroke="#E2E8F0"
        strokeWidth="2"
      />
      {/* Animated Pulse Line */}
      <motion.path
        d={path}
        fill="none"
        stroke="url(#pulseGradient)"
        strokeWidth="3"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: isActive ? 1 : 0,
          opacity: isActive ? 1 : 0,
          strokeDasharray: "5 5"
        }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <defs>
        <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4f46e5" stopOpacity="0" />
          <stop offset="50%" stopColor="#4f46e5" stopOpacity="1" />
          <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function AIAgentNodeCanvas() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <div className="w-full h-full relative bg-slate-50/50 rounded-2xl overflow-hidden border border-slate-200">
      
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}
      />

      {/* Header Badge */}
      <div className="absolute top-4 left-4 z-30 bg-white/90 backdrop-blur-sm border border-slate-200 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
        </span>
        <span className="text-[10px] font-mono font-bold text-slate-700 tracking-wider">LIVE AI PIPELINE</span>
      </div>

      {/* Connection Lines */}
      {/* Input to LLM */}
      <ConnectionLine start={{ x: 188, y: 120 }} end={{ x: 200, y: 180 }} isActive={activeNode === 'node-1' || activeNode === 'node-3'} />
      {/* Vector DB to LLM */}
      <ConnectionLine start={{ x: 188, y: 240 }} end={{ x: 200, y: 180 }} isActive={activeNode === 'node-2' || activeNode === 'node-3'} />
      {/* LLM to Tool */}
      <ConnectionLine start={{ x: 376, y: 180 }} end={{ x: 388, y: 110 }} isActive={activeNode === 'node-3' || activeNode === 'node-4'} />
      {/* LLM to Output */}
      <ConnectionLine start={{ x: 376, y: 180 }} end={{ x: 388, y: 250 }} isActive={activeNode === 'node-3' || activeNode === 'node-5'} />


      {/* Nodes Map */}
      <div className="relative w-full h-full hidden md:block" style={{ minHeight: '380px' }}>
        <WorkflowNode
          id="node-1"
          type="input"
          icon={<Terminal className="w-4 h-4" />}
          title="User Query"
          subtitle="Unstructured Input"
          metrics={{ latency: "0ms", tokens: "24 tokens" }}
          position={{ x: 12, y: 90 }}
          activeId={activeNode}
          onHover={setActiveNode}
        />

        <WorkflowNode
          id="node-2"
          type="process"
          icon={<Database className="w-4 h-4" />}
          title="pgvector RAG"
          subtitle="Semantic Search"
          metrics={{ latency: "<40ms", tokens: "Top K=5" }}
          position={{ x: 12, y: 210 }}
          activeId={activeNode}
          onHover={setActiveNode}
        />

        <WorkflowNode
          id="node-3"
          type="process"
          icon={<Cpu className="w-4 h-4" />}
          title="LLM Engine"
          subtitle="Gemini / Claude"
          metrics={{ latency: "<800ms", tokens: "4k Context" }}
          position={{ x: 200, y: 150 }}
          activeId={activeNode}
          onHover={setActiveNode}
        />

        <WorkflowNode
          id="node-4"
          type="process"
          icon={<Zap className="w-4 h-4" />}
          title="Tool Execution"
          subtitle="External APIs"
          metrics={{ latency: "<120ms" }}
          position={{ x: 388, y: 80 }}
          activeId={activeNode}
          onHover={setActiveNode}
        />

        <WorkflowNode
          id="node-5"
          type="output"
          icon={<Braces className="w-4 h-4" />}
          title="JSON Response"
          subtitle="Structured Data"
          metrics={{ latency: "<5ms", tokens: "Parsed" }}
          position={{ x: 388, y: 220 }}
          activeId={activeNode}
          onHover={setActiveNode}
        />
      </div>

      {/* Mobile Fallback View (Stacked) */}
      <div className="md:hidden flex flex-col gap-3 p-6 pt-12 w-full h-full justify-center overflow-y-auto">
        <WorkflowNode id="m-1" isAbsolute={false} type="input" icon={<Terminal className="w-4 h-4" />} title="User Query" subtitle="Unstructured Input" metrics={{ latency: "0ms", tokens: "24 tokens" }} activeId={activeNode} onHover={setActiveNode} />
        <div className="w-0.5 h-4 bg-indigo-300 mx-auto" />
        <WorkflowNode id="m-3" isAbsolute={false} type="process" icon={<Cpu className="w-4 h-4" />} title="LLM Engine" subtitle="Gemini / Claude" metrics={{ latency: "<800ms", tokens: "4k Context" }} activeId={activeNode} onHover={setActiveNode} />
        <div className="w-0.5 h-4 bg-emerald-300 mx-auto" />
        <WorkflowNode id="m-5" isAbsolute={false} type="output" icon={<Braces className="w-4 h-4" />} title="JSON Response" subtitle="Structured Output" metrics={{ latency: "<5ms", tokens: "Parsed" }} activeId={activeNode} onHover={setActiveNode} />
      </div>

    </div>
  );
}

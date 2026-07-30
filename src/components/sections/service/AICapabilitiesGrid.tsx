import { Database, Bot, BrainCircuit, ScanSearch } from 'lucide-react';
import { motion } from 'framer-motion';

const capabilities = [
  {
    title: 'Enterprise RAG Systems',
    desc: 'Connecting foundational models to your private data using Vector DBs and Semantic Search to provide accurate, context-aware answers.',
    icon: Database
  },
  {
    title: 'Autonomous AI Agents',
    desc: 'Deploying multi-step ReAct workflows and tool-calling agents capable of reasoning, acting, and completing complex tasks autonomously.',
    icon: Bot
  },
  {
    title: 'Custom Model Fine-Tuning',
    desc: 'Adapting Open Source Models (Llama 3, Mistral) via PEFT and LoRA to capture your unique domain expertise efficiently.',
    icon: BrainCircuit
  },
  {
    title: 'Predictive ML & Vision',
    desc: 'Harnessing multimodal models for Document AI extraction, visual reasoning, and highly accurate time-series forecasting.',
    icon: ScanSearch
  }
];

export function AICapabilitiesGrid() {
  return (
    <section id="capabilities" className="max-w-[1280px] mx-auto px-6 md:px-8 py-24 border-t border-slate-200">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Core AI Capabilities</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          From conversational agents to predictive pipelines, we build modular, scalable AI architectures tailored for enterprise performance.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {capabilities.map((cap, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group relative bg-[#F8FAFC] rounded-2xl p-8 border border-slate-200 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
          >
            {/* Radiant glowing border effect via pseudo-element on hover */}
            <div className="absolute inset-0 rounded-2xl ring-2 ring-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]"></div>
            <div className="absolute inset-0 rounded-2xl border border-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px]"></div>
            
            <div className="relative z-20 flex flex-col items-start">
              <div className="w-14 h-14 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-center mb-6 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-colors duration-500">
                <cap.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{cap.title}</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                {cap.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

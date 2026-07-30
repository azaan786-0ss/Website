import { DatabaseZap, Layers, ShieldAlert, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'Data Ingestion', desc: 'Securely extract and clean structured and unstructured data from enterprise silos.', icon: DatabaseZap },
  { num: '02', title: 'Vector Embedding', desc: 'Transform data into dense semantic representations stored in high-performance Vector DBs.', icon: Layers },
  { num: '03', title: 'Guardrails & Moderation', desc: 'Apply strict validation rules to prevent hallucinations and enforce safety policies.', icon: ShieldAlert },
  { num: '04', title: 'Model Inference', desc: 'Generate precise, contextually grounded outputs with optimized latency.', icon: Cpu }
];

export function AIPipeline() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-8 py-24 border-t border-slate-200 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl font-bold text-slate-900 mb-4">The AI Data Pipeline</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          A robust, repeatable architecture designed to transform raw enterprise data into highly reliable AI actions.
        </p>
      </motion.div>

      <div className="relative transition-all duration-700">
        {/* Connecting Line with Animated Beam */}
        <div className="absolute top-10 left-0 w-full h-0.5 bg-slate-200 hidden lg:block z-0 overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-transparent via-indigo-600 to-transparent w-48"
            animate={{ x: ['-100%', '300%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 bg-white border-2 border-slate-200 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:border-indigo-600 group-hover:shadow-indigo-500/20 transition-all duration-500 relative">
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold text-sm border-2 border-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                  {step.num}
                </div>
                <step.icon size={32} className="text-slate-600 group-hover:text-indigo-600 transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed px-4">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

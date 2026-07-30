import { Zap, Target, Coins } from 'lucide-react';
import { motion } from 'framer-motion';

export function AIBenchmarksBar() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#F8FAFC] rounded-2xl p-8 border border-slate-200 shadow-sm relative overflow-hidden group hover:border-indigo-500 transition-all duration-500 hover:shadow-[0_0_30px_-10px_rgba(79,70,229,0.2)]">
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Hover Glow effect */}
        <div className="absolute inset-0 bg-indigo-500/0 group-hover:bg-indigo-500/[0.02] transition-colors duration-700"></div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center p-6 relative z-10 transition-transform duration-500 hover:-translate-y-1"
        >
          <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4 text-indigo-600 shadow-sm">
            <Zap size={24} />
          </div>
          <h3 className="text-3xl font-bold text-slate-900 mb-2">&lt;180ms</h3>
          <p className="text-slate-600 font-medium">TTFT Latency</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center p-6 border-t md:border-t-0 md:border-l border-slate-200 relative z-10 transition-transform duration-500 hover:-translate-y-1"
        >
          <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4 text-indigo-600 shadow-sm">
            <Target size={24} />
          </div>
          <h3 className="text-3xl font-bold text-slate-900 mb-2">99.4%</h3>
          <p className="text-slate-600 font-medium">Precision w/ Hybrid Search</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center p-6 border-t md:border-t-0 md:border-l border-slate-200 relative z-10 transition-transform duration-500 hover:-translate-y-1"
        >
          <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4 text-indigo-600 shadow-sm">
            <Coins size={24} />
          </div>
          <h3 className="text-3xl font-bold text-slate-900 mb-2">60%</h3>
          <p className="text-slate-600 font-medium">Token Cost Optimization</p>
        </motion.div>
      </div>
    </section>
  );
}

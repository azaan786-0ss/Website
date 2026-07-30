import { Zap, Timer, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

export function MobilePerformanceBenchmarks() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#F8FAFC] rounded-2xl p-8 border border-slate-200 shadow-sm relative overflow-hidden">
        {/* subtle grid lines background */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center p-6 relative z-10"
        >
          <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4 text-indigo-600">
            <Zap size={24} />
          </div>
          <h3 className="text-3xl font-bold text-slate-900 mb-2">60/120 FPS</h3>
          <p className="text-slate-600 font-medium">Fluid Animations</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center p-6 border-t md:border-t-0 md:border-l border-slate-200 relative z-10"
        >
          <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4 text-indigo-600">
            <Timer size={24} />
          </div>
          <h3 className="text-3xl font-bold text-slate-900 mb-2">&lt;1.2s</h3>
          <p className="text-slate-600 font-medium">Cold Start Time</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center p-6 border-t md:border-t-0 md:border-l border-slate-200 relative z-10"
        >
          <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4 text-indigo-600">
            <Rocket size={24} />
          </div>
          <h3 className="text-3xl font-bold text-slate-900 mb-2">Automated</h3>
          <p className="text-slate-600 font-medium">CI/CD Deployment</p>
        </motion.div>
      </div>
    </section>
  );
}

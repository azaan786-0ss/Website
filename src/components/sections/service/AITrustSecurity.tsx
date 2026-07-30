import { ShieldCheck, Lock, EyeOff, FileBadge } from 'lucide-react';
import { motion } from 'framer-motion';

const badges = [
  { label: 'Zero Data Leakage', icon: EyeOff },
  { label: 'Private VPC Deployments', icon: Lock },
  { label: 'PII Redaction', icon: ShieldCheck },
  { label: 'SOC2/HIPAA Ready', icon: FileBadge }
];

export function AITrustSecurity() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-8 py-16">
      <div className="bg-[#F8FAFC] border border-slate-200 rounded-3xl p-10 relative overflow-hidden group transition-all duration-500 hover:border-indigo-500 hover:shadow-[0_0_40px_-10px_rgba(79,70,229,0.2)]">
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:w-1/3 text-center lg:text-left"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Enterprise Trust & Security</h2>
            <p className="text-slate-600 font-medium leading-relaxed">
              We deploy models securely within your infrastructure. Your proprietary data never leaves your control, nor does it train public models.
            </p>
          </motion.div>
          
          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full">
            {badges.map((b, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + (i * 0.1), ease: [0.22, 1, 0.36, 1] }}
                className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col items-center justify-center text-center shadow-sm group/badge hover:-translate-y-1 hover:border-indigo-400 hover:shadow-indigo-500/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mb-3 group-hover/badge:bg-indigo-100 transition-colors">
                  <b.icon size={24} className="text-indigo-600 group-hover/badge:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-slate-800 text-sm font-semibold">{b.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

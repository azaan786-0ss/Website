import { useState } from 'react';
import { Layout, Cpu, Database, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';

const categories = [
  { id: 'cross-platform', label: 'Cross-Platform', icon: Layout, techs: ['React Native', 'Expo'] },
  { id: 'native', label: 'Native', icon: Cpu, techs: ['Swift', 'Kotlin'] },
  { id: 'storage', label: 'Local Storage', icon: Database, techs: ['MMKV', 'SQLite'] },
  { id: 'cicd', label: 'CI/CD', icon: Cloud, techs: ['Fastlane', 'Sentry'] },
];

export function MobileShowcaseStack() {
  const [activeTab, setActiveTab] = useState(categories[0].id);

  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-8 py-24 border-t border-slate-200 relative overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
        
        {/* Left: Mobile Showcase */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full lg:w-1/2 flex justify-center items-center relative overflow-hidden py-4 max-w-full" style={{ perspective: '1000px' }}
        >
          {/* iOS Frame */}
          <div className="relative w-52 sm:w-64 h-[440px] sm:h-[550px] bg-slate-900 rounded-[2rem] sm:rounded-[2.5rem] border-[6px] sm:border-[8px] border-slate-900 shadow-2xl hover:-translate-y-4 hover:shadow-indigo-500/20 transition-all duration-500 overflow-hidden group z-20 -mr-10 sm:-mr-12 shrink-0">
            <div className="absolute top-0 inset-x-0 h-5 sm:h-6 bg-slate-900 rounded-b-2xl w-24 sm:w-32 mx-auto z-20"></div> {/* Notch */}
            <div className="absolute inset-0 bg-[#F8FAFC] z-10 flex flex-col items-center justify-start pt-10 sm:pt-14 px-3 sm:px-4">
              {/* Mock App UI */}
              <div className="w-full flex justify-between items-center mb-4 sm:mb-6">
                <div className="font-bold text-xs sm:text-sm text-slate-900">Dashboard</div>
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-indigo-100 flex items-center justify-center">
                   <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-indigo-600 rounded-full"></div>
                </div>
              </div>
              <div className="w-full h-20 sm:h-24 bg-indigo-600 rounded-xl mb-3 sm:mb-4 group-hover:scale-[1.02] transition-transform duration-500 shadow-lg flex items-center justify-center text-white font-medium text-xs sm:text-sm">
                 iOS Native
              </div>
              <div className="w-full flex gap-2 sm:gap-3 mb-3 sm:mb-4">
                 <div className="h-16 sm:h-20 flex-1 bg-white border border-slate-200 rounded-xl shadow-sm flex flex-col items-center justify-center gap-2">
                   <div className="w-5 h-5 sm:w-6 sm:h-6 bg-slate-100 rounded-full"></div>
                 </div>
                 <div className="h-16 sm:h-20 flex-1 bg-white border border-slate-200 rounded-xl shadow-sm flex flex-col items-center justify-center gap-2">
                   <div className="w-5 h-5 sm:w-6 sm:h-6 bg-slate-100 rounded-full"></div>
                 </div>
              </div>
              <div className="w-full h-28 sm:h-32 bg-white border border-slate-200 rounded-xl shadow-sm p-3 sm:p-4 flex flex-col gap-2">
                 <div className="w-1/2 h-2 bg-slate-200 rounded-full mb-1"></div>
                 <div className="w-full h-1.5 bg-slate-100 rounded-full"></div>
                 <div className="w-3/4 h-1.5 bg-slate-100 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Android Frame */}
          <div className="relative w-52 sm:w-64 h-[440px] sm:h-[550px] bg-slate-800 rounded-[1.75rem] sm:rounded-[2rem] border-[5px] sm:border-[6px] border-slate-800 shadow-xl hover:-translate-y-4 hover:shadow-indigo-500/20 transition-all duration-500 overflow-hidden group z-10 mt-8 sm:mt-12 scale-95 opacity-90 hover:opacity-100 hover:scale-100 hover:z-30 shrink-0">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-black rounded-full z-20"></div> {/* Camera Hole */}
            <div className="absolute inset-0 bg-[#F8FAFC] z-10 flex flex-col items-center justify-start pt-8 sm:pt-10 px-3 sm:px-4">
              <div className="w-full flex justify-between items-center mb-4 sm:mb-6">
                <div className="font-bold text-xs sm:text-sm text-slate-900">Analytics</div>
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-sm bg-slate-200"></div>
              </div>
              <div className="w-full space-y-2.5 sm:space-y-3">
                <div className="w-full h-14 sm:h-16 bg-white border border-slate-200 rounded-lg shadow-sm flex items-center px-2.5 sm:px-3 gap-2.5 sm:gap-3 group-hover:translate-x-1 transition-transform duration-500">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md bg-indigo-100 flex-shrink-0"></div>
                  <div className="flex-1 space-y-1.5">
                    <div className="w-3/4 h-1.5 bg-slate-200 rounded-full"></div>
                    <div className="w-1/2 h-1.5 bg-slate-100 rounded-full"></div>
                  </div>
                </div>
                <div className="w-full h-14 sm:h-16 bg-white border border-slate-200 rounded-lg shadow-sm flex items-center px-2.5 sm:px-3 gap-2.5 sm:gap-3 group-hover:translate-x-1 transition-transform duration-500 delay-75">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md bg-indigo-50 flex-shrink-0"></div>
                  <div className="flex-1 space-y-1.5">
                    <div className="w-2/3 h-1.5 bg-slate-200 rounded-full"></div>
                    <div className="w-1/3 h-1.5 bg-slate-100 rounded-full"></div>
                  </div>
                </div>
                <div className="w-full h-14 sm:h-16 bg-white border border-slate-200 rounded-lg shadow-sm flex items-center px-2.5 sm:px-3 gap-2.5 sm:gap-3 group-hover:translate-x-1 transition-transform duration-500 delay-150">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md bg-indigo-50 flex-shrink-0"></div>
                  <div className="flex-1 space-y-1.5">
                    <div className="w-1/2 h-1.5 bg-slate-200 rounded-full"></div>
                    <div className="w-1/4 h-1.5 bg-slate-100 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-3 sm:bottom-4 w-1/3 h-1 bg-slate-300 rounded-full"></div>
            </div>
          </div>
        </motion.div>

        {/* Right: Tech Stack */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full lg:w-1/2"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Interactive Showcase & Stack</h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            Experience our meticulously crafted, highly responsive user interfaces across both iOS and Android platforms, powered by the most advanced mobile technologies.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-3 px-5 py-4 rounded-xl text-left transition-all duration-300 font-medium ${
                  activeTab === cat.id
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20 scale-[1.02]'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <cat.icon size={20} className={activeTab === cat.id ? 'text-white' : 'text-indigo-600'} />
                <span className="text-sm md:text-base">{cat.label}</span>
              </button>
            ))}
          </div>

          <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-slate-200 shadow-sm min-h-[160px] flex items-center relative overflow-hidden">
             <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
             <div className="flex flex-wrap gap-4 relative z-10 w-full justify-center lg:justify-start">
              {categories
                .find((c) => c.id === activeTab)
                ?.techs.map((tech) => (
                  <div
                    key={tech}
                    className="px-6 py-3 bg-white border border-indigo-100 rounded-full shadow-sm text-indigo-900 font-semibold text-lg hover:-translate-y-1 hover:border-indigo-500 hover:text-indigo-600 transition-all duration-300 animate-in fade-in zoom-in-95"
                  >
                    {tech}
                  </div>
                ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

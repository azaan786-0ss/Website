import { useState } from 'react';
import { Layout, Cpu, Database, Cloud } from 'lucide-react';

const categories = [
  { id: 'cross-platform', label: 'Cross-Platform', icon: Layout, techs: ['React Native', 'Expo'] },
  { id: 'native', label: 'Native', icon: Cpu, techs: ['Swift', 'Kotlin'] },
  { id: 'storage', label: 'Local Storage', icon: Database, techs: ['MMKV', 'SQLite', 'Realm'] },
  { id: 'cicd', label: 'CI/CD & Monitoring', icon: Cloud, techs: ['Fastlane', 'Sentry', 'Bitrise'] },
];

export function MobileTechStack() {
  const [activeTab, setActiveTab] = useState(categories[0].id);

  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-8 py-24 border-t border-slate-200">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="md:w-1/3 w-full">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Interactive Tech Stack</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            We utilize the most advanced mobile technologies to build fast, reliable, and scalable applications.
          </p>
          <div className="flex flex-col gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-3 px-5 py-4 rounded-xl text-left transition-all duration-300 font-medium ${
                  activeTab === cat.id
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                    : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                <cat.icon size={20} className={activeTab === cat.id ? 'text-white' : 'text-indigo-600'} />
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="md:w-2/3 w-full bg-[#F8FAFC] rounded-2xl p-8 border border-slate-200 shadow-sm min-h-[300px] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="flex flex-wrap gap-4 justify-center relative z-10">
            {categories
              .find((c) => c.id === activeTab)
              ?.techs.map((tech) => (
                <div
                  key={tech}
                  className="px-6 py-3 bg-white border border-slate-200 rounded-full shadow-sm text-slate-800 font-semibold text-lg hover:-translate-y-1 hover:border-indigo-500 hover:text-indigo-600 transition-all duration-300"
                >
                  {tech}
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

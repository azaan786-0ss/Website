import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Mobile UX & Gesture Design',
    desc: 'Crafting intuitive touch-first experiences with fluid gestures, responsive layouts, and platform-specific design language.',
  },
  {
    num: '02',
    title: 'Architecture & Offline-First DB',
    desc: 'Designing robust state management and local-first databases to ensure the app remains fully functional without an internet connection.',
  },
  {
    num: '03',
    title: 'Automated Testing & TestFlight',
    desc: 'Implementing rigorous automated testing suites and utilizing TestFlight for seamless beta distribution and feedback collection.',
  },
  {
    num: '04',
    title: 'App Store & Play Store Publishing',
    desc: 'Navigating the complex review guidelines, handling ASO (App Store Optimization), and executing flawless production rollouts.',
  }
];

export function MobileLifecycleAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-8 py-24 border-t border-slate-200">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Mobile Release Lifecycle</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            From initial sketch to global app store dominance, our proven methodology ensures risk-free deployments and five-star user experiences.
          </p>
          <div className="hidden md:block w-full h-64 bg-indigo-50 rounded-2xl border border-indigo-100 relative overflow-hidden">
             {/* Abstract illustration block */}
             <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:24px_24px]"></div>
             <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-indigo-100 to-transparent"></div>
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-white rounded-2xl shadow-lg rotate-12 flex items-center justify-center text-indigo-600 font-bold text-2xl">
                  {steps[openIndex ?? 0]?.num}
                </div>
             </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {steps.map((step, idx) => (
            <div 
              key={step.num}
              className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                openIndex === idx ? 'border-indigo-600 bg-white shadow-md' : 'border-slate-200 bg-[#F8FAFC] hover:bg-white'
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <div className="flex items-center gap-4">
                  <span className={`font-mono text-sm font-bold ${openIndex === idx ? 'text-indigo-600' : 'text-slate-400'}`}>
                    {step.num}
                  </span>
                  <span className="font-semibold text-lg text-slate-900">
                    {step.title}
                  </span>
                </div>
                <ChevronDown className={`text-slate-400 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-indigo-600' : ''}`} />
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === idx ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-slate-600 pl-9 border-l-2 border-indigo-100">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MobileShowcaseSection() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-8 py-24 border-t border-slate-200 relative">
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Interactive Mobile Showcase</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Experience our meticulously crafted, highly responsive user interfaces across both iOS and Android platforms.
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 relative z-10" style={{ perspective: '1000px' }}>
        {/* iOS Frame */}
        <div className="relative w-72 h-[600px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-900 shadow-2xl hover:-translate-y-4 hover:shadow-indigo-500/20 transition-all duration-500 overflow-hidden group">
          <div className="absolute top-0 inset-x-0 h-7 bg-slate-900 rounded-b-3xl w-40 mx-auto z-20"></div> {/* Notch */}
          <div className="absolute inset-0 bg-[#F8FAFC] z-10 flex flex-col items-center justify-start pt-16 px-4">
            {/* Mock App UI */}
            <div className="w-full flex justify-between items-center mb-8">
              <div className="font-bold text-lg text-slate-900">Dashboard</div>
              <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                 <div className="w-4 h-4 bg-indigo-600 rounded-full"></div>
              </div>
            </div>
            <div className="w-full h-32 bg-indigo-600 rounded-2xl mb-4 group-hover:scale-[1.02] transition-transform duration-500 shadow-lg flex items-center justify-center text-white font-medium">
               iOS Experience
            </div>
            <div className="w-full flex gap-4 mb-4">
               <div className="h-24 flex-1 bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col items-center justify-center gap-2">
                 <div className="w-8 h-8 bg-slate-100 rounded-full"></div>
                 <div className="w-12 h-2 bg-slate-200 rounded-full"></div>
               </div>
               <div className="h-24 flex-1 bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col items-center justify-center gap-2">
                 <div className="w-8 h-8 bg-slate-100 rounded-full"></div>
                 <div className="w-12 h-2 bg-slate-200 rounded-full"></div>
               </div>
            </div>
            <div className="w-full h-48 bg-white border border-slate-200 rounded-2xl shadow-sm p-4 flex flex-col gap-3">
               <div className="w-1/2 h-3 bg-slate-200 rounded-full mb-2"></div>
               <div className="w-full h-2 bg-slate-100 rounded-full"></div>
               <div className="w-full h-2 bg-slate-100 rounded-full"></div>
               <div className="w-3/4 h-2 bg-slate-100 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Android Frame */}
        <div className="relative w-72 h-[600px] bg-slate-800 rounded-[2.5rem] border-[6px] border-slate-800 shadow-2xl hover:-translate-y-4 hover:shadow-indigo-500/20 transition-all duration-500 overflow-hidden group">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-black rounded-full z-20"></div> {/* Camera Hole */}
          <div className="absolute inset-0 bg-[#F8FAFC] z-10 flex flex-col items-center justify-start pt-12 px-4">
            {/* Mock App UI */}
            <div className="w-full flex justify-between items-center mb-8">
              <div className="font-bold text-lg text-slate-900">Analytics</div>
              <div className="w-6 h-6 rounded-sm bg-slate-200"></div>
            </div>
            <div className="w-full space-y-4">
              <div className="w-full h-20 bg-white border border-slate-200 rounded-xl shadow-sm flex items-center px-4 gap-4 group-hover:translate-x-1 transition-transform duration-500">
                <div className="w-12 h-12 rounded-lg bg-indigo-100 flex-shrink-0"></div>
                <div className="flex-1 space-y-2">
                  <div className="w-3/4 h-2 bg-slate-200 rounded-full"></div>
                  <div className="w-1/2 h-2 bg-slate-100 rounded-full"></div>
                </div>
              </div>
              <div className="w-full h-20 bg-white border border-slate-200 rounded-xl shadow-sm flex items-center px-4 gap-4 group-hover:translate-x-1 transition-transform duration-500 delay-75">
                <div className="w-12 h-12 rounded-lg bg-indigo-50 flex-shrink-0"></div>
                <div className="flex-1 space-y-2">
                  <div className="w-2/3 h-2 bg-slate-200 rounded-full"></div>
                  <div className="w-1/3 h-2 bg-slate-100 rounded-full"></div>
                </div>
              </div>
              <div className="w-full h-20 bg-white border border-slate-200 rounded-xl shadow-sm flex items-center px-4 gap-4 group-hover:translate-x-1 transition-transform duration-500 delay-150">
                <div className="w-12 h-12 rounded-lg bg-indigo-50 flex-shrink-0"></div>
                <div className="flex-1 space-y-2">
                  <div className="w-1/2 h-2 bg-slate-200 rounded-full"></div>
                  <div className="w-1/4 h-2 bg-slate-100 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-6 w-1/2 h-1.5 bg-slate-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

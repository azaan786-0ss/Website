import { useState, useEffect, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { submitInquiry } from '@/lib/inquiry';

export function StartProject() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    projectType: '',
    targetTimeline: '',
    projectOverview: '',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(null);

    const form = new FormData(event.currentTarget);
    const payload = {
      fullName: String(form.get('fullName') ?? '').trim(),
      workEmail: String(form.get('workEmail') ?? '').trim(),
      companyName: String(form.get('companyName') ?? '').trim(),
      projectType: String(form.get('projectType') ?? '').trim(),
      targetTimeline: String(form.get('targetTimeline') ?? '').trim(),
      projectOverview: String(form.get('projectOverview') ?? '').trim(),
    };

    setIsSubmitting(true);
    const result = await submitInquiry(payload);
    setIsSubmitting(false);

    if (result.success === true) {
      setStatus({ type: 'success', message: result.message });
      setIsSubmitted(true);
      setFormData({
        fullName: '',
        workEmail: '',
        companyName: '',
        projectType: '',
        targetTimeline: '',
        projectOverview: '',
      });
      event.currentTarget.reset();
    } else {
      setStatus({ type: 'error', message: result.error });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const timelineSteps = [
    {
      step: '01',
      title: 'Requirements Review',
      desc: 'We analyze your project specifications and technical requirements within 24 hours.',
      icon: 'mail',
    },
    {
      step: '02',
      title: 'Discovery Call',
      desc: 'A focused 30-minute session with senior architects to explore your timeline & system goals.',
      icon: 'calendar_today',
    },
    {
      step: '03',
      title: 'Technical Proposal',
      desc: 'Receive a comprehensive architectural blueprint, milestone roadmap, and fixed investment model.',
      icon: 'architecture',
    },
  ];

  return (
    <div className="bg-slate-50 text-slate-900 font-body-md antialiased selection:bg-indigo-100 selection:text-indigo-900 min-h-screen flex flex-col relative">
      {/* Global Page Grid Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[length:64px_64px]"></div>
      </div>

      <Navbar />

      <main className="flex-grow pt-24 sm:pt-32 md:pt-36 lg:pt-40 pb-20 md:pb-24 lg:pb-32 px-6 md:px-8 max-w-[1400px] mx-auto w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 lg:gap-16 xl:gap-24 items-start"
        >
          {/* Left Column: Form & Header */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-8 md:space-y-10">
            <motion.div variants={itemVariants}>
              <h1 className="font-display-xl text-4xl sm:text-5xl md:text-6xl lg:text-[64px] xl:text-[72px] font-extrabold text-slate-900 mb-4 md:mb-6 tracking-tight leading-[1.1]">
                Let's build{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-800">
                  something extraordinary.
                </span>
              </h1>
              <p className="font-body-lg text-base sm:text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed">
                No obligation. 30-minute discovery call with senior engineers. We respond within one
                business day.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white p-8 sm:p-12 md:p-16 rounded-3xl border border-indigo-100 shadow-xl shadow-indigo-950/5 text-center space-y-6"
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200/60 shadow-xs">
                      <span className="material-symbols-outlined text-[36px] md:text-[48px]">check_circle</span>
                    </div>
                    <h3 className="font-display-md text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
                      Inquiry Received!
                    </h3>
                    <p className="text-slate-600 max-w-md mx-auto text-base md:text-lg leading-relaxed">
                      Thank you for reaching out. Our engineering team is currently reviewing your project details and will be in touch within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setStatus(null);
                      }}
                      className="px-6 py-3 md:px-8 md:py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-sm md:text-base transition-colors"
                    >
                      Send Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="bg-white/90 backdrop-blur-sm p-6 sm:p-10 md:p-12 rounded-[2rem] border border-slate-200/80 shadow-xl shadow-slate-200/50 space-y-6 md:space-y-8 hover:border-indigo-300 transition-colors duration-300"
                  >
                    {/* Name & Work Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                      <div className="space-y-2 md:space-y-3">
                        <label
                          htmlFor="fullName"
                          className="block text-[11px] md:text-xs font-bold uppercase tracking-wider text-slate-600"
                        >
                          Full Name <span className="text-indigo-600">*</span>
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="Alex Morgan"
                          className="w-full bg-slate-50/70 border border-slate-200 rounded-xl px-4 py-3.5 md:py-4 text-slate-900 text-sm md:text-base focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 transition-all outline-none"
                        />
                      </div>

                      <div className="space-y-2 md:space-y-3">
                        <label
                          htmlFor="workEmail"
                          className="block text-[11px] md:text-xs font-bold uppercase tracking-wider text-slate-600"
                        >
                          Work Email <span className="text-indigo-600">*</span>
                        </label>
                        <input
                          type="email"
                          id="workEmail"
                          name="workEmail"
                          required
                          value={formData.workEmail}
                          onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                          placeholder="alex@company.com"
                          className="w-full bg-slate-50/70 border border-slate-200 rounded-xl px-4 py-3.5 md:py-4 text-slate-900 text-sm md:text-base focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 transition-all outline-none"
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div className="space-y-2 md:space-y-3">
                      <label
                        htmlFor="companyName"
                        className="block text-[11px] md:text-xs font-bold uppercase tracking-wider text-slate-600"
                      >
                        Company Name <span className="text-indigo-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="Acme Technologies Inc."
                        className="w-full bg-slate-50/70 border border-slate-200 rounded-xl px-4 py-3.5 md:py-4 text-slate-900 text-sm md:text-base focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 transition-all outline-none"
                      />
                    </div>

                    {/* Project Type & Timeline */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                      <div className="space-y-2 md:space-y-3">
                        <label
                          htmlFor="projectType"
                          className="block text-[11px] md:text-xs font-bold uppercase tracking-wider text-slate-600"
                        >
                          Project Type
                        </label>
                        <div className="relative">
                          <select
                            id="projectType"
                            name="projectType"
                            value={formData.projectType}
                            onChange={(e) =>
                              setFormData({ ...formData, projectType: e.target.value })
                            }
                            className="w-full bg-slate-50/70 border border-slate-200 rounded-xl px-4 py-3.5 md:py-4 text-slate-900 text-sm md:text-base focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 transition-all outline-none appearance-none cursor-pointer"
                          >
                            <option value="">Select project type...</option>
                            <option value="web-app">Web Application</option>
                            <option value="mobile-app">Mobile App</option>
                            <option value="ai-solutions">AI & LLM Integration</option>
                            <option value="cloud-architecture">Cloud Architecture</option>
                            <option value="digital-transformation">Digital Transformation</option>
                            <option value="other">Other / Multi-disciplinary</option>
                          </select>
                          <span className="material-symbols-outlined text-[20px] md:text-[24px] text-slate-400 absolute right-3 md:right-4 top-3.5 md:top-4 pointer-events-none">
                            expand_more
                          </span>
                        </div>
                      </div>

                      <div className="space-y-2 md:space-y-3">
                        <label
                          htmlFor="targetTimeline"
                          className="block text-[11px] md:text-xs font-bold uppercase tracking-wider text-slate-600"
                        >
                          Target Timeline
                        </label>
                        <div className="relative">
                          <select
                            id="targetTimeline"
                            name="targetTimeline"
                            value={formData.targetTimeline}
                            onChange={(e) => setFormData({ ...formData, targetTimeline: e.target.value })}
                            className="w-full bg-slate-50/70 border border-slate-200 rounded-xl px-4 py-3.5 md:py-4 text-slate-900 text-sm md:text-base focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 transition-all outline-none appearance-none cursor-pointer"
                          >
                            <option value="">Select timeline...</option>
                            <option value="immediate">Immediate (Next 2-4 Weeks)</option>
                            <option value="quarter">1-3 Months</option>
                            <option value="future">3-6 Months</option>
                            <option value="flexible">Flexible / Planning Phase</option>
                          </select>
                          <span className="material-symbols-outlined text-[20px] md:text-[24px] text-slate-400 absolute right-3 md:right-4 top-3.5 md:top-4 pointer-events-none">
                            expand_more
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Details / Project Overview */}
                    <div className="space-y-2 md:space-y-3">
                      <label
                        htmlFor="projectOverview"
                        className="block text-[11px] md:text-xs font-bold uppercase tracking-wider text-slate-600"
                      >
                        Project Overview (Optional)
                      </label>
                      <textarea
                        id="projectOverview"
                        name="projectOverview"
                        rows={4}
                        value={formData.projectOverview}
                        onChange={(e) => setFormData({ ...formData, projectOverview: e.target.value })}
                        placeholder="Tell us about your core technical objectives, existing stack, or target deliverables..."
                        className="w-full bg-slate-50/70 border border-slate-200 rounded-xl px-4 py-3.5 md:py-4 text-slate-900 text-sm md:text-base focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 transition-all outline-none resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4 md:pt-6 space-y-4">
                      <motion.button
                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-4 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed text-white rounded-xl font-bold text-base md:text-lg shadow-lg shadow-indigo-600/25 transition-all duration-300 flex items-center justify-center gap-3"
                      >
                        {isSubmitting ? 'Sending…' : 'Start a conversation'}
                        {!isSubmitting && (
                          <span className="material-symbols-outlined text-[20px] md:text-[24px]">arrow_forward</span>
                        )}
                      </motion.button>

                      {status && (
                        <p role="status" className={status.type === 'success' ? 'text-green-600 font-medium text-sm' : 'text-red-600 font-medium text-sm'}>
                          {status.message}
                        </p>
                      )}
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Right Column: Process Sidebar & Trust */}
          <div className="lg:col-span-5 xl:col-span-5 lg:sticky lg:top-36 xl:top-40 space-y-6 md:space-y-8">
            <motion.div
              variants={itemVariants}
              className="bg-white p-6 sm:p-8 md:p-10 lg:p-8 xl:p-10 rounded-[2rem] border border-slate-200/80 shadow-xl shadow-slate-200/50 relative overflow-hidden"
            >
              {/* Background ambient glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

              <h2 className="font-display-md text-2xl md:text-3xl font-bold text-slate-900 mb-8 md:mb-10 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-indigo-600" />
                What Happens Next
              </h2>

              <div className="relative space-y-8 md:space-y-10">
                {/* Connecting Line */}
                <div className="absolute left-6 md:left-7 top-8 md:top-10 bottom-8 md:bottom-10 w-0.5 bg-indigo-100 z-0" />

                {timelineSteps.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-5 md:gap-6 relative z-10 group">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center font-bold shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shadow-xs">
                      <span className="material-symbols-outlined text-[22px] md:text-[26px]">{item.icon}</span>
                    </div>
                    <div className="space-y-1 md:space-y-1.5 pt-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] md:text-xs font-bold text-indigo-600 uppercase tracking-wider">
                          {item.step}
                        </span>
                        <h3 className="font-bold text-base md:text-lg text-slate-900 group-hover:text-indigo-600 transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-slate-600 text-sm md:text-base leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Security & Confidentiality Box */}
            <motion.div
              variants={itemVariants}
              className="bg-slate-900 text-white p-6 md:p-8 rounded-[2rem] border border-slate-800 shadow-md flex items-center gap-5 md:gap-6"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/10 text-indigo-300 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[24px] md:text-[28px]">verified_user</span>
              </div>
              <div className="space-y-1">
                <div className="text-sm md:text-base font-bold text-white">Strict Confidentiality</div>
                <div className="text-[13px] md:text-sm text-slate-400 leading-relaxed">
                  All submissions are protected under mutual non-disclosure standards.
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";

export function StartProject() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    projectStage: "",
    budget: "",
    timeline: "",
    details: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
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
      step: "01",
      title: "Requirements Review",
      desc: "We analyze your project specifications and technical requirements within 24 hours.",
      icon: "mail",
    },
    {
      step: "02",
      title: "Discovery Call",
      desc: "A focused 30-minute session with senior architects to explore your timeline & system goals.",
      icon: "calendar_today",
    },
    {
      step: "03",
      title: "Technical Proposal",
      desc: "Receive a comprehensive architectural blueprint, milestone roadmap, and fixed investment model.",
      icon: "architecture",
    },
  ];

  return (
    <div className="bg-slate-50 text-slate-900 font-body-md antialiased selection:bg-indigo-100 selection:text-indigo-900 min-h-screen flex flex-col relative">
      {/* Global Page Grid Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[length:64px_64px]"></div>
      </div>

      <Navbar />

      <main className="flex-grow pt-28 sm:pt-36 pb-20 px-6 md:px-8 max-w-[1280px] mx-auto w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Left Column: Form & Header */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 py-1 px-3.5 bg-indigo-50 text-indigo-700 border border-indigo-200/60 rounded-full font-caption text-xs font-semibold mb-4">
                <span className="material-symbols-outlined text-[16px]">rocket_launch</span>
                INITIATE PARTNERSHIP
              </span>
              <h1 className="font-display-xl text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
                Let's build <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-800">something extraordinary.</span>
              </h1>
              <p className="font-body-lg text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                No obligation. 30-minute discovery call with senior engineers. We respond within one business day.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white p-8 sm:p-12 rounded-3xl border border-indigo-100 shadow-xl shadow-indigo-950/5 text-center space-y-6"
                  >
                    <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200/60 shadow-xs">
                      <span className="material-symbols-outlined text-[36px]">check_circle</span>
                    </div>
                    <h3 className="font-display-md text-2xl sm:text-3xl font-bold text-slate-900">Inquiry Received!</h3>
                    <p className="text-slate-600 max-w-md mx-auto text-base leading-relaxed">
                      Thank you for reaching out. Our engineering team is currently reviewing your project details and will be in touch within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-sm transition-colors"
                    >
                      Send Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="bg-white/90 backdrop-blur-sm p-6 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-200/50 space-y-6 hover:border-indigo-300 transition-colors duration-300"
                  >
                    {/* Name & Work Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                          Full Name <span className="text-indigo-600">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Alex Morgan"
                          className="w-full bg-slate-50/70 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 transition-all outline-none"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                          Work Email <span className="text-indigo-600">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@company.com"
                          className="w-full bg-slate-50/70 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 transition-all outline-none"
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div className="space-y-2">
                      <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                        Company Name <span className="text-indigo-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Technologies Inc."
                        className="w-full bg-slate-50/70 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 transition-all outline-none"
                      />
                    </div>

                    {/* Project Type & Stage */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="projectType" className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                          Project Type
                        </label>
                        <div className="relative">
                          <select
                            id="projectType"
                            name="projectType"
                            value={formData.projectType}
                            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                            className="w-full bg-slate-50/70 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 transition-all outline-none appearance-none cursor-pointer"
                          >
                            <option value="">Select project type...</option>
                            <option value="web-app">Web Application</option>
                            <option value="mobile-app">Mobile App</option>
                            <option value="ai-solutions">AI & LLM Integration</option>
                            <option value="cloud-architecture">Cloud Architecture</option>
                            <option value="digital-transformation">Digital Transformation</option>
                            <option value="other">Other / Multi-disciplinary</option>
                          </select>
                          <span className="material-symbols-outlined text-[20px] text-slate-400 absolute right-3 top-3.5 pointer-events-none">
                            expand_more
                          </span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="projectStage" className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                          Project Stage
                        </label>
                        <div className="relative">
                          <select
                            id="projectStage"
                            name="projectStage"
                            value={formData.projectStage}
                            onChange={(e) => setFormData({ ...formData, projectStage: e.target.value })}
                            className="w-full bg-slate-50/70 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 transition-all outline-none appearance-none cursor-pointer"
                          >
                            <option value="">Select project stage...</option>
                            <option value="idea">Initial Concept / Spec Phase</option>
                            <option value="prototype">Prototype Built / Needs Scale</option>
                            <option value="legacy-rewrite">Legacy Migration &amp; Rewrite</option>
                            <option value="growth">Active Product Optimization</option>
                          </select>
                          <span className="material-symbols-outlined text-[20px] text-slate-400 absolute right-3 top-3.5 pointer-events-none">
                            expand_more
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Budget & Timeline */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="budget" className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                          Budget Band
                        </label>
                        <div className="relative">
                          <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                            className="w-full bg-slate-50/70 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 transition-all outline-none appearance-none cursor-pointer"
                          >
                            <option value="">Select budget range...</option>
                            <option value="25k-50k">$25k - $50k</option>
                            <option value="50k-100k">$50k - $100k</option>
                            <option value="100k-250k">$100k - $250k</option>
                            <option value="250k+">$250k+</option>
                          </select>
                          <span className="material-symbols-outlined text-[20px] text-slate-400 absolute right-3 top-3.5 pointer-events-none">
                            expand_more
                          </span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="timeline" className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                          Target Timeline
                        </label>
                        <div className="relative">
                          <select
                            id="timeline"
                            name="timeline"
                            value={formData.timeline}
                            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                            className="w-full bg-slate-50/70 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 transition-all outline-none appearance-none cursor-pointer"
                          >
                            <option value="">Select timeline...</option>
                            <option value="immediate">Immediate (Next 2-4 Weeks)</option>
                            <option value="quarter">1-3 Months</option>
                            <option value="future">3-6 Months</option>
                            <option value="flexible">Flexible / Planning Phase</option>
                          </select>
                          <span className="material-symbols-outlined text-[20px] text-slate-400 absolute right-3 top-3.5 pointer-events-none">
                            expand_more
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="space-y-2">
                      <label htmlFor="details" className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                        Project Overview (Optional)
                      </label>
                      <textarea
                        id="details"
                        name="details"
                        rows={4}
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        placeholder="Tell us about your core technical objectives, existing stack, or target deliverables..."
                        className="w-full bg-slate-50/70 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 transition-all outline-none resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-base shadow-lg shadow-indigo-600/25 transition-all duration-300 flex items-center justify-center gap-3"
                      >
                        Submit Inquiry
                        <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                      </motion.button>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Right Column: Process Sidebar & Trust */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6">
            <motion.div
              variants={itemVariants}
              className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-200/50 relative overflow-hidden"
            >
              {/* Background ambient glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

              <h2 className="font-display-md text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-indigo-600" />
                What Happens Next
              </h2>

              <div className="relative space-y-8">
                {/* Connecting Line */}
                <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-indigo-100 z-0" />

                {timelineSteps.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-5 relative z-10 group">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shadow-xs">
                      <span className="material-symbols-outlined text-[22px]">
                        {item.icon}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">{item.step}</span>
                        <h3 className="font-bold text-base text-slate-900 group-hover:text-indigo-600 transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Security & Confidentiality Box */}
            <motion.div
              variants={itemVariants}
              className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 shadow-md flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 text-indigo-300 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[24px]">verified_user</span>
              </div>
              <div className="space-y-0.5">
                <div className="text-sm font-bold text-white">Strict Confidentiality</div>
                <div className="text-xs text-slate-400">All submissions are protected under mutual non-disclosure standards.</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

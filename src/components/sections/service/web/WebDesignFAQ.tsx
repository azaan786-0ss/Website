import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is a typical timeline for a web design project?",
    answer: "Most enterprise marketing websites and web applications take between 6 to 12 weeks from initial discovery to final launch, depending on the complexity of integrations and the number of unique page templates required."
  },
  {
    question: "Will our marketing team be able to edit content easily?",
    answer: "Yes. We implement flexible Headless CMS solutions (like Sanity, Contentful, or Strapi) that decouple the frontend from the backend. This gives your marketing team an intuitive, visual editing experience without risking the site's design or performance."
  },
  {
    question: "Who owns the code after the project is complete?",
    answer: "You do. Once the final invoice is settled, 100% of the intellectual property, source code, and design assets are transferred to your organization. We ensure a smooth handoff to your internal team."
  },
  {
    question: "Do you provide post-launch maintenance and support?",
    answer: "Absolutely. We offer ongoing retainer packages for continuous feature development, security updates, performance monitoring, and SLA-backed technical support to ensure your platform scales seamlessly."
  }
];

export function WebDesignFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mb-space-32 relative z-10 transition-colors duration-300 max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="font-display-lg text-3xl md:text-4xl font-bold tracking-tight text-on-surface dark:text-white">
          Common Questions
        </h2>
      </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? 'border-primary/50 shadow-md bg-white dark:bg-bg-dark-secondary' 
                    : 'border-slate-200/60 dark:border-white/10 bg-bg-secondary dark:bg-bg-dark-primary hover:border-primary/30'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`font-semibold text-lg transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-on-surface dark:text-white'}`}>
                    {faq.question}
                  </span>
                  <span 
                    className={`material-symbols-outlined text-[24px] text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  >
                    keyboard_arrow_down
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-text-secondary dark:text-secondary-fixed-dim leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
    </section>
  );
}

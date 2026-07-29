import { useState } from "react";

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How long does a typical software project take?",
      answer: "Timelines vary based on scope, but a typical MVP (Minimum Viable Product) usually ranges from 12 to 16 weeks. Large-scale enterprise systems with complex integrations often follow a 6-month initial release roadmap followed by iterative continuous deployment."
    },
    {
      question: "How do you estimate project costs?",
      answer: "We employ a value-based pricing model combined with a detailed discovery phase. After assessing the technical requirements and business objectives, we provide a transparent, fixed-range estimation that covers architecture, design, engineering, and quality assurance."
    },
    {
      question: "Do you work with startups as well as enterprises?",
      answer: "Yes. We serve high-growth Series A+ startups looking to scale their engineering maturity and established Fortune 500 enterprises modernizing their legacy infrastructure. Our methodology adapts to the specific governance and speed requirements of each."
    },
    {
      question: "Which technologies do you specialise in?",
      answer: "Our core stack focuses on modern, resilient architectures including React, Next.js, Node.js, Go, and Python. For infrastructure, we specialize in AWS and Azure environments with a strong emphasis on serverless and Kubernetes-orchestrated systems."
    },
    {
      question: "Can you work with our existing development team?",
      answer: "Absolutely. We offer team augmentation and strategic consultancy where we integrate our senior engineers into your existing agile workflows. We focus on knowledge transfer and elevating internal engineering standards during the partnership."
    },
    {
      question: "What happens after the product is launched?",
      answer: "We don't just ship and leave. We provide ongoing managed support, proactive monitoring, and feature iteration services. Most of our clients transition into a long-term Partnership Service Level Agreement (SLA) for continuous platform evolution."
    },
    {
      question: "Do you sign NDAs before discussing projects?",
      answer: "Confidentiality is paramount. We are happy to sign a Non-Disclosure Agreement before any detailed technical or business discussions to ensure your intellectual property and strategic plans remain fully protected."
    },
    {
      question: "How do you ensure software quality and security?",
      answer: "We implement a \"Security-First\" CI/CD pipeline that includes automated unit testing, integration testing, and vulnerability scanning. Every line of code undergoes peer review, and we conduct regular penetration tests for enterprise-grade applications."
    }
  ];

  return (
    <section className="py-space-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Content & Trust Badge */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <div className="sticky top-32">
              <span className="font-code text-caption tracking-widest text-primary uppercase mb-4 block">
                Frequently Asked Questions
              </span>
              <h2 className="font-display-xl text-display-xl mb-8 leading-tight">
                Everything you need to know
              </h2>
              <p className="font-body-lg text-body-lg text-text-secondary mb-12 max-w-lg">
                Answers to the most common questions about our development process, pricing, timelines, and long-term partnership.
              </p>
              
              <div className="p-8 rounded-xl bg-bg-secondary border border-outline-variant/30 flex flex-col items-start gap-6">
                <div>
                  <h3 className="font-heading-md text-heading-md mb-2">Still have questions?</h3>
                  <p className="text-text-secondary font-body-md">
                    Can't find what you're looking for? Speak directly with an expert advisor.
                  </p>
                </div>
                <button className="flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-accent-subtle transition-all">
                  <span>Schedule a Consultation</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7">
            <div className="bg-bg-primary rounded-[20px] border border-outline-variant/30 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              {faqs.map((faq, index) => {
                const isActive = activeIndex === index;
                return (
                  <div key={index} className={`border-b border-outline-variant/30 group last:border-b-0`}>
                    <button 
                      className={`w-full text-left px-8 py-7 flex justify-between items-center transition-all ${isActive ? 'bg-bg-secondary/50' : 'hover:bg-bg-secondary'}`}
                      onClick={() => toggleAccordion(index)}
                    >
                      <span className="font-heading-md text-heading-md text-on-surface">
                        {faq.question}
                      </span>
                      <span className={`material-symbols-outlined text-primary transition-transform duration-300 ${isActive ? 'rotate-45' : ''}`}>
                        add
                      </span>
                    </button>
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${isActive ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <div className="px-8 pb-8 text-text-secondary leading-relaxed bg-bg-secondary/50">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

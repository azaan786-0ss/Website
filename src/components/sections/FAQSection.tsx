import { useState, useMemo } from "react";
import {
  Search,
  Plus,
  Minus,
  HelpCircle,
  MessageSquareText,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Clock,
  Layers,
  DollarSign,
  X
} from "lucide-react";
import { Link } from "react-router-dom";

type CategoryId = "all" | "process" | "pricing" | "tech" | "partnership";

interface FAQItem {
  id: string;
  category: CategoryId;
  categoryLabel: string;
  number: string;
  question: string;
  answer: string;
  highlights: string[];
  icon: typeof Clock;
}

const faqs: FAQItem[] = [
  {
    id: "faq-1",
    category: "process",
    categoryLabel: "Process & Delivery",
    number: "01",
    question: "How long does a typical software project take from discovery to launch?",
    answer: "Timelines vary based on complexity, but a modern MVP (Minimum Viable Product) typically spans 12 to 16 weeks. We utilize 2-week agile sprint cycles with continuous integration, allowing you to view progress and test feature builds in real-time.",
    highlights: ["12-16 week MVP roadmap", "Bi-weekly sprint demos", "Continuous deployment preview"],
    icon: Clock
  },
  {
    id: "faq-2",
    category: "pricing",
    categoryLabel: "Pricing & Billing",
    number: "02",
    question: "How do you estimate project costs and structure billing?",
    answer: "We offer both fixed-scope milestone pricing for defined MVPs and dedicated sprint team velocity billing for evolving platforms. Following a thorough technical discovery sprint, we provide a transparent cost breakdown with zero hidden overheads.",
    highlights: ["Fixed milestone or sprint pricing", "Detailed technical estimate", "No hidden overages"],
    icon: DollarSign
  },
  {
    id: "faq-3",
    category: "partnership",
    categoryLabel: "Partnership & Scale",
    number: "03",
    question: "Do you work with high-growth startups as well as enterprises?",
    answer: "Yes, our engineering model scales seamlessly. We partner with Series A+ startups requiring rapid, high-quality development to reach market fit, as well as Fortune 500 enterprises modernizing core legacy systems and cloud infrastructure.",
    highlights: ["Series A+ startup speed", "Enterprise SLA & governance", "Flexible engagement models"],
    icon: Layers
  },
  {
    id: "faq-4",
    category: "tech",
    categoryLabel: "Tech & Security",
    number: "04",
    question: "Which modern tech stacks and cloud architectures do you specialize in?",
    answer: "Our core stack emphasizes high performance and security: React, Next.js, and TypeScript on the frontend; Go, Node.js, and Python for services; paired with AWS/Azure serverless and Kubernetes orchestration.",
    highlights: ["React, Next.js, TypeScript", "Go & Python microservices", "AWS / Azure Cloud Infrastructure"],
    icon: ShieldCheck
  },
  {
    id: "faq-5",
    category: "process",
    categoryLabel: "Process & Delivery",
    number: "05",
    question: "Can your engineers seamlessly integrate into our existing internal team?",
    answer: "Absolutely. Through our co-engineering model, our senior architects and developers embed directly into your Slack, Jira, and Git workflows. We emphasize pair programming, code reviews, and active knowledge transfer.",
    highlights: ["Embedded co-engineering", "Jira & Git workflow sync", "Hands-on knowledge transfer"],
    icon: Clock
  },
  {
    id: "faq-6",
    category: "partnership",
    categoryLabel: "Partnership & Scale",
    number: "06",
    question: "What happens after product launch? Do you provide ongoing support?",
    answer: "Launch is just day one. We offer proactive maintenance, 24/7 uptime monitoring, performance optimization, and dedicated SLA contracts for continuous feature rollouts and infrastructure scalability.",
    highlights: ["Proactive 24/7 monitoring", "Dedicated SLA contracts", "Iterative feature evolution"],
    icon: Layers
  },
  {
    id: "faq-7",
    category: "tech",
    categoryLabel: "Tech & Security",
    number: "07",
    question: "How do you protect IP and handle Non-Disclosure Agreements?",
    answer: "Intellectual property protection is legally enforced from day zero. We sign comprehensive bilateral NDAs before initial technical discovery, and 100% of code, documentation, and IP assets are transferred to your ownership.",
    highlights: ["Pre-discussion bilateral NDA", "100% Client IP ownership", "SOC2 compliance alignment"],
    icon: ShieldCheck
  },
  {
    id: "faq-8",
    category: "tech",
    categoryLabel: "Tech & Security",
    number: "08",
    question: "What automated QA and security testing protocols do you enforce?",
    answer: "We implement a Zero-Trust CI/CD pipeline. Every commit undergoes automated unit testing, end-to-end integration tests, SAST security vulnerability scanning, and peer code reviews prior to staging deployment.",
    highlights: ["Automated CI/CD security scans", "Peer-reviewed pull requests", "Zero-Trust architecture"],
    icon: ShieldCheck
  }
];

const categories: { id: CategoryId; label: string }[] = [
  { id: "all", label: "All Questions" },
  { id: "process", label: "Process & Delivery" },
  { id: "pricing", label: "Pricing & Billing" },
  { id: "tech", label: "Tech & Security" },
  { id: "partnership", label: "Partnership" }
];

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>("all");

  // Filter FAQs based on search query and category
  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
      const matchesSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.highlights.some(h => h.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-bg-primary dark:bg-bg-dark-primary transition-colors">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-0 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 translate-x-1/3 w-[30rem] h-[30rem] bg-tertiary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display-xl text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-on-surface dark:text-white mb-6 leading-tight">
          Frequently Asked <span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent">Questions</span>
        </h2>

        <p className="font-body-lg text-lg text-text-secondary dark:text-secondary-fixed-dim leading-relaxed">
          Everything you need to know about our engineering methodology, delivery timelines, pricing transparency, and long-term security.
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-xl mt-8 relative">
          <div className="relative flex items-center">
            <Search className="absolute left-4 w-5 h-5 text-text-secondary pointer-events-none" />
            <input
              type="text"
              placeholder="Search questions or keywords (e.g., NDA, MVP, Security)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-10 py-3.5 bg-bg-secondary dark:bg-bg-dark-secondary/80 border border-outline-variant/40 rounded-2xl font-body-md text-on-surface dark:text-white placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 p-1 rounded-full text-text-secondary hover:bg-outline-variant/20 hover:text-on-surface transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            const count = cat.id === "all"
              ? faqs.length
              : faqs.filter(f => f.category === cat.id).length;

            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setActiveIndex(0);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${isActive
                    ? "bg-primary text-white shadow-md shadow-primary/20 scale-105"
                    : "bg-bg-secondary dark:bg-bg-dark-secondary/60 text-text-secondary dark:text-secondary-fixed-dim hover:bg-accent-subtle dark:hover:bg-primary/20 hover:text-primary"
                  }`}
              >
                <span>{cat.label}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${isActive ? "bg-white/20 text-white" : "bg-outline-variant/30 text-text-secondary dark:text-secondary-fixed-dim"}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Grid: Left Help Card & Right Accordion */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

        {/* Left Column: Interactive Advisor Card */}
        <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-28">
          <div className="p-8 rounded-3xl bg-gradient-to-br from-bg-secondary via-bg-primary to-accent-subtle/30 dark:from-bg-dark-secondary dark:via-bg-dark-primary dark:to-primary/10 border border-outline-variant/40 shadow-xl relative overflow-hidden group">
            {/* Subtle background glow circle */}
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500" />

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary shadow-sm">
                <MessageSquareText className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    Advisors Online
                  </span>
                </div>
                <h3 className="font-heading-md text-lg font-bold text-on-surface dark:text-white">
                  Have custom questions?
                </h3>
              </div>
            </div>

            <p className="font-body-md text-sm text-text-secondary dark:text-secondary-fixed-dim mb-8 leading-relaxed">
              Can't find the exact answer for your architecture or security constraints? Talk directly with our lead solution architects.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-2.5 text-xs text-on-surface dark:text-secondary-fixed-dim font-medium">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Free 30-min Technical Architecture Audit</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-on-surface dark:text-secondary-fixed-dim font-medium">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Custom NDA signed before discovery call</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-on-surface dark:text-secondary-fixed-dim font-medium">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Direct response within 2 business hours</span>
              </div>
            </div>

            <Link
              to="/start-project"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary hover:bg-primary/90 text-white font-medium text-sm rounded-xl transition-all duration-300 shadow-lg shadow-primary/25 hover:-translate-y-0.5 group/btn"
            >
              <span>Book 1-on-1 Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </div>

          {/* Live Count Stat Box */}
          <div className="p-6 rounded-2xl bg-bg-secondary/60 dark:bg-bg-dark-secondary/60 border border-outline-variant/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <HelpCircle className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-on-surface dark:text-white">
                Showing {filteredFaqs.length} of {faqs.length} answers
              </span>
            </div>
            {filteredFaqs.length !== faqs.length && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="text-xs font-semibold text-primary hover:underline"
              >
                Reset filters
              </button>
            )}
          </div>
        </div>

        {/* Right Column: Accordion List */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          {filteredFaqs.length === 0 ? (
            <div className="p-12 text-center rounded-3xl bg-bg-secondary/40 dark:bg-bg-dark-secondary/40 border border-dashed border-outline-variant/50">
              <HelpCircle className="w-12 h-12 text-text-secondary mx-auto mb-4 opacity-50" />
              <h4 className="font-heading-md text-lg font-semibold text-on-surface dark:text-white mb-2">
                No matching questions found
              </h4>
              <p className="text-sm text-text-secondary dark:text-secondary-fixed-dim max-w-md mx-auto mb-6">
                We couldn't find any questions matching "{searchQuery}". Try searching with different keywords or talk to an advisor.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-xl hover:bg-primary/90 transition-colors shadow-md"
              >
                Clear Search Filter
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isActive = activeIndex === index;
              const IconComponent = faq.icon;

              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isActive
                      ? "bg-bg-primary dark:bg-bg-dark-secondary border-primary/40 shadow-xl ring-1 ring-primary/20"
                      : "bg-bg-primary/70 dark:bg-bg-dark-secondary/50 border-outline-variant/30 hover:border-primary/30 hover:bg-bg-primary"
                    }`}
                >
                  {/* Header Trigger */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left p-6 sm:p-7 flex items-start gap-4 sm:gap-6 justify-between focus:outline-none group"
                    aria-expanded={isActive}
                  >
                    <div className="flex items-start gap-4 sm:gap-5">
                      <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-mono font-bold transition-colors ${isActive
                          ? "bg-primary text-white shadow-sm"
                          : "bg-accent-subtle dark:bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
                        }`}>
                        {faq.number}
                      </span>

                      <div>
                        <div className="flex items-center gap-2.5 mb-2">
                          <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-accent-subtle dark:bg-primary/15 text-primary">
                            {faq.categoryLabel}
                          </span>
                        </div>
                        <h3 className={`font-heading-md text-base sm:text-lg font-bold transition-colors ${isActive
                            ? "text-primary dark:text-white"
                            : "text-on-surface dark:text-secondary-fixed-dim group-hover:text-primary dark:group-hover:text-white"
                          }`}>
                          {faq.question}
                        </h3>
                      </div>
                    </div>

                    {/* Expand / Collapse Icon */}
                    <div className={`p-2 rounded-full transition-all duration-300 shrink-0 ${isActive
                        ? "bg-primary text-white rotate-180"
                        : "bg-bg-secondary dark:bg-bg-dark-primary text-text-secondary group-hover:bg-accent-subtle group-hover:text-primary"
                      }`}>
                      {isActive ? (
                        <Minus className="w-5 h-5" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </div>
                  </button>

                  {/* Expandable Body */}
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${isActive ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                  >
                    <div className="px-6 sm:px-7 pb-7 pt-2 border-t border-outline-variant/20">
                      <p className="text-body-md text-sm sm:text-base text-text-secondary dark:text-secondary-fixed-dim leading-relaxed mb-6">
                        {faq.answer}
                      </p>

                      {/* Feature Highlights Pills */}
                      <div className="flex flex-wrap items-center gap-2 pt-2">
                        <span className="text-xs font-semibold text-on-surface dark:text-white mr-1 flex items-center gap-1">
                          <IconComponent className="w-3.5 h-3.5 text-primary" />
                          Highlights:
                        </span>
                        {faq.highlights.map((highlight, hIdx) => (
                          <span
                            key={hIdx}
                            className="text-xs px-3 py-1 rounded-full bg-accent-subtle/80 dark:bg-primary/10 text-primary dark:text-primary-fixed font-medium border border-primary/10 flex items-center gap-1.5"
                          >
                            <CheckCircle2 className="w-3 h-3 text-primary" />
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

      </div>

    </div>
    </section >
  );
}

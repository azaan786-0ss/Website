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
import homeData from '../../data/Home.json';

const { faqSection } = homeData;

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

const iconMap: Record<string, typeof Clock> = {
  Clock,
  DollarSign,
  Layers,
  ShieldCheck
};

const faqs: FAQItem[] = faqSection.faqs.map(faq => ({
  ...faq,
  category: faq.category as CategoryId,
  icon: iconMap[faq.icon] || Clock
}));

const categories: { id: CategoryId; label: string }[] = faqSection.categories.map(cat => ({
  id: cat.id as CategoryId,
  label: cat.label
}));

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
    <section className="py-24 md:py-32 relative overflow-hidden bg-transparent transition-colors">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-0 -translate-x-1/2 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 translate-x-1/3 w-[30rem] h-[30rem] bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-8 xl:px-12 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl xl:max-w-4xl mx-auto mb-16 xl:mb-20">
          <h2 className="font-display-xl text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
          {faqSection.title1}<span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-800 dark:from-indigo-400 dark:via-indigo-300 dark:to-indigo-500 bg-clip-text text-transparent">{faqSection.titleHighlight}</span>
        </h2>

        <p className="font-body-lg text-lg xl:text-xl text-slate-600 dark:text-zinc-400 leading-relaxed">
          {faqSection.subtitle}
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-xl xl:max-w-2xl mt-8 xl:mt-10 relative">
          <div className="relative flex items-center">
            <Search className="absolute left-4 w-5 h-5 text-slate-400 dark:text-zinc-500 pointer-events-none" />
            <input
              type="text"
              placeholder={faqSection.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-10 py-3.5 xl:py-4 bg-white dark:bg-[#0A0A0A] border border-slate-200 dark:border-zinc-800 rounded-2xl font-body-md text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 p-1 rounded-full text-slate-400 hover:text-slate-600 dark:text-zinc-500 dark:hover:text-zinc-300 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6 xl:mt-8">
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
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20 scale-105"
                    : "bg-white dark:bg-[#0A0A0A] border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                  }`}
              >
                <span>{cat.label}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${isActive ? "bg-white/20 text-white" : "bg-slate-100 dark:bg-zinc-900 text-slate-500 dark:text-zinc-400"}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Grid: Left Help Card & Right Accordion */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-start">

        {/* Left Column: Interactive Advisor Card */}
        <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-28">
          <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-100 to-white dark:from-[#0A0A0A] dark:to-black border border-slate-200 dark:border-zinc-800 shadow-xl relative overflow-hidden group">
            {/* Subtle background glow circle */}
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-all duration-500" />

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-[#050505] border border-transparent dark:border-zinc-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-sm">
                <MessageSquareText className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    {faqSection.advisorCard.online}
                  </span>
                </div>
                <h3 className="font-heading-md text-lg font-bold text-slate-900 dark:text-white">
                  {faqSection.advisorCard.title}
                </h3>
              </div>
            </div>

            <p className="font-body-md text-sm text-slate-600 dark:text-zinc-400 mb-8 leading-relaxed">
              {faqSection.advisorCard.desc}
            </p>

            <div className="space-y-3 mb-8">
              {faqSection.advisorCard.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-900 dark:text-zinc-300 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            <Link
              to="/start-project"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm rounded-xl transition-all duration-300 shadow-lg shadow-indigo-600/25 hover:-translate-y-0.5 group/btn"
            >
              <span>{faqSection.advisorCard.cta}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </div>

          {/* Live Count Stat Box */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#0A0A0A] border border-slate-200 dark:border-zinc-800 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              <HelpCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <span className="text-sm font-medium text-slate-900 dark:text-white">
                {faqSection.showingAnswers.replace('{filtered}', filteredFaqs.length.toString()).replace('{total}', faqs.length.toString())}
              </span>
            </div>
            {filteredFaqs.length !== faqs.length && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                {faqSection.resetFilters}
              </button>
            )}
          </div>
        </div>

        {/* Right Column: Accordion List */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          {filteredFaqs.length === 0 ? (
            <div className="p-12 text-center rounded-3xl bg-white dark:bg-[#0A0A0A] border border-dashed border-slate-300 dark:border-zinc-800">
              <HelpCircle className="w-12 h-12 text-slate-400 dark:text-zinc-500 mx-auto mb-4 opacity-50" />
              <h4 className="font-heading-md text-lg font-semibold text-slate-900 dark:text-white mb-2">
                {faqSection.noMatchTitle}
              </h4>
              <p className="text-sm text-slate-600 dark:text-zinc-400 max-w-md mx-auto mb-6">
                {faqSection.noMatchDesc.replace('{query}', searchQuery)}
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="px-5 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-xl hover:bg-indigo-700 transition-colors shadow-md"
              >
                {faqSection.clearSearchFilter}
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
                      ? "bg-white dark:bg-[#0A0A0A] border-indigo-300 dark:border-zinc-800 shadow-xl"
                      : "bg-white/80 dark:bg-[#050505] border-slate-200 dark:border-zinc-800 hover:border-indigo-300 dark:hover:border-indigo-500/50"
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
                          ? "bg-indigo-600 text-white shadow-sm"
                          : "bg-indigo-50 dark:bg-zinc-900 text-indigo-600 dark:text-indigo-400 border border-transparent dark:border-zinc-800 group-hover:bg-indigo-600 group-hover:text-white"
                        }`}>
                        {faq.number}
                      </span>

                      <div>
                        <div className="flex items-center gap-2.5 mb-2">
                          <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-indigo-50 dark:bg-zinc-900 text-indigo-600 dark:text-indigo-400 border border-transparent dark:border-zinc-800">
                            {faq.categoryLabel}
                          </span>
                        </div>
                        <h3 className={`font-heading-md text-base sm:text-lg font-bold transition-colors ${isActive
                            ? "text-indigo-600 dark:text-white"
                            : "text-slate-900 dark:text-zinc-300 group-hover:text-indigo-600 dark:group-hover:text-white"
                          }`}>
                          {faq.question}
                        </h3>
                      </div>
                    </div>

                    {/* Expand / Collapse Icon */}
                    <div className={`p-2 rounded-full transition-all duration-300 shrink-0 ${isActive
                        ? "bg-indigo-600 text-white rotate-180"
                        : "bg-slate-100 dark:bg-zinc-900 text-slate-500 dark:text-zinc-400 group-hover:bg-indigo-600 group-hover:text-white"
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
                    <div className="px-6 sm:px-7 pb-7 pt-2 border-t border-slate-200 dark:border-zinc-850">
                      <p className="text-body-md text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed mb-6">
                        {faq.answer}
                      </p>

                      {/* Feature Highlights Pills */}
                      <div className="flex flex-wrap items-center gap-2 pt-2">
                        <span className="text-xs font-semibold text-slate-900 dark:text-white mr-1 flex items-center gap-1">
                          <IconComponent className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                          {faqSection.highlightsLabel}
                        </span>
                        {faq.highlights.map((highlight, hIdx) => (
                          <span
                            key={hIdx}
                            className="text-xs px-3 py-1 rounded-full bg-indigo-50 dark:bg-zinc-900 text-indigo-600 dark:text-indigo-300 font-medium border border-transparent dark:border-zinc-800 flex items-center gap-1.5"
                          >
                            <CheckCircle2 className="w-3 h-3 text-indigo-600 dark:text-indigo-400" />
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
    </section>
  );
}

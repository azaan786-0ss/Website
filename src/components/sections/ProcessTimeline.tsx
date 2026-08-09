import { useEffect, useRef, useState } from "react";
import { 
  Compass, 
  Palette, 
  Code2, 
  Rocket, 
  HeartHandshake, 
  CheckCircle,
  FileCheck,
  Activity
} from "lucide-react";
import { SoftBlurIn } from "../ui/soft-blur-in";
import homeData from '../../data/Home.json';

const { processTimeline } = homeData;

interface StepItem {
  title: string;
  desc: string;
  tag: string;
  artifacts: string[];
  duration: string;
  icon: typeof Compass;
}

const iconMap: Record<string, typeof Compass> = {
  Compass,
  Palette,
  Code2,
  Rocket,
  HeartHandshake
};

const steps: StepItem[] = processTimeline.steps.map(step => ({
  ...step,
  icon: iconMap[step.icon] || Compass
}));

export function ProcessTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      let progress = 0;
      
      if (window.innerWidth >= 1024) {
        // Desktop: Sticky Scrolljacking logic
        // The container is 400vh tall. 
        // Scrolling starts when the top hits 0 (rect.top <= 0)
        // Ends when bottom hits viewport bottom
        const totalScrollable = rect.height - windowHeight;
        if (totalScrollable > 0) {
          progress = (-rect.top) / totalScrollable;
        }
      } else {
        // Mobile: Normal scroll tracking
        const startTrigger = windowHeight * 0.8;
        const endTrigger = windowHeight * 0.2;
        const totalHeight = rect.height;
        const currentPos = startTrigger - rect.top;
        progress = currentPos / (totalHeight + (startTrigger - endTrigger));
      }
      
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);

      const stepSegment = 1 / steps.length;
      let active = 0;
      for (let i = 0; i < steps.length; i++) {
        if (progress >= i * stepSegment - 0.05) {
          active = i;
        }
      }
      setActiveIndex(active);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const activeStep = steps[activeIndex] || steps[0];

  return (
    <section 
      ref={containerRef} 
      // Force a massive height on Desktop for scrolljacking. Natural height on Mobile.
      className="relative h-auto lg:h-[400vh] bg-bg-primary dark:bg-bg-dark-primary transition-colors"
    >
      {/* 
        This inner div pins to the screen on Desktop, giving the "full screen" feel.
        On mobile, it remains relative and scrolls normally.
      */}
      <div className="relative lg:sticky lg:top-0 lg:h-screen w-full flex flex-col justify-center overflow-hidden py-16 md:py-24 lg:py-0">
        
        {/* Decorative Ambient Gradients */}
        <div className="absolute top-1/3 left-0 -translate-x-1/2 w-[30rem] h-[30rem] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 translate-x-1/2 w-[35rem] h-[35rem] bg-accent-subtle/20 dark:bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-8 xl:px-12 relative z-10 w-full">
          
          {/* Section Header */}
          <div className="max-w-3xl xl:max-w-4xl mb-8 lg:mb-10 xl:mb-14">
            <SoftBlurIn delay={0.1}>
              <h2 className="font-display-xl text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight text-on-surface dark:text-white mb-3 lg:mb-4">
                {processTimeline.title1}<span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent">{processTimeline.titleHighlight}</span>
              </h2>
            </SoftBlurIn>
            <SoftBlurIn delay={0.25}>
              <p className="font-body-lg text-base lg:text-lg xl:text-xl text-text-secondary dark:text-secondary-fixed-dim leading-relaxed hidden sm:block">
                {processTimeline.subtitle}
              </p>
            </SoftBlurIn>
          </div>

          {/* Interactive Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-20 items-start lg:items-center h-full">
            
            {/* Left Column: Board with Gauge (Desktop only) */}
            <div className="hidden lg:block lg:col-span-5 relative bg-gradient-to-br from-bg-secondary/80 to-bg-primary dark:from-bg-dark-secondary dark:to-bg-dark-primary p-6 lg:p-7 rounded-3xl border border-outline-variant/40 shadow-xl overflow-hidden group">
              
              {/* Ambient subtle light bulb glow */}
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/15 rounded-full blur-3xl group-hover:bg-primary/25 transition-all duration-700" />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                
                {/* Radial Progress SVG Gauge */}
                <div className="relative w-32 h-32 mb-6 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    {/* Background Track Circle */}
                    <circle
                      className="text-outline-variant/20 stroke-current"
                      strokeWidth="6"
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                    />
                    {/* Progress Line Circle */}
                    <circle
                      className="text-primary stroke-current transition-all duration-100 ease-linear"
                      strokeWidth="6"
                      strokeDasharray="251.2"
                      strokeDashoffset={251.2 - (251.2 * scrollProgress)}
                      strokeLinecap="round"
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                    />
                  </svg>
                  
                  {/* Gauge Inner Info */}
                  <div className="absolute flex flex-col items-center justify-center">
                    <span className="font-mono text-2xl font-bold text-on-surface dark:text-white">
                      {Math.round(scrollProgress * 100)}%
                    </span>
                    <span className="text-[10px] font-bold text-text-secondary uppercase tracking-widest mt-0.5">
                      {processTimeline.gaugeCompleted}
                    </span>
                  </div>
                </div>

                {/* Phase Details Card */}
                <div className="w-full bg-bg-primary dark:bg-bg-dark-primary/60 border border-outline-variant/30 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                      {processTimeline.activePhaseSync}
                    </span>
                  </div>
                  <h3 className="font-display-md text-base font-bold text-on-surface dark:text-white mb-2">
                    {activeIndex + 1}. {activeStep.title}
                  </h3>
                  <span className="inline-block text-[11px] px-2.5 py-0.5 bg-accent-subtle dark:bg-primary/20 text-primary font-medium rounded-full mb-3">
                    {activeStep.duration}
                  </span>

                  {/* Key Deliverables Block */}
                  <div className="text-left border-t border-outline-variant/20 pt-3 mt-1">
                    <span className="text-[11px] font-bold text-on-surface dark:text-white flex items-center gap-1.5 mb-2">
                      <FileCheck className="w-3.5 h-3.5 text-primary" />
                      {processTimeline.keyArtifacts}
                    </span>
                    <ul className="space-y-1.5">
                      {activeStep.artifacts.map((artifact, aIdx) => (
                        <li key={aIdx} className="flex items-center gap-1.5 text-[11px] text-text-secondary dark:text-secondary-fixed-dim">
                          <CheckCircle className="w-3 h-3 text-primary shrink-0" />
                          <span className="font-medium">{artifact}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-4 text-[11px] text-text-secondary">
                  <div className="flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{processTimeline.agileTransparency}</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Steps Timeline */}
            <div className="lg:col-span-7 relative lg:h-[360px]">
              
              {/* Mobile Vertical Visual connector line */}
              <div className="lg:hidden absolute left-[27px] md:left-[39px] top-4 bottom-4 w-[2px] bg-outline-variant/30 dark:bg-outline-variant/10 rounded-full" />
              
              {/* Mobile Neon active progress traveler line */}
              <div 
                className="lg:hidden absolute left-[27px] md:left-[39px] top-4 w-[2px] bg-primary rounded-full transition-all duration-100 ease-out origin-top shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                style={{ height: `${scrollProgress * 98}%` }}
              />

              <div className="relative space-y-12 lg:space-y-0 w-full h-full">
                {steps.map((step, index) => {
                  const isActive = index <= activeIndex;
                  const isCurrent = index === activeIndex;
                  const IconComponent = step.icon;

                  return (
                    <div 
                      key={index}
                      className={`
                        relative pl-14 md:pl-20 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                        lg:absolute lg:inset-x-0 lg:pl-0 lg:top-1/2
                        ${isCurrent 
                            ? "opacity-100 lg:-translate-y-1/2 lg:scale-100 z-20 pointer-events-auto" 
                            : index < activeIndex 
                              ? "opacity-40 lg:opacity-0 lg:-translate-y-[80%] lg:scale-95 z-10 pointer-events-none" 
                              : "opacity-40 lg:opacity-0 lg:translate-y-[20%] lg:scale-95 z-10 pointer-events-none"
                        }
                      `}
                    >
                      
                      {/* Step Content Card */}
                      <div 
                        className={`p-5 sm:p-6 rounded-2xl border transition-all duration-500 ${
                          isCurrent
                            ? "bg-bg-primary dark:bg-bg-dark-secondary border-primary/40 shadow-xl shadow-primary/5"
                            : isActive
                              ? "bg-bg-primary/50 dark:bg-bg-dark-secondary/20 border-outline-variant/30 lg:border-transparent"
                              : "bg-transparent border-transparent"
                        }`}
                      >
                        
                        {/* Floating Step Icon Badge */}
                        <div 
                          className={`absolute left-2 md:left-4 top-5 lg:relative lg:left-0 lg:top-0 lg:mb-4 w-10 h-10 md:w-12 md:h-12 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center border-2 z-20 transition-all duration-500 shadow-sm ${
                            isCurrent
                              ? "bg-primary border-primary text-white scale-110 shadow-lg shadow-primary/20"
                              : isActive
                                ? "bg-bg-primary border-primary/50 text-primary"
                                : "bg-bg-secondary dark:bg-bg-dark-secondary border-outline-variant/40 text-text-secondary"
                          }`}
                        >
                          <IconComponent className="w-5 h-5 md:w-6 md:h-6 lg:w-6 lg:h-6" />
                        </div>

                        {/* Badge and Duration */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2 lg:mb-3">
                          <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-accent-subtle dark:bg-primary/10 text-primary">
                            {step.tag}
                          </span>
                          <span className="text-[11px] font-mono font-bold text-text-secondary">
                            Phase {index + 1} — {step.duration}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className={`font-display-md text-xl sm:text-2xl lg:text-2xl font-bold mb-2 transition-colors ${
                          isCurrent 
                            ? "text-primary dark:text-white" 
                            : "text-on-surface dark:text-secondary-fixed-dim"
                        }`}>
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="font-body-md text-sm sm:text-base lg:text-base text-text-secondary dark:text-secondary-fixed-dim leading-relaxed mb-0">
                          {step.desc}
                        </p>

                        {/* Mobile key deliverables list (shown only on mobile/tablet) */}
                        <div className="block lg:hidden border-t border-outline-variant/20 pt-4">
                          <span className="text-xs font-bold text-on-surface dark:text-white flex items-center gap-1.5 mb-2">
                            <FileCheck className="w-3.5 h-3.5 text-primary" />
                            {processTimeline.keyDeliverables}
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {step.artifacts.map((artifact, aIdx) => (
                              <div key={aIdx} className="flex items-center gap-1.5 text-xs text-text-secondary dark:text-secondary-fixed-dim">
                                <CheckCircle className="w-3 h-3 text-primary shrink-0" />
                                <span>{artifact}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>

                    </div>
                  );
                })}
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

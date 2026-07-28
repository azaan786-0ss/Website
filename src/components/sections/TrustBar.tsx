export function TrustBar() {
  const items = [
    { icon: "code", text: "Built with React" },
    { icon: "cloud", text: "AWS Certified" },
    { icon: "database", text: "Postgres Optimized" },
    { icon: "lock", text: "SOC2 Compliant" },
    { icon: "speed", text: "Edge Deployed" },
  ];

  return (
    <section className="border-y border-outline-variant/30 bg-transparent py-space-8 overflow-hidden">
      <div className="relative w-full flex overflow-hidden">
        <div className="flex w-max animate-logo-loop items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500 hover:[animation-play-state:paused]">
          {[...items, ...items, ...items, ...items].map((item, index) => (
            <span key={index} className="group font-code text-code text-secondary flex items-center gap-2 mx-8 whitespace-nowrap hover:text-primary transition-all duration-300 cursor-default">
              <span className="material-symbols-outlined transition-colors duration-300 drop-shadow-sm">{item.icon}</span> 
              <span className="transition-colors duration-300">{item.text}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

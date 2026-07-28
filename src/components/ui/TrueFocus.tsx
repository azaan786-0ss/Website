import { useState, useRef, useEffect } from "react";

export function TrueFocus({ sentence }: { sentence: string }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [targetRect, setTargetRect] = useState<{ left: number, top: number, width: number, height: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const words = sentence.split(" ");
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (hoveredIndex !== null && wordRefs.current[hoveredIndex] && containerRef.current) {
      const containerBounds = containerRef.current.getBoundingClientRect();
      const wordBounds = wordRefs.current[hoveredIndex]!.getBoundingClientRect();
      
      setTargetRect({
        left: wordBounds.left - containerBounds.left,
        top: wordBounds.top - containerBounds.top,
        width: wordBounds.width,
        height: wordBounds.height
      });
    } else {
      setTargetRect(null);
    }
  }, [hoveredIndex]);

  return (
    <div ref={containerRef} className="relative inline-flex flex-wrap gap-x-[0.3em] cursor-crosshair">
      {words.map((word, i) => (
        <span 
          key={i} 
          ref={el => { wordRefs.current[i] = el; }}
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
          className={`transition-all duration-300 relative z-10 ${hoveredIndex === i ? 'text-primary' : hoveredIndex !== null ? 'opacity-40 blur-[2px]' : ''}`}
        >
          {word}
        </span>
      ))}
      
      {/* Target Cursor Box */}
      <div 
        className="absolute pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] z-0"
        style={{
          left: targetRect ? targetRect.left - 6 : 0,
          top: targetRect ? targetRect.top - 6 : 0,
          width: targetRect ? targetRect.width + 12 : 0,
          height: targetRect ? targetRect.height + 12 : 0,
          opacity: targetRect ? 1 : 0,
          transform: targetRect ? 'scale(1)' : 'scale(1.1)'
        }}
      >
        <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary"></span>
        <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary"></span>
        <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary"></span>
        <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary"></span>
      </div>
    </div>
  );
}

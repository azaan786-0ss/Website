"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SoftBlurInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export function SoftBlurIn({
  children,
  className,
  delay = 0,
  duration = 1.2,
}: SoftBlurInProps) {
  return (
    <motion.div
      initial={{ filter: "blur(12px)", opacity: 0, y: 10 }}
      whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: duration,
        ease: [0.22, 1, 0.36, 1], // Ultra-smooth deceleration
        delay: delay,
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

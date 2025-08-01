// src/components/AnimatedSection.tsx
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  previousBgClass: string; // updated: className instead of raw color
}

export default function AnimatedSection({
  children,
  className,
  previousBgClass,
}: AnimatedSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const curveProgress = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [10, 80, 10]);

  const d = useTransform(curveProgress, [10, 80], [
    "M0,100 Q50,100 100,100 L100,0 L0,0 Z",
    "M0,100 Q50,20 100,100 L100,0 L0,0 Z",
  ]);

  const contentOpacity = useTransform(scrollYProgress, [0.4, 0.7], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.4, 0.7], [100, 0]);

  return (
    <section ref={containerRef} className={`relative ${className}`}>
      <svg
        className="absolute top-0 left-0 w-full h-[150px] -translate-y-[149px] z-10"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <motion.path d={d} className={previousBgClass} />
      </svg>

      <motion.div style={{ opacity: contentOpacity, y: contentY }}>
        {children}
      </motion.div>
    </section>
  );
}

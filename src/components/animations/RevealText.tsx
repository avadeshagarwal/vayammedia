"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode, Children } from "react";

interface RevealTextProps {
  children: ReactNode;
  delay?: number;
  stagger?: number;
  className?: string;
}

export default function RevealText({
  children,
  delay = 0.4,
  stagger = 0.12,
  className = "",
}: RevealTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const lines = Children.toArray(children);

  return (
    <div ref={ref} className={className}>
      {lines.map((line, i) => (
        <div key={i} className="overflow-hidden">
          <motion.div
            initial={{ y: "110%" }}
            animate={isInView ? { y: "0%" } : { y: "110%" }}
            transition={{
              duration: 0.8,
              delay: delay + i * stagger,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {line}
          </motion.div>
        </div>
      ))}
    </div>
  );
}

"use client";

import { useRef, useEffect, useState, useCallback } from "react";

export function useScrollProgress(offset: [string, string] = ["start end", "end start"]) {
  const ref = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  const handleScroll = useCallback(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const elementTop = rect.top;
    const elementHeight = rect.height;

    const start = windowHeight;
    const end = -elementHeight;
    const current = start - elementTop;
    const total = start - end;

    const p = Math.min(Math.max(current / total, 0), 1);
    setProgress(p);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return { ref, progress };
}

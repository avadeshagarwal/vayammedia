"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // Only show on desktop pointer devices

  useEffect(() => {
    // Hide default cursor globally on desktop
    if (window.matchMedia("(pointer: coarse)").matches) {
      return; // Do nothing for touch devices (phones/tablets)
    }
    
    setIsVisible(true);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over a clickable element
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]') ||
        target.classList.contains("clickable")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Hide the default OS cursor on all elements */}
      <style dangerouslySetInnerHTML={{ __html: `* { cursor: none !important; }` }} />
      
      {/* Inner Solid Dot (Fast Follow) */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-magenta rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering ? 0 : 1, // Shrink to nothing when hovering
        }}
        transition={{ type: "spring", stiffness: 800, damping: 40, mass: 0.1 }}
      />
      
      {/* Outer Trailing Ring (Smooth Follow) */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border border-magenta rounded-full pointer-events-none z-[9998] shadow-[0_0_15px_rgba(229,0,125,0.4)] mix-blend-difference"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          scale: isHovering ? 1.5 : 1, // Expand when hovering
          backgroundColor: isHovering ? "rgba(229,0,125,0.2)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25, mass: 0.6 }}
      />
    </>
  );
}

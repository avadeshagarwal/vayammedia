"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  duration?: string;
  reverse?: boolean;
  className?: string;
  pauseOnHover?: boolean;
}

export default function Marquee({
  children,
  duration = "30s",
  reverse = false,
  className = "",
  pauseOnHover = false,
}: MarqueeProps) {
  return (
    <div
      className={cn("overflow-hidden", className)}
    >
      <div
        className={cn(
          "animate-marquee flex w-max items-center",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{
          "--marquee-duration": duration,
          animationDirection: reverse ? "reverse" : "normal",
        } as React.CSSProperties}
        aria-hidden="false"
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

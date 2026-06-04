"use client";

import { AnimateOnScroll } from "./motion-wrapper";
import { cn } from "@/lib/utils";

interface Props {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  subtitle,
  title,
  description,
  align = "center",
  light = false,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {subtitle && (
        <AnimateOnScroll>
          <p
            className={cn(
              "font-script text-lg md:text-xl mb-2",
              light ? "text-terracotta" : "text-caramel"
            )}
          >
            {subtitle}
          </p>
        </AnimateOnScroll>
      )}
      <AnimateOnScroll delay={0.1}>
        <h2
          className={cn(
            "font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide",
            light ? "text-text-light" : "text-cream"
          )}
        >
          {title}
        </h2>
      </AnimateOnScroll>
      {description && (
        <AnimateOnScroll delay={0.2}>
          <p
            className={cn(
              "mt-4 max-w-2xl text-base md:text-lg font-body leading-relaxed",
              align === "center" && "mx-auto",
              light ? "text-text-muted-light" : "text-text-muted-dark"
            )}
          >
            {description}
          </p>
        </AnimateOnScroll>
      )}
      <AnimateOnScroll delay={0.3}>
        <div
          className={cn(
            "mt-6 h-[1px] w-16",
            align === "center" && "mx-auto",
            "bg-gradient-to-r from-transparent via-caramel to-transparent"
          )}
        />
      </AnimateOnScroll>
    </div>
  );
}

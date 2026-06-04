"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

const stats = [
  { value: 12, suffix: "+", label: "Years Roasting" },
  { value: 50, suffix: "+", label: "Signature Drinks" },
  { value: 100, suffix: "%", label: "Single-Origin Beans" },
  { value: 15000, suffix: "+", label: "Happy Customers" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-caramel">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsStrip() {
  return (
    <section className="py-16 md:py-20 bg-roasted border-y border-[rgba(201,162,75,0.1)]">
      <div className="max-w-6xl mx-auto section-padding grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <CountUp target={stat.value} suffix={stat.suffix} />
            <p className="mt-2 text-text-muted-dark text-sm font-body tracking-wide uppercase">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

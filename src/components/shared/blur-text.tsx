"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

interface Props {
  text: string;
  className?: string;
  /** Per-word stagger in seconds. */
  stagger?: number;
  delay?: number;
}

/**
 * Word-by-word blur-in reveal (adapted from the "BlurText" template).
 * Each word rises and sharpens from a blur as the heading scrolls into view.
 */
export default function BlurText({ text, className, stagger = 0.08, delay = 0 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { amount: 0.2, once: true });
  const words = text.split(" ");

  return (
    <span ref={ref} className={className} style={{ display: "inline-flex", flexWrap: "wrap", justifyContent: "inherit" }}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block"
          style={{ marginRight: "0.28em" }}
          initial={{ filter: "blur(10px)", opacity: 0, y: 28 }}
          animate={inView ? { filter: "blur(0px)", opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, delay: delay + i * stagger, ease: [0.22, 1, 0.36, 1] }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

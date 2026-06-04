"use client";

import { useEffect, useRef } from "react";
import { useInView, useAnimation } from "framer-motion";

export function useScrollAnimation(threshold = 0.2, once = true) {
  const ref = useRef<HTMLDivElement>(null!);
  const isInView = useInView(ref, { amount: threshold, once });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return [ref, controls] as const;
}

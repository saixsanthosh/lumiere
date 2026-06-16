"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Slim gold progress bar pinned to the very top of the viewport. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      className="fixed left-0 right-0 top-0 z-[70] h-[3px] origin-left
                 bg-gradient-to-r from-caramel via-gold-bright to-caramel
                 shadow-[0_0_12px_rgba(201,162,75,0.7)]"
      style={{ scaleX }}
    />
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Full-screen luxury intro: a counter races to 100 while the wordmark draws in,
 * then two espresso curtains split to reveal the site. Shows once per tab
 * session and short-circuits under reduced-motion.
 */
export default function Preloader() {
  const [done, setDone] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = sessionStorage.getItem("lumiere_intro_seen");
    if (reduced || seen) {
      setDone(true);
      return;
    }
    document.body.style.overflow = "hidden";

    const start = performance.now();
    const DURATION = 2000;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / DURATION);
      // easeOutExpo for a fast-then-settle count
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setCount(Math.round(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        sessionStorage.setItem("lumiere_intro_seen", "1");
        setTimeout(() => setDone(true), 500);
      }
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (done) document.body.style.overflow = "";
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 1 }}
        >
          {/* Splitting curtains */}
          <motion.div
            className="absolute inset-y-0 left-0 w-1/2 bg-espresso"
            initial={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            className="absolute inset-y-0 right-0 w-1/2 bg-espresso"
            initial={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* Center content */}
          <motion.div
            className="relative z-10 flex flex-col items-center"
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.4 }}
          >
            <motion.span
              initial={{ opacity: 0, letterSpacing: "0.5em" }}
              animate={{ opacity: 1, letterSpacing: "0.25em" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="font-display text-4xl md:text-6xl font-light text-gradient-gold-anim"
            >
              LUMIÈRE
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-3 font-script text-caramel/70 text-lg"
            >
              Premium Artisan Café
            </motion.span>

            <div className="mt-8 h-px w-48 overflow-hidden bg-cream/10">
              <motion.div
                className="h-full bg-gradient-to-r from-caramel to-gold-bright"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: count / 100 }}
                style={{ transformOrigin: "left" }}
                transition={{ ease: "linear" }}
              />
            </div>
            <span className="mt-4 font-body text-xs tracking-[0.4em] text-cream/40 tabular-nums">
              {String(count).padStart(3, "0")}
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

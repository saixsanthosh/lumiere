"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, type Variants } from "framer-motion";
import Link from "next/link";
import { Star } from "lucide-react";
import VideoBackground from "@/components/shared/video-background";
import Magnetic from "@/components/shared/magnetic";

/* Floating decorative particles */
function FloatingParticles() {
  return (
    <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden hidden sm:block">
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-caramel/20 rounded-full"
          style={{ left: `${(i * 53) % 100}%`, top: `${(i * 37) % 100}%` }}
          animate={{ y: [0, -60, 0], opacity: [0, 0.6, 0], scale: [0.5, 1.2, 0.5] }}
          transition={{
            duration: 4 + (i % 5),
            repeat: Infinity,
            delay: (i % 7) * 0.7,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

const HEADLINE_1 = ["Crafted", "to", "Awaken"];
const HEADLINE_2 = ["Your", "Senses"];

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 50, filter: "blur(12px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, delay: 0.6 + i * 0.08, ease: EASE_OUT },
  }),
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Mouse parallax (spring-smoothed, subtle)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const contentX = useTransform(sx, [-0.5, 0.5], [18, -18]);
  const contentY = useTransform(sy, [-0.5, 0.5], [12, -12]);
  const auroraX = useTransform(sx, [-0.5, 0.5], [-40, 40]);
  const auroraY = useTransform(sy, [-0.5, 0.5], [-30, 30]);

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  let wordIndex = 0;

  return (
    <section
      ref={sectionRef}
      onMouseMove={onMouseMove}
      className="relative h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      <VideoBackground showMuteToggle />

      {/* Animated aurora glow that drifts with the cursor */}
      <motion.div
        style={{ x: auroraX, y: auroraY }}
        className="aurora-bg absolute -inset-32 z-[3] opacity-60 mix-blend-screen pointer-events-none"
      />
      <div className="grain-overlay z-[4]" />
      <FloatingParticles />

      {/* Decorative golden lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-caramel/20 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-caramel/20 to-transparent z-10" />

      <motion.div
        style={{ x: contentX, y: contentY }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill glass-gold mb-6"
        >
          <Star size={12} className="text-caramel fill-caramel" />
          <span className="text-cream/90 text-xs font-body tracking-widest uppercase">
            Premium Artisan Café
          </span>
          <Star size={12} className="text-caramel fill-caramel" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-script text-caramel text-2xl md:text-3xl mb-6"
        >
          Welcome to Lumière
        </motion.p>

        {/* Kinetic word-reveal headline */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] xl:text-[7.5rem] font-light tracking-wide text-cream leading-[1.05]">
          <span className="flex flex-wrap justify-center gap-x-4 md:gap-x-6">
            {HEADLINE_1.map((w) => (
              <motion.span
                key={w}
                custom={wordIndex++}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                className="inline-block"
              >
                {w}
              </motion.span>
            ))}
          </span>
          <span className="flex flex-wrap justify-center gap-x-4 md:gap-x-6 mt-1">
            {HEADLINE_2.map((w) => (
              <motion.span
                key={w}
                custom={wordIndex++}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                className="inline-block text-gradient-gold-anim"
              >
                {w}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mx-auto mt-6 mb-6 w-24 h-[1px] bg-gradient-to-r from-transparent via-caramel to-transparent"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-cream/80 text-base sm:text-lg md:text-xl lg:text-2xl font-body max-w-2xl mx-auto leading-relaxed font-light"
        >
          Single-origin beans, handcrafted beverages, and a warm ambiance where
          every sip is an experience worth savoring.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Magnetic strength={0.5}>
            <Link
              href="/menu"
              data-cursor="hover"
              className="group relative inline-flex px-10 py-4 bg-caramel text-espresso font-body font-semibold text-base rounded-pill overflow-hidden transition-all duration-500 hover:shadow-glow-lg tracking-wide glass-sheen"
            >
              <span className="relative z-10">View Menu</span>
              <div className="absolute inset-0 bg-gold-bright opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          </Magnetic>
          <Magnetic strength={0.5}>
            <Link
              href="/reservations"
              data-cursor="hover"
              className="inline-flex px-10 py-4 glass text-cream font-body text-base rounded-pill hover:text-caramel transition-all duration-500 tracking-wide hover:shadow-glow"
            >
              Reserve a Table
            </Link>
          </Magnetic>
        </motion.div>

        {/* Quick info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
          className="mt-10 md:mt-14 flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 gap-y-3 text-cream/55 text-[11px] sm:text-xs font-body tracking-widest uppercase"
        >
          <span>Open Daily</span>
          <span className="w-1 h-1 rounded-full bg-caramel/40" />
          <span>7 AM — 11 PM</span>
          <span className="w-1 h-1 rounded-full bg-caramel/40" />
          <span>Indiranagar, Bengaluru</span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-cream/60 text-[10px] font-body tracking-[0.3em] uppercase">
            Scroll to Explore
          </span>
          <div className="w-5 h-8 border border-cream/20 rounded-pill flex justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [0.8, 0.2, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 bg-caramel/60 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Side decorative text */}
      <div className="hidden xl:block absolute left-6 top-1/2 -translate-y-1/2 z-10">
        <p className="text-cream/25 text-[10px] font-body tracking-[0.5em] uppercase" style={{ writingMode: "vertical-lr" }}>
          Est. 2014 — Bengaluru
        </p>
      </div>
      <div className="hidden xl:block absolute right-6 top-1/2 -translate-y-1/2 z-10">
        <p className="text-cream/25 text-[10px] font-body tracking-[0.5em] uppercase" style={{ writingMode: "vertical-lr" }}>
          Artisan Coffee & Fine Dining
        </p>
      </div>
    </section>
  );
}

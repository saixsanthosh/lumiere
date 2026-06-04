"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Star } from "lucide-react";
import VideoBackground from "@/components/shared/video-background";

/* Floating decorative particles */
function FloatingParticles() {
  return (
    <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-caramel/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -60, 0],
            opacity: [0, 0.6, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[750px] flex items-center justify-center overflow-hidden">
      <VideoBackground showMuteToggle />
      <FloatingParticles />

      {/* Decorative golden lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-caramel/20 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-caramel/20 to-transparent z-10" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill border border-caramel/20
                     bg-caramel/5 backdrop-blur-sm mb-6"
        >
          <Star size={12} className="text-caramel fill-caramel" />
          <span className="text-caramel/80 text-xs font-body tracking-widest uppercase">
            Premium Artisan Cafe
          </span>
          <Star size={12} className="text-caramel fill-caramel" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-script text-caramel text-2xl md:text-3xl mb-6"
        >
          Welcome to Lumiere
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] xl:text-[7.5rem]
                     font-light tracking-wide text-cream leading-[1.05]"
        >
          Crafted to Awaken
          <br />
          <span className="text-gradient-gold">Your Senses</span>
        </motion.h1>

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mx-auto mt-6 mb-6 w-24 h-[1px] bg-gradient-to-r from-transparent via-caramel to-transparent"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-cream/60 text-lg md:text-xl lg:text-2xl font-body max-w-2xl mx-auto
                     leading-relaxed font-light"
        >
          Single-origin beans, handcrafted beverages, and a warm ambiance
          where every sip is an experience worth savoring.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/menu"
            className="group relative px-10 py-4 bg-caramel text-espresso font-body font-semibold
                       text-base rounded-pill overflow-hidden transition-all duration-500
                       hover:shadow-glow-lg tracking-wide"
          >
            <span className="relative z-10">View Menu</span>
            <div className="absolute inset-0 bg-gold-bright opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Link>
          <Link
            href="/reservations"
            className="px-10 py-4 border border-cream/25 text-cream font-body
                       text-base rounded-pill hover:border-caramel hover:text-caramel
                       transition-all duration-500 tracking-wide hover:shadow-glow backdrop-blur-sm"
          >
            Reserve a Table
          </Link>
        </motion.div>

        {/* Quick info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-14 flex items-center justify-center gap-8 text-cream/30 text-xs font-body tracking-widest uppercase"
        >
          <span>Open Daily</span>
          <span className="w-1 h-1 rounded-full bg-caramel/40" />
          <span>7 AM — 11 PM</span>
          <span className="w-1 h-1 rounded-full bg-caramel/40" />
          <span>Indiranagar, Bengaluru</span>
        </motion.div>
      </div>

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
          <span className="text-cream/30 text-[10px] font-body tracking-[0.3em] uppercase">
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
        <p className="text-cream/10 text-[10px] font-body tracking-[0.5em] uppercase"
           style={{ writingMode: "vertical-lr" }}>
          Est. 2014 — Bengaluru
        </p>
      </div>
      <div className="hidden xl:block absolute right-6 top-1/2 -translate-y-1/2 z-10">
        <p className="text-cream/10 text-[10px] font-body tracking-[0.5em] uppercase"
           style={{ writingMode: "vertical-lr" }}>
          Artisan Coffee & Fine Dining
        </p>
      </div>
    </section>
  );
}

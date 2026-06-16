"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/* Same café scene on both layers: the base is desaturated + dimmed, and the
   spotlight reveals the full warm colour underneath. The mask is a pure CSS
   radial-gradient positioned from --mx/--my (set via a throttled rAF) — no
   canvas, no per-frame image encoding, so it stays buttery on scroll. */
const SCENE =
  "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1920&q=85";

export default function RevealSpotlight() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const raf = useRef(0);
  const target = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const el = sectionRef.current;
    const reveal = revealRef.current;
    if (!el || !reveal) return;

    const apply = () => {
      reveal.style.setProperty("--mx", `${target.current.x * 100}%`);
      reveal.style.setProperty("--my", `${target.current.y * 100}%`);
      raf.current = 0;
    };
    const schedule = () => {
      if (!raf.current) raf.current = requestAnimationFrame(apply);
    };
    const onMove = (cx: number, cy: number) => {
      const rect = el.getBoundingClientRect();
      target.current = {
        x: (cx - rect.left) / rect.width,
        y: (cy - rect.top) / rect.height,
      };
      schedule();
    };

    const mouse = (e: MouseEvent) => onMove(e.clientX, e.clientY);
    const touch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) onMove(t.clientX, t.clientY);
    };
    el.addEventListener("mousemove", mouse, { passive: true });
    el.addEventListener("touchmove", touch, { passive: true });
    return () => {
      el.removeEventListener("mousemove", mouse);
      el.removeEventListener("touchmove", touch);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[78vh] min-h-[520px] w-full overflow-hidden bg-espresso"
      aria-label="Step inside Lumière"
    >
      {/* Base: desaturated, dimmed */}
      <div
        className="absolute inset-0 bg-cover bg-center grayscale brightness-[0.4]"
        style={{ backgroundImage: `url(${SCENE})` }}
      />
      {/* Reveal: full warm colour, masked to a soft spotlight */}
      <div
        ref={revealRef}
        className="spotlight-mask absolute inset-0 bg-cover bg-center [--spot:200px] sm:[--spot:300px]"
        style={{ backgroundImage: `url(${SCENE})` }}
      />
      {/* Warm grade + scrim for legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-espresso/50 via-transparent to-espresso/80" />
      <div className="grain-overlay" />

      {/* Copy */}
      <div className="pointer-events-none relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <span className="font-body text-[11px] sm:text-xs uppercase tracking-[0.4em] text-caramel">
          Move your cursor — peek inside
        </span>
        <h2 className="mt-4 font-display text-5xl leading-[0.95] text-cream sm:text-7xl md:text-8xl">
          <span className="block font-heading italic font-light">Step inside</span>
          <span className="-mt-1 block text-gradient-gold-anim">Lumière</span>
        </h2>
        <p className="mt-5 max-w-md font-body text-sm text-cream/80 sm:text-base">
          Warm light, low music, the hush of steam. A little world that glows
          brighter the closer you look.
        </p>
        <Link
          href="/about"
          className="pointer-events-auto mt-8 inline-flex items-center gap-2 rounded-full liquid-glass px-7 py-3 font-body text-sm text-cream transition-transform duration-300 hover:scale-[1.04]"
        >
          Our Story <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}

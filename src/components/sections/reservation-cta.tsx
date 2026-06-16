"use client";

import Link from "next/link";
import { AnimateOnScroll } from "@/components/shared/motion-wrapper";
import VideoBackground from "@/components/shared/video-background";

export default function ReservationCTA() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <VideoBackground
        imageOnly
        posterSrc="https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1920&q=80"
        overlayOpacity={0.6}
      />

      {/* Top and bottom gold lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-caramel/30 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-caramel/30 to-transparent z-10" />

      <div className="relative z-10 max-w-3xl mx-auto text-center section-padding">
        <AnimateOnScroll>
          <p className="font-script text-caramel text-2xl mb-4">
            An Unforgettable Evening
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.1}>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-cream tracking-wide leading-tight">
            Reserve Your Table
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.15}>
          <div className="mx-auto mt-5 mb-5 w-20 h-[1px] bg-gradient-to-r from-transparent via-caramel to-transparent" />
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.2}>
          <p className="text-cream/50 text-lg md:text-xl font-body max-w-xl mx-auto leading-relaxed">
            Whether it&apos;s a candlelit dinner, a birthday celebration, or
            a quiet coffee date — we&apos;ll make it special.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.3}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/reservations"
              className="px-10 py-4 bg-caramel text-espresso font-body font-semibold
                         rounded-pill hover:bg-gold-bright transition-all duration-300
                         hover:shadow-glow-lg tracking-wide text-base"
            >
              Book a Table
            </Link>
            <Link
              href="/menu"
              className="px-10 py-4 border border-cream/20 text-cream font-body
                         rounded-pill hover:border-caramel hover:text-caramel
                         transition-all duration-300 tracking-wide text-base"
            >
              View Menu
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

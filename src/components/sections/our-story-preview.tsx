"use client";

import Link from "next/link";
import { AnimateOnScroll } from "@/components/shared/motion-wrapper";
import VideoBackground from "@/components/shared/video-background";

export default function OurStoryPreview() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Video / Image background */}
      <VideoBackground
        videoSrc="https://cdn.pixabay.com/video/2020/07/30/45349-445192836_large.mp4"
        posterSrc="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1920&q=80"
        overlayOpacity={0.7}
      />

      <div className="relative z-10 max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Stack */}
          <AnimateOnScroll variant="fade-up">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80"
                alt="Coffee beans being roasted"
                className="rounded-xl shadow-card w-full aspect-[4/5] object-cover border border-caramel/10"
              />
              {/* Floating accent card */}
              <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-gradient-to-br from-caramel to-gold-bright
                              rounded-xl p-5 md:p-7 shadow-glow">
                <p className="font-display text-4xl md:text-5xl font-light text-espresso leading-none">12+</p>
                <p className="text-espresso/60 text-xs font-body mt-1.5 tracking-wide uppercase">Years of Craft</p>
              </div>
              {/* Second floating element */}
              <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 glass-dark rounded-xl px-4 py-3">
                <p className="font-script text-caramel text-sm">Since 2014</p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Text */}
          <div>
            <AnimateOnScroll>
              <p className="font-script text-caramel text-2xl mb-3">Our Story</p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-cream tracking-wide leading-tight">
                Born from a Love of
                <br />
                <span className="text-gradient-gold">Exceptional Coffee</span>
              </h2>
            </AnimateOnScroll>

            {/* Decorative line */}
            <AnimateOnScroll delay={0.15}>
              <div className="my-6 w-16 h-[1px] bg-gradient-to-r from-caramel to-transparent" />
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
              <p className="text-cream/60 text-base md:text-lg font-body leading-[1.8]">
                Lumiere began in a small roastery with a simple belief: that
                great coffee deserves an extraordinary setting. We source our
                beans directly from family farms across Ethiopia, Colombia, and
                Guatemala — roasting them in small batches to unlock flavors
                that mass production simply cannot achieve.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.3}>
              <p className="mt-4 text-cream/50 text-base md:text-lg font-body leading-[1.8]">
                Every cup at Lumiere tells a story — from the volcanic soil
                where the cherries grew, to the hands that picked them, to our
                baristas who pour them with care.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.4}>
              <div className="mt-8 flex items-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex px-8 py-3.5 border border-caramel/40 text-caramel
                             font-body text-sm rounded-pill hover:bg-caramel hover:text-espresso
                             transition-all duration-300 tracking-wide hover:shadow-glow"
                >
                  Read Our Full Story
                </Link>
                <Link
                  href="/gallery"
                  className="text-cream/40 text-sm font-body hover:text-caramel transition-colors gold-underline pb-0.5"
                >
                  View Gallery
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}

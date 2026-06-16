"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

/* Coffee-craft footage that scrubs well (clear continuous motion).
   Local file first for instant frame-seeking; Pexels CDN as fallback. */
const VIDEO_SOURCES = [
  "/videos/craft.mp4",
  "https://videos.pexels.com/video-files/7594672/7594672-hd_1920_1080_25fps.mp4",
  "https://videos.pexels.com/video-files/1793151/1793151-hd_1920_1080_30fps.mp4",
];

const POSTER =
  "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1920&q=80";

type Beat = {
  start: number;
  end: number;
  eyebrow: string;
  title: string;
  text: string;
};

/* Story beats keyed to scroll progress [0..1] through the section. */
const BEATS: Beat[] = [
  {
    start: 0.04,
    end: 0.3,
    eyebrow: "01 — Origin",
    title: "Sourced at the source",
    text: "Single-origin beans, hand-picked from highland estates and traced to the farm.",
  },
  {
    start: 0.33,
    end: 0.6,
    eyebrow: "02 — Craft",
    title: "Roasted in small batches",
    text: "Slow-roasted in-house each morning to coax out caramel, cocoa and citrus.",
  },
  {
    start: 0.64,
    end: 0.96,
    eyebrow: "03 — Ritual",
    title: "Poured to perfection",
    text: "Every cup is pulled by hand and finished with latte art worth pausing for.",
  },
];

function Caption({
  beat,
  progress,
}: {
  beat: Beat;
  progress: MotionValue<number>;
}) {
  const mid = (beat.start + beat.end) / 2;
  const opacity = useTransform(
    progress,
    [beat.start, mid - 0.02, mid + 0.02, beat.end],
    [0, 1, 1, 0]
  );
  const y = useTransform(progress, [beat.start, beat.end], [60, -60]);
  const blur = useTransform(
    progress,
    [beat.start, mid - 0.05, mid + 0.05, beat.end],
    [12, 0, 0, 12]
  );
  const filter = useTransform(blur, (b) => `blur(${b}px)`);

  return (
    <motion.div
      style={{ opacity, y, filter }}
      className="absolute inset-0 flex items-center justify-center px-6"
    >
      <div className="glass-gold glass-sheen w-full max-w-xl rounded-2xl p-8 md:p-10 text-center">
        <span className="font-body text-xs tracking-[0.35em] uppercase text-gold-bright/90">
          {beat.eyebrow}
        </span>
        <h3 className="mt-4 font-display text-3xl md:text-5xl font-light text-cream">
          {beat.title}
        </h3>
        <p className="mt-4 font-body text-cream/70 leading-relaxed">
          {beat.text}
        </p>
      </div>
    </motion.div>
  );
}

export default function ScrollVideo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [srcIndex, setSrcIndex] = useState(0);
  const [reduced, setReduced] = useState(false);
  const [ready, setReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Heading + frame transforms
  const headingOpacity = useTransform(scrollYProgress, [0, 0.06], [1, 0]);
  const frameInset = useTransform(scrollYProgress, [0, 0.12], ["3.5rem", "0rem"]);
  const frameRadius = useTransform(scrollYProgress, [0, 0.12], ["1.5rem", "0rem"]);
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.9, 1],
    [0.5, 0.4, 0.5, 0.65]
  );

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  // Drive video.currentTime from scroll with a smoothing lerp.
  // The rAF loop only runs while the section is on-screen (perf + lets the
  // page reach idle when scrolled away).
  useEffect(() => {
    if (reduced) return;
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    let raf = 0;
    let current = 0;
    let running = false;

    const loop = () => {
      const duration = video.duration || 0;
      if (duration && ready) {
        const target = scrollYProgress.get() * duration;
        current += (target - current) * 0.12; // ease toward scroll target
        if (Math.abs(target - current) < 0.001) current = target;
        // Only seek when the delta is meaningful and we're not mid-seek.
        if (!video.seeking && Math.abs(video.currentTime - current) > 0.03) {
          try {
            video.currentTime = current;
          } catch {
            /* ignore transient seek errors */
          }
        }
      }
      raf = requestAnimationFrame(loop);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !running) {
          running = true;
          raf = requestAnimationFrame(loop);
        } else if (!entry.isIntersecting && running) {
          running = false;
          cancelAnimationFrame(raf);
        }
      },
      { threshold: 0 }
    );
    io.observe(section);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [reduced, ready, scrollYProgress]);

  const handleError = () => {
    setSrcIndex((i) => (i < VIDEO_SOURCES.length - 1 ? i + 1 : i));
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-[320vh] bg-espresso"
      aria-label="The Lumière craft, told through film"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Cinematic video frame that expands edge-to-edge as you enter */}
        <motion.div
          style={{ top: frameInset, left: frameInset, right: frameInset, bottom: frameInset, borderRadius: frameRadius }}
          className="absolute overflow-hidden"
        >
          {reduced ? (
            <img src={POSTER} alt="" className="h-full w-full object-cover" />
          ) : (
            <video
              ref={videoRef}
              key={VIDEO_SOURCES[srcIndex]}
              muted
              playsInline
              preload="auto"
              poster={POSTER}
              onLoadedData={() => setReady(true)}
              onCanPlay={() => setReady(true)}
              onError={handleError}
              className="h-full w-full object-cover"
            >
              <source src={VIDEO_SOURCES[srcIndex]} type="video/mp4" />
            </video>
          )}

          {/* Darkening + warm grade for text legibility */}
          <motion.div
            style={{ opacity: overlayOpacity }}
            className="absolute inset-0 bg-gradient-to-b from-espresso/60 via-espresso/30 to-espresso/70"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-mocha/20 via-transparent to-espresso/40" />
          <div className="grain-overlay" />
        </motion.div>

        {/* Intro heading that fades as scrubbing begins */}
        <motion.div
          style={{ opacity: headingOpacity }}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6"
        >
          <span className="font-body text-xs tracking-[0.4em] uppercase text-caramel/80">
            The Lumière Ritual
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl lg:text-7xl font-light text-cream">
            From bean to <span className="text-gradient-gold-anim">cup</span>
          </h2>
          <p className="mt-4 max-w-md font-body text-cream/60">
            Keep scrolling — the film moves with you.
          </p>
        </motion.div>

        {/* Scroll-synced glass captions */}
        {!reduced &&
          BEATS.map((beat) => (
            <Caption key={beat.title} beat={beat} progress={scrollYProgress} />
          ))}

        {/* Reduced-motion: show all beats stacked, no scrubbing */}
        {reduced && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 px-6">
            {BEATS.map((b) => (
              <div key={b.title} className="glass-gold max-w-md rounded-2xl p-6 text-center">
                <span className="text-xs uppercase tracking-[0.3em] text-gold-bright/90">
                  {b.eyebrow}
                </span>
                <h3 className="mt-2 font-display text-2xl text-cream">{b.title}</h3>
                <p className="mt-2 text-sm text-cream/70">{b.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

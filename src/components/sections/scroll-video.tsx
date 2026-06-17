"use client";

import { useEffect, useRef, useState } from "react";

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
  intro?: boolean;
};

/* Story beats keyed to scroll progress [0..1]. Ranges are deliberately
   GAPPED so each message fully fades before the next appears. */
const BEATS: Beat[] = [
  { start: 0.0, end: 0.16, eyebrow: "The Lumière Ritual", title: "From bean to cup", text: "Keep scrolling — the film moves with you.", intro: true },
  { start: 0.22, end: 0.4, eyebrow: "01 — Origin", title: "Sourced at the source", text: "Single-origin beans, hand-picked from highland estates and traced to the farm." },
  { start: 0.46, end: 0.64, eyebrow: "02 — Craft", title: "Roasted in small batches", text: "Slow-roasted in-house each morning to coax out caramel, cocoa and citrus." },
  { start: 0.7, end: 0.96, eyebrow: "03 — Ritual", title: "Poured to perfection", text: "Every cup is pulled by hand and finished with latte art worth pausing for." },
];

/* Linear interpolation across stops with clamping (our own useTransform). */
function ramp(p: number, stops: number[], vals: number[]): number {
  if (p <= stops[0]) return vals[0];
  if (p >= stops[stops.length - 1]) return vals[vals.length - 1];
  for (let i = 0; i < stops.length - 1; i++) {
    if (p >= stops[i] && p <= stops[i + 1]) {
      const t = (p - stops[i]) / (stops[i + 1] - stops[i]);
      return vals[i] + t * (vals[i + 1] - vals[i]);
    }
  }
  return vals[vals.length - 1];
}

const opacityStops = (b: Beat) =>
  b.intro
    ? { stops: [b.start, b.start + 0.001, b.end - 0.05, b.end], vals: [1, 1, 1, 0] }
    : { stops: [b.start, b.start + 0.06, b.end - 0.06, b.end], vals: [0, 1, 1, 0] };

export default function ScrollVideo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const capRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const readyRef = useRef(false);
  const [srcIndex, setSrcIndex] = useState(0);
  const [reduced, setReduced] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    // On touch / small screens, scrubbing a video per-frame is janky — let it
    // simply autoplay-loop instead, while captions still reveal on scroll.
    setIsMobile(window.matchMedia("(max-width: 768px), (pointer: coarse)").matches);
  }, []);

  // One rAF loop (active only while on-screen) drives EVERYTHING from a
  // self-computed scroll progress: video scrubbing, frame expand, caption
  // opacity/translate, and the step dots. No framer scroll transforms.
  useEffect(() => {
    if (reduced) return;
    const section = sectionRef.current;
    if (!section) return;

    let raf = 0;
    let current = 0;
    let running = false;

    const loop = () => {
      const rect = section.getBoundingClientRect();
      const denom = rect.height - window.innerHeight;
      const progress = denom > 0 ? Math.max(0, Math.min(1, -rect.top / denom)) : 0;

      // Video scrub (smoothed) — desktop only; mobile autoplay-loops instead.
      const video = videoRef.current;
      if (video && !isMobile) {
        const dur = video.duration || 0;
        if (dur && readyRef.current) {
          const tgt = progress * dur;
          current += (tgt - current) * 0.12;
          if (Math.abs(tgt - current) < 0.001) current = tgt;
          if (!video.seeking && Math.abs(video.currentTime - current) > 0.03) {
            try {
              video.currentTime = current;
            } catch {
              /* ignore transient seek errors */
            }
          }
        }
      }

      // Frame expands edge-to-edge as you enter
      if (frameRef.current) {
        frameRef.current.style.inset = `${ramp(progress, [0, 0.12], [3.5, 0])}rem`;
        frameRef.current.style.borderRadius = `${ramp(progress, [0, 0.12], [1.5, 0])}rem`;
      }

      // Captions
      BEATS.forEach((b, i) => {
        const el = capRefs.current[i];
        if (!el) return;
        const { stops, vals } = opacityStops(b);
        const op = ramp(progress, stops, vals);
        const y = ramp(progress, [b.start, b.end], [50, -50]);
        el.style.opacity = String(op);
        el.style.transform = `translateY(${y.toFixed(1)}px)`;
      });

      // Step dots
      BEATS.forEach((b, i) => {
        const el = dotRefs.current[i];
        if (!el) return;
        const mid = (b.start + b.end) / 2;
        el.style.width = `${ramp(progress, [b.start, mid, b.end], [8, 30, 8]).toFixed(1)}px`;
        el.style.opacity = String(ramp(progress, [b.start, mid, b.end], [0.3, 1, 0.3]));
      });

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
  }, [reduced, isMobile]);

  const handleError = () =>
    setSrcIndex((i) => (i < VIDEO_SOURCES.length - 1 ? i + 1 : i));

  return (
    <section
      ref={sectionRef}
      className="relative h-[200vh] md:h-[340vh] bg-espresso"
      aria-label="The Lumière craft, told through film"
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {/* Cinematic video frame */}
        <div
          ref={frameRef}
          className="absolute overflow-hidden"
          style={{ inset: "3.5rem", borderRadius: "1.5rem" }}
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
              autoPlay={isMobile}
              loop={isMobile}
              onLoadedData={() => (readyRef.current = true)}
              onCanPlay={() => (readyRef.current = true)}
              onError={handleError}
              className="h-full w-full object-cover"
            >
              <source src={VIDEO_SOURCES[srcIndex]} type="video/mp4" />
            </video>
          )}

          {/* Cinematic grade + scrims for legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-espresso/70 via-espresso/25 to-espresso/85" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(28,18,10,0.55)_100%)]" />
          <div className="grain-overlay" />
        </div>

        {!reduced && (
          <>
            {/* Step dots */}
            <div className="pointer-events-none absolute left-1/2 top-[12vh] z-20 flex -translate-x-1/2 gap-2.5">
              {BEATS.map((b, i) => (
                <span
                  key={b.title}
                  ref={(el) => { dotRefs.current[i] = el; }}
                  className="h-[3px] rounded-full bg-gold-bright"
                  style={{ width: 8, opacity: 0.3 }}
                />
              ))}
            </div>

            {/* Captions — intro starts visible, beats start hidden (no flash) */}
            {BEATS.map((b, i) =>
              b.intro ? (
                <div
                  key={b.title}
                  ref={(el) => { capRefs.current[i] = el; }}
                  className="pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center"
                  style={{ opacity: 1 }}
                >
                  <span className="font-body text-[11px] md:text-xs uppercase tracking-[0.4em] text-caramel">
                    {b.eyebrow}
                  </span>
                  <h2 className="mt-4 font-display text-5xl md:text-7xl lg:text-8xl font-light text-cream drop-shadow-[0_4px_30px_rgba(0,0,0,0.75)]">
                    From bean to <span className="text-gradient-gold-anim">cup</span>
                  </h2>
                  <p className="mt-4 max-w-md font-body text-cream/80 drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
                    {b.text}
                  </p>
                </div>
              ) : (
                <div
                  key={b.title}
                  ref={(el) => { capRefs.current[i] = el; }}
                  className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex justify-center px-5 pb-[14vh] md:pb-[12vh]"
                  style={{ opacity: 0 }}
                >
                  <div className="glass-dark glass-sheen w-full max-w-lg rounded-2xl p-6 md:p-8 text-center">
                    <span className="font-body text-[11px] md:text-xs uppercase tracking-[0.35em] text-gold-bright">
                      {b.eyebrow}
                    </span>
                    <h3 className="mt-3 font-display text-3xl md:text-5xl font-light text-cream">
                      {b.title}
                    </h3>
                    <p className="mt-3 font-body text-sm md:text-base text-cream/85 leading-relaxed">
                      {b.text}
                    </p>
                  </div>
                </div>
              )
            )}
          </>
        )}

        {/* Reduced-motion: show beats stacked, no scrubbing */}
        {reduced && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 px-6">
            {BEATS.filter((b) => !b.intro).map((b) => (
              <div key={b.title} className="glass-dark max-w-md rounded-2xl p-6 text-center">
                <span className="text-xs uppercase tracking-[0.3em] text-gold-bright">{b.eyebrow}</span>
                <h3 className="mt-2 font-display text-2xl text-cream">{b.title}</h3>
                <p className="mt-2 text-sm text-cream/80">{b.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

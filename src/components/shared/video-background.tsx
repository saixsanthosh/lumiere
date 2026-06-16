"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  /**
   * CAFÉ OWNER: Replace these video URLs with your own café footage.
   * Use MP4 format, ideally 1080p or higher. Multiple sources for fallback.
   */
  videoSrc?: string;
  posterSrc?: string;
  overlay?: boolean;
  overlayOpacity?: number;
  className?: string;
  showMuteToggle?: boolean;
}

/* Café/coffee footage — bundled local file first, Pexels CDN as fallbacks.
   CAFÉ OWNER: drop your own clip at /public/videos/hero.mp4 to replace this. */
const VIDEO_SOURCES = [
  "/videos/hero.mp4",
  "https://videos.pexels.com/video-files/1793151/1793151-hd_1920_1080_30fps.mp4",
  "https://videos.pexels.com/video-files/6166867/6166867-hd_1920_1080_25fps.mp4",
  "https://videos.pexels.com/video-files/855391/855391-hd_1920_1080_25fps.mp4",
];

export default function VideoBackground({
  videoSrc,
  posterSrc = "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&q=80",
  overlay = true,
  overlayOpacity = 0.55,
  className,
  showMuteToggle = false,
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (videoRef.current && !prefersReducedMotion) {
      videoRef.current.play().catch(() => {});
    }
  }, [prefersReducedMotion, videoLoaded]);

  const handleVideoError = () => {
    if (currentSrc < VIDEO_SOURCES.length - 1) {
      setCurrentSrc((s) => s + 1);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const src = videoSrc || VIDEO_SOURCES[currentSrc];

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {/* Poster image always present as base layer */}
      <img
        src={posterSrc}
        alt=""
        className={cn(
          "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000",
          videoLoaded && !prefersReducedMotion ? "opacity-0" : "opacity-100"
        )}
      />

      {/* Video layer */}
      {!prefersReducedMotion && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlayThrough={() => setVideoLoaded(true)}
          onError={handleVideoError}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000",
            videoLoaded ? "opacity-100" : "opacity-0"
          )}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}

      {/* Multi-layer warm overlay for cinematic depth */}
      {overlay && (
        <>
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg,
                rgba(28,18,10,${overlayOpacity + 0.15}) 0%,
                rgba(28,18,10,${overlayOpacity - 0.15}) 35%,
                rgba(28,18,10,${overlayOpacity - 0.1}) 65%,
                rgba(28,18,10,${overlayOpacity + 0.2}) 100%)`,
            }}
          />
          {/* Vignette */}
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at center, transparent 40%, rgba(28,18,10,0.4) 100%)",
            }}
          />
          {/* Warm color tint */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2E1D11]/20 via-transparent to-[#4A3120]/20" />
        </>
      )}

      {/* Mute toggle */}
      {showMuteToggle && !prefersReducedMotion && (
        <button
          onClick={toggleMute}
          className="absolute bottom-6 right-20 z-20 p-3 rounded-full glass-dark
                     text-cream/70 hover:text-caramel transition-all duration-300
                     hover:shadow-glow group"
          aria-label={isMuted ? "Unmute ambient sound" : "Mute ambient sound"}
        >
          {isMuted ? (
            <VolumeX size={18} className="group-hover:scale-110 transition-transform" />
          ) : (
            <Volume2 size={18} className="group-hover:scale-110 transition-transform" />
          )}
        </button>
      )}
    </div>
  );
}

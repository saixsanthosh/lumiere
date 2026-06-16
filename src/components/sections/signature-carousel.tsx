"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ArrowLeft, ArrowRight, ShoppingBag, Star } from "lucide-react";
import { menuItems } from "@/data/menu";
import { useCartStore } from "@/store/cart-store";
import { useToastStore } from "@/store/toast-store";
import { formatPrice } from "@/lib/utils";

/* Warm accent + backdrop tint per slide (TOONHUB's colour-shift, re-skinned
   to the Lumière palette). */
const ACCENTS = ["#C9A24B", "#B5562E", "#7C8A6A", "#E8C97A", "#A9743F", "#9C6B8E"];

const ITEMS = menuItems.filter((i) => i.bestseller).slice(0, 6);

type Role = "center" | "left" | "right" | "back" | "hidden";

function roleStyle(role: Role, isMobile: boolean): CSSProperties {
  const base: CSSProperties = {
    transition:
      "transform 650ms cubic-bezier(0.4,0,0.2,1), filter 650ms cubic-bezier(0.4,0,0.2,1), opacity 650ms cubic-bezier(0.4,0,0.2,1), left 650ms cubic-bezier(0.4,0,0.2,1)",
    willChange: "transform, filter, opacity, left",
    left: "50%",
  };
  switch (role) {
    case "center":
      return { ...base, transform: `translateX(-50%) scale(${isMobile ? 1 : 1.12})`, filter: "blur(0)", opacity: 1, zIndex: 30 };
    case "left":
      return { ...base, left: isMobile ? "16%" : "26%", transform: "translateX(-50%) scale(0.74)", filter: "blur(1.5px)", opacity: isMobile ? 0.35 : 0.6, zIndex: 20 };
    case "right":
      return { ...base, left: isMobile ? "84%" : "74%", transform: "translateX(-50%) scale(0.74)", filter: "blur(1.5px)", opacity: isMobile ? 0.35 : 0.6, zIndex: 20 };
    case "back":
      return { ...base, transform: "translateX(-50%) translateY(-6%) scale(0.58)", filter: "blur(3px)", opacity: 0.3, zIndex: 10 };
    default:
      return { ...base, transform: "translateX(-50%) scale(0.5)", opacity: 0, zIndex: 0, pointerEvents: "none" };
  }
}

export default function SignatureCarousel() {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const lock = useRef(false);
  const addItem = useCartStore((s) => s.addItem);
  const addToast = useToastStore((s) => s.addToast);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 640);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const n = ITEMS.length;
  const go = (dir: 1 | -1) => {
    if (lock.current) return;
    lock.current = true;
    setActive((p) => (p + dir + n) % n);
    setTimeout(() => (lock.current = false), 660);
  };

  // Gentle autoplay; pauses on hover/touch via the lock + pointer handlers.
  const paused = useRef(false);
  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current && !lock.current) go(1);
    }, 5000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [n]);

  const roleFor = (i: number): Role => {
    if (i === active) return "center";
    if (i === (active - 1 + n) % n) return "left";
    if (i === (active + 1) % n) return "right";
    if (i === (active + 2) % n) return "back";
    return "hidden";
  };

  const accent = ACCENTS[active % ACCENTS.length];
  const activeItem = ITEMS[active];

  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
      style={{
        background: `radial-gradient(120% 90% at 50% 0%, ${accent}22 0%, #1C120A 55%)`,
        transition: "background 650ms cubic-bezier(0.4,0,0.2,1)",
      }}
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      onTouchStart={() => (paused.current = true)}
      aria-label="Signature drink series"
    >
      <div className="grain-overlay" />

      {/* Section heading */}
      <div className="relative z-10 mb-2 text-center">
        <span className="font-body text-xs uppercase tracking-[0.35em] text-caramel">
          Crowd Favourites
        </span>
        <h2 className="mt-3 font-display text-4xl font-light text-cream md:text-6xl">
          Signature Series
        </h2>
      </div>

      {/* Giant ghost name behind the stage */}
      <div className="pointer-events-none absolute inset-x-0 top-[34%] z-0 flex select-none items-center justify-center">
        <span
          key={activeItem.id}
          className="whitespace-nowrap font-display font-semibold uppercase leading-none text-cream/[0.06]"
          style={{ fontSize: "clamp(64px, 18vw, 240px)", letterSpacing: "-0.02em" }}
        >
          {activeItem.name.split(" ")[0]}
        </span>
      </div>

      {/* Stage */}
      <div className="relative z-10 mx-auto mt-6 h-[440px] max-w-6xl md:h-[500px]">
        {ITEMS.map((item, i) => {
          const role = roleFor(i);
          const isCenter = role === "center";
          return (
            <div
              key={item.id}
              className="absolute bottom-0 w-[230px] sm:w-[270px] md:w-[300px]"
              style={roleStyle(role, isMobile)}
            >
              <div className="glass-card glass-sheen overflow-hidden rounded-3xl">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    draggable={false}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/20 to-transparent" />
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full glass-gold px-2.5 py-1 text-[11px] font-semibold text-cream">
                    <Star size={10} className="fill-caramel text-caramel" /> Bestseller
                  </span>
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-heading text-xl text-cream">{item.name}</h3>
                  <p className="mt-1 font-heading text-lg" style={{ color: accent }}>
                    {formatPrice(item.price)}
                  </p>
                  {isCenter && (
                    <>
                      <p className="mt-2 line-clamp-2 font-body text-sm text-cream/70">
                        {item.description}
                      </p>
                      <button
                        onClick={() => {
                          addItem(item);
                          addToast(`${item.name} added to cart`);
                        }}
                        className="mt-4 inline-flex items-center gap-2 rounded-full bg-caramel px-6 py-2.5 font-body text-sm font-semibold text-espresso transition-colors hover:bg-gold-bright"
                      >
                        <ShoppingBag size={15} /> Add to Cart
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="relative z-20 mt-8 flex items-center justify-center gap-5">
        <button
          onClick={() => go(-1)}
          aria-label="Previous drink"
          className="flex h-12 w-12 items-center justify-center rounded-full liquid-glass text-cream transition-transform hover:scale-110"
        >
          <ArrowLeft size={22} />
        </button>
        <div className="flex items-center gap-2">
          {ITEMS.map((it, i) => (
            <button
              key={it.id}
              onClick={() => !lock.current && setActive(i)}
              aria-label={`Show ${it.name}`}
              className="h-2 rounded-full transition-all duration-500"
              style={{
                width: i === active ? 26 : 8,
                background: i === active ? accent : "rgba(245,239,227,0.3)",
              }}
            />
          ))}
        </div>
        <button
          onClick={() => go(1)}
          aria-label="Next drink"
          className="flex h-12 w-12 items-center justify-center rounded-full liquid-glass text-cream transition-transform hover:scale-110"
        >
          <ArrowRight size={22} />
        </button>
      </div>
    </section>
  );
}

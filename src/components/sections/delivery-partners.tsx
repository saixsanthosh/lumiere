"use client";

import Link from "next/link";
import { AnimateOnScroll } from "@/components/shared/motion-wrapper";

/* Swiggy & Zomato go live after launch — shown as "coming soon" for now.
   CAFÉ OWNER: once your listings are live, swap `href: null` for the real URL
   and the card becomes a clickable link automatically. */
const partners: { name: string; href: string | null; color: string; tagline: string }[] = [
  { name: "Swiggy", href: null, color: "#FC8019", tagline: "Launching soon" },
  { name: "Zomato", href: null, color: "#E23744", tagline: "Launching soon" },
];

function PartnerCard({ p }: { p: (typeof partners)[number] }) {
  const inner = (
    <>
      <span
        className="flex h-10 w-10 items-center justify-center rounded-full font-display text-xl text-white"
        style={{ background: p.color }}
      >
        {p.name[0]}
      </span>
      <span className="text-left">
        <span className="block font-heading text-lg text-cream">{p.name}</span>
        <span className="block text-[11px] text-text-muted-dark">{p.tagline}</span>
      </span>
      {!p.href && (
        <span className="ml-1 rounded-full border border-caramel/30 bg-caramel/10 px-2 py-0.5 text-[10px] font-body uppercase tracking-wider text-caramel">
          Soon
        </span>
      )}
    </>
  );

  const cls =
    "inline-flex items-center gap-3 rounded-2xl liquid-glass px-6 py-4 transition-transform duration-300";

  return p.href ? (
    <a href={p.href} target="_blank" rel="noopener noreferrer" className={`${cls} hover:scale-[1.04]`}>
      {inner}
    </a>
  ) : (
    <div className={`${cls} opacity-80`} aria-disabled>
      {inner}
    </div>
  );
}

export default function DeliveryPartners() {
  return (
    <section className="relative overflow-hidden border-y border-caramel/10 bg-roasted py-16 md:py-20">
      <div className="aurora-bg pointer-events-none absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-5xl section-padding text-center">
        <AnimateOnScroll>
          <span className="font-body text-xs uppercase tracking-[0.35em] text-caramel">Order &amp; delivery</span>
          <h2 className="mt-3 font-display text-3xl text-cream md:text-5xl">Order your way</h2>
          <p className="mx-auto mt-3 max-w-xl font-body text-sm text-text-muted-dark">
            Skip the queue and order directly with us for dine-in or takeaway today.
            Delivery on Swiggy &amp; Zomato is launching soon.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 rounded-2xl bg-caramel px-7 py-4 font-heading text-lg text-espresso transition-colors hover:bg-gold-bright"
            >
              Order Direct
            </Link>
            {partners.map((p) => (
              <PartnerCard key={p.name} p={p} />
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

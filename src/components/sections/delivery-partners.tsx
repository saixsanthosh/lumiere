"use client";

import Link from "next/link";
import { AnimateOnScroll } from "@/components/shared/motion-wrapper";

/* CAFÉ OWNER: replace href values with your live Swiggy / Zomato listing URLs. */
const partners = [
  { name: "Swiggy", href: "https://www.swiggy.com/", color: "#FC8019", tagline: "Delivered hot & fast" },
  { name: "Zomato", href: "https://www.zomato.com/", color: "#E23744", tagline: "Order in, dig in" },
];

export default function DeliveryPartners() {
  return (
    <section className="relative overflow-hidden border-y border-caramel/10 bg-roasted py-16 md:py-20">
      <div className="aurora-bg pointer-events-none absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-5xl section-padding text-center">
        <AnimateOnScroll>
          <span className="font-body text-xs uppercase tracking-[0.35em] text-caramel">Also available on</span>
          <h2 className="mt-3 font-display text-3xl text-cream md:text-5xl">Order your way</h2>
          <p className="mx-auto mt-3 max-w-xl font-body text-sm text-text-muted-dark">
            Craving Lumière at home? Order through your favourite delivery app — or skip the
            queue and order directly with us for pickup or dine-in.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {partners.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-2xl liquid-glass px-6 py-4 transition-transform duration-300 hover:scale-[1.04]"
              >
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
              </a>
            ))}
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 rounded-2xl bg-caramel px-7 py-4 font-heading text-lg text-espresso transition-colors hover:bg-gold-bright"
            >
              Order Direct
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

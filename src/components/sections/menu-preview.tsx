"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/section-heading";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/shared/motion-wrapper";

const categories = [
  {
    title: "Espresso & Coffee",
    description: "From classic cappuccinos to our signature house blend",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80",
    items: 11,
    href: "/menu",
  },
  {
    title: "Pastries & Breakfast",
    description: "Freshly baked croissants, avocado toast, and more",
    image: "https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?auto=format&fit=crop&w=600&q=80",
    items: 9,
    href: "/menu",
  },
  {
    title: "Cold Brew & Smoothies",
    description: "18-hour steeped cold brew and fresh fruit blends",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80",
    items: 9,
    href: "/menu",
  },
  {
    title: "Desserts & Specials",
    description: "Tiramisu, seasonal lattes, and chef specials",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80",
    items: 9,
    href: "/menu",
  },
];

export default function MenuPreview() {
  return (
    <section className="py-20 md:py-28 bg-roasted">
      <div className="max-w-7xl mx-auto section-padding">
        <SectionHeading
          subtitle="Explore Our Menu"
          title="Curated Categories"
          description="From hand-pulled espresso to artisan desserts — 45+ items crafted with passion."
        />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat) => (
            <StaggerItem key={cat.title}>
              <Link href={cat.href} className="group block">
                <div className="relative overflow-hidden rounded-xl aspect-[3/4] border border-[rgba(201,162,75,0.08)]
                                hover:border-caramel/20 transition-all duration-700">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700
                               group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-caramel text-xs font-body tracking-wider uppercase mb-1">
                      {cat.items} items
                    </p>
                    <h3 className="font-heading text-xl text-cream group-hover:text-caramel transition-colors leading-tight">
                      {cat.title}
                    </h3>
                    <p className="text-cream/50 text-xs font-body mt-1.5 leading-relaxed">
                      {cat.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 mt-3 text-caramel/70 text-xs font-body
                                     group-hover:text-caramel group-hover:gap-3 transition-all duration-300">
                      Browse <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimateOnScroll delay={0.2}>
          <div className="text-center mt-10">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-caramel text-espresso font-body
                         font-semibold rounded-pill hover:bg-gold-bright transition-all duration-300
                         hover:shadow-glow tracking-wide"
            >
              View Full Menu <ArrowRight size={16} />
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

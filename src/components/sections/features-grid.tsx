"use client";

import { Coffee, Leaf, Sofa, Wifi, Salad, Music } from "lucide-react";
import SectionHeading from "@/components/shared/section-heading";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/motion-wrapper";

const features = [
  {
    icon: Coffee,
    title: "Artisan Roasted",
    description: "Small-batch roasting for peak flavor, every single day.",
  },
  {
    icon: Leaf,
    title: "Locally Sourced",
    description: "Direct trade with family farms across three continents.",
  },
  {
    icon: Sofa,
    title: "Cozy Ambiance",
    description: "Warm lighting, plush seating, and the perfect playlist.",
  },
  {
    icon: Wifi,
    title: "Free High-Speed WiFi",
    description: "Work, create, or browse — we've got you connected.",
  },
  {
    icon: Salad,
    title: "Vegan & Organic Options",
    description: "Plant-based choices crafted with the same love and care.",
  },
  {
    icon: Music,
    title: "Live Music Nights",
    description: "Jazz, acoustic, and indie acts every Friday and Saturday.",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="py-20 md:py-28 bg-warm-white">
      <div className="max-w-6xl mx-auto section-padding">
        <SectionHeading
          subtitle="Why Choose Us"
          title="The Lumière Experience"
          description="More than just coffee — it's an experience crafted for those who appreciate the finer things."
          light
        />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <div
                className="group p-6 md:p-8 rounded-lg bg-white border border-latte/30
                           hover:border-caramel/30 transition-all duration-500
                           hover:shadow-lg hover:-translate-y-1"
              >
                <div
                  className="w-12 h-12 rounded-lg bg-caramel/10 flex items-center justify-center
                             group-hover:bg-caramel/20 transition-colors duration-300"
                >
                  <feature.icon
                    size={24}
                    className="text-caramel"
                  />
                </div>
                <h3 className="mt-4 font-heading text-lg text-text-light">
                  {feature.title}
                </h3>
                <p className="mt-2 text-text-muted-light text-sm font-body leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

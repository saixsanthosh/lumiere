"use client";

import Hero from "@/components/sections/hero";
import StatsStrip from "@/components/sections/stats-strip";
import SignatureDrinks from "@/components/sections/signature-drinks";
import MenuPreview from "@/components/sections/menu-preview";
import OurStoryPreview from "@/components/sections/our-story-preview";
import FeaturesGrid from "@/components/sections/features-grid";
import Testimonials from "@/components/sections/testimonials";
import InstagramFeed from "@/components/sections/instagram-feed";
import Newsletter from "@/components/sections/newsletter";
import ReservationCTA from "@/components/sections/reservation-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <SignatureDrinks />
      <OurStoryPreview />
      <MenuPreview />
      <FeaturesGrid />
      <Testimonials />
      <ReservationCTA />
      <InstagramFeed />
      <Newsletter />
    </>
  );
}

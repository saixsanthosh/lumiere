"use client";

import Hero from "@/components/sections/hero";
import StatsStrip from "@/components/sections/stats-strip";
import MarqueeStrip from "@/components/sections/marquee-strip";
import ScrollVideo from "@/components/sections/scroll-video";
import SignatureCarousel from "@/components/sections/signature-carousel";
import RevealSpotlight from "@/components/sections/reveal-spotlight";
import MenuPreview from "@/components/sections/menu-preview";
import OurStoryPreview from "@/components/sections/our-story-preview";
import FeaturesGrid from "@/components/sections/features-grid";
import Testimonials from "@/components/sections/testimonials";
import InstagramFeed from "@/components/sections/instagram-feed";
import Newsletter from "@/components/sections/newsletter";
import ReservationCTA from "@/components/sections/reservation-cta";
import DeliveryPartners from "@/components/sections/delivery-partners";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <MarqueeStrip />
      <ScrollVideo />
      <SignatureCarousel />
      <RevealSpotlight />
      <OurStoryPreview />
      <MenuPreview />
      <FeaturesGrid />
      <Testimonials />
      <ReservationCTA />
      <DeliveryPartners />
      <InstagramFeed />
      <Newsletter />
    </>
  );
}

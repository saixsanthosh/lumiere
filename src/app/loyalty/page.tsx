"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Award, Gift, Coffee, Star, Crown, CheckCircle } from "lucide-react";
import SectionHeading from "@/components/shared/section-heading";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/shared/motion-wrapper";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Bronze Bean",
    icon: <Coffee size={28} className="text-[#CD7F32]" />,
    color: "from-[#CD7F32]/20 to-[#CD7F32]/5",
    border: "border-[#CD7F32]/30",
    minPoints: 0,
    perks: ["Earn 1 point per ₹10 spent", "Birthday surprise drink", "Early access to new menu items"],
  },
  {
    name: "Silver Bean",
    icon: <Star size={28} className="text-[#C0C0C0]" />,
    color: "from-[#C0C0C0]/20 to-[#C0C0C0]/5",
    border: "border-[#C0C0C0]/30",
    minPoints: 500,
    perks: ["1.5x points on all orders", "Free pastry every month", "Priority reservations", "Exclusive members-only blends"],
  },
  {
    name: "Gold Bean",
    icon: <Crown size={28} className="text-caramel" />,
    color: "from-caramel/20 to-caramel/5",
    border: "border-caramel/30",
    minPoints: 1500,
    perks: ["2x points on all orders", "Free drink every week", "VIP event access", "Personal barista consultations", "Free delivery always"],
  },
];

const howItWorks = [
  { step: "01", title: "Sign Up", text: "Create your free rewards account in seconds." },
  { step: "02", title: "Earn Points", text: "Get points with every purchase — dine-in or online." },
  { step: "03", title: "Unlock Perks", text: "Rise through tiers and enjoy exclusive rewards." },
  { step: "04", title: "Redeem", text: "Use your points for free drinks, pastries, and more." },
];

export default function LoyaltyPage() {
  const [joined, setJoined] = useState(false);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-espresso">
      {/* Hero */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center mb-12">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1920&q=80"
               alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-hero-overlay" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }}>
            <Award size={48} className="text-caramel mx-auto mb-4" />
          </motion.div>
          <p className="font-script text-caramel text-xl mb-2">Earn Rewards</p>
          <h1 className="font-display text-5xl md:text-6xl text-cream tracking-wide">Loyalty Program</h1>
          <p className="mt-4 text-text-muted-dark font-body text-lg max-w-xl mx-auto">
            Every sip earns you rewards. Join our loyalty program and unlock exclusive perks.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto section-padding">
        {/* How It Works */}
        <SectionHeading subtitle="Simple & Rewarding" title="How It Works" />
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {howItWorks.map((item) => (
            <StaggerItem key={item.step}>
              <div className="text-center p-5 bg-roasted rounded-lg border border-[rgba(201,162,75,0.08)]">
                <span className="font-display text-4xl text-caramel/30">{item.step}</span>
                <h3 className="font-heading text-base text-cream mt-2">{item.title}</h3>
                <p className="text-text-muted-dark text-sm font-body mt-1.5">{item.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Tiers */}
        <SectionHeading subtitle="Rise Through the Ranks" title="Membership Tiers" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {tiers.map((tier, i) => (
            <AnimateOnScroll key={tier.name} delay={i * 0.1}>
              <div className={cn(
                "relative p-6 rounded-xl border bg-gradient-to-b",
                tier.color, tier.border,
                i === 2 && "ring-1 ring-caramel/20"
              )}>
                {i === 2 && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-caramel text-espresso
                                   text-[10px] font-body font-bold rounded-pill uppercase tracking-wider">
                    Most Popular
                  </span>
                )}
                <div className="flex items-center gap-3 mb-4">
                  {tier.icon}
                  <div>
                    <h3 className="font-heading text-lg text-cream">{tier.name}</h3>
                    <p className="text-text-muted-dark text-xs font-body">{tier.minPoints}+ points</p>
                  </div>
                </div>
                <ul className="space-y-2.5">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2 text-text-muted-dark text-sm font-body">
                      <CheckCircle size={14} className="text-caramel mt-0.5 shrink-0" />
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Sign Up */}
        <AnimateOnScroll>
          <div className="bg-roasted rounded-xl p-8 border border-[rgba(201,162,75,0.1)] text-center max-w-lg mx-auto">
            {joined ? (
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                <Gift size={48} className="text-caramel mx-auto mb-4" />
                <h3 className="font-heading text-2xl text-cream mb-2">Welcome to the Club!</h3>
                <p className="text-text-muted-dark font-body text-sm">
                  You have earned 50 bonus points just for joining. Start ordering to unlock more rewards!
                </p>
              </motion.div>
            ) : (
              <>
                <Gift size={36} className="text-caramel mx-auto mb-4" />
                <h3 className="font-heading text-xl text-cream mb-2">Join Free Today</h3>
                <p className="text-text-muted-dark text-sm font-body mb-5">
                  Get 50 bonus points instantly when you sign up.
                </p>
                <form onSubmit={(e) => { e.preventDefault(); setJoined(true); }} className="space-y-3">
                  <input type="text" required placeholder="Full Name"
                         className="w-full bg-mocha/40 border border-[rgba(201,162,75,0.1)] rounded-md px-3 py-2.5
                                    text-cream text-sm font-body placeholder:text-text-muted-dark/40 focus:outline-none focus:border-caramel/40" />
                  <input type="email" required placeholder="Email"
                         className="w-full bg-mocha/40 border border-[rgba(201,162,75,0.1)] rounded-md px-3 py-2.5
                                    text-cream text-sm font-body placeholder:text-text-muted-dark/40 focus:outline-none focus:border-caramel/40" />
                  <input type="tel" required placeholder="Phone"
                         className="w-full bg-mocha/40 border border-[rgba(201,162,75,0.1)] rounded-md px-3 py-2.5
                                    text-cream text-sm font-body placeholder:text-text-muted-dark/40 focus:outline-none focus:border-caramel/40" />
                  <button type="submit"
                          className="w-full py-3 bg-caramel text-espresso font-body font-semibold rounded-lg
                                     hover:bg-gold-bright transition-all duration-300 hover:shadow-glow">
                    Join Rewards Program
                  </button>
                </form>
              </>
            )}
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
}

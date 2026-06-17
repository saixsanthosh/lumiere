"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { AnimateOnScroll } from "@/components/shared/motion-wrapper";
import SectionHeading from "@/components/shared/section-heading";

const FAQS = [
  {
    q: "Do I need a reservation, or can I walk in?",
    a: "Walk-ins are always welcome! For weekends, live-music nights, or larger groups we recommend reserving a table on our Reservations page so we can keep your favourite spot ready.",
  },
  {
    q: "How does ordering work — dine-in or takeaway?",
    a: "Order right here on the site. At checkout pick Dine-In, Takeaway, or Delivery. You'll get a token number on the confirmation screen — we'll call it out the moment your order is ready.",
  },
  {
    q: "Are you on Swiggy and Zomato?",
    a: "Delivery on Swiggy & Zomato is launching soon. Until then, order directly with us for pickup or dine-in — it's the fastest way to get your Lumière fix.",
  },
  {
    q: "Do you have vegan and gluten-free options?",
    a: "Plenty. Look for the Vegan, Gluten-Free, and Organic tags on the Menu page — from oat-milk lattes and Buddha bowls to chia puddings and fresh smoothies.",
  },
  {
    q: "Where are you located and what are your hours?",
    a: "We're in Anna Nagar, Chennai. Open Mon–Sat 7 AM–11 PM and Sunday 9 AM–10 PM. Tap 'Get Directions' on the Contact page for the map.",
  },
  {
    q: "Do you cater events or private bookings?",
    a: "Yes — from intimate gatherings to corporate events. Send us a note through the contact form with 'Catering' or 'Private Events' selected and we'll craft something special.",
  },
];

function Item({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="glass-card rounded-2xl overflow-hidden">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-heading text-base md:text-lg text-cream">{q}</span>
        <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.3 }} className="shrink-0 text-caramel">
          <Plus size={20} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <p className="px-5 pb-5 font-body text-sm leading-relaxed text-text-muted-dark">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative overflow-hidden bg-espresso py-20 md:py-28">
      <div className="aurora-bg pointer-events-none absolute inset-0 opacity-15" />
      <div className="relative mx-auto max-w-3xl section-padding">
        <SectionHeading subtitle="Good to Know" title="Frequently Asked" />
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <AnimateOnScroll key={f.q} delay={i * 0.05}>
              <Item {...f} isOpen={open === i} onToggle={() => setOpen(open === i ? null : i)} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

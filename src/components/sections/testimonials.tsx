"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import SectionHeading from "@/components/shared/section-heading";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="py-20 md:py-28 bg-roasted">
      <div className="max-w-4xl mx-auto section-padding">
        <SectionHeading
          subtitle="What They Say"
          title="Guest Experiences"
        />

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="w-16 h-16 rounded-full mx-auto mb-5 border-2 border-caramel/30 object-cover"
              />
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < t.rating
                        ? "text-caramel fill-caramel"
                        : "text-text-muted-dark/30"
                    }
                  />
                ))}
              </div>
              <blockquote className="font-display text-xl md:text-2xl text-cream/90 font-light leading-relaxed italic max-w-2xl mx-auto">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <p className="mt-5 font-heading text-sm text-caramel tracking-wide">
                {t.name}
              </p>
              <p className="text-text-muted-dark text-xs font-body mt-1">
                {t.date}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[rgba(201,162,75,0.2)]
                         flex items-center justify-center text-cream/60 hover:text-caramel
                         hover:border-caramel/50 transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-caramel w-6"
                      : "bg-text-muted-dark/30 hover:bg-text-muted-dark/50"
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-[rgba(201,162,75,0.2)]
                         flex items-center justify-center text-cream/60 hover:text-caramel
                         hover:border-caramel/50 transition-colors"
              aria-label="Next review"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

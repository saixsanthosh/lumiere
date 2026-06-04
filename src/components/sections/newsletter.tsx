"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, CheckCircle, ArrowRight } from "lucide-react";
import { AnimateOnScroll } from "@/components/shared/motion-wrapper";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="py-20 md:py-24 bg-warm-white">
      <div className="max-w-3xl mx-auto section-padding text-center">
        <AnimateOnScroll>
          <Mail size={32} className="text-caramel mx-auto mb-4" />
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.1}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-text-light font-light tracking-wide">
            Stay in the Loop
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.2}>
          <p className="mt-4 text-text-muted-light font-body text-base md:text-lg max-w-lg mx-auto">
            New blends, seasonal specials, events, and exclusive offers —
            delivered to your inbox.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.3}>
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-sage/10 rounded-pill"
              >
                <CheckCircle size={18} className="text-sage" />
                <span className="text-sage font-body text-sm">
                  Welcome aboard! Check your inbox for a surprise.
                </span>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="mt-8 flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 w-full bg-white border border-latte/50 rounded-pill px-5 py-3.5
                             text-text-light text-sm font-body placeholder:text-text-muted-light/40
                             focus:outline-none focus:border-caramel/50 focus:ring-2 focus:ring-caramel/10
                             transition-all"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3.5 bg-caramel text-espresso font-body font-semibold
                             text-sm rounded-pill hover:bg-gold-bright transition-all hover:shadow-glow
                             flex items-center justify-center gap-2"
                >
                  Subscribe <ArrowRight size={14} />
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.4}>
          <p className="mt-4 text-text-muted-light/40 text-xs font-body">
            No spam, ever. Unsubscribe anytime.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, Send, CheckCircle } from "lucide-react";
import { AnimateOnScroll } from "@/components/shared/motion-wrapper";
import { cn, formatPrice } from "@/lib/utils";

const presetAmounts = [500, 1000, 2000, 3000, 5000];

export default function GiftCardsPage() {
  const [amount, setAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const [purchased, setPurchased] = useState(false);
  const [form, setForm] = useState({
    senderName: "", recipientName: "", recipientEmail: "", message: "",
  });

  const finalAmount = isCustom ? Number(customAmount) || 0 : amount;

  const handlePurchase = (e: React.FormEvent) => {
    e.preventDefault();
    setPurchased(true);
  };

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
            <Gift size={48} className="text-caramel mx-auto mb-4" />
          </motion.div>
          <p className="font-script text-caramel text-xl mb-2">Share the Experience</p>
          <h1 className="font-display text-5xl md:text-6xl text-cream tracking-wide">Gift Cards</h1>
          <p className="mt-4 text-text-muted-dark font-body text-lg max-w-xl mx-auto">
            Give the gift of exceptional coffee. Perfect for any occasion.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto section-padding">
        <AnimatePresence mode="wait">
          {purchased ? (
            <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-16">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.1 }}
                          className="w-20 h-20 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={40} className="text-sage" />
              </motion.div>
              <h2 className="font-display text-4xl text-cream mb-3">Gift Card Sent!</h2>
              <p className="text-text-muted-dark font-body text-lg mb-2">
                A <span className="text-caramel">{formatPrice(finalAmount)}</span> digital gift card
                has been sent to <span className="text-caramel">{form.recipientEmail}</span>.
              </p>
              <p className="text-text-muted-dark/60 font-body text-sm mb-8">
                They will receive it in their inbox within minutes.
              </p>
              <button onClick={() => { setPurchased(false); setForm({ senderName: "", recipientName: "", recipientEmail: "", message: "" }); }}
                      className="px-6 py-3 border border-caramel/40 text-caramel font-body rounded-pill hover:bg-caramel hover:text-espresso transition-all">
                Send Another
              </button>
            </motion.div>
          ) : (
            <motion.div key="form" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Card Preview */}
                <AnimateOnScroll>
                  <div className="sticky top-28">
                    <div className="relative bg-gradient-to-br from-roasted via-mocha to-roasted rounded-2xl p-8
                                    border border-caramel/20 shadow-glow aspect-[16/10] flex flex-col justify-between overflow-hidden">
                      <div className="absolute top-0 right-0 w-40 h-40 bg-caramel/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                      <div className="absolute bottom-0 left-0 w-32 h-32 bg-caramel/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                      <div className="relative">
                        <p className="font-display text-3xl tracking-[0.2em] text-cream">LUMIÈRE</p>
                        <p className="font-script text-caramel text-sm mt-1">Gift Card</p>
                      </div>
                      <div className="relative">
                        <p className="font-display text-4xl text-caramel">{formatPrice(finalAmount)}</p>
                        {form.recipientName && (
                          <p className="text-cream/60 text-sm font-body mt-1">
                            For: {form.recipientName}
                          </p>
                        )}
                        {form.message && (
                          <p className="text-cream/40 text-xs font-body mt-2 italic line-clamp-2">
                            &ldquo;{form.message}&rdquo;
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>

                {/* Form */}
                <form onSubmit={handlePurchase} className="space-y-5">
                  {/* Amount */}
                  <div>
                    <label className="text-cream font-heading text-base mb-3 block">Select Amount</label>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {presetAmounts.map((a) => (
                        <button
                          key={a} type="button"
                          onClick={() => { setAmount(a); setIsCustom(false); }}
                          className={cn(
                            "px-4 py-2 text-sm font-body rounded-lg border transition-all",
                            !isCustom && amount === a
                              ? "border-caramel bg-caramel/10 text-caramel"
                              : "border-[rgba(201,162,75,0.1)] text-text-muted-dark hover:border-caramel/30"
                          )}
                        >
                          {formatPrice(a)}
                        </button>
                      ))}
                      <button
                        type="button"
                        onClick={() => setIsCustom(true)}
                        className={cn(
                          "px-4 py-2 text-sm font-body rounded-lg border transition-all",
                          isCustom
                            ? "border-caramel bg-caramel/10 text-caramel"
                            : "border-[rgba(201,162,75,0.1)] text-text-muted-dark hover:border-caramel/30"
                        )}
                      >
                        Custom
                      </button>
                    </div>
                    {isCustom && (
                      <input type="number" min="100" max="25000" required placeholder="Enter amount (₹100 - ₹25,000)"
                             value={customAmount} onChange={(e) => setCustomAmount(e.target.value)}
                             className="w-full bg-mocha/40 border border-[rgba(201,162,75,0.1)] rounded-md px-3 py-2.5
                                        text-cream text-sm font-body focus:outline-none focus:border-caramel/40" />
                    )}
                  </div>

                  {/* Details */}
                  <div className="space-y-3">
                    <div>
                      <label className="text-text-muted-dark text-xs font-body mb-1 block">Your Name *</label>
                      <input type="text" required value={form.senderName}
                             onChange={(e) => setForm({ ...form, senderName: e.target.value })}
                             className="w-full bg-mocha/40 border border-[rgba(201,162,75,0.1)] rounded-md px-3 py-2.5
                                        text-cream text-sm font-body focus:outline-none focus:border-caramel/40" />
                    </div>
                    <div>
                      <label className="text-text-muted-dark text-xs font-body mb-1 block">Recipient Name *</label>
                      <input type="text" required value={form.recipientName}
                             onChange={(e) => setForm({ ...form, recipientName: e.target.value })}
                             className="w-full bg-mocha/40 border border-[rgba(201,162,75,0.1)] rounded-md px-3 py-2.5
                                        text-cream text-sm font-body focus:outline-none focus:border-caramel/40" />
                    </div>
                    <div>
                      <label className="text-text-muted-dark text-xs font-body mb-1 block">Recipient Email *</label>
                      <input type="email" required value={form.recipientEmail}
                             onChange={(e) => setForm({ ...form, recipientEmail: e.target.value })}
                             className="w-full bg-mocha/40 border border-[rgba(201,162,75,0.1)] rounded-md px-3 py-2.5
                                        text-cream text-sm font-body focus:outline-none focus:border-caramel/40" />
                    </div>
                    <div>
                      <label className="text-text-muted-dark text-xs font-body mb-1 block">Personal Message</label>
                      <textarea rows={3} value={form.message}
                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                                placeholder="Enjoy a warm cup on me..."
                                className="w-full bg-mocha/40 border border-[rgba(201,162,75,0.1)] rounded-md px-3 py-2.5
                                           text-cream text-sm font-body placeholder:text-text-muted-dark/30
                                           focus:outline-none focus:border-caramel/40 resize-none" />
                    </div>
                  </div>

                  <button type="submit" disabled={finalAmount < 100}
                          className="w-full py-3.5 bg-caramel text-espresso font-body font-semibold rounded-lg
                                     hover:bg-gold-bright transition-all duration-300 hover:shadow-glow flex items-center
                                     justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed">
                    <Send size={16} /> Purchase Gift Card — {formatPrice(finalAmount)}
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

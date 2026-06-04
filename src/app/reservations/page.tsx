"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, Users, Sparkles, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const timeSlots = [
  "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
  "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM",
  "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM",
  "8:00 PM", "8:30 PM", "9:00 PM",
];

const occasions = [
  { key: "casual", label: "Casual Visit" },
  { key: "birthday", label: "Birthday" },
  { key: "anniversary", label: "Anniversary" },
  { key: "business", label: "Business Meeting" },
  { key: "other", label: "Other" },
];

export default function ReservationsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "",
    date: "", time: "", guests: 2,
    occasion: "casual", specialRequests: "",
  });

  const update = (key: string, value: string | number) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-espresso">
      {/* Hero */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center mb-12">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=1920&q=80"
            alt="" className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-hero-overlay" />
        </div>
        <div className="relative z-10 text-center">
          <p className="font-script text-caramel text-xl mb-2">Book Your Experience</p>
          <h1 className="font-display text-5xl md:text-6xl text-cream tracking-wide">Reservations</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto section-padding">
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.1 }}
                className="w-20 h-20 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle size={40} className="text-sage" />
              </motion.div>
              <h2 className="font-display text-4xl text-cream mb-3">Reservation Confirmed!</h2>
              <p className="text-text-muted-dark font-body text-lg mb-2">
                We have reserved your table for <span className="text-caramel">{form.guests} guests</span> on{" "}
                <span className="text-caramel">{form.date}</span> at{" "}
                <span className="text-caramel">{form.time}</span>.
              </p>
              <p className="text-text-muted-dark/60 font-body text-sm mb-8">
                A confirmation email has been sent to {form.email}.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", date: "", time: "", guests: 2, occasion: "casual", specialRequests: "" }); }}
                className="px-6 py-3 border border-caramel/40 text-caramel font-body rounded-pill
                           hover:bg-caramel hover:text-espresso transition-all"
              >
                Make Another Reservation
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit}
              className="bg-roasted rounded-xl p-6 md:p-8 border border-[rgba(201,162,75,0.1)] space-y-6"
            >
              {/* Name / Email / Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { key: "name", label: "Full Name", type: "text", icon: <Users size={16} /> },
                  { key: "email", label: "Email", type: "email", icon: null },
                  { key: "phone", label: "Phone", type: "tel", icon: null },
                ].map((f) => (
                  <div key={f.key} className={f.key === "name" ? "sm:col-span-2" : ""}>
                    <label className="text-text-muted-dark text-xs font-body mb-1.5 block">{f.label} *</label>
                    <input
                      type={f.type} required
                      value={form[f.key as keyof typeof form] as string}
                      onChange={(e) => update(f.key, e.target.value)}
                      className="w-full bg-mocha/40 border border-[rgba(201,162,75,0.1)] rounded-md px-3 py-2.5
                                 text-cream text-sm font-body focus:outline-none focus:border-caramel/40 transition-colors"
                    />
                  </div>
                ))}
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-text-muted-dark text-xs font-body mb-1.5 flex items-center gap-1.5">
                    <Calendar size={12} /> Date *
                  </label>
                  <input
                    type="date" required
                    value={form.date}
                    min={new Date().toISOString().split("T")[0]}
                    onChange={(e) => update("date", e.target.value)}
                    className="w-full bg-mocha/40 border border-[rgba(201,162,75,0.1)] rounded-md px-3 py-2.5
                               text-cream text-sm font-body focus:outline-none focus:border-caramel/40 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-text-muted-dark text-xs font-body mb-1.5 flex items-center gap-1.5">
                    <Clock size={12} /> Time *
                  </label>
                  <select
                    required value={form.time}
                    onChange={(e) => update("time", e.target.value)}
                    className="w-full bg-mocha/40 border border-[rgba(201,162,75,0.1)] rounded-md px-3 py-2.5
                               text-cream text-sm font-body focus:outline-none focus:border-caramel/40 transition-colors"
                  >
                    <option value="">Select a time</option>
                    {timeSlots.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Guests */}
              <div>
                <label className="text-text-muted-dark text-xs font-body mb-2 flex items-center gap-1.5">
                  <Users size={12} /> Number of Guests *
                </label>
                <div className="flex gap-2 flex-wrap">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <button
                      type="button" key={n}
                      onClick={() => update("guests", n)}
                      className={cn(
                        "w-10 h-10 rounded-lg border text-sm font-body transition-all",
                        form.guests === n
                          ? "border-caramel bg-caramel/10 text-caramel"
                          : "border-[rgba(201,162,75,0.1)] text-text-muted-dark hover:border-caramel/30"
                      )}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>

              {/* Occasion */}
              <div>
                <label className="text-text-muted-dark text-xs font-body mb-2 flex items-center gap-1.5">
                  <Sparkles size={12} /> Occasion
                </label>
                <div className="flex gap-2 flex-wrap">
                  {occasions.map((o) => (
                    <button
                      type="button" key={o.key}
                      onClick={() => update("occasion", o.key)}
                      className={cn(
                        "px-3 py-1.5 text-xs font-body rounded-pill border transition-all",
                        form.occasion === o.key
                          ? "border-caramel bg-caramel/10 text-caramel"
                          : "border-[rgba(201,162,75,0.1)] text-text-muted-dark hover:border-caramel/30"
                      )}
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="text-text-muted-dark text-xs font-body mb-1.5 block">Special Requests</label>
                <textarea
                  rows={3} value={form.specialRequests}
                  onChange={(e) => update("specialRequests", e.target.value)}
                  placeholder="Allergies, seating preferences, celebration details..."
                  className="w-full bg-mocha/40 border border-[rgba(201,162,75,0.1)] rounded-md px-3 py-2.5
                             text-cream text-sm font-body placeholder:text-text-muted-dark/30
                             focus:outline-none focus:border-caramel/40 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-caramel text-espresso font-body font-semibold rounded-lg
                           hover:bg-gold-bright transition-all duration-300 hover:shadow-glow text-base"
              >
                Confirm Reservation
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, Users, MapPin, CheckCircle } from "lucide-react";
import { events } from "@/data/events";
import { formatPrice } from "@/lib/utils";
import SectionHeading from "@/components/shared/section-heading";
import { AnimateOnScroll } from "@/components/shared/motion-wrapper";

export default function EventsPage() {
  const [rsvpEvent, setRsvpEvent] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState<string[]>([]);

  const handleRSVP = (eventId: string) => {
    setConfirmed((c) => [...c, eventId]);
    setRsvpEvent(null);
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-espresso">
      {/* Hero */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center mb-12">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=1920&q=80"
               alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-hero-overlay" />
        </div>
        <div className="relative z-10 text-center">
          <p className="font-script text-caramel text-xl mb-2">What&apos;s Happening</p>
          <h1 className="font-display text-5xl md:text-6xl text-cream tracking-wide">Events & Live Music</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto section-padding">
        <SectionHeading
          subtitle="Upcoming"
          title="Join the Experience"
          description="From jazz nights to coffee workshops — there is always something brewing at Lumière."
        />

        <div className="space-y-6">
          {events.map((event, i) => (
            <AnimateOnScroll key={event.id} delay={i * 0.05}>
              <div className="bg-roasted rounded-lg overflow-hidden border border-[rgba(201,162,75,0.08)]
                              hover:border-caramel/20 transition-all group">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                  <div className="relative overflow-hidden">
                    <img src={event.image} alt={event.title}
                         className="w-full h-48 md:h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-caramel/90 text-espresso text-xs
                                     font-body font-bold rounded-pill capitalize">
                      {event.category}
                    </span>
                  </div>
                  <div className="md:col-span-2 p-5 md:p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading text-xl text-cream group-hover:text-caramel transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-text-muted-dark text-sm font-body mt-2 leading-relaxed">
                        {event.description}
                      </p>
                      <div className="flex flex-wrap gap-4 mt-4 text-text-muted-dark/70 text-xs font-body">
                        <span className="flex items-center gap-1.5"><Calendar size={12} /> {new Date(event.date).toLocaleDateString("en-IN", { weekday: "long", month: "long", day: "numeric" })}</span>
                        <span className="flex items-center gap-1.5"><Clock size={12} /> {event.time}</span>
                        <span className="flex items-center gap-1.5"><Users size={12} /> {event.spotsLeft} spots left</span>
                        <span className="flex items-center gap-1.5"><MapPin size={12} /> Lumière, Anna Nagar</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-5 pt-4 border-t border-[rgba(201,162,75,0.08)]">
                      <span className="font-heading text-lg text-caramel">
                        {event.price === "free" ? "Free Entry" : formatPrice(event.price as number)}
                      </span>
                      {confirmed.includes(event.id) ? (
                        <span className="flex items-center gap-2 text-sage text-sm font-body">
                          <CheckCircle size={16} /> RSVP Confirmed
                        </span>
                      ) : (
                        <button
                          onClick={() => setRsvpEvent(event.id)}
                          className="px-5 py-2 bg-caramel/10 text-caramel text-sm font-body rounded-lg
                                     hover:bg-caramel hover:text-espresso transition-all duration-300"
                        >
                          Book Your Spot
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      {/* RSVP Modal */}
      <AnimatePresence>
        {rsvpEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setRsvpEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-roasted rounded-xl p-6 w-full max-w-md border border-[rgba(201,162,75,0.1)]"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="font-heading text-xl text-cream mb-4">RSVP</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleRSVP(rsvpEvent);
                }}
                className="space-y-3"
              >
                {["Full Name", "Email", "Phone"].map((label) => (
                  <input
                    key={label}
                    required
                    placeholder={label}
                    className="w-full bg-mocha/40 border border-[rgba(201,162,75,0.1)] rounded-md px-3 py-2.5
                               text-cream text-sm font-body placeholder:text-text-muted-dark/40
                               focus:outline-none focus:border-caramel/40"
                  />
                ))}
                <button
                  type="submit"
                  className="w-full py-3 bg-caramel text-espresso font-body font-semibold rounded-lg
                             hover:bg-gold-bright transition-colors mt-2"
                >
                  Confirm RSVP
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CheckCircle, ExternalLink, MessageCircle } from "lucide-react";
import { InstagramIcon } from "@/components/ui/icons";
import { AnimateOnScroll } from "@/components/shared/motion-wrapper";
import { isOpenNow } from "@/lib/utils";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const openStatus = isOpenNow();

  return (
    <div className="pt-24 pb-20 min-h-screen bg-espresso">
      {/* Hero */}
      <div className="relative h-[35vh] min-h-[250px] flex items-center justify-center mb-12">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=1920&q=80"
               alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-hero-overlay" />
        </div>
        <div className="relative z-10 text-center">
          <p className="font-script text-caramel text-xl mb-2">Get in Touch</p>
          <h1 className="font-display text-5xl md:text-6xl text-cream tracking-wide">Contact Us</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Info + Map */}
          <div className="space-y-6">
            <AnimateOnScroll>
              <div className="bg-roasted rounded-lg p-6 border border-[rgba(201,162,75,0.08)]">
                {/* Open/Closed Status */}
                <div className="flex items-center gap-2 mb-5">
                  <span className={`w-2.5 h-2.5 rounded-full ${openStatus.open ? "bg-sage animate-pulse" : "bg-terracotta"}`} />
                  <span className={`text-sm font-body ${openStatus.open ? "text-sage" : "text-terracotta"}`}>
                    {openStatus.message}
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-caramel mt-0.5 shrink-0" />
                    <div>
                      <p className="text-cream text-sm font-body font-medium">Address</p>
                      <p className="text-text-muted-dark text-sm font-body">
                        No. 1208, 2nd Avenue, Anna Nagar<br />Chennai, Tamil Nadu 600040
                      </p>
                      <a href="https://maps.google.com/?q=Anna+Nagar+Chennai" target="_blank" rel="noopener noreferrer"
                         className="inline-flex items-center gap-1 text-caramel text-xs font-body mt-1 hover:underline">
                        Get Directions <ExternalLink size={10} />
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={18} className="text-caramel mt-0.5 shrink-0" />
                    <div>
                      <p className="text-cream text-sm font-body font-medium">Hours</p>
                      <p className="text-text-muted-dark text-sm font-body">Mon–Sat: 7 AM – 11 PM</p>
                      <p className="text-text-muted-dark text-sm font-body">Sunday: 9 AM – 10 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone size={18} className="text-caramel mt-0.5 shrink-0" />
                    <div>
                      <p className="text-cream text-sm font-body font-medium">Phone</p>
                      <a href="tel:+918925075593" className="text-text-muted-dark text-sm font-body hover:text-caramel transition-colors">
                        +91 89250 75593
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail size={18} className="text-caramel mt-0.5 shrink-0" />
                    <div>
                      <p className="text-cream text-sm font-body font-medium">Email</p>
                      <a href="mailto:hello@lumiere.cafe" className="text-text-muted-dark text-sm font-body hover:text-caramel transition-colors">
                        hello@lumiere.cafe
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-[rgba(201,162,75,0.08)] text-text-muted-dark text-xs font-body space-y-1">
                  <p>Free parking available at the rear</p>
                  <p>Wheelchair accessible entrance and restroom</p>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Map */}
            <AnimateOnScroll delay={0.1}>
              <div className="rounded-lg overflow-hidden border border-[rgba(201,162,75,0.08)] h-64">
                <iframe
                  src="https://maps.google.com/maps?q=Anna%20Nagar%2C%20Chennai&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%" height="100%" style={{ border: 0 }}
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  title="Lumière — Anna Nagar, Chennai"
                />
              </div>
            </AnimateOnScroll>

            {/* Built By Card */}
            <AnimateOnScroll delay={0.2}>
              <div className="bg-roasted rounded-lg p-5 border border-caramel/10">
                <p className="font-script text-caramel text-base mb-1">Want a website like this for your café?</p>
                <p className="font-heading text-lg text-cream mb-3">B SAI SANTHOSH</p>
                <div className="flex flex-wrap gap-2">
                  <a href="mailto:saisanthosh102030@gmail.com"
                     className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-caramel/10 text-caramel text-xs font-body rounded-pill hover:bg-caramel hover:text-espresso transition-all">
                    <Mail size={12} /> Email
                  </a>
                  <a href="https://wa.me/918925075593" target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-caramel/10 text-caramel text-xs font-body rounded-pill hover:bg-caramel hover:text-espresso transition-all">
                    <MessageCircle size={12} /> WhatsApp
                  </a>
                  <a href="https://instagram.com/saixsanthosh" target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-caramel/10 text-caramel text-xs font-body rounded-pill hover:bg-caramel hover:text-espresso transition-all">
                    <InstagramIcon width={12} height={12} /> Instagram
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right: Contact Form */}
          <AnimateOnScroll delay={0.1}>
            <div className="bg-roasted rounded-lg p-6 md:p-8 border border-[rgba(201,162,75,0.08)] h-fit sticky top-28">
              {sent ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-10">
                  <CheckCircle size={48} className="text-sage mx-auto mb-4" />
                  <h3 className="font-heading text-2xl text-cream mb-2">Message Sent!</h3>
                  <p className="text-text-muted-dark font-body text-sm mb-6">
                    We will get back to you within 24 hours.
                  </p>
                  <button onClick={() => setSent(false)}
                          className="px-5 py-2 border border-caramel/30 text-caramel text-sm font-body rounded-pill hover:bg-caramel hover:text-espresso transition-all">
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <>
                  <h3 className="font-heading text-xl text-cream mb-1">Send Us a Message</h3>
                  <p className="text-text-muted-dark text-sm font-body mb-6">
                    Questions, feedback, or catering inquiries — we would love to hear from you.
                  </p>
                  <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { name: "name", label: "Your Name", type: "text" },
                        { name: "email", label: "Email", type: "email" },
                      ].map((f) => (
                        <div key={f.name}>
                          <label className="text-text-muted-dark text-xs font-body mb-1 block">{f.label} *</label>
                          <input type={f.type} required
                                 className="w-full bg-mocha/40 border border-[rgba(201,162,75,0.1)] rounded-md px-3 py-2.5
                                            text-cream text-sm font-body focus:outline-none focus:border-caramel/40 transition-colors" />
                        </div>
                      ))}
                    </div>
                    <div>
                      <label className="text-text-muted-dark text-xs font-body mb-1 block">Phone</label>
                      <input type="tel"
                             className="w-full bg-mocha/40 border border-[rgba(201,162,75,0.1)] rounded-md px-3 py-2.5
                                        text-cream text-sm font-body focus:outline-none focus:border-caramel/40 transition-colors" />
                    </div>
                    <div>
                      <label className="text-text-muted-dark text-xs font-body mb-1 block">Subject *</label>
                      <select required
                              className="w-full bg-mocha/40 border border-[rgba(201,162,75,0.1)] rounded-md px-3 py-2.5
                                         text-cream text-sm font-body focus:outline-none focus:border-caramel/40 transition-colors">
                        <option value="">Select a topic</option>
                        <option value="general">General Inquiry</option>
                        <option value="reservation">Reservation</option>
                        <option value="catering">Catering</option>
                        <option value="feedback">Feedback</option>
                        <option value="events">Private Events</option>
                        <option value="careers">Careers</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-text-muted-dark text-xs font-body mb-1 block">Message *</label>
                      <textarea required rows={4}
                                className="w-full bg-mocha/40 border border-[rgba(201,162,75,0.1)] rounded-md px-3 py-2.5
                                           text-cream text-sm font-body focus:outline-none focus:border-caramel/40 transition-colors resize-none" />
                    </div>
                    <button type="submit"
                            className="w-full py-3 bg-caramel text-espresso font-body font-semibold rounded-lg
                                       hover:bg-gold-bright transition-all duration-300 hover:shadow-glow">
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
}

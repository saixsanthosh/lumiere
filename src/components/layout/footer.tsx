"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { InstagramIcon } from "@/components/ui/icons";
import { AnimateOnScroll } from "@/components/shared/motion-wrapper";

const quickLinks = [
  { href: "/menu", label: "Menu" },
  { href: "/reservations", label: "Reservations" },
  { href: "/about", label: "Our Story" },
  { href: "/gallery", label: "Gallery" },
  { href: "/events", label: "Events" },
  { href: "/blog", label: "Journal" },
  { href: "/loyalty", label: "Loyalty Rewards" },
  { href: "/gift-cards", label: "Gift Cards" },
];

export default function Footer() {
  return (
    <footer className="bg-espresso border-t border-[rgba(201,162,75,0.1)]">
      <div className="max-w-7xl mx-auto section-padding py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <AnimateOnScroll>
            <div>
              <h3 className="font-display text-3xl tracking-[0.15em] text-cream mb-4">
                LUMIÈRE
              </h3>
              <p className="font-script text-caramel text-lg mb-4">
                Crafted to Awaken Your Senses
              </p>
              <p className="text-text-muted-dark text-sm font-body leading-relaxed">
                A premium artisan café where every cup tells a story.
                Single-origin beans, handcrafted beverages, and a warm
                ambiance that feels like home.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Quick Links */}
          <AnimateOnScroll delay={0.1}>
            <div>
              <h4 className="font-heading text-lg text-cream mb-6 tracking-wide">
                Explore
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-text-muted-dark text-sm font-body hover:text-caramel
                                 transition-colors duration-300 gold-underline pb-0.5"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          {/* Contact */}
          <AnimateOnScroll delay={0.2}>
            <div>
              <h4 className="font-heading text-lg text-cream mb-6 tracking-wide">
                Visit Us
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-caramel mt-1 shrink-0" />
                  <p className="text-text-muted-dark text-sm font-body leading-relaxed">
                    42 Artisan Lane, Indiranagar<br />
                    Bengaluru, Karnataka 560038
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-caramel shrink-0" />
                  <p className="text-text-muted-dark text-sm font-body">
                    Mon–Sat: 7 AM – 11 PM<br />
                    Sunday: 9 AM – 10 PM
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-caramel shrink-0" />
                  <a
                    href="tel:+918925075593"
                    className="text-text-muted-dark text-sm font-body hover:text-caramel transition-colors"
                  >
                    +91 89250 75593
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-caramel shrink-0" />
                  <a
                    href="mailto:hello@lumiere.cafe"
                    className="text-text-muted-dark text-sm font-body hover:text-caramel transition-colors"
                  >
                    hello@lumiere.cafe
                  </a>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Newsletter */}
          <AnimateOnScroll delay={0.3}>
            <div>
              <h4 className="font-heading text-lg text-cream mb-6 tracking-wide">
                Stay in the Loop
              </h4>
              <p className="text-text-muted-dark text-sm font-body mb-4">
                Get updates on new blends, events, and exclusive offers.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  form.reset();
                }}
                className="flex gap-2"
              >
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  className="flex-1 bg-roasted border border-[rgba(201,162,75,0.2)] rounded-md px-3 py-2
                             text-cream text-sm font-body placeholder:text-text-muted-dark/50
                             focus:outline-none focus:border-caramel/50 transition-colors"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-caramel text-espresso text-sm font-body font-medium
                             rounded-md hover:bg-gold-bright transition-colors shrink-0"
                >
                  Join
                </button>
              </form>
              <div className="flex items-center gap-4 mt-6">
                <a
                  href="https://instagram.com/saixsanthosh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted-dark hover:text-caramel transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon width={20} height={20} />
                </a>
                <a
                  href="https://wa.me/918925075593"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted-dark hover:text-caramel transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={20} />
                </a>
                <a
                  href="mailto:saisanthosh102030@gmail.com"
                  className="text-text-muted-dark hover:text-caramel transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
                <a
                  href="tel:+918925075593"
                  className="text-text-muted-dark hover:text-caramel transition-colors"
                  aria-label="Phone"
                >
                  <Phone size={20} />
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Bottom Bar — Creator Credit */}
      <div className="border-t border-[rgba(201,162,75,0.1)]">
        <div className="max-w-7xl mx-auto section-padding py-5 flex flex-col sm:flex-row
                        items-center justify-between gap-3">
          <p className="text-text-muted-dark/60 text-xs font-body tracking-wide">
            © {new Date().getFullYear()} Lumière Café. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-text-muted-dark/50 text-xs" style={{ fontFamily: "Marcellus, serif" }}>
              Designed & Developed by B SAI SANTHOSH
            </span>
            <div className="flex items-center gap-2">
              <a
                href="mailto:saisanthosh102030@gmail.com"
                className="text-text-muted-dark/40 hover:text-caramel transition-colors"
                aria-label="Email developer"
              >
                <Mail size={13} />
              </a>
              <a
                href="tel:+918925075593"
                className="text-text-muted-dark/40 hover:text-caramel transition-colors"
                aria-label="Call developer"
              >
                <Phone size={13} />
              </a>
              <a
                href="https://instagram.com/saixsanthosh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted-dark/40 hover:text-caramel transition-colors"
                aria-label="Developer Instagram"
              >
                <InstagramIcon width={13} height={13} />
              </a>
              <a
                href="https://wa.me/918925075593"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted-dark/40 hover:text-caramel transition-colors"
                aria-label="Developer WhatsApp"
              >
                <MessageCircle size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

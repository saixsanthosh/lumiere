"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, X } from "lucide-react";
import { InstagramIcon } from "@/components/ui/icons";
import { useCartStore } from "@/store/cart-store";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "Our Story" },
  { href: "/reservations", label: "Reservations" },
  { href: "/gallery", label: "Gallery" },
  { href: "/events", label: "Events" },
  { href: "/blog", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const itemCount = useCartStore((s) => s.getItemCount());
  const toggleCart = useCartStore((s) => s.toggleCart);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "glass-dark py-3 shadow-warm"
            : "bg-transparent py-5"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-display text-2xl md:text-3xl font-light tracking-[0.15em] text-cream group-hover:text-caramel transition-colors">
              LUMIÈRE
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="gold-underline text-sm font-body tracking-wide text-cream/80
                           hover:text-caramel transition-colors duration-300 pb-1"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/saixsanthosh"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block text-cream/60 hover:text-caramel transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon width={18} height={18} />
            </a>

            <button
              onClick={() => toggleCart()}
              className="relative text-cream/80 hover:text-caramel transition-colors"
              aria-label="Open cart"
            >
              <ShoppingBag size={20} />
              {itemCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 w-5 h-5 bg-caramel text-espresso text-[10px]
                             font-bold rounded-full flex items-center justify-center"
                >
                  {itemCount}
                </motion.span>
              )}
            </button>

            <Link
              href="/menu"
              className="hidden md:inline-flex px-5 py-2 bg-caramel text-espresso text-sm font-body
                         font-medium rounded-pill hover:bg-gold-bright transition-all duration-300
                         hover:shadow-glow"
            >
              Order Online
            </Link>

            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden text-cream/80 hover:text-caramel transition-colors"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-espresso/95 backdrop-blur-lg"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between px-4 py-5">
                <span className="font-display text-2xl tracking-[0.15em] text-cream">
                  LUMIÈRE
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-cream/80 hover:text-caramel transition-colors"
                  aria-label="Close menu"
                >
                  <X size={28} />
                </button>
              </div>

              <nav className="flex-1 flex flex-col items-center justify-center gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="font-display text-3xl text-cream/90 hover:text-caramel
                                 transition-colors tracking-wide"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                >
                  <Link
                    href="/menu"
                    onClick={() => setMobileOpen(false)}
                    className="mt-4 px-8 py-3 bg-caramel text-espresso font-body font-medium
                               rounded-pill text-lg hover:bg-gold-bright transition-colors"
                  >
                    Order Online
                  </Link>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

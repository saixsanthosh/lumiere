"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/918925075593"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat with us on WhatsApp"
    >
      <span
        className="relative flex items-center justify-center w-14 h-14 rounded-full
                   bg-[#25D366] shadow-lg hover:shadow-glow-lg transition-all duration-300
                   ring-2 ring-caramel/30 hover:ring-caramel/60 animate-pulse_glow"
      >
        <MessageCircle size={26} className="text-white" />
      </span>
      <span
        className="absolute bottom-full right-0 mb-2 px-3 py-1.5 rounded-lg glass-dark
                   text-cream text-xs font-body whitespace-nowrap opacity-0
                   group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      >
        Chat with us
      </span>
    </a>
  );
}

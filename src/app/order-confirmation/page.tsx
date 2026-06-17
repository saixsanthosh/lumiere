"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, Clock, ArrowRight, UtensilsCrossed, Package, Truck, Volume2 } from "lucide-react";

type OrderInfo = {
  token: string;
  queue: number;
  orderType: "dine-in" | "takeaway" | "delivery";
  total?: number;
  name?: string;
};

const TYPE_META = {
  "dine-in": {
    icon: <UtensilsCrossed size={16} />,
    label: "Dine-In",
    message: "Grab a seat and relax. When your order is ready, we'll call out your token number at the counter.",
    eta: "15–25 minutes",
  },
  takeaway: {
    icon: <Package size={16} />,
    label: "Takeaway",
    message: "Hang tight nearby. We'll call out your token number the moment your order is packed and ready for pickup.",
    eta: "10–20 minutes",
  },
  delivery: {
    icon: <Truck size={16} />,
    label: "Delivery",
    message: "Sit back — your order is being prepared and a rider will bring it to your door. We'll call you on the way.",
    eta: "30–45 minutes",
  },
} as const;

export default function OrderConfirmationPage() {
  const [order, setOrder] = useState<OrderInfo | null>(null);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("lumiere_order");
      if (raw) setOrder(JSON.parse(raw));
    } catch {
      /* ignore */
    }
    if (!order) {
      setOrder((prev) =>
        prev ?? {
          token: `LUM-${Math.floor(1000 + Math.random() * 9000)}`,
          queue: Math.floor(10 + Math.random() * 89),
          orderType: "dine-in",
        }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const meta = TYPE_META[order?.orderType ?? "dine-in"];

  return (
    <div className="pt-32 pb-20 min-h-screen bg-espresso flex items-center justify-center">
      <div className="max-w-lg mx-auto text-center section-padding w-full">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.6 }}
          className="w-20 h-20 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle size={40} className="text-sage" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-display text-4xl md:text-5xl text-cream mb-3"
        >
          Order Confirmed!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-text-muted-dark font-body text-lg mb-8"
        >
          {order?.name ? `Thank you, ${order.name.split(" ")[0]}. ` : "Thank you. "}
          We&apos;re preparing it with love.
        </motion.p>

        {/* Big call-out token */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-gold rounded-2xl p-7 mb-5"
        >
          <div className="flex items-center justify-center gap-2 text-gold-bright/90 mb-2">
            <Volume2 size={15} />
            <span className="text-xs font-body tracking-[0.25em] uppercase">Your Token Number</span>
          </div>
          <p className="font-display text-7xl md:text-8xl leading-none text-gradient-gold-anim">
            {order ? String(order.queue).padStart(2, "0") : "—"}
          </p>
          <p className="mt-3 text-cream/70 text-sm font-body">
            Listen for <span className="text-caramel font-semibold">#{order ? String(order.queue).padStart(2, "0") : "--"}</span> — we&apos;ll call it when your order is ready.
          </p>
        </motion.div>

        {/* Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-roasted rounded-2xl p-6 border border-[rgba(201,162,75,0.1)] mb-8 text-left space-y-4"
        >
          <div className="flex items-center justify-between">
            <span className="text-text-muted-dark text-sm font-body">Order ID</span>
            <span className="font-heading text-lg text-caramel">{order?.token ?? "—"}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-text-muted-dark text-sm font-body">Order Type</span>
            <span className="inline-flex items-center gap-1.5 text-cream text-sm font-body">
              {meta.icon} {meta.label}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-text-muted-dark text-sm font-body flex items-center gap-1.5">
              <Clock size={14} /> Estimated time
            </span>
            <span className="text-cream text-sm font-body">{meta.eta}</span>
          </div>
          <p className="text-cream/60 text-xs font-body leading-relaxed pt-3 border-t border-[rgba(201,162,75,0.1)]">
            {meta.message}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Link
            href="/menu"
            className="px-6 py-3 bg-caramel text-espresso font-body font-semibold rounded-pill
                       hover:bg-gold-bright transition-colors inline-flex items-center justify-center gap-2"
          >
            Order More <ArrowRight size={16} />
          </Link>
          <Link
            href="/"
            className="px-6 py-3 border border-cream/20 text-cream font-body rounded-pill
                       hover:border-caramel hover:text-caramel transition-colors"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, Clock, ArrowRight } from "lucide-react";

export default function OrderConfirmationPage() {
  const orderNumber = `LUM-${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <div className="pt-32 pb-20 min-h-screen bg-espresso flex items-center justify-center">
      <div className="max-w-lg mx-auto text-center section-padding">
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
          Thank you for your order. We are preparing it with love.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-roasted rounded-lg p-6 border border-[rgba(201,162,75,0.1)] mb-8"
        >
          <p className="text-text-muted-dark text-sm font-body mb-1">Order Number</p>
          <p className="font-heading text-2xl text-caramel mb-4">{orderNumber}</p>
          <div className="flex items-center justify-center gap-2 text-cream/70">
            <Clock size={16} />
            <span className="text-sm font-body">Estimated time: 15-25 minutes</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Link
            href="/menu"
            className="px-6 py-3 bg-caramel text-espresso font-body font-semibold rounded-pill
                       hover:bg-gold-bright transition-colors inline-flex items-center gap-2"
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

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useCartStore } from "@/store/cart-store";
import { formatPrice } from "@/lib/utils";

export default function CartDrawer() {
  const {
    items,
    isCartOpen,
    setCartOpen,
    updateQuantity,
    removeItem,
    getSubtotal,
    getItemCount,
  } = useCartStore();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm"
            onClick={() => setCartOpen(false)}
          />

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 z-[80] w-full max-w-md bg-roasted
                       border-l border-[rgba(201,162,75,0.15)] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-[rgba(201,162,75,0.1)]">
              <div className="flex items-center gap-3">
                <ShoppingBag size={20} className="text-caramel" />
                <h2 className="font-heading text-xl text-cream">Your Cart</h2>
                <span className="text-xs text-text-muted-dark font-body">
                  ({getItemCount()} items)
                </span>
              </div>
              <button
                onClick={() => setCartOpen(false)}
                className="text-text-muted-dark hover:text-cream transition-colors"
                aria-label="Close cart"
              >
                <X size={22} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4" data-lenis-prevent>
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag size={48} className="text-text-muted-dark/30 mb-4" />
                  <p className="font-heading text-lg text-cream/60 mb-2">
                    Your cart is empty
                  </p>
                  <p className="text-text-muted-dark text-sm font-body mb-6">
                    Explore our menu and add something delightful
                  </p>
                  <Link
                    href="/menu"
                    onClick={() => setCartOpen(false)}
                    className="px-6 py-2.5 bg-caramel text-espresso text-sm font-body font-medium
                               rounded-pill hover:bg-gold-bright transition-colors"
                  >
                    Browse Menu
                  </Link>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div
                    key={item.menuItem.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    className="flex gap-4 p-3 rounded-lg bg-mocha/40"
                  >
                    <img
                      src={item.menuItem.image}
                      alt={item.menuItem.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-cream text-sm font-heading truncate">
                        {item.menuItem.name}
                      </h4>
                      <p className="text-caramel text-sm font-body mt-1">
                        {formatPrice(item.menuItem.price)}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.menuItem.id,
                              item.quantity - 1
                            )
                          }
                          className="w-6 h-6 rounded border border-[rgba(201,162,75,0.2)]
                                     flex items-center justify-center text-cream/70 hover:border-caramel
                                     hover:text-caramel transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-cream text-sm font-body w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.menuItem.id,
                              item.quantity + 1
                            )
                          }
                          className="w-6 h-6 rounded border border-[rgba(201,162,75,0.2)]
                                     flex items-center justify-center text-cream/70 hover:border-caramel
                                     hover:text-caramel transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <button
                        onClick={() => removeItem(item.menuItem.id)}
                        className="text-text-muted-dark/50 hover:text-terracotta transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 size={14} />
                      </button>
                      <span className="text-cream text-sm font-body font-medium">
                        {formatPrice(item.menuItem.price * item.quantity)}
                      </span>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-[rgba(201,162,75,0.1)] p-5 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-text-muted-dark text-sm font-body">
                    Subtotal
                  </span>
                  <span className="text-cream font-heading text-lg">
                    {formatPrice(getSubtotal())}
                  </span>
                </div>
                <Link
                  href="/cart"
                  onClick={() => setCartOpen(false)}
                  className="block w-full text-center px-6 py-3 bg-caramel text-espresso
                             font-body font-semibold rounded-lg hover:bg-gold-bright
                             transition-all duration-300 hover:shadow-glow"
                >
                  Proceed to Checkout
                </Link>
                <button
                  onClick={() => setCartOpen(false)}
                  className="w-full text-center text-text-muted-dark text-sm font-body
                             hover:text-caramel transition-colors py-1"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Plus, Minus, Trash2, ShoppingBag, Truck, UtensilsCrossed, Package, Tag } from "lucide-react";
import { useCartStore } from "@/store/cart-store";
import { useToastStore } from "@/store/toast-store";
import { formatPrice, cn } from "@/lib/utils";
import type { OrderType } from "@/types";

const orderTypes: { key: OrderType; label: string; icon: React.ReactNode; desc: string }[] = [
  { key: "dine-in", label: "Dine-In", icon: <UtensilsCrossed size={18} />, desc: "Enjoy at the café" },
  { key: "takeaway", label: "Takeaway", icon: <Package size={18} />, desc: "Pick up ready" },
  { key: "delivery", label: "Delivery", icon: <Truck size={18} />, desc: "+₹49 delivery" },
];

const tipOptions = [0, 20, 50, 100];

export default function CartPage() {
  const router = useRouter();
  const {
    items, orderType, promoCode, tip,
    updateQuantity, removeItem, setOrderType, setPromoCode, setTip,
    getSubtotal, getDiscount, getTotal, clearCart,
  } = useCartStore();
  const addToast = useToastStore((s) => s.addToast);
  const [promoInput, setPromoInput] = useState(promoCode);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", address: "" });

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    addToast("Order placed successfully!", "success");
    clearCart();
    router.push("/order-confirmation");
  };

  if (items.length === 0) {
    return (
      <div className="pt-32 pb-20 min-h-screen bg-espresso flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag size={64} className="text-text-muted-dark/20 mx-auto mb-6" />
          <h1 className="font-display text-4xl text-cream mb-3">Your Cart is Empty</h1>
          <p className="text-text-muted-dark font-body mb-8">
            Browse our menu and add something delightful.
          </p>
          <Link
            href="/menu"
            className="px-8 py-3 bg-caramel text-espresso font-body font-semibold rounded-pill
                       hover:bg-gold-bright transition-colors"
          >
            Browse Menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 min-h-screen bg-espresso">
      <div className="max-w-6xl mx-auto section-padding">
        <h1 className="font-display text-4xl md:text-5xl text-cream mb-2">Checkout</h1>
        <p className="text-text-muted-dark font-body mb-10">Review your order and complete your purchase.</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Items + Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order Type */}
            <div className="bg-roasted rounded-lg p-5 border border-[rgba(201,162,75,0.1)]">
              <h3 className="font-heading text-lg text-cream mb-4">Order Type</h3>
              <div className="grid grid-cols-3 gap-3">
                {orderTypes.map((t) => (
                  <button
                    key={t.key}
                    onClick={() => setOrderType(t.key)}
                    className={cn(
                      "p-3 rounded-lg border text-center transition-all duration-300",
                      orderType === t.key
                        ? "border-caramel bg-caramel/10 text-caramel"
                        : "border-[rgba(201,162,75,0.1)] text-text-muted-dark hover:border-caramel/30"
                    )}
                  >
                    <div className="flex justify-center mb-1">{t.icon}</div>
                    <p className="text-sm font-body font-medium">{t.label}</p>
                    <p className="text-[10px] font-body opacity-60">{t.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Cart Items */}
            <div className="bg-roasted rounded-lg p-5 border border-[rgba(201,162,75,0.1)]">
              <h3 className="font-heading text-lg text-cream mb-4">Your Items</h3>
              <div className="space-y-3">
                {items.map((item) => (
                  <motion.div
                    key={item.menuItem.id}
                    layout
                    className="flex gap-4 p-3 rounded-lg bg-mocha/30"
                  >
                    <img src={item.menuItem.image} alt={item.menuItem.name}
                         className="w-20 h-20 object-cover rounded-md" />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-cream text-sm font-heading">{item.menuItem.name}</h4>
                      <p className="text-caramel text-sm font-body mt-0.5">
                        {formatPrice(item.menuItem.price)} each
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <button onClick={() => updateQuantity(item.menuItem.id, item.quantity - 1)}
                                className="w-7 h-7 rounded border border-[rgba(201,162,75,0.2)] flex items-center
                                           justify-center text-cream/70 hover:border-caramel hover:text-caramel transition-colors">
                          <Minus size={12} />
                        </button>
                        <span className="text-cream text-sm font-body w-6 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.menuItem.id, item.quantity + 1)}
                                className="w-7 h-7 rounded border border-[rgba(201,162,75,0.2)] flex items-center
                                           justify-center text-cream/70 hover:border-caramel hover:text-caramel transition-colors">
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <button onClick={() => removeItem(item.menuItem.id)}
                              className="text-text-muted-dark/40 hover:text-terracotta transition-colors">
                        <Trash2 size={14} />
                      </button>
                      <span className="text-cream font-heading">{formatPrice(item.menuItem.price * item.quantity)}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Details */}
            <form onSubmit={handleCheckout} id="checkout-form"
                  className="bg-roasted rounded-lg p-5 border border-[rgba(201,162,75,0.1)]">
              <h3 className="font-heading text-lg text-cream mb-4">Contact Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { key: "name", label: "Full Name", type: "text" },
                  { key: "email", label: "Email", type: "email" },
                  { key: "phone", label: "Phone", type: "tel" },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="text-text-muted-dark text-xs font-body mb-1 block">{field.label}</label>
                    <input
                      type={field.type}
                      required
                      value={formData[field.key as keyof typeof formData]}
                      onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                      className="w-full bg-mocha/40 border border-[rgba(201,162,75,0.1)] rounded-md px-3 py-2.5
                                 text-cream text-sm font-body focus:outline-none focus:border-caramel/40 transition-colors"
                    />
                  </div>
                ))}
                {orderType === "delivery" && (
                  <div className="sm:col-span-2">
                    <label className="text-text-muted-dark text-xs font-body mb-1 block">Delivery Address</label>
                    <textarea
                      required
                      rows={2}
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full bg-mocha/40 border border-[rgba(201,162,75,0.1)] rounded-md px-3 py-2.5
                                 text-cream text-sm font-body focus:outline-none focus:border-caramel/40 transition-colors resize-none"
                    />
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Right: Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-roasted rounded-lg p-5 border border-[rgba(201,162,75,0.1)] space-y-5">
              <h3 className="font-heading text-lg text-cream">Order Summary</h3>

              {/* Promo Code */}
              <div>
                <label className="text-text-muted-dark text-xs font-body mb-1.5 flex items-center gap-1.5">
                  <Tag size={12} /> Promo Code
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value.toUpperCase())}
                    placeholder="LUMIERE10"
                    className="flex-1 bg-mocha/40 border border-[rgba(201,162,75,0.1)] rounded-md px-3 py-2
                               text-cream text-sm font-body uppercase focus:outline-none focus:border-caramel/40"
                  />
                  <button
                    onClick={() => {
                      setPromoCode(promoInput);
                      if (promoInput === "LUMIERE10" || promoInput === "FIRST20") {
                        addToast("Promo code applied!", "success");
                      } else if (promoInput) {
                        addToast("Invalid promo code", "error");
                      }
                    }}
                    className="px-4 py-2 bg-caramel/10 text-caramel text-sm font-body rounded-md
                               hover:bg-caramel hover:text-espresso transition-colors"
                  >
                    Apply
                  </button>
                </div>
              </div>

              {/* Tip */}
              <div>
                <p className="text-text-muted-dark text-xs font-body mb-2">Add a tip</p>
                <div className="grid grid-cols-4 gap-2">
                  {tipOptions.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setTip(tip === amount ? 0 : amount)}
                      className={cn(
                        "py-2 text-sm font-body rounded-md border transition-all",
                        tip === amount
                          ? "border-caramel bg-caramel/10 text-caramel"
                          : "border-[rgba(201,162,75,0.1)] text-text-muted-dark hover:border-caramel/30"
                      )}
                    >
                      {amount === 0 ? "None" : `₹${amount}`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Totals */}
              <div className="space-y-2 pt-3 border-t border-[rgba(201,162,75,0.1)]">
                <div className="flex justify-between text-sm font-body">
                  <span className="text-text-muted-dark">Subtotal</span>
                  <span className="text-cream">{formatPrice(getSubtotal())}</span>
                </div>
                {getDiscount() > 0 && (
                  <div className="flex justify-between text-sm font-body">
                    <span className="text-sage">Discount</span>
                    <span className="text-sage">-{formatPrice(getDiscount())}</span>
                  </div>
                )}
                {tip > 0 && (
                  <div className="flex justify-between text-sm font-body">
                    <span className="text-text-muted-dark">Tip</span>
                    <span className="text-cream">{formatPrice(tip)}</span>
                  </div>
                )}
                {orderType === "delivery" && (
                  <div className="flex justify-between text-sm font-body">
                    <span className="text-text-muted-dark">Delivery</span>
                    <span className="text-cream">₹49</span>
                  </div>
                )}
                <div className="flex justify-between pt-3 border-t border-[rgba(201,162,75,0.1)]">
                  <span className="font-heading text-lg text-cream">Total</span>
                  <span className="font-heading text-xl text-caramel">{formatPrice(getTotal())}</span>
                </div>
              </div>

              <button
                type="submit"
                form="checkout-form"
                className="w-full py-3.5 bg-caramel text-espresso font-body font-semibold rounded-lg
                           hover:bg-gold-bright transition-all duration-300 hover:shadow-glow text-base"
              >
                Place Order — {formatPrice(getTotal())}
              </button>

              <p className="text-text-muted-dark/40 text-[10px] font-body text-center">
                Payment integration with Stripe/Razorpay ready for production.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

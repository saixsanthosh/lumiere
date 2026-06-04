"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem, MenuItem, OrderType } from "@/types";

interface CartState {
  items: CartItem[];
  orderType: OrderType;
  promoCode: string;
  tip: number;
  isCartOpen: boolean;

  addItem: (item: MenuItem) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  setOrderType: (type: OrderType) => void;
  setPromoCode: (code: string) => void;
  setTip: (amount: number) => void;
  toggleCart: () => void;
  setCartOpen: (open: boolean) => void;

  getItemCount: () => number;
  getSubtotal: () => number;
  getDiscount: () => number;
  getTotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      orderType: "dine-in",
      promoCode: "",
      tip: 0,
      isCartOpen: false,

      addItem: (item) =>
        set((state) => {
          const existing = state.items.find(
            (i) => i.menuItem.id === item.id
          );
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.menuItem.id === item.id
                  ? { ...i, quantity: i.quantity + 1 }
                  : i
              ),
            };
          }
          return { items: [...state.items, { menuItem: item, quantity: 1 }] };
        }),

      removeItem: (itemId) =>
        set((state) => ({
          items: state.items.filter((i) => i.menuItem.id !== itemId),
        })),

      updateQuantity: (itemId, quantity) =>
        set((state) => {
          if (quantity <= 0) {
            return {
              items: state.items.filter((i) => i.menuItem.id !== itemId),
            };
          }
          return {
            items: state.items.map((i) =>
              i.menuItem.id === itemId ? { ...i, quantity } : i
            ),
          };
        }),

      clearCart: () => set({ items: [], promoCode: "", tip: 0 }),

      setOrderType: (type) => set({ orderType: type }),
      setPromoCode: (code) => set({ promoCode: code }),
      setTip: (amount) => set({ tip: amount }),
      toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
      setCartOpen: (open) => set({ isCartOpen: open }),

      getItemCount: () =>
        get().items.reduce((total, item) => total + item.quantity, 0),

      getSubtotal: () =>
        get().items.reduce(
          (total, item) => total + item.menuItem.price * item.quantity,
          0
        ),

      getDiscount: () => {
        const code = get().promoCode.toUpperCase();
        const subtotal = get().getSubtotal();
        if (code === "LUMIERE10") return subtotal * 0.1;
        if (code === "FIRST20") return subtotal * 0.2;
        return 0;
      },

      getTotal: () => {
        const subtotal = get().getSubtotal();
        const discount = get().getDiscount();
        const tip = get().tip;
        const delivery = get().orderType === "delivery" ? 49 : 0;
        return subtotal - discount + tip + delivery;
      },
    }),
    {
      name: "lumiere-cart",
      partialize: (state) => ({
        items: state.items,
        orderType: state.orderType,
      }),
    }
  )
);

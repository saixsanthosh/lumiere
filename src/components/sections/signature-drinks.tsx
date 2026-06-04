"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Star } from "lucide-react";
import SectionHeading from "@/components/shared/section-heading";
import { AnimateOnScroll } from "@/components/shared/motion-wrapper";
import { menuItems } from "@/data/menu";
import { useCartStore } from "@/store/cart-store";
import { useToastStore } from "@/store/toast-store";
import { formatPrice } from "@/lib/utils";

export default function SignatureDrinks() {
  const addItem = useCartStore((s) => s.addItem);
  const addToast = useToastStore((s) => s.addToast);
  const featured = menuItems.filter((i) => i.bestseller).slice(0, 6);

  return (
    <section className="py-20 md:py-28 bg-espresso">
      <div className="max-w-7xl mx-auto section-padding">
        <SectionHeading
          subtitle="Our Favorites"
          title="Signature Drinks"
          description="Handcrafted with passion, loved by thousands. These are the creations our guests can't stop ordering."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featured.map((item, i) => (
            <AnimateOnScroll key={item.id} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group bg-roasted rounded-lg overflow-hidden border border-[rgba(201,162,75,0.1)]
                           hover:border-caramel/30 transition-all duration-500 hover:shadow-glow"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700
                               group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 to-transparent" />
                  {item.bestseller && (
                    <span className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1
                                     bg-caramel/90 text-espresso text-xs font-body font-semibold
                                     rounded-pill backdrop-blur-sm">
                      <Star size={10} fill="currentColor" />
                      Bestseller
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <h3 className="font-heading text-lg text-cream group-hover:text-caramel transition-colors">
                    {item.name}
                  </h3>
                  <p className="mt-1.5 text-text-muted-dark text-sm font-body leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-caramel font-heading text-xl">
                      {formatPrice(item.price)}
                    </span>
                    <button
                      onClick={() => {
                        addItem(item);
                        addToast(`${item.name} added to cart`);
                      }}
                      className="flex items-center gap-2 px-4 py-2 bg-caramel/10 text-caramel
                                 text-sm font-body rounded-lg hover:bg-caramel hover:text-espresso
                                 transition-all duration-300"
                    >
                      <ShoppingBag size={14} />
                      Add
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingBag, Star, X, Flame, Snowflake, Leaf, Sparkles } from "lucide-react";
import { menuItems, categoryLabels } from "@/data/menu";
import { useCartStore } from "@/store/cart-store";
import { useToastStore } from "@/store/toast-store";
import { formatPrice, cn } from "@/lib/utils";
import SectionHeading from "@/components/shared/section-heading";
import type { MenuCategory, DietaryTag } from "@/types";

const categories: { key: "all" | MenuCategory; label: string }[] = [
  { key: "all", label: "All" },
  ...Object.entries(categoryLabels).map(([key, label]) => ({
    key: key as MenuCategory,
    label,
  })),
];

const filterChips: { key: string; label: string; icon: React.ReactNode }[] = [
  { key: "vegan", label: "Vegan", icon: <Leaf size={12} /> },
  { key: "gluten-free", label: "Gluten-Free", icon: <Sparkles size={12} /> },
  { key: "hot", label: "Hot", icon: <Flame size={12} /> },
  { key: "cold", label: "Cold", icon: <Snowflake size={12} /> },
  { key: "bestseller", label: "Bestsellers", icon: <Star size={12} /> },
  { key: "under200", label: "Under ₹200", icon: null },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<"all" | MenuCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const addItem = useCartStore((s) => s.addItem);
  const addToast = useToastStore((s) => s.addToast);

  const toggleFilter = (key: string) => {
    setActiveFilters((f) =>
      f.includes(key) ? f.filter((k) => k !== key) : [...f, key]
    );
  };

  const filtered = useMemo(() => {
    let items = menuItems;

    if (activeCategory !== "all") {
      items = items.filter((i) => i.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      items = items.filter(
        (i) =>
          i.name.toLowerCase().includes(q) ||
          i.description.toLowerCase().includes(q)
      );
    }

    for (const f of activeFilters) {
      if (f === "under200") {
        items = items.filter((i) => i.price < 200);
      } else if (f === "bestseller") {
        items = items.filter((i) => i.bestseller);
      } else {
        items = items.filter((i) => i.tags.includes(f as DietaryTag));
      }
    }

    return items;
  }, [activeCategory, searchQuery, activeFilters]);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-espresso">
      <div className="max-w-7xl mx-auto section-padding">
        <SectionHeading
          subtitle="Explore & Indulge"
          title="Our Menu"
          description="From hand-pulled espresso to artisan pastries — every item crafted with passion."
        />

        {/* Search */}
        <div className="max-w-md mx-auto mb-8 relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted-dark/50" />
          <input
            type="text"
            placeholder="Search our menu..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-roasted border border-[rgba(201,162,75,0.15)] rounded-pill
                       pl-11 pr-10 py-3 text-cream text-sm font-body placeholder:text-text-muted-dark/40
                       focus:outline-none focus:border-caramel/40 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted-dark/50 hover:text-cream"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={cn(
                "px-4 py-2 text-sm font-body rounded-pill border transition-all duration-300",
                activeCategory === cat.key
                  ? "bg-caramel text-espresso border-caramel"
                  : "border-[rgba(201,162,75,0.2)] text-text-muted-dark hover:border-caramel/40 hover:text-cream"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterChips.map((chip) => (
            <button
              key={chip.key}
              onClick={() => toggleFilter(chip.key)}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 text-xs font-body rounded-pill border transition-all duration-300",
                activeFilters.includes(chip.key)
                  ? "bg-terracotta/20 border-terracotta/50 text-terracotta"
                  : "border-[rgba(201,162,75,0.1)] text-text-muted-dark/60 hover:border-caramel/30 hover:text-cream"
              )}
            >
              {chip.icon}
              {chip.label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <AnimatePresence mode="popLayout">
          {filtered.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="font-heading text-xl text-cream/50 mb-2">No items found</p>
              <p className="text-text-muted-dark text-sm font-body">
                Try adjusting your search or filters.
              </p>
            </motion.div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            >
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-roasted rounded-lg overflow-hidden border border-[rgba(201,162,75,0.08)]
                             hover:border-caramel/25 transition-all duration-500 hover:shadow-glow"
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso/50 to-transparent" />
                    <div className="absolute top-2.5 left-2.5 flex gap-1.5">
                      {item.bestseller && (
                        <span className="flex items-center gap-1 px-2 py-0.5 bg-caramel/90 text-espresso
                                         text-[10px] font-body font-bold rounded-pill">
                          <Star size={8} fill="currentColor" /> Best
                        </span>
                      )}
                      {item.isNew && (
                        <span className="px-2 py-0.5 bg-sage/90 text-white text-[10px] font-body font-bold rounded-pill">
                          New
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-heading text-base text-cream group-hover:text-caramel transition-colors leading-tight">
                        {item.name}
                      </h3>
                      <span className="text-caramel font-heading text-lg shrink-0">
                        {formatPrice(item.price)}
                      </span>
                    </div>
                    <p className="mt-1.5 text-text-muted-dark text-xs font-body leading-relaxed line-clamp-2">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mt-3">
                      {item.tags.filter((t) => t !== "bestseller" && t !== "new").map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[10px] font-body rounded-pill border
                                     border-[rgba(201,162,75,0.1)] text-text-muted-dark/60 capitalize"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => {
                        addItem(item);
                        addToast(`${item.name} added to cart`);
                      }}
                      className="mt-3 w-full flex items-center justify-center gap-2 px-4 py-2.5
                                 bg-caramel/10 text-caramel text-sm font-body rounded-lg
                                 hover:bg-caramel hover:text-espresso transition-all duration-300"
                    >
                      <ShoppingBag size={14} />
                      Add to Cart
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

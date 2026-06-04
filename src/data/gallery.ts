import type { GalleryImage } from "@/types";

const U = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const galleryImages: GalleryImage[] = [
  // Interior
  { id: "g1", src: U("photo-1554118811-1e0d58224f24"), alt: "Cozy cafe interior with warm pendant lighting", category: "interior" },
  { id: "g2", src: U("photo-1453614512568-c4024d13c247"), alt: "Rustic wooden tables and vintage decor", category: "interior" },
  { id: "g3", src: U("photo-1521017432531-fbd92d768814"), alt: "Cafe bookshelf reading nook with armchair", category: "interior" },
  { id: "g4", src: U("photo-1445116572660-236099ec97a0"), alt: "Bar counter with espresso machine", category: "interior" },

  // Drinks
  { id: "g5", src: U("photo-1509042239860-f550ce710b93"), alt: "Cappuccino with beautiful rosetta latte art", category: "drinks" },
  { id: "g6", src: U("photo-1495474472287-4d71bcdd2085"), alt: "Pour-over coffee on wooden counter", category: "drinks" },
  { id: "g7", src: U("photo-1461023058943-07fcbe16d735"), alt: "Iced cold brew coffee with cream", category: "drinks" },
  { id: "g8", src: U("photo-1572442388796-11668a67e53d"), alt: "Classic cappuccino from above", category: "drinks" },

  // Food
  { id: "g9", src: U("photo-1484723091739-30a097e8f929"), alt: "Artisan breakfast spread on marble table", category: "food" },
  { id: "g10", src: U("photo-1509365390695-33aee754301f"), alt: "Freshly baked almond croissants", category: "food" },
  { id: "g11", src: U("photo-1541519227354-08fa5d50c44d"), alt: "Avocado toast with microgreens", category: "food" },
  { id: "g12", src: U("photo-1571877227200-a0d98ea607e9"), alt: "Tiramisu dessert with cocoa dusting", category: "food" },

  // Events
  { id: "g13", src: U("photo-1415201364774-f6f0bb35f28f"), alt: "Live jazz performance in warm lighting", category: "events" },
  { id: "g14", src: U("photo-1493225457124-a3eb161ffa5f"), alt: "Acoustic night singer-songwriter", category: "events" },
  { id: "g15", src: U("photo-1528495612343-9ca9f4a4de28"), alt: "Garden party celebration", category: "events" },

  // Behind the Scenes
  { id: "g16", src: U("photo-1442512595331-e89e73853f31"), alt: "Pour-over coffee brewing process", category: "behind-the-scenes" },
  { id: "g17", src: U("photo-1504630083234-14187a9df0f5"), alt: "Coffee roasting in progress", category: "behind-the-scenes" },
  { id: "g18", src: U("photo-1541167760496-1628856ab772"), alt: "Barista at the espresso machine", category: "behind-the-scenes" },
  { id: "g19", src: U("photo-1510591509098-f4fdc6d0ff04"), alt: "Espresso extraction close-up", category: "behind-the-scenes" },
  { id: "g20", src: U("photo-1511920170033-f8396924c348"), alt: "Coffee beans sorted by origin", category: "behind-the-scenes" },
];

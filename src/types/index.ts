export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: MenuCategory;
  tags: DietaryTag[];
  bestseller?: boolean;
  isNew?: boolean;
}

export type MenuCategory =
  | "espresso"
  | "coffee"
  | "cold-brew"
  | "tea"
  | "smoothies"
  | "pastries"
  | "breakfast"
  | "brunch"
  | "desserts"
  | "vegan"
  | "specials";

export type DietaryTag =
  | "vegan"
  | "gluten-free"
  | "hot"
  | "cold"
  | "bestseller"
  | "new"
  | "organic";

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
}

export type OrderType = "dine-in" | "takeaway" | "delivery";

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  image: string;
  category: "music" | "tasting" | "workshop" | "special";
  spotsLeft: number;
  price: number | "free";
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: number;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "interior" | "drinks" | "food" | "events" | "behind-the-scenes";
}

export interface ReservationForm {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  occasion: "casual" | "birthday" | "anniversary" | "business" | "other";
  specialRequests: string;
}

export interface LoyaltyTier {
  name: string;
  minPoints: number;
  perks: string[];
  icon: string;
}

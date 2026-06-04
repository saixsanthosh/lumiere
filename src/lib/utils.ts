import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return `₹${price.toLocaleString("en-IN")}`;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export function isOpenNow(): { open: boolean; message: string } {
  const now = new Date();
  const hours = now.getHours();
  const day = now.getDay();

  if (day === 0) {
    if (hours >= 9 && hours < 22) {
      return { open: true, message: "Open · Closes at 10:00 PM" };
    }
    return { open: false, message: "Closed · Opens Sunday 9:00 AM" };
  }

  if (hours >= 7 && hours < 23) {
    return { open: true, message: `Open · Closes at 11:00 PM` };
  }
  return { open: false, message: "Closed · Opens at 7:00 AM" };
}

export function getReadTime(content: string): number {
  const words = content.split(/\s+/).length;
  return Math.ceil(words / 200);
}

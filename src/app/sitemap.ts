import type { MetadataRoute } from "next";

const SITE = "https://lumiere-nine-omega.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "", "/menu", "/about", "/reservations", "/gallery",
    "/events", "/blog", "/contact", "/loyalty", "/gift-cards", "/cart",
  ];
  return routes.map((r) => ({
    url: `${SITE}${r}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: r === "" ? 1 : 0.7,
  }));
}

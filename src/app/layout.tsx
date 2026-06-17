import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/layout/client-layout";

const SITE_URL = "https://lumiere-nine-omega.vercel.app";
const DESCRIPTION =
  "Lumière — premium artisan café in Anna Nagar, Chennai. Single-origin beans, handcrafted beverages, all-day brunch, and a warm ambiance. Dine in, takeaway, order online, or reserve a table.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Lumière — Premium Artisan Café in Anna Nagar, Chennai",
    template: "%s · Lumière Café",
  },
  description: DESCRIPTION,
  applicationName: "Lumière Café",
  authors: [{ name: "B SAI SANTHOSH" }],
  creator: "B SAI SANTHOSH",
  keywords: [
    "café Chennai", "coffee shop Anna Nagar", "best café Chennai", "artisan coffee",
    "espresso", "latte", "cold brew", "brunch Chennai", "café near me",
    "table reservation", "order coffee online", "Lumière café",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Lumière — Premium Artisan Café in Anna Nagar, Chennai",
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Lumière Café",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumière — Premium Artisan Café, Chennai",
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "restaurant",
};

/* LocalBusiness / CafeOrCoffeeShop structured data for Google rich results. */
const schema = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: "Lumière — Premium Artisan Café",
  description: DESCRIPTION,
  url: SITE_URL,
  servesCuisine: ["Coffee", "Café", "Brunch", "Desserts"],
  priceRange: "₹₹",
  telephone: "+91-89250-75593",
  image: `${SITE_URL}/videos/hero.mp4`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "No. 1208, 2nd Avenue, Anna Nagar",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600040",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 13.0878, longitude: 80.2101 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "07:00", closes: "23:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "09:00", closes: "22:00" },
  ],
  sameAs: ["https://instagram.com/saixsanthosh"],
};

/*
  ═══════════════════════════════════════════════════════════
  Lumière — Premium Artisan Café · Anna Nagar, Chennai
  Designed & Developed by B SAI SANTHOSH
  Email: saisanthosh102030@gmail.com · Phone: +91 8925075593 · IG: @saixsanthosh
  ═══════════════════════════════════════════════════════════
*/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="font-body antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

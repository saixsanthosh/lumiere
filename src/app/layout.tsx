import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/layout/client-layout";

export const metadata: Metadata = {
  title: "Lumière — Premium Artisan Café",
  description:
    "Crafted to awaken your senses. Single-origin beans, handcrafted beverages, warm ambiance, and an unforgettable café experience. Dine in, order online, or reserve a table.",
  authors: [{ name: "B SAI SANTHOSH" }],
  keywords: [
    "café",
    "coffee",
    "artisan",
    "premium",
    "espresso",
    "latte",
    "brunch",
    "reservations",
  ],
  openGraph: {
    title: "Lumière — Premium Artisan Café",
    description:
      "Crafted to awaken your senses. Single-origin beans, handcrafted beverages, and warm ambiance.",
    type: "website",
  },
};

/*
  ═══════════════════════════════════════════════════════════
  Lumière — Premium Artisan Café
  Designed & Developed by B SAI SANTHOSH
  Email: saisanthosh102030@gmail.com
  Phone: +91 8925075593
  Instagram: @saixsanthosh
  ═══════════════════════════════════════════════════════════
*/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-body antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

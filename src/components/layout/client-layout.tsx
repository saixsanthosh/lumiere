"use client";

import Navbar from "./navbar";
import Footer from "./footer";
import CartDrawer from "@/components/cart/cart-drawer";
import ToastContainer from "@/components/ui/toast";
import WhatsAppFloat from "@/components/shared/whatsapp-float";
import LenisProvider from "@/components/shared/lenis-provider";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LenisProvider>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <CartDrawer />
      <ToastContainer />
      <WhatsAppFloat />
    </LenisProvider>
  );
}

"use client";

import Navbar from "./navbar";
import Footer from "./footer";
import CartDrawer from "@/components/cart/cart-drawer";
import ToastContainer from "@/components/ui/toast";
import WhatsAppFloat from "@/components/shared/whatsapp-float";
import LenisProvider from "@/components/shared/lenis-provider";
import Preloader from "@/components/shared/preloader";
import ScrollProgress from "@/components/shared/scroll-progress";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LenisProvider>
      <Preloader />
      <ScrollProgress />
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <CartDrawer />
      <ToastContainer />
      <WhatsAppFloat />
    </LenisProvider>
  );
}

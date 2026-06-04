"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useToastStore } from "@/store/toast-store";
import { X, Check, AlertCircle, Info } from "lucide-react";

export default function ToastContainer() {
  const { toasts, removeToast } = useToastStore();

  const icons = {
    success: <Check size={16} className="text-sage" />,
    error: <AlertCircle size={16} className="text-terracotta" />,
    info: <Info size={16} className="text-caramel" />,
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex flex-col gap-2 pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="pointer-events-auto glass-dark rounded-lg px-4 py-3 flex items-center gap-3
                       min-w-[280px] shadow-lg"
          >
            {icons[toast.type]}
            <p className="text-cream text-sm font-body flex-1">{toast.message}</p>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-text-muted-dark hover:text-cream transition-colors"
            >
              <X size={14} />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

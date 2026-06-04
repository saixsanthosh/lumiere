"use client";

import { motion, type Variants } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const scaleUpVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

interface Props {
  children: React.ReactNode;
  variant?: "fade-up" | "fade-in" | "scale-up";
  className?: string;
  delay?: number;
}

export function AnimateOnScroll({
  children,
  variant = "fade-up",
  className,
  delay = 0,
}: Props) {
  const [ref, controls] = useScrollAnimation();

  const variants: Record<string, Variants> = {
    "fade-up": fadeUpVariants,
    "fade-in": fadeInVariants,
    "scale-up": scaleUpVariants,
  };

  const selected = variants[variant];

  return (
    <motion.div
      ref={ref as React.Ref<HTMLDivElement>}
      initial="hidden"
      animate={controls}
      variants={selected}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [ref, controls] = useScrollAnimation();

  return (
    <motion.div
      ref={ref as React.Ref<HTMLDivElement>}
      initial="hidden"
      animate={controls}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={fadeUpVariants} className={className}>
      {children}
    </motion.div>
  );
}

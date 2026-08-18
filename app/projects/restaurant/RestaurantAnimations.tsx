"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type AnimationProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function FadeUp({
  children,
  className = "",
  delay = 0,
}: AnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeUpScroll({
  children,
  className = "",
  delay = 0,
}: AnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
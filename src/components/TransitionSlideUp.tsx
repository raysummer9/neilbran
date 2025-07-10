"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TransitionSlideUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function TransitionSlideUp({ children, delay = 0, duration = 0.7, className = "" }: TransitionSlideUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
} 
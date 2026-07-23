"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function Button({
  children,
  onClick,
  className = "",
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className={`px-6 py-3 rounded-xl bg-yellow-400 text-black font-semibold shadow-lg hover:bg-yellow-300 transition-all ${className}`}
    >
      {children}
    </motion.button>
  );
}
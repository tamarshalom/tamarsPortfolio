"use client";

import { usePathname } from "next/navigation";
import { useRef } from "react";
import { motion } from "framer-motion";

const variants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -4 },
};

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  // First load: show content immediately (no opacity 0) so we never get a blank white screen.
  // Route changes: run the fade+up animation.
  const skipInitial = isFirstRender.current;
  if (isFirstRender.current) isFirstRender.current = false;

  return (
    <motion.div
      key={pathname}
      initial={skipInitial ? false : "initial"}
      animate="animate"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

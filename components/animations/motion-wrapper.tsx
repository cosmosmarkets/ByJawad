"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type MotionWrapperProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

export function MotionWrapper({
  children,
  className,
  delay = 0,
  ...props
}: MotionWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

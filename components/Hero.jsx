"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "./motionConfig";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-20 pb-24 overflow-hidden text-center"
      aria-label="Hero"
    >
      <div className="hero-halftone-scene" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-cream/10 via-cream/72 to-cream pointer-events-none" aria-hidden="true" />
      <motion.div
        className="relative max-w-4xl mx-auto px-6 lg:px-10"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.14em] text-ink/55 mb-6 flex justify-center flex-wrap gap-x-3 gap-y-1">
          <span>Portfolio sites</span>
          <span className="text-riso" aria-hidden="true">·</span>
          <span>For creative freelancers</span>
          <span className="text-riso" aria-hidden="true">·</span>
          <span className="text-forest">Starting at $300</span>
        </motion.p>
        <motion.h1 variants={fadeUp} className="font-display tracking-[-0.025em] leading-[1.06] text-[clamp(2.2rem,6.5vw,4.8rem)] mb-8 max-w-3xl mx-auto">
          <span className="block">Your work is <span className="text-forest">great.</span></span>
          <span className="block">Your website should feel <span className="text-riso">unforgettable.</span></span>
        </motion.h1>
        <motion.p variants={fadeUp} className="text-lg leading-[1.7] text-ink/80 max-w-2xl mx-auto mb-3">
          I design and build high-conversion portfolio sites for photographers,
          designers, illustrators, and studios.
        </motion.p>
        <motion.p variants={fadeUp} className="text-sm text-forest font-medium mb-10">
          Built with modern stack + clear messaging, so your best work gets seen faster.
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-wrap justify-center items-center gap-4">
          <motion.a
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ y: 0, scale: 0.99 }}
            href="#intake-form"
            className="inline-flex items-center justify-center px-7 py-3 bg-forest text-cream text-sm font-semibold rounded-sm"
          >
            Start your project
          </motion.a>
          <a href="#proof" className="inline-flex items-center text-sm font-semibold text-forest border-b border-transparent hover:border-forest">
            See proof
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./motionConfig";

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-24 lg:py-28 border-y border-forest/10 bg-white/50"
      initial="hidden"
      animate="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <p className="text-xs uppercase tracking-[0.14em] text-forest mb-4">Hey — I&apos;m Jawad</p>
        <motion.img
          src="/brand_assets/jawad-avatar.svg"
          alt="Jawad avatar"
          className="w-full max-w-md border border-forest/10 rounded-sm bg-cream-muted p-4 mb-8"
          width="400"
          height="250"
          whileHover={{ y: -4, rotate: -0.3 }}
        />
        <h2 className="font-display tracking-[-0.025em] text-[clamp(1.9rem,4vw,3rem)] leading-[1.06]">
          I build 3D worlds by day, and portfolio sites that convert by night.
        </h2>
        <p className="text-base leading-[1.7] text-ink/80 mt-6">
          Product + growth background means each page pushes toward real inquiries,
          not only visual polish.
        </p>
      </div>
    </motion.section>
  );
}

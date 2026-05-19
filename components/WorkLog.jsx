"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "./motionConfig";

const items = [
  {
    title: "Stage 01 — Direction lock",
    subtitle: "Trust cleanup + hero art direction",
    body: "Centered hero, stronger halftone language, truthful messaging baseline before migration.",
    tags: ["Live now", "2026", "Next.js", "Tailwind", "Framer-ready"],
  },
  {
    title: "Stage 02 — Migration",
    subtitle: "From single-file HTML to Next components",
    body: "Section-by-section port with design token parity and maintainable architecture.",
    tags: ["In progress", "2026", "Next.js"],
  },
  {
    title: "Stages 03–04 — Motion + halftone polish",
    subtitle: "Interactivity, responsiveness, and signature visuals",
    body: "Scroll-aware motion, accessibility-safe animation, denser halftone treatment.",
    tags: ["Planned", "2026", "Framer Motion"],
  },
];

export default function WorkLog() {
  return (
    <motion.section
      id="work"
      className="py-24 lg:py-28"
      initial="hidden"
      animate="visible"
      variants={fadeUp}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <p className="text-xs uppercase tracking-[0.14em] text-forest mb-4">Build log</p>
        <h2 className="font-display tracking-[-0.025em] text-[clamp(1.9rem,4vw,3rem)] leading-[1.06] max-w-2xl">
          Real progress, no fake case studies.
        </h2>
        <p className="text-xs uppercase tracking-[0.14em] text-ink/55 mt-4 normal-case">
          Transparent stage updates until client launches go live.
        </p>

        <motion.div className="grid lg:grid-cols-3 gap-6 mt-10" variants={stagger}>
          {items.map((item) => (
            <motion.article
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              key={item.title}
              className="relative bg-white border border-forest/10 rounded-sm p-6 halftone-card overflow-hidden"
            >
              <h3 className="font-display text-2xl tracking-[-0.02em] relative z-10">{item.title}</h3>
              <p className="text-sm text-forest font-semibold mt-1 relative z-10">{item.subtitle}</p>
              <p className="text-sm text-ink/75 leading-relaxed mt-4 relative z-10">{item.body}</p>
              <div className="flex flex-wrap gap-2 mt-5 relative z-10">
                {item.tags.map((tag) => (
                  <span className="pill-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

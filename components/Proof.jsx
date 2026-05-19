"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "./motionConfig";

const proof = [
  {
    stat: "45k+ CCU",
    body: "CMO at DevPacks — Roblox asset marketplace with millions of visits and 150+ paying customers.",
    meta: "DevPacks · Marketing",
  },
  {
    stat: "Weld",
    body: "Founder of weldroblox.com — hiring marketplace designed and built end-to-end.",
    meta: "Founder · Product + code",
  },
  {
    stat: "200+",
    body: "Creators in commissions community, with real production collaboration in 3D pipelines.",
    meta: "3D · cosmosmodels.co.uk",
  },
];

export default function Proof() {
  return (
    <motion.section
      id="proof"
      className="py-24 lg:py-28 bg-cream-muted border-y border-forest/10"
      initial="hidden"
      animate="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <p className="text-xs uppercase tracking-[0.14em] text-forest mb-4">Why work with me</p>
        <h2 className="font-display tracking-[-0.025em] text-[clamp(1.9rem,4vw,3rem)] leading-[1.06] max-w-xl">
          I ship real work — not just promises.
        </h2>
        <motion.div className="grid md:grid-cols-3 gap-6 mt-10" variants={stagger}>
          {proof.map((card) => (
            <motion.article
              key={card.stat}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              className="bg-white border border-forest/12 rounded-sm p-6"
            >
              <p className="font-display text-3xl tracking-[-0.03em] text-forest">{card.stat}</p>
              <p className="text-sm text-ink/80 leading-relaxed mt-3">{card.body}</p>
              <p className="text-xs uppercase tracking-[0.14em] text-forest mt-4">{card.meta}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

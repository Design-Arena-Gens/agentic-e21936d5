"use client";

import { competitors } from "@/data/competitors";
import { motion } from "framer-motion";

export function StrengthsWeaknesses() {
  const aggregatedStrengths = Array.from(
    new Set(competitors.flatMap((competitor) => competitor.strengths))
  );

  const aggregatedWeaknesses = Array.from(
    new Set(competitors.flatMap((competitor) => competitor.weaknesses))
  );

  return (
    <section
      id="strengths"
      className="mx-auto w-full max-w-6xl space-y-10 px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-card backdrop-blur-xl md:p-10"
      >
        <h3 className="font-display text-2xl text-white">
          Competitive Strength Signals
        </h3>
        <p className="mt-2 text-sm text-white/60">
          Momentum drivers worth matching or exceeding to maintain parity in key
          user journeys.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {aggregatedStrengths.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-accent-secondary/40 bg-accent-secondary/15 p-4 text-sm text-white/80"
            >
              {item}
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-card backdrop-blur-xl md:p-10"
      >
        <h3 className="font-display text-2xl text-white">
          Opportunity & Gap Map
        </h3>
        <p className="mt-2 text-sm text-white/60">
          Address these friction points to outperform in usability, speed, and
          search discoverability.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {aggregatedWeaknesses.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-red-400/40 bg-red-500/10 p-4 text-sm text-white/80"
            >
              {item}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

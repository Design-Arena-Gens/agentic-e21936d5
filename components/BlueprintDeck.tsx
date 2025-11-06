"use client";

import { experienceNorthStar, sitemap, seoBlueprint } from "@/data/blueprint";
import { motion } from "framer-motion";

export function BlueprintDeck() {
  return (
    <section
      id="blueprint"
      className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-card backdrop-blur-xl md:p-10"
      >
        <div className="flex flex-col gap-4">
          <span className="text-xs uppercase tracking-[0.3em] text-accent-primary/70">
            North Star
          </span>
          <h3 className="font-display text-2xl text-white">
            Experience Principles & Differentiators
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="font-medium text-sm text-white/70">
                Experience Principles
              </p>
              <ul className="mt-3 space-y-3 text-sm text-white/70">
                {experienceNorthStar.principles.map((principle) => (
                  <li
                    key={principle}
                    className="rounded-xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    {principle}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-medium text-sm text-white/70">
                Differentiators
              </p>
              <ul className="mt-3 space-y-3 text-sm text-white/70">
                {experienceNorthStar.differentiators.map((diff) => (
                  <li
                    key={diff}
                    className="rounded-xl border border-accent-primary/30 bg-accent-primary/10 p-4"
                  >
                    {diff}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <p className="font-medium text-sm text-white/70">
            Architecture Pillars
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {experienceNorthStar.architecture.map((element) => (
              <div
                key={element.name}
                className="flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4"
              >
                <div>
                  <h4 className="font-display text-lg text-white">
                    {element.name}
                  </h4>
                  <p className="mt-1 text-sm text-white/60">
                    {element.description}
                  </p>
                </div>
                <ul className="mt-auto space-y-2 text-xs text-white/70">
                  {element.enhancements.map((enhancement) => (
                    <li
                      key={enhancement}
                      className="rounded-lg border border-white/10 bg-white/[0.03] p-3"
                    >
                      {enhancement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div
        id="sitemap"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-card backdrop-blur-xl md:p-10"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-accent-secondary/70">
          Information Architecture
        </span>
        <h3 className="mt-3 font-display text-2xl text-white">
          Premium Site Map & Narrative Spine
        </h3>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {sitemap.map((node) => (
            <div
              key={node.title}
              className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4"
            >
              <div>
                <h4 className="font-display text-xl text-white">
                  {node.title}
                </h4>
                <p className="mt-1 text-sm text-white/60">
                  {node.description}
                </p>
              </div>
              <ul className="space-y-2 text-xs text-white/70">
                {node.nodes.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-white/10 bg-white/[0.04] p-3"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        id="seo"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-card backdrop-blur-xl md:p-10"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-accent-primary/70">
          SEO Blueprint
        </span>
        <h3 className="mt-3 font-display text-2xl text-white">
          Ranking Acceleration Framework
        </h3>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {seoBlueprint.pillars.map((pillar) => (
            <div
              key={pillar.name}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-4"
            >
              <h4 className="font-display text-lg text-white">
                {pillar.name}
              </h4>
              <ul className="mt-3 space-y-2 text-xs text-white/70">
                {pillar.actions.map((action) => (
                  <li
                    key={action}
                    className="rounded-lg border border-white/10 bg-white/[0.03] p-3"
                  >
                    {action}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl border border-accent-secondary/30 bg-accent-secondary/10 p-6">
          <h4 className="font-display text-lg text-white">
            Technical Performance Playbook
          </h4>
          <ul className="mt-3 grid gap-3 text-sm text-white/80 md:grid-cols-3">
            {seoBlueprint.performance.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-white/10 bg-white/[0.05] p-3"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}

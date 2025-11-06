"use client";

import { motion } from "framer-motion";
import { uiPatterns, performanceGuardrails } from "@/data/patterns";
import { CheckCircle2Icon } from "lucide-react";

export function OpportunityMatrix() {
  return (
    <section className="mx-auto w-full max-w-6xl space-y-10 px-6">
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-card backdrop-blur-xl md:p-10">
        <h3 className="font-display text-2xl text-white">
          UX & UI Pattern Intelligence
        </h3>
        <p className="mt-2 text-sm text-white/60">
          Distilling structural patterns, behavior insights, and opportunity
          zones across the competitive landscape.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {uiPatterns.map((pattern) => (
            <motion.div
              key={pattern.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                  Pattern
                </p>
                <h4 className="font-display text-xl text-white">
                  {pattern.category}
                </h4>
              </div>
              <div className="space-y-2 text-sm text-white/70">
                {pattern.observations.map((obs) => (
                  <p key={obs} className="rounded-lg bg-white/5 p-3">
                    {obs}
                  </p>
                ))}
              </div>
              <div className="rounded-xl border border-accent-secondary/30 bg-accent-secondary/10 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-accent-secondary/80">
                  Opportunity
                </p>
                <p className="mt-2 text-sm text-white/80">
                  {pattern.opportunity}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-card backdrop-blur-xl md:p-10">
        <h3 className="font-display text-2xl text-white">
          Performance Guardrails
        </h3>
        <p className="mt-2 text-sm text-white/60">
          Hard constraints that keep the next-generation build fast, resilient,
          and search-friendly.
        </p>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {performanceGuardrails.map((guardrail) => (
            <li
              key={guardrail}
              className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm text-white/70"
            >
              <CheckCircle2Icon className="mt-0.5 h-5 w-5 text-accent-secondary" />
              <span>{guardrail}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

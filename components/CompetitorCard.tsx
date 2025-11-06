"use client";

import { motion } from "framer-motion";
import { ExternalLinkIcon, StarIcon } from "lucide-react";
import type { Competitor } from "@/data/competitors";

type CompetitorCardProps = {
  competitor: Competitor;
  index: number;
};

export function CompetitorCard({ competitor, index }: CompetitorCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group relative flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-card backdrop-blur-xl"
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/50">
            <span>Competitor</span>
            <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-white/60">
              #{index + 1}
            </span>
          </div>
          <h3 className="mt-2 font-display text-2xl text-white">
            {competitor.name}
          </h3>
          <p className="mt-1 text-sm text-white/60">{competitor.summary}</p>
        </div>
        <a
          href={competitor.url}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-white/70 transition hover:border-white/40 hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit site
          <ExternalLinkIcon className="h-4 w-4" />
        </a>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            Core Value Proposition
          </p>
          <p className="mt-2 text-sm text-white/80">
            {competitor.coreValueProp}
          </p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            Performance Snapshot
          </p>
          <div className="mt-3 flex flex-wrap gap-4 text-sm text-white/80">
            <span className="rounded-full bg-white/10 px-3 py-1">
              Lighthouse {competitor.performance.lighthouse}/100
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1">
              Mobile {competitor.performance.mobileScore}/100
            </span>
          </div>
          <ul className="mt-2 list-inside list-disc text-xs text-white/60">
            {competitor.performance.speedNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        <div>
          <h4 className="font-display text-sm text-white/80">Structure</h4>
          <ul className="mt-3 flex flex-col gap-2 text-xs text-white/60">
            {competitor.structure.sections.map((section) => (
              <li
                key={section}
                className="rounded-lg border border-white/10 bg-white/0 p-2 transition hover:border-white/20 hover:bg-white/5"
              >
                {section}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm text-white/80">Interactive</h4>
          <ul className="mt-3 flex flex-col gap-2 text-xs text-white/60">
            {competitor.interactiveElements.map((item) => (
              <li key={item} className="rounded-lg border border-white/10 bg-white/0 p-2 transition hover:border-white/20 hover:bg-white/5">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm text-white/80">SEO Stack</h4>
          <p className="mt-2 text-xs text-white/60">
            {competitor.seo.metaTitle}
          </p>
          <p className="mt-2 text-xs text-white/50">
            {competitor.seo.metaDescription}
          </p>
          <div className="mt-3 text-xs text-white/70">
            <p className="font-medium text-white/80">Internal Links</p>
            <ul className="mt-2 grid gap-1">
              {competitor.seo.internalLinks.map((link) => (
                <li
                  key={link}
                  className="flex items-center gap-2 rounded-full bg-white/10 px-2 py-1"
                >
                  <StarIcon className="h-3 w-3 text-accent-secondary" />
                  <span>{link}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <h4 className="font-display text-sm text-white/80">Strengths</h4>
          <ul className="mt-3 space-y-2 text-xs text-white/70">
            {competitor.strengths.map((strength) => (
              <li
                key={strength}
                className="rounded-xl border border-accent-secondary/30 bg-accent-secondary/10 p-3"
              >
                {strength}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm text-white/80">Weaknesses</h4>
          <ul className="mt-3 space-y-2 text-xs text-white/70">
            {competitor.weaknesses.map((weakness) => (
              <li
                key={weakness}
                className="rounded-xl border border-red-500/30 bg-red-500/10 p-3"
              >
                {weakness}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <h4 className="font-display text-sm text-white/80">Differentiators</h4>
        <div className="mt-3 flex flex-wrap gap-2 text-xs text-white/70">
          {competitor.differentiators.map((diff) => (
            <span
              key={diff}
              className="rounded-full border border-accent-primary/40 bg-accent-primary/10 px-3 py-1"
            >
              {diff}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

"use client";

import { competitors } from "@/data/competitors";
import { motion } from "framer-motion";
import { ChevronRightIcon, TrendingUpIcon, ZapIcon } from "lucide-react";

const metrics = [
  {
    label: "SEO Visibility Gain",
    value: "+74%",
    detail: "Avg. increase across competitive rebuild pilots."
  },
  {
    label: "Conversion Uplift",
    value: "+36%",
    detail: "Measured after AI playbook-led redesign."
  },
  {
    label: "Time-to-Insight",
    value: "22 min",
    detail: "From discovery call to prioritized UX roadmap."
  }
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-radial-glow opacity-80" />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between"
        >
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-secondary/30 bg-accent-secondary/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-accent-secondary">
              <ZapIcon className="h-4 w-4" />
              Next-Gen UX
            </span>
            <h1 className="mt-6 font-display text-4xl leading-tight text-white md:text-5xl">
              Outclass competitors with a premium UX intelligence engine built
              for tool-based products.
            </h1>
            <p className="mt-4 text-lg text-white/70 md:text-xl">
              We dissect every pixel, interaction, and keyword from your market
              leaders, then craft a faster, smarter, AI-assisted experience that
              commands attention and ranks effortlessly.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-sm">
              <a
                href="#analysis"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-medium text-slate-1000 transition hover:bg-white/90"
              >
                Review Competitive Breakdown
                <ChevronRightIcon className="h-5 w-5" />
              </a>
              <a
                href="#ai-studio"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-medium text-white/80 transition hover:border-white/40 hover:text-white"
              >
                Launch Strategy Copilot
                <TrendingUpIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="flex w-full flex-col gap-4 md:max-w-sm">
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                Competitors Benchmarked
              </p>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                {competitors.map((competitor) => (
                  <li
                    key={competitor.name}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3"
                  >
                    <span>{competitor.name}</span>
                    <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                      {competitor.performance.lighthouse}/100
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-accent-primary/30 bg-accent-primary/10 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-accent-primary/80">
                Core Promise
              </p>
              <p className="mt-3 text-sm text-white/80">
                Ship a front-end experience that looks ultra-premium, delivers
                sub-second load times, and showcases AI-guided journeys your
                competitors cannot replicate.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-4 md:grid-cols-3"
        >
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-white/10 bg-white/[0.05] p-6"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                {metric.label}
              </p>
              <p className="mt-2 font-display text-3xl text-white">
                {metric.value}
              </p>
              <p className="mt-2 text-sm text-white/60">{metric.detail}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

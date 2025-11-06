"use client";

import { useEffect, useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import { SparklesIcon, Wand2Icon } from "lucide-react";
import { competitors } from "@/data/competitors";
import { experienceNorthStar } from "@/data/blueprint";

const personas = [
  "Product Marketing Lead",
  "Growth Strategist",
  "Founder / Operator",
  "Agency Partner"
];

const focusAreas = [
  "Conversion Rate Optimization",
  "SEO Authority Building",
  "Launch Campaign",
  "Retention & Expansion"
];

const tones = ["Analytical", "Confident", "Empathetic", "Disruptive"];

function synthesizePlaybook({
  persona,
  focus,
  tone,
  highlight
}: {
  persona: string;
  focus: string;
  tone: string;
  highlight: string;
}) {
  const competitorNotes = competitors
    .map(
      (competitor) =>
        `**${competitor.name}** — Strength to leverage: ${
          competitor.strengths[0]
        }. Gap to exploit: ${competitor.weaknesses[0]}.`
    )
    .join("\n");

  const differentiator = experienceNorthStar.differentiators[0];

  return `### Persona Narrative
Tone: **${tone}** · Focus: **${focus}**

Craft a landing experience that speaks directly to **${persona}**. Lead with the pain they feel today: highlight how competitors overcomplicate ${highlight.toLowerCase()} and compromise speed.

### Above-the-Fold Strategy
- Hero message: Embed the differentiator — *${differentiator}* — as the proof of modernization.
- Visual: Realtime dashboard snippet with before/after KPI deltas tied to ${focus.toLowerCase()}.
- CTA: Offer instant access to the AI playbook studio with ungated preview.

### Section Blueprint
1. **Diagnostic Intelligence** — Use a 3-card grid comparing competitor gaps: 
${competitorNotes}
2. **Outcome Timeline** — 4-step progression illustrating improvement in ${focus.toLowerCase()} over 90 days.
3. **Activation Layer** — Modular cards for integrations, each showing automation time saved.

### SEO & Content Moves
- Primary keyword cluster: \`${focus.toLowerCase()} tools for ${persona.toLowerCase()}\`
- Add FAQ schema answering intent-aligned queries about competitive differentiation.
- Internal link anchors: Strategy resources, benchmarks, request-demo with analytics UTM.

### Experiment Backlog
- Run split test on hero CTA copy: “Launch Playbook” vs. “Preview Full Analysis”.
- Add interactive ROI calculator in fold two with instant results.
- Instrument scroll-depth and conversion-by-section to fuel next sprint insights.`;
}

export function StrategyCopilot() {
  const [persona, setPersona] = useState(personas[0]);
  const [focus, setFocus] = useState(focusAreas[0]);
  const [tone, setTone] = useState(tones[0]);
  const [highlight, setHighlight] = useState("competitive analysis");
  const [playbook, setPlaybook] = useState(() =>
    synthesizePlaybook({ persona, focus, tone, highlight })
  );

  useEffect(() => {
    setPlaybook(synthesizePlaybook({ persona, focus, tone, highlight }));
  }, [persona, focus, tone, highlight]);

  const heroRecommendation = useMemo(() => {
    const tonePrefix =
      tone === "Analytical"
        ? "Data-backed"
        : tone === "Confident"
        ? "Command the narrative with"
        : tone === "Empathetic"
        ? "Show you understand the struggle with"
        : "Shock and awe with";
    return `${tonePrefix} a hero promise that proves the AI copilot resolves ${highlight.toLowerCase()} within the first session.`;
  }, [highlight, tone]);

  return (
    <section
      id="ai-studio"
      className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-white/[0.01] p-6 shadow-card backdrop-blur-xl md:p-10"
      >
        <div className="flex flex-col gap-4">
          <span className="inline-flex items-center gap-2 self-start rounded-full border border-accent-primary/30 bg-accent-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-accent-primary/80">
            <SparklesIcon className="h-4 w-4" />
            AI Studio
          </span>
          <h3 className="font-display text-3xl text-white">
            Strategy Copilot
          </h3>
          <p className="text-sm text-white/60">
            Generate persona-specific UX, UI, and SEO playbooks powered by
            competitive insights and next-gen heuristics. Adjust the sliders
            below and get deployment-ready guidance.
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-5">
          <div className="md:col-span-2 space-y-6">
            <div>
              <label
                htmlFor="persona"
                className="text-xs uppercase tracking-[0.3em] text-white/50"
              >
                Persona
              </label>
              <select
                id="persona"
                value={persona}
                onChange={(event) => setPersona(event.target.value)}
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white/80 focus:border-accent-secondary focus:outline-none"
              >
                {personas.map((item) => (
                  <option key={item} value={item} className="bg-slate-1000">
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="focus"
                className="text-xs uppercase tracking-[0.3em] text-white/50"
              >
                Focus Area
              </label>
              <select
                id="focus"
                value={focus}
                onChange={(event) => setFocus(event.target.value)}
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white/80 focus:border-accent-secondary focus:outline-none"
              >
                {focusAreas.map((item) => (
                  <option key={item} value={item} className="bg-slate-1000">
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="tone"
                className="text-xs uppercase tracking-[0.3em] text-white/50"
              >
                Tone
              </label>
              <select
                id="tone"
                value={tone}
                onChange={(event) => setTone(event.target.value)}
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white/80 focus:border-accent-secondary focus:outline-none"
              >
                {tones.map((item) => (
                  <option key={item} value={item} className="bg-slate-1000">
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="highlight"
                className="text-xs uppercase tracking-[0.3em] text-white/50"
              >
                Priority Topic
              </label>
              <input
                id="highlight"
                value={highlight}
                onChange={(event) => setHighlight(event.target.value)}
                placeholder="e.g. benchmark reporting"
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white/80 focus:border-accent-secondary focus:outline-none"
              />
            </div>
            <div className="rounded-2xl border border-accent-secondary/30 bg-accent-secondary/10 p-4 text-sm text-white/80">
              <Wand2Icon className="mb-2 h-5 w-5 text-accent-secondary" />
              {heroRecommendation}
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-black/40 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                Generated Playbook
              </p>
              <div className="mt-3 flex-1 overflow-y-auto rounded-xl border border-white/10 bg-black/20 p-4 text-sm leading-relaxed text-white/80">
                <ReactMarkdown
                  components={{
                    h3: ({ children }) => (
                      <h3 className="mt-4 font-display text-lg text-white">
                        {children}
                      </h3>
                    ),
                    p: ({ children }) => (
                      <p className="mt-2 text-sm text-white/75">{children}</p>
                    ),
                    ul: ({ children }) => (
                      <ul className="ml-4 list-disc text-sm text-white/70">
                        {children}
                      </ul>
                    ),
                    li: ({ children }) => (
                      <li className="mt-1">{children}</li>
                    )
                  }}
                >
                  {playbook}
                </ReactMarkdown>
              </div>
              <div className="mt-4 flex flex-wrap gap-3 text-xs text-white/60">
                <span className="rounded-full border border-white/10 px-3 py-1">
                  Export Markdown
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1">
                  Copy to Clipboard
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1">
                  Generate Experiments
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

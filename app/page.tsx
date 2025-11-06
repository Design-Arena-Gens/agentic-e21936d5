import { competitors } from "@/data/competitors";
import { PageShell } from "@/components/PageShell";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { CompetitorCard } from "@/components/CompetitorCard";
import { StrengthsWeaknesses } from "@/components/StrengthsWeaknesses";
import { OpportunityMatrix } from "@/components/OpportunityMatrix";
import { BlueprintDeck } from "@/components/BlueprintDeck";
import { StrategyCopilot } from "@/components/StrategyCopilot";

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <section
        id="analysis"
        className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-16"
      >
        <SectionHeading
          eyebrow="Deep Audit"
          title="Competitor Systems Deconstructed"
          description="Structured assessment covering information architecture, interaction design, conversion triggers, and search optimization across the core landscape."
        />
        <div className="grid gap-6">
          {competitors.map((competitor, index) => (
            <CompetitorCard
              key={competitor.name}
              competitor={competitor}
              index={index}
            />
          ))}
        </div>
      </section>
      <StrengthsWeaknesses />
      <OpportunityMatrix />
      <BlueprintDeck />
      <SectionHeading
        id="playbook"
        eyebrow="AI Assist"
        title="Interactive Strategy Layer"
        description="Blend competitive insights with AI-driven ideation to rapidly prototype flows, copy, and SEO moves before design and build."
      />
      <StrategyCopilot />
    </PageShell>
  );
}

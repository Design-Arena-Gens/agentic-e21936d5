import { ReactNode } from "react";
import Link from "next/link";
import { GithubIcon, ExternalLinkIcon } from "lucide-react";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="relative flex min-h-screen flex-col bg-slate-1000/80 text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-soft opacity-40" />
      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-1000/80 backdrop-blur-2xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary p-[2px] shadow-glow">
              <div className="flex h-full w-full items-center justify-center rounded-[0.9rem] bg-slate-1000">
                <span className="font-display text-lg font-semibold text-white">
                  AX
                </span>
              </div>
            </div>
            <div>
              <p className="font-display text-lg leading-tight text-white">
                Agentic UX Intelligence
              </p>
              <p className="text-xs text-white/60">
                Premium competitive UX & SEO research hub
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-5 text-sm text-white/70 md:flex">
            <a href="#analysis" className="transition hover:text-white">
              Competitive Analysis
            </a>
            <a href="#strengths" className="transition hover:text-white">
              Strengths & Gaps
            </a>
            <a href="#blueprint" className="transition hover:text-white">
              Next-Gen Blueprint
            </a>
            <a href="#playbook" className="transition hover:text-white">
              AI Playbook
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <Link
              href="#ai-studio"
              className="hidden rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/10 md:inline-flex"
            >
              Launch Strategy Copilot
            </Link>
            <Link
              href="https://github.com"
              className="rounded-full border border-white/10 p-2 text-white/70 transition hover:text-white"
            >
              <GithubIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-white/10 bg-slate-1000/80 py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-lg text-white">
              Build faster. Rank smarter. Convert harder.
            </p>
            <p className="text-sm text-white/60">
              Agentic UX Intelligence Suite synthesizes competitor research,
              AI-led ideation, and performance guardrails in one premium
              workspace.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-white/60">
            <a
              href="#sitemap"
              className="inline-flex items-center gap-1 transition hover:text-white"
            >
              <ExternalLinkIcon className="h-4 w-4" />
              Architecture Sitemap
            </a>
            <a
              href="#seo"
              className="inline-flex items-center gap-1 transition hover:text-white"
            >
              <ExternalLinkIcon className="h-4 w-4" />
              SEO Blueprint
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

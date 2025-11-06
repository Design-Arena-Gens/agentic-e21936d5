import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-geist-display)", "Inter", "system-ui", "sans-serif"]
      },
      colors: {
        ink: "#101118",
        "ink-muted": "#34384C",
        "slate-1000": "#0A0B14",
        "accent-primary": "#5A5CF2",
        "accent-secondary": "#34D1BF",
        "surface-soft": "#111423",
        "surface-card": "rgba(255,255,255,0.05)"
      },
      borderRadius: {
        xl: "1.25rem",
        "2xl": "1.75rem"
      },
      boxShadow: {
        glow: "0 0 40px rgba(90, 92, 242, 0.35)",
        card: "0 20px 40px -24px rgba(16, 17, 24, 0.6)"
      },
      backgroundImage: {
        "radial-glow":
          "radial-gradient(circle at top, rgba(90,92,242,0.35) 0%, transparent 55%)",
        "grid-soft":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)"
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};

export default config;

import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap"
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-geist-display",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agentic-e21936d5.vercel.app"),
  title: {
    default: "Agentic UX Intelligence Suite",
    template: "%s · Agentic UX Intelligence Suite"
  },
  description:
    "Next-generation competitive UX intelligence platform delivering deep audits, AI-enhanced insights, and premium front-end blueprints to outpace tool-based website competitors.",
  keywords: [
    "UX intelligence",
    "competitive analysis",
    "SEO audit",
    "UI strategy",
    "tool-based websites",
    "product design research",
    "conversion optimization"
  ],
  authors: [{ name: "Agentic UX Intelligence Team" }],
  openGraph: {
    title: "Agentic UX Intelligence Suite",
    description:
      "Premium-grade analysis and AI-driven ideation for tool-based SaaS experiences.",
    url: "https://agentic-e21936d5.vercel.app",
    siteName: "Agentic UX Intelligence Suite",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic UX Intelligence Suite",
    description:
      "Modern UX, UI, and SEO intelligence to outrank tool competitors effortlessly."
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: "https://agentic-e21936d5.vercel.app"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body>{children}</body>
    </html>
  );
}

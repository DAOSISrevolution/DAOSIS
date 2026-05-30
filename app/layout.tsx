import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DAOSIS — Decentralized Self-Improvement System",
  description:
    "DAOSIS is an evidence-powered, community-owned transformation network. Truth and results rise to the top — not marketing.",
  keywords: [
    "DAO",
    "decentralized",
    "self-improvement",
    "goal tracking",
    "collective intelligence",
    "tokenomics",
    "open source",
  ],
  openGraph: {
    title: "DAOSIS — Decentralized Self-Improvement System",
    description:
      "An evidence-powered, community-owned transformation network where truth and results rise to the top.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

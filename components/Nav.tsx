"use client";

import { useEffect, useState } from "react";
import { links } from "@/lib/content";

const sections = [
  { id: "features", label: "Features" },
  { id: "demo", label: "Try it" },
  { id: "story", label: "Story" },
  { id: "roadmap", label: "Roadmap" },
  { id: "governance", label: "Governance" },
  { id: "support", label: "Support" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/85 backdrop-blur border-b border-line" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="text-xl">🌍</span>
          <span className="text-lg">DAOSIS</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-sm text-mist transition-colors hover:text-white"
            >
              {s.label}
            </a>
          ))}
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-line px-4 py-1.5 text-sm font-medium text-white transition-colors hover:border-brand hover:text-brand"
          >
            GitHub
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-2xl leading-none"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-ink/95 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="text-mist hover:text-white"
              >
                {s.label}
              </a>
            ))}
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="text-brand"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

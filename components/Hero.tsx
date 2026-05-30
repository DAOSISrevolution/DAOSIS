import { links } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-aurora">
      <div className="mx-auto max-w-6xl px-5 pb-20 pt-36 sm:pt-44">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-1.5 text-xs font-medium text-mist">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Open-source · Community-owned · Evidence-powered
          </span>

          <h1 className="mt-7 text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl">
            Self-improvement where{" "}
            <span className="gradient-text">truth and results</span> rise to the top.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-mist">
            DAOSIS is a decentralized network for transformation. Not marketers, middlemen,
            or corporations deciding what works — a public utility where proven outcomes
            guide everyone, and contributors earn real stake.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#demo"
              className="w-full rounded-full bg-brand px-6 py-3 font-semibold text-ink transition-transform hover:scale-[1.03] sm:w-auto"
            >
              Try the demo
            </a>
            <a
              href="#features"
              className="w-full rounded-full border border-line px-6 py-3 font-semibold text-white transition-colors hover:border-brand hover:text-brand sm:w-auto"
            >
              How it works
            </a>
          </div>

          <div className="mt-5 text-sm text-mist">
            <a href={links.videos.intro} target="_blank" rel="noreferrer" className="underline-offset-4 hover:text-white hover:underline">
              ▶ Watch the 60-second intro
            </a>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line text-center sm:grid-cols-4">
          {[
            ["6", "Core features"],
            ["1 cycle", "Self-reinforcing"],
            ["50/50", "Founder / earned votes"],
            ["100%", "Open source"],
          ].map(([stat, label]) => (
            <div key={label} className="bg-ink px-4 py-6">
              <div className="text-2xl font-bold gradient-text">{stat}</div>
              <div className="mt-1 text-xs text-mist">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

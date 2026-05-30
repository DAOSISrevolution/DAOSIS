import { roadmap } from "@/lib/content";

export default function Roadmap() {
  return (
    <section id="roadmap" className="border-t border-line bg-ink-soft">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">The plan</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Roadmap</h2>
          <p className="mt-4 text-mist">
            Six phases, shipped in sequence — each one unlocking the next loop of the cycle.
          </p>
        </div>

        <div className="relative mt-12 space-y-px overflow-hidden rounded-2xl border border-line bg-line">
          {roadmap.map((r, i) => (
            <div
              key={r.phase}
              className="flex flex-col gap-2 bg-ink p-6 sm:flex-row sm:items-center sm:gap-6"
            >
              <div className="flex items-center gap-4 sm:w-56 sm:shrink-0">
                <span className="font-mono text-sm text-brand">{r.phase}</span>
                <span className="text-lg font-semibold">{r.title}</span>
              </div>
              <p className="text-sm text-mist">{r.detail}</p>
              {i === 0 && (
                <span className="ml-auto hidden rounded-full bg-brand/15 px-3 py-1 text-xs font-semibold text-brand sm:inline">
                  In progress
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

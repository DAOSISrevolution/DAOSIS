import { storySteps } from "@/lib/content";

export default function Story() {
  return (
    <section id="story" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">In practice</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Selina's transformation.
          </h2>
          <p className="mt-4 text-mist">
            She'd tried multiple apps, gyms, and diets and always fell off track. Here's how
            the six features work together for her.
          </p>
        </div>

        <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
          {storySteps.map((s, i) => (
            <li key={s.label} className="bg-ink p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-brand text-sm font-semibold text-brand">
                  {i + 1}
                </span>
                <span className="font-semibold">{s.label}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-mist">{s.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-8 rounded-2xl border border-brand/40 bg-brand/5 p-6 text-center">
          <p className="text-white">
            <span className="font-semibold">Outcome:</span> Selina saves money, loses weight, and
            stays motivated — while everyone involved earns fairly for their impact.
          </p>
        </div>
      </div>
    </section>
  );
}

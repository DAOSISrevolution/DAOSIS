import { features } from "@/lib/content";

export default function Features() {
  return (
    <section id="features" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">The solution</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Six features, one self-reinforcing cycle.
          </h2>
          <p className="mt-4 text-mist">
            DAOSIS integrates six capabilities into a single loop. Each one feeds the next —
            and the whole system gets smarter as more people transform.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="card group relative overflow-hidden p-6 transition-colors hover:border-brand/60"
            >
              <div className="absolute right-5 top-5 text-xs font-mono text-line group-hover:text-mist">
                0{i + 1}
              </div>
              <div className="text-3xl">{f.icon}</div>
              <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
              <p className="text-sm font-medium text-brand">{f.tagline}</p>
              <p className="mt-3 text-sm leading-relaxed text-mist">{f.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-line bg-surface/40 p-6 text-center text-sm text-mist sm:text-base">
          More goals → more data → more awareness → better guidance → higher success →
          more reward → <span className="text-brand">stronger community</span> → more goals.
        </div>
      </div>
    </section>
  );
}

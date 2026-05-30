const problems = [
  { who: "Users", pain: "Waste time and money searching the web — bombarded with ads, hype, and conflicting advice." },
  { who: "Practitioners", pain: "Burn out on marketing, admin, and algorithm-chasing instead of serving clients." },
  { who: "Spaces", pain: "Gyms, studios, and homes sit empty because renting is bureaucratic and fragmented." },
  { who: "Research", pain: "Siloed and slow — no scoreboard for what actually works." },
];

export default function Problem() {
  return (
    <section className="border-t border-line bg-ink-soft">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">The status quo</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            An industry that rewards visibility over impact.
          </h2>
          <p className="mt-4 text-mist">
            Transformation today is scattered, inefficient, and mistrusted. Attention and
            profit flow to corporations and influencers while real contributors struggle.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p) => (
            <div key={p.who} className="card p-6">
              <div className="text-sm font-semibold text-violet">{p.who}</div>
              <p className="mt-3 text-sm leading-relaxed text-mist">{p.pain}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

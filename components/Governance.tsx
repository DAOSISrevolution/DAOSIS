export default function Governance() {
  return (
    <section id="governance" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            Community & ownership
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Owned by the people who build it.
          </h2>
          <p className="mt-4 text-mist">
            Governance is split 50/50 between fixed Founder Coins and earned Transformation
            Coin. The community votes on priorities, fraud prevention, and model funding.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="card p-7">
            <div className="text-3xl">🪙</div>
            <h3 className="mt-3 text-xl font-semibold">50 Founder Coins</h3>
            <p className="mt-1 text-sm font-medium text-brand">1% vote each · 50% governance</p>
            <p className="mt-3 text-sm leading-relaxed text-mist">
              Fixed and scarce. They represent long-term stewardship of the mission and keep
              the system scam-resistant.
            </p>
          </div>
          <div className="card p-7">
            <div className="text-3xl">🌱</div>
            <h3 className="mt-3 text-xl font-semibold">Transformation Coin</h3>
            <p className="mt-1 text-sm font-medium text-violet">Earned · 50% governance</p>
            <p className="mt-3 text-sm leading-relaxed text-mist">
              Earned through verified impact and high-quality data. Revenue-backed, tradable,
              and tied directly to governance of the network.
            </p>
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {[
            ["AGPL-3.0", "Codebase — run a public fork, publish your source."],
            ["CC-BY 4.0", "Docs & whitepapers — share and adapt with attribution."],
            ["Trademark", "“DAOSIS” name & logo are protected — forks rebrand."],
          ].map(([k, v]) => (
            <div key={k} className="rounded-xl border border-line bg-surface/40 p-5">
              <div className="font-semibold text-white">{k}</div>
              <p className="mt-2 text-sm text-mist">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

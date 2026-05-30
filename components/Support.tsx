import { fundingGoals, links } from "@/lib/content";

export default function Support() {
  return (
    <section id="support" className="border-t border-line bg-aurora">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            Funding goals
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Help build the utility for human growth.
          </h2>
          <p className="mt-4 text-mist">
            Every dollar accelerates DAOSIS from idea → working utility → global movement.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {fundingGoals.map((f) => (
            <div key={f.amount} className="card p-7 text-center">
              <div className="text-3xl font-bold gradient-text">{f.amount}</div>
              <p className="mt-3 text-sm text-mist">{f.goal}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={links.coinbase}
            target="_blank"
            rel="noreferrer"
            className="w-full rounded-full bg-brand px-6 py-3 text-center font-semibold text-ink transition-transform hover:scale-[1.03] sm:w-auto"
          >
            Donate crypto
          </a>
          <a
            href={links.paypal}
            target="_blank"
            rel="noreferrer"
            className="w-full rounded-full border border-line px-6 py-3 text-center font-semibold text-white transition-colors hover:border-brand hover:text-brand sm:w-auto"
          >
            Donate via PayPal
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className="w-full rounded-full border border-line px-6 py-3 text-center font-semibold text-white transition-colors hover:border-brand hover:text-brand sm:w-auto"
          >
            Contribute on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useMemo, useState } from "react";
import { buildPlan, examples } from "@/lib/planner";
import MandalaClock from "./MandalaClock";

export default function Demo() {
  const [input, setInput] = useState("Lose 15 pounds in 12 weeks");
  const [goal, setGoal] = useState("Lose 15 pounds in 12 weeks");
  const [weeks, setWeeks] = useState(12);

  const plan = useMemo(() => buildPlan(goal, weeks), [goal, weeks]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setGoal(input);
  };

  return (
    <section id="demo" className="border-t border-line bg-ink-soft">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            Try it · Guidance (Phase 1)
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Turn a wish into a plan and a Mandala Clock.
          </h2>
          <p className="mt-4 text-mist">
            This is a lightweight preview of DAOSIS Guidance. Type a goal — the planner drafts
            a SMART goal, weekly practices, and daily habits, then maps them onto your 24-hour
            Mandala Clock.
          </p>
        </div>

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-2">
          {/* Controls + plan */}
          <div>
            <form onSubmit={submit} className="card p-5">
              <label htmlFor="goal" className="text-sm font-medium text-white">
                What do you want to achieve?
              </label>
              <input
                id="goal"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="e.g. Learn conversational Spanish"
                className="mt-2 w-full rounded-lg border border-line bg-ink px-4 py-3 text-white outline-none placeholder:text-mist focus:border-brand"
              />

              <div className="mt-4 flex flex-wrap gap-2">
                {examples.map((ex) => (
                  <button
                    key={ex}
                    type="button"
                    onClick={() => {
                      setInput(ex);
                      setGoal(ex);
                    }}
                    className="rounded-full border border-line px-3 py-1 text-xs text-mist transition-colors hover:border-brand hover:text-brand"
                  >
                    {ex}
                  </button>
                ))}
              </div>

              <div className="mt-5">
                <label htmlFor="weeks" className="flex items-center justify-between text-sm text-mist">
                  <span>Timeframe</span>
                  <span className="font-semibold text-white">{weeks} weeks</span>
                </label>
                <input
                  id="weeks"
                  type="range"
                  min={4}
                  max={26}
                  value={weeks}
                  onChange={(e) => setWeeks(Number(e.target.value))}
                  className="mt-2 w-full accent-[#5eead4]"
                />
              </div>

              <button
                type="submit"
                className="mt-5 w-full rounded-full bg-brand px-5 py-3 font-semibold text-ink transition-transform hover:scale-[1.02]"
              >
                Generate plan
              </button>
            </form>

            <div className="card mt-5 p-5">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-violet/15 px-3 py-1 text-xs font-semibold text-violet">
                  {plan.category}
                </span>
                <span className="text-xs text-mist">SMART goal</span>
              </div>
              <p className="mt-3 font-medium text-white">{plan.smartGoal}</p>

              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-mist">Baseline</p>
              <p className="mt-1 text-sm text-mist">{plan.baseline}</p>

              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-mist">
                Weekly practices
              </p>
              <ul className="mt-2 space-y-1.5">
                {plan.weeklyPractices.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-white">
                    <span className="mt-1 text-brand">✓</span>
                    {p}
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-mist">
                Motivation anchor
              </p>
              <p className="mt-1 text-sm italic text-mist">“{plan.anchor}”</p>
            </div>
          </div>

          {/* Mandala Clock */}
          <div className="card flex flex-col items-center p-6 lg:sticky lg:top-24">
            <h3 className="self-start text-lg font-semibold">Your Mandala Clock</h3>
            <p className="mb-4 self-start text-sm text-mist">
              Daily habits placed across 24 hours.
            </p>
            <MandalaClock habits={plan.dailyHabits} />
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-mist">
          Preview only — runs entirely in your browser. The full system adds Awareness scoring,
          Connection matching, and calendar sync.
        </p>
      </div>
    </section>
  );
}

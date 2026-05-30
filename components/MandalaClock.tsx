"use client";

import { useState } from "react";
import type { Habit } from "@/lib/planner";

const SIZE = 320;
const C = SIZE / 2;
const RING = 118; // radius habits sit on

// 24h clock: hour 0 (midnight) at top, clockwise.
function hourToXY(hour: number, radius: number) {
  const angle = (hour / 24) * Math.PI * 2 - Math.PI / 2;
  return { x: C + radius * Math.cos(angle), y: C + radius * Math.sin(angle) };
}

export default function MandalaClock({ habits }: { habits: Habit[] }) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center">
      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="h-[320px] w-[320px] max-w-full animate-float"
        role="img"
        aria-label="Mandala Clock showing the day's habits"
      >
        <defs>
          <radialGradient id="mc-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#5eead4" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#5eead4" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="mc-ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5eead4" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
        </defs>

        {/* ambient core */}
        <circle cx={C} cy={C} r={150} fill="url(#mc-core)" className="animate-pulse-ring" />

        {/* concentric rings */}
        <circle cx={C} cy={C} r={RING} fill="none" stroke="#232c47" strokeWidth={1} />
        <circle cx={C} cy={C} r={RING + 22} fill="none" stroke="#232c47" strokeWidth={1} />
        <circle
          cx={C}
          cy={C}
          r={RING}
          fill="none"
          stroke="url(#mc-ring)"
          strokeWidth={2}
          strokeDasharray="2 8"
          className="animate-spin-slow"
          style={{ transformOrigin: "center" }}
        />

        {/* 24 hour ticks */}
        {Array.from({ length: 24 }).map((_, h) => {
          const outer = hourToXY(h, RING + 22);
          const inner = hourToXY(h, RING + (h % 6 === 0 ? 12 : 17));
          return (
            <line
              key={h}
              x1={inner.x}
              y1={inner.y}
              x2={outer.x}
              y2={outer.y}
              stroke={h % 6 === 0 ? "#5eead4" : "#2c3658"}
              strokeWidth={h % 6 === 0 ? 1.5 : 1}
            />
          );
        })}

        {/* quarter labels */}
        {[
          { h: 0, t: "12a" },
          { h: 6, t: "6a" },
          { h: 12, t: "12p" },
          { h: 18, t: "6p" },
        ].map(({ h, t }) => {
          const p = hourToXY(h, RING + 38);
          return (
            <text
              key={t}
              x={p.x}
              y={p.y}
              fill="#94a3c4"
              fontSize={10}
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {t}
            </text>
          );
        })}

        {/* habit nodes */}
        {habits.map((hb, i) => {
          const p = hourToXY(hb.hour, RING);
          const isActive = active === i;
          return (
            <g
              key={`${hb.name}-${i}`}
              transform={`translate(${p.x}, ${p.y})`}
              className="cursor-pointer"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onClick={() => setActive(isActive ? null : i)}
            >
              <circle
                r={isActive ? 18 : 14}
                fill={isActive ? "#5eead4" : "#141b30"}
                stroke="#5eead4"
                strokeWidth={1.5}
                className="transition-all"
              />
              <text
                x={0}
                y={1}
                fontSize={isActive ? 16 : 14}
                textAnchor="middle"
                dominantBaseline="middle"
              >
                {hb.icon}
              </text>
            </g>
          );
        })}

        {/* center */}
        <circle cx={C} cy={C} r={40} fill="#11172a" stroke="#232c47" />
        <text x={C} y={C - 4} fill="#e6ecf7" fontSize={13} textAnchor="middle" fontWeight={600}>
          Today
        </text>
        <text x={C} y={C + 13} fill="#94a3c4" fontSize={9} textAnchor="middle">
          {habits.length} habits
        </text>
      </svg>

      <div className="mt-4 min-h-[2.5rem] text-center text-sm">
        {active !== null ? (
          <span className="text-white">
            <span className="font-semibold text-brand">
              {String(habits[active].hour).padStart(2, "0")}:00
            </span>{" "}
            — {habits[active].name}
          </span>
        ) : (
          <span className="text-mist">Tap a node to see the habit and its time.</span>
        )}
      </div>
    </div>
  );
}

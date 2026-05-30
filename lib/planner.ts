export type Habit = {
  name: string;
  hour: number; // 0-23, where the habit sits on the 24h Mandala Clock
  icon: string;
};

export type Plan = {
  smartGoal: string;
  category: string;
  baseline: string;
  weeklyPractices: string[];
  dailyHabits: Habit[];
  anchor: string;
};

type Template = {
  category: string;
  match: RegExp;
  build: (goal: string, weeks: number) => Plan;
};

const templates: Template[] = [
  {
    category: "Fitness",
    match: /(weight|fit|gym|run|muscle|strength|lose|workout|marathon|exercise)/i,
    build: (goal, weeks) => ({
      smartGoal: `${goal} — measured weekly, achieved within ${weeks} weeks.`,
      category: "Fitness",
      baseline: "Log current weight, resting heart rate, and a benchmark workout in week 1.",
      weeklyPractices: ["3 strength/cardio sessions", "1 meal-prep day", "1 active recovery walk"],
      dailyHabits: [
        { name: "Hydrate (16oz)", hour: 7, icon: "💧" },
        { name: "Morning movement", hour: 8, icon: "🏃" },
        { name: "Protein-forward lunch", hour: 12, icon: "🥗" },
        { name: "Close eating window", hour: 19, icon: "⏳" },
        { name: "Sleep wind-down", hour: 22, icon: "🌙" },
      ],
      anchor: "Picture finishing the 12 weeks stronger, lighter, and proud of showing up.",
    }),
  },
  {
    category: "Learning",
    match: /(learn|study|language|code|skill|exam|read|degree|certif|practice)/i,
    build: (goal, weeks) => ({
      smartGoal: `${goal} — reviewed weekly, completed within ${weeks} weeks.`,
      category: "Learning",
      baseline: "Take a short diagnostic and note your starting level in week 1.",
      weeklyPractices: ["5 focused study blocks", "1 spaced-repetition review", "1 real-world application"],
      dailyHabits: [
        { name: "Review yesterday", hour: 8, icon: "🔁" },
        { name: "Deep-focus block", hour: 10, icon: "📚" },
        { name: "Practice problem", hour: 14, icon: "✍️" },
        { name: "Reflect & note", hour: 21, icon: "🧠" },
      ],
      anchor: "Imagine using this skill confidently in a real conversation or project.",
    }),
  },
  {
    category: "Mindfulness",
    match: /(meditat|calm|stress|anxiet|mindful|sleep|peace|breath|journal|gratitude)/i,
    build: (goal, weeks) => ({
      smartGoal: `${goal} — practiced daily, established within ${weeks} weeks.`,
      category: "Mindfulness",
      baseline: "Rate your stress and sleep quality (1–10) each morning in week 1.",
      weeklyPractices: ["5 meditation sessions", "1 nature walk", "1 screen-free evening"],
      dailyHabits: [
        { name: "Breathwork", hour: 7, icon: "🌬️" },
        { name: "Gratitude note", hour: 9, icon: "📝" },
        { name: "Midday reset", hour: 13, icon: "🧘" },
        { name: "Digital sunset", hour: 21, icon: "🌅" },
      ],
      anchor: "Recall how a single calm, present moment changes your whole day.",
    }),
  },
];

const generic = (goal: string, weeks: number): Plan => ({
  smartGoal: `${goal} — tracked weekly, achieved within ${weeks} weeks.`,
  category: "Growth",
  baseline: "Define one clear, measurable starting metric in week 1.",
  weeklyPractices: ["3 dedicated work sessions", "1 weekly review", "1 reward for progress"],
  dailyHabits: [
    { name: "Set intention", hour: 8, icon: "🎯" },
    { name: "Focused work", hour: 11, icon: "⚡" },
    { name: "Quick check-in", hour: 16, icon: "✅" },
    { name: "Reflect", hour: 21, icon: "🌙" },
  ],
  anchor: "Visualize the version of you who already achieved this goal.",
});

export function buildPlan(goal: string, weeks = 12): Plan {
  const clean = goal.trim() || "Become my best self";
  const tpl = templates.find((t) => t.match.test(clean));
  return tpl ? tpl.build(clean, weeks) : generic(clean, weeks);
}

export const examples = [
  "Lose 15 pounds in 12 weeks",
  "Learn conversational Spanish",
  "Meditate daily to lower stress",
  "Run my first 10k",
];

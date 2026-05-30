export type Feature = {
  icon: string;
  title: string;
  tagline: string;
  description: string;
};

export const features: Feature[] = [
  {
    icon: "🧭",
    title: "Guidance",
    tagline: "From wish to plan",
    description:
      "An AI-led goal interview turns vague intentions into SMART goals, baselines, weekly practices, daily habits, and motivation anchors — synced to your calendar with reminders.",
  },
  {
    icon: "📊",
    title: "Awareness",
    tagline: "A scoreboard for truth",
    description:
      "Practitioners, methods, tools, and spaces are scored by effectiveness, cost, quality, and safety — triangulated from verified DAOSIS outcomes, peer-reviewed research, and the open web.",
  },
  {
    icon: "🤝",
    title: "Connection",
    tagline: "Matched by results",
    description:
      "You're matched to the right people, products, tools, and spaces based on proven outcomes — not ad spend or follower counts.",
  },
  {
    icon: "🧠",
    title: "Coordination",
    tagline: "No back-and-forth",
    description:
      "AI logistics handle scheduling, cost-splitting, space booking, payments, and reminders so transformation happens without the admin.",
  },
  {
    icon: "🎯",
    title: "Focus",
    tagline: "Signal, not noise",
    description:
      "A distraction-free design with no ads, no upsells, and no irrelevant feeds — only the resources tied to your goal.",
  },
  {
    icon: "🪙",
    title: "Reward",
    tagline: "Stake for impact",
    description:
      "Transformation Points and Transformation Coin reward proven impact. Coins are revenue-backed and tied to governance of the system you help build.",
  },
];

export type RoadmapPhase = {
  phase: string;
  title: string;
  detail: string;
};

export const roadmap: RoadmapPhase[] = [
  { phase: "Phase 1", title: "Guidance (MVP)", detail: "Goal planning + Mandala Clock + calendar integration." },
  { phase: "Phase 2", title: "Awareness", detail: "Triangulated evidence & scoreboard prototype." },
  { phase: "Phase 3", title: "Connection", detail: "Match users with practitioners, spaces, and tools." },
  { phase: "Phase 4", title: "Coordination", detail: "AI scheduling, cost-splitting, booking automation." },
  { phase: "Phase 5", title: "Focus", detail: "Distraction-free interface, goal-centric marketplace." },
  { phase: "Phase 6", title: "Reward", detail: "Points + Transformation Coin economy." },
];

export const storySteps = [
  { label: "Guidance", text: "AI sets a SMART goal — “Lose 15 lbs in 12 weeks” — with weekly practices, daily habits, and a Mandala Clock." },
  { label: "Awareness", text: "It compares peer-reviewed studies, forums, reviews, and DAOSIS data, then suggests resistance training + intermittent fasting." },
  { label: "Connection", text: "Selina is matched with Travis (trainer) and the “Ladies of Fit” group, and books Jimmy's Gym at low cost." },
  { label: "Coordination", text: "Schedules and payments are handled automatically — no texting back and forth." },
  { label: "Focus", text: "No ads, no distractions — only resources tied to her goal." },
  { label: "Reward", text: "Selina earns points for progress, Travis earns coins for her success, and Jimmy's gym fills unused hours." },
];

export const fundingGoals = [
  { amount: "$500", goal: "Cover server costs for early MVP hosting." },
  { amount: "$2,000", goal: "Build Phase 1 — Goal Interview + Mandala Clock." },
  { amount: "$5,000", goal: "Expand to Phase 2 — Awareness + Scoreboard — and onboard first real users." },
];

export const links = {
  github: "https://github.com/DAOSISrevolution/DAOSIS",
  coinbase: "https://commerce.coinbase.com/checkout/9945268e-4301-4395-9a6d-46809caa5569",
  paypal: "https://paypal.me/mooremove",
  videos: {
    intro: "https://drive.google.com/file/d/1Bp2Y4-FYhCz1vh5JPgK1zcU585FM5Hql/view?usp=drive_link",
    fullCycle: "https://drive.google.com/file/d/1IUBQYZZsB7FkdGUeURhQAK-X8_D-ZNzY/view?usp=drive_link",
  },
};

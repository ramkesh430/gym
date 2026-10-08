export type Program = {
  id: string;
  index: string;
  name: string;
  kicker: string;
  line: string;
  meta: string;
  video?: string;
  poster?: string;
  image?: string;
};

export type Tier = {
  id: string;
  name: string;
  price: string;
  blurb: string;
  points: string[];
  cta: string;
  featured: boolean;
};

export const nav = [
  { href: "#creed", label: "Creed" },
  { href: "#programs", label: "Programs" },
  { href: "#coaches", label: "Coaches" },
  { href: "#pricing", label: "Membership" },
  { href: "#visit", label: "Visit" },
] as const;

export const creed = [
  "No mirrors.",
  "No machines that do the work for you.",
  "The bar does not care who you were yesterday.",
  "Show up before the light. Leave it on the floor.",
  "Strength is earned. Never rented.",
] as const;

export const programs: Program[] = [
  {
    id: "strength",
    index: "01",
    name: "Strength",
    kicker: "The iron",
    line: "Squat. Press. Pull. Add weight when the bar says you earned it.",
    meta: "Four coached days · the barbell",
    video: "/media/iron.mp4",
    poster: "/media/iron.jpg",
  },
  {
    id: "conditioning",
    index: "02",
    name: "Conditioning",
    kicker: "The grind",
    line: "Track, sled, carry. An engine that does not negotiate.",
    meta: "Dawn sessions · breath you can see",
    video: "/media/grind.mp4",
    poster: "/media/grind.jpg",
  },
  {
    id: "team",
    index: "03",
    name: "Team",
    kicker: "The crew",
    line: "Six athletes. One clock. Nobody hides in a crowd this small.",
    meta: "Capped at six · shared bar",
    image: "/media/team.jpg",
  },
];

export const coaches = [
  {
    name: "Anil Shrestha",
    role: "Head of strength",
    tenure: "Fourteen years under the bar",
    line: "Writes the programs. Still takes the last set.",
    image: "/media/coach-anil.jpg",
  },
  {
    name: "Maya Gurung",
    role: "Conditioning",
    tenure: "Ran the 1500 before she coached it",
    line: "Dawn on the track. If you can see your breath, you are on time.",
    image: "/media/coach-maya.jpg",
  },
  {
    name: "Rohan Koirala",
    role: "Team coach",
    tenure: "Crews of six",
    line: "Keeps the room honest and the clock louder than excuses.",
    image: "/media/coach-rohan.jpg",
  },
] as const;

export const stats = [
  { value: 240, label: "Members on the floor" },
  { value: 63, label: "PRs this month" },
  { value: 9, label: "Years the door has opened" },
] as const;

export const tiers: Tier[] = [
  {
    id: "open",
    name: "Open",
    price: "3,900",
    blurb: "The floor, the rack, the track. You write the session.",
    points: ["Open 05:00 to 21:00", "Racks, rings, sleds, and the track", "Your name on the community board"],
    cta: "Request a start",
    featured: false,
  },
  {
    id: "forge",
    name: "Forge",
    price: "6,800",
    blurb: "Coached strength. A program with your name on it.",
    points: ["Everything in Open", "Coached strength, four days", "Programming written for you", "First week on the house"],
    cta: "First week free",
    featured: true,
  },
  {
    id: "crew",
    name: "Crew",
    price: "11,500",
    blurb: "A team of six. Competition when you want it.",
    points: ["A crew capped at six", "Meet prep and reserved racks", "One private hour each month"],
    cta: "Join the crew",
    featured: false,
  },
];

export const schedule = [
  { day: "Mon", dawn: "Strength 05:30", noon: "Open floor", eve: "Team 17:30" },
  { day: "Tue", dawn: "Strength 05:30", noon: "Conditioning", eve: "Open floor" },
  { day: "Wed", dawn: "Strength 05:30", noon: "Open floor", eve: "Team 17:30" },
  { day: "Thu", dawn: "Strength 05:30", noon: "Conditioning", eve: "Open floor" },
  { day: "Fri", dawn: "Strength 05:30", noon: "Open floor", eve: "Team 17:30" },
  { day: "Sat", dawn: "Long strength 07:00", noon: "—", eve: "Open floor" },
  { day: "Sun", dawn: "Open floor 08:00", noon: "Closes 12:00", eve: "—" },
] as const;

export type ProjectCategory =
  | "Presentations"
  | "Posters"
  | "Flyers"
  | "Logos"
  | "Branding"
  | "Social Media"
  | "Websites";

export type ProjectImage = {
  src: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  categories: ProjectCategory[];
  description: string;
  tools: string[];
  cover: ProjectImage;
  pages: ProjectImage[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "shiprocket",
    title: "Shiprocket",
    subtitle: "Product Teardown — 28 Slides",
    categories: ["Presentations"],
    description:
      "A product teardown of how a twice-failed SaaS startup became the shipping layer for a quarter of a million Indian sellers — the merchant problem nobody wanted to solve, the decisions that followed, and twelve lessons worth stealing.",
    tools: ["Slide Design", "Data Visualization", "Typography"],
    cover: { src: "/work/shiprocket-cover.jpg", width: 1347, height: 1743 },
    pages: [
      { src: "/work/shiprocket-cover.jpg", width: 1347, height: 1743 },
      { src: "/work/shiprocket-p1.jpg", width: 1347, height: 1743 },
      { src: "/work/shiprocket-p2.jpg", width: 1347, height: 1743 },
      { src: "/work/shiprocket-p3.jpg", width: 1347, height: 1743 },
      { src: "/work/shiprocket-p4.jpg", width: 1347, height: 1743 },
    ],
    featured: true,
  },
  {
    slug: "zomato-sweets",
    title: "I Ordered 20 Sweets, I Received 16",
    subtitle: "Customer Experience Report — 9 Slides",
    categories: ["Presentations"],
    description:
      "A documented customer-experience report on a delivery shortfall — timeline, evidence, and a minimal red-black-white editorial system built to make a consumer complaint read like a professional audit.",
    tools: ["Editorial Layout", "Typography", "Data Presentation"],
    cover: { src: "/work/zomato-sweets-cover.jpg", width: 1347, height: 1743 },
    pages: [
      { src: "/work/zomato-sweets-cover.jpg", width: 1347, height: 1743 },
      { src: "/work/zomato-sweets-p1.jpg", width: 1347, height: 1743 },
      { src: "/work/zomato-sweets-p2.jpg", width: 1347, height: 1743 },
      { src: "/work/zomato-sweets-p3.jpg", width: 1347, height: 1743 },
      { src: "/work/zomato-sweets-p4.jpg", width: 1347, height: 1743 },
    ],
    featured: true,
  },
  {
    slug: "snabbit",
    title: "Snabbit",
    subtitle: "Product Teardown — 12 Slides",
    categories: ["Presentations"],
    description:
      "A breakdown of an on-demand home-services product — founder story, onboarding and booking user journeys, competitive landscape, and the traction data behind the pitch.",
    tools: ["Slide Design", "UX Flow Diagrams", "Iconography"],
    cover: { src: "/work/snabbit-cover.jpg", width: 3168, height: 1782 },
    pages: [
      { src: "/work/snabbit-cover.jpg", width: 3168, height: 1782 },
      { src: "/work/snabbit-p1.jpg", width: 3168, height: 1782 },
      { src: "/work/snabbit-p2.jpg", width: 3168, height: 1782 },
      { src: "/work/snabbit-p3.jpg", width: 3168, height: 1782 },
      { src: "/work/snabbit-p4.jpg", width: 3168, height: 1782 },
    ],
    featured: true,
  },
  {
    slug: "anrf-seminar",
    title: "ANRF National Seminar",
    subtitle: "Event Poster & Flyer",
    categories: ["Posters", "Flyers"],
    description:
      "Event poster and flyer for a two-day national seminar on computational drug discovery and IoT in medicine, produced with IEEE Computer Society and IIIT Bhubaneswar.",
    tools: ["Poster Design", "Print Layout", "Canva"],
    cover: { src: "/work/anrf-poster.png", width: 1080, height: 1350 },
    pages: [{ src: "/work/anrf-poster.png", width: 1080, height: 1350 }],
    featured: true,
  },
  {
    slug: "burn-to-earn",
    title: "From Burn to Earn",
    subtitle: "UPI Fintech Case Study — 5 Slides",
    categories: ["Presentations"],
    description:
      "A case study on how Google Pay, PhonePe, and Paytm rebalanced India's UPI incentives from cashback-driven growth toward a utility-first model — cost economics, cohort behavior, and a proposed hybrid incentive system.",
    tools: ["Slide Design", "Information Architecture"],
    cover: { src: "/work/burn-to-earn-cover.jpg", width: 1310, height: 1853 },
    pages: [
      { src: "/work/burn-to-earn-cover.jpg", width: 1310, height: 1853 },
      { src: "/work/burn-to-earn-p1.jpg", width: 1310, height: 1853 },
      { src: "/work/burn-to-earn-p2.jpg", width: 1310, height: 1853 },
      { src: "/work/burn-to-earn-p3.jpg", width: 1310, height: 1853 },
    ],
  },
  {
    slug: "great-regression",
    title: "The Great Regression",
    subtitle: "Media Market Case Study — 5 Slides",
    categories: ["Presentations"],
    description:
      "An analysis of why Indian streaming consumers are drifting back to piracy as subscription costs stack up — subscription-trap economics, app UX comparisons, and recommendations for the industry.",
    tools: ["Slide Design", "Comparative Tables", "Typography"],
    cover: { src: "/work/great-regression-cover.jpg", width: 1310, height: 1853 },
    pages: [
      { src: "/work/great-regression-cover.jpg", width: 1310, height: 1853 },
      { src: "/work/great-regression-p1.jpg", width: 1310, height: 1853 },
      { src: "/work/great-regression-p2.jpg", width: 1310, height: 1853 },
      { src: "/work/great-regression-p3.jpg", width: 1310, height: 1853 },
    ],
  },
  {
    slug: "calibration-imperative",
    title: "The Calibration Imperative",
    subtitle: "Product Trust Strategy — 17 Slides",
    categories: ["Presentations"],
    description:
      "A product strategy deck on trust calibration for AI coding assistants — when a model should hedge, how to measure overconfidence, and a rollout plan for shipping imperfection safely.",
    tools: ["Slide Design", "Diagramming", "Technical Writing"],
    cover: {
      src: "/work/calibration-imperative-cover.jpg",
      width: 1310,
      height: 1853,
    },
    pages: [
      { src: "/work/calibration-imperative-cover.jpg", width: 1310, height: 1853 },
      { src: "/work/calibration-imperative-p1.jpg", width: 1310, height: 1853 },
      { src: "/work/calibration-imperative-p2.jpg", width: 1310, height: 1853 },
      { src: "/work/calibration-imperative-p3.jpg", width: 1310, height: 1853 },
      { src: "/work/calibration-imperative-p4.jpg", width: 1310, height: 1853 },
    ],
  },
  {
    slug: "sleep-apnea",
    title: "Early Prediction of Sleep Apnea",
    subtitle: "Research Presentation — 16 Slides",
    categories: ["Presentations"],
    description:
      "A research presentation on a multi-signal deep learning model for early obstructive sleep apnea prediction — problem framing, system architecture, and results, built to make a dense ML pipeline legible to a review panel.",
    tools: ["Slide Design", "Iconography", "Data Visualization"],
    cover: { src: "/work/sleep-apnea-cover.jpg", width: 3168, height: 1782 },
    pages: [
      { src: "/work/sleep-apnea-cover.jpg", width: 3168, height: 1782 },
      { src: "/work/sleep-apnea-p1.jpg", width: 3168, height: 1782 },
      { src: "/work/sleep-apnea-p2.jpg", width: 3168, height: 1782 },
      { src: "/work/sleep-apnea-p3.jpg", width: 3168, height: 1782 },
      { src: "/work/sleep-apnea-p4.jpg", width: 3168, height: 1782 },
    ],
  },
  {
    slug: "traffic-flow-cv",
    title: "Lane-Wise Traffic Flow Analysis",
    subtitle: "Thesis Defense — 10 Slides",
    categories: ["Presentations"],
    description:
      "A technical report presentation on a lightweight CCTV-based computer vision pipeline for lane-level traffic analytics — literature review through system architecture, built for a thesis defense.",
    tools: ["Slide Design", "Diagramming"],
    cover: { src: "/work/traffic-flow-cv-cover.jpg", width: 3168, height: 1782 },
    pages: [
      { src: "/work/traffic-flow-cv-cover.jpg", width: 3168, height: 1782 },
      { src: "/work/traffic-flow-cv-p1.jpg", width: 3168, height: 1782 },
      { src: "/work/traffic-flow-cv-p2.jpg", width: 3168, height: 1782 },
      { src: "/work/traffic-flow-cv-p3.jpg", width: 3168, height: 1782 },
      { src: "/work/traffic-flow-cv-p4.jpg", width: 3168, height: 1782 },
    ],
  },
  {
    slug: "night-train-deoli",
    title: "The Night Train at Deoli",
    subtitle: "Literature Presentation — Group Project",
    categories: ["Presentations"],
    description:
      "A literature presentation on Ruskin Bond's short story, art-directed as a hand-illustrated, vintage travel-journal — built with a team of four.",
    tools: ["Illustration", "Slide Design", "Art Direction"],
    cover: { src: "/work/night-train-deoli-cover.jpg", width: 3168, height: 1782 },
    pages: [
      { src: "/work/night-train-deoli-cover.jpg", width: 3168, height: 1782 },
      { src: "/work/night-train-deoli-p1.jpg", width: 3168, height: 1782 },
      { src: "/work/night-train-deoli-p2.jpg", width: 3168, height: 1782 },
      { src: "/work/night-train-deoli-p3.jpg", width: 3168, height: 1782 },
      { src: "/work/night-train-deoli-p4.jpg", width: 3168, height: 1782 },
    ],
  },
];

export const allCategories: ProjectCategory[] = [
  "Websites",
  "Logos",
  "Posters",
  "Presentations",
  "Branding",
  "Flyers",
  "Social Media",
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProjectsByCategory(category: ProjectCategory) {
  return projects.filter((p) => p.categories.includes(category));
}

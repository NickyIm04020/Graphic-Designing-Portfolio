export const siteConfig = {
  name: "Yaswanth Kumar Ippili",
  shortName: "Yaswanth",
  role: "Creative Designer",
  tagline: "I don't just design graphics — I design complete visual experiences.",
  location: "IIIT Bhubaneswar",
  email: "yaswanthippili100@gmail.com",
  social: {
    linkedin: "https://www.linkedin.com/in/yaswanth-ippili/",
    github: "https://github.com/NickyIm04020",
    previousPortfolio: "https://yaswanth-portfolio-alpha.vercel.app/",
  },
};

// Rotating hero titles — this portfolio spans internships, freelance, and
// full-time roles, so it deliberately isn't pinned to a single designation.
export const roles: string[] = [
  "Creative Designer",
  "Graphic Designer",
  "Presentation Designer",
  "Brand Identity Designer",
  "Logo Designer",
  "Website Designer",
  "Canva Expert",
  "Visual Designer",
  "Social Media Designer",
  "Marketing Designer",
  "Website Developer",
];

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

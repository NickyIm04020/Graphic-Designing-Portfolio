export type WebsiteProject = {
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
};

// Placeholder entries for the Gallery's "Websites" category — real
// projects, screenshots, and links replace these as they ship. No fake
// preview imagery or invented links; the card design communicates
// "coming soon" honestly instead.
export const websiteProjects: WebsiteProject[] = [
  {
    slug: "website-project-one",
    title: "Website Project",
    description:
      "An upcoming website design & development project — case study, live demo, and source will land here once it ships.",
    techStack: [],
  },
  {
    slug: "website-project-two",
    title: "Website Project",
    description:
      "An upcoming website design & development project — case study, live demo, and source will land here once it ships.",
    techStack: [],
  },
];

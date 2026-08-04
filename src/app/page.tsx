import fs from "node:fs";
import path from "node:path";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Services } from "@/components/sections/services";
import { Work } from "@/components/sections/work";
import { Gallery } from "@/components/sections/gallery";
import { ExploreMore } from "@/components/sections/explore-more";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  const hasPhoto = fs.existsSync(
    path.join(process.cwd(), "public", "profile-photo.jpg")
  );

  return (
    <main className="flex-1">
      <Hero hasPhoto={hasPhoto} />
      <About hasPhoto={hasPhoto} />
      <Experience />
      <Skills />
      <Services />
      <Work />
      <Gallery />
      <ExploreMore />
      <Contact />
    </main>
  );
}

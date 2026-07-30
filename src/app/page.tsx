// src/app/page.tsx
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import { resolveProjects } from "@/lib/projectAssets";

export default function Home() {
  return (
    <>
      <section className="bg-background">
        <Hero />
      </section>

      <section className="bg-background">
        <Projects projects={resolveProjects()} />
      </section>

      <section className="bg-background">
        <Experience />
      </section>

      <section className="bg-background">
        <Certifications />
      </section>
    </>
  );
}

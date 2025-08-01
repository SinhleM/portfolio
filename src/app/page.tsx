import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import LetsConnect from "@/components/LetsConnect";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  // Define background classes for each section
  const heroBg = "bg-background";
  const skillsBg = "bg-muted";
  const projectsBg = "bg-background";
  const experienceBg = "bg-muted";
  const connectBg = "bg-background";

  return (
    <>
      {/* Hero section */}
      <section className={heroBg}>
        <Hero />
      </section>

      {/* Skills section */}
      <section className={skillsBg}>
        <Skills />
      </section>

      {/* Projects section */}
      <section className={projectsBg}>
        <Projects />
      </section>

      {/* Experience section */}
      <section className={experienceBg}>
        <Experience />
      </section>

      {/* LetsConnect section */}
      <section className={connectBg}>
        <LetsConnect />
      </section>
    </>
  );
}

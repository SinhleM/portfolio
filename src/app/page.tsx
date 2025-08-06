// src/app/page.tsx
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import LetsConnect from "@/components/LetsConnect";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications"; // Import the new component

export default function Home() {
  // Define background classes for each section
  const heroBg = "bg-background";
  const skillsBg = "bg-muted";
  const projectsBg = "bg-background";
  const certificationsBg = "bg-muted"; // New background class for certifications
  const experienceBg = "bg-background"; // Adjusted to maintain alternating theme
  const connectBg = "bg-muted"; // Adjusted to maintain alternating theme

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

      {/* Certifications section */}
      <section className={certificationsBg}>
        <Certifications />
      </section>

      {/* Experience section 
      <section className={experienceBg}>
        <Experience />
      </section>
      */}
      
      {/* LetsConnect section */}
      <section className={connectBg}>
        <LetsConnect />
      </section>
    </>
  );
}

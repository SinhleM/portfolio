import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import LetsConnect from "@/components/LetsConnect";
// import Certificates from "@/components/Certificates"; // Optional, create if needed

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container space-y-12 md:space-y-24">
        {/* You can add a subtle divider here if you like */}
      </div>
      <Skills />
      <Projects />
      <Experience />
      {/* <Certificates /> Uncomment if you build this component */}
      <LetsConnect />
    </>
  );
}
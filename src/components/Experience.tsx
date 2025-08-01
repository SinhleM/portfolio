import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollAnimate from "./ScrollAnimate";

const experienceData = [
  {
    value: "item-1",
    company: "Tech Company Inc.",
    role: "Software Engineer",
    period: "Jan 2022 - Present",
    description: "Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions."
  },
  {
    value: "item-2",
    company: "Startup Co.",
    role: "Junior Developer",
    period: "Jun 2020 - Dec 2021",
    description: "Assisted in the development of a new SaaS platform. Wrote clean, maintainable code and participated in code reviews."
  }
]

export default function Experience() {
  return (
    <section id="experience" className="container py-24 sm:py-32">
      <ScrollAnimate>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Work <span className="text-primary">Experience</span>
        </h2>
      </ScrollAnimate>
      <ScrollAnimate delay={0.4}>
        <Accordion type="single" collapsible className="w-full md:w-3/4 mx-auto">
          {experienceData.map(exp => (
            <AccordionItem key={exp.value} value={exp.value}>
              <AccordionTrigger>
                <div className="flex justify-between w-full pr-4">
                  <span className="font-bold">{exp.role} @ {exp.company}</span>
                  <span className="text-muted-foreground">{exp.period}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                {exp.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ScrollAnimate>
    </section>
  );
}
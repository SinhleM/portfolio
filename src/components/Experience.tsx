import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const experienceData = [
  {
    value: "item-1",
    company: "Tech Company Inc.",
    role: "Software Engineer",
    period: "Jan 2024 - Present",
    description:
      "Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.",
  },
  {
    value: "item-2",
    company: "Startup Co.",
    role: "Junior Developer",
    period: "Jun 2022 - Dec 2023",
    description:
      "Assisted in the development of a new SaaS platform. Wrote clean, maintainable code and participated in code reviews.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Work <span className="text-primary">Experience</span>
      </h2>
      <Accordion
        type="single"
        collapsible
        className="w-full md:w-3/4 mx-auto"
      >
        {experienceData.map((exp) => (
          <AccordionItem
            key={exp.value}
            value={exp.value}
            className="bg-background/50 px-4 rounded-lg mb-2"
          >
            <AccordionTrigger className="hover:no-underline">
              <div className="flex justify-between w-full pr-4 text-left">
                <span className="font-bold">
                  {exp.role} @ {exp.company}
                </span>
                <span className="text-muted-foreground hidden sm:block">
                  {exp.period}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {exp.description}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

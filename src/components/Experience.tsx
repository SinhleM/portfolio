"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeading from "./SectionHeading";

const experienceData = [
  {
    value: "item-1",
    company: "Sorae",
    role: "Founder & Engineer",
    period: "Feb 2026 - Present",
    description:
      "Designed and built a financial intelligence platform end to end, from the parsing engine through the REST API to the dashboard. It reads bank statements from South Africa's 5 major banks and returns a full NCR-aligned affordability report in under 3 seconds at 95% parsing accuracy, with a risk pipeline that surfaces 15+ underwriting signals and an AI decision layer that explains them in plain English. Owned the full SDLC, including POPIA-compliant data handling.",
  },
  {
    value: "item-2",
    company: "Omnia Truck and Trailer",
    role: "Full Stack Developer (Client Project)",
    period: "Jul 2025 - Nov 2025",
    description:
      "Worked in an Agile team of 5 to ship a production platform that digitised client data capture and quotation workflows across onboarding and administration, cutting manual effort for staff. Engineered the MySQL/PHP backend and integrated an AI chatbot grounded on FAQ context to reduce repetitive manual responses.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="container mx-auto max-w-[90%] py-20">
      <SectionHeading
        title="Work Experience"
        subtitle="Where I've shipped, and what I owned."
        from="right"
      />

      <Accordion type="single" collapsible className="w-full border-t border-border">
        {experienceData.map((exp) => (
          <AccordionItem
            key={exp.value}
            value={exp.value}
            className="border-b border-border"
          >
            <AccordionTrigger className="hover:no-underline py-6 group">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between w-full pr-4 text-left gap-1">
                <span className="text-lg md:text-xl font-bold">
                  {exp.role}
                  <span className="text-muted-foreground font-normal">
                    {" "}
                    @ {exp.company}
                  </span>
                </span>
                <span className="text-sm font-mono text-muted-foreground shrink-0">
                  {exp.period}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed max-w-3xl pb-6">
              {exp.description}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

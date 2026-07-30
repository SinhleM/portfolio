"use client";

import { Card, CardContent } from "./ui/card";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";

const certificationsData = [
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/certificate/MM7JAA0ALQAQ",
    logo: "/aws-svgrepo-com.svg",
  },
  {
    title: "IBM Python for Data Science, AI & Development",
    issuer: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/certificate/4R3SL16H7VLP",
    logo: "/ibm-svgrepo-com.svg",
  },
  {
    title: "Meta Programming with JavaScript",
    issuer: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/certificate/5IBC3JQJY023",
    logo: "/meta-svgrepo-com.svg",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto max-w-[90%]">
        <SectionHeading
          title="Certifications"
          subtitle="Professional certifications I've earned."
          from="left"
        />

        {/* Badge strip — title top-left, credential badge bleeding out bottom-right */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory [scrollbar-width:thin]">
          {certificationsData.map((cert) => (
            <Link
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group shrink-0 w-[220px] snap-start"
            >
              <Card className="relative h-[200px] overflow-hidden bg-card transition-all duration-300 hover:shadow-md hover:border-foreground hover:-translate-y-1">
                <CardContent className="relative h-full p-5">
                  <h3 className="relative z-10 max-w-[70%] text-sm font-semibold leading-snug">
                    {cert.title}
                  </h3>

                  <ExternalLink className="absolute top-5 right-5 z-10 h-3.5 w-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />

                  <Image
                    src={cert.logo}
                    alt={`${cert.issuer} logo`}
                    width={140}
                    height={140}
                    className="pointer-events-none absolute -bottom-4 -right-6 h-[140px] w-[140px] object-contain opacity-90 transition-transform duration-300 group-hover:scale-105"
                  />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

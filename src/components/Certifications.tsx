// src/components/Certifications.tsx
"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const certificationsData = [
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Coursera",
    link: "#",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    link: "#",
  },
  {
    title: "IBM Data Analyst Professional Certificate",
    issuer: "Coursera",
    link: "#",
  },
  {
    title: "Python for Everybody Specialization",
    issuer: "University of Michigan (Coursera)",
    link: "#",
  },
];

// Animation variants for Framer Motion
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Certifications() {
  return (
    <section id="certifications" className="container py-24 sm:py-32">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          My <span className="text-primary">Certifications</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the professional certifications I have earned.
        </p>
      </div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {certificationsData.map((cert, index) => (
          <motion.div key={index} variants={cardVariants} className="h-full">
            <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-xl">
              <CardHeader className="flex-1">
                <CardTitle>{cert.title}</CardTitle>
                <div className="mt-2">
                  <Badge variant="secondary">{cert.issuer}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <Link
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:underline"
                >
                  View Credential <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

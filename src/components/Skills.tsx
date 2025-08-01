// src/components/Skills.tsx
"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, LineChart, Cloud } from "lucide-react";

// Updated skills data tailored for a data-focused role
const skillsData = [
  {
    icon: <Database className="w-8 h-8 text-primary" />,
    title: "Data Engineering",
    skills: ["Python", "SQL", "Apache Spark", "Airflow", "ETL/ELT", "Data Warehousing"],
  },
  {
    icon: <LineChart className="w-8 h-8 text-primary" />,
    title: "Data Analysis & BI",
    skills: ["Python (Pandas, NumPy)", "Tableau", "Power BI", "Data Modeling", "Statistical Analysis"],
  },
  {
    icon: <Cloud className="w-8 h-8 text-primary" />,
    title: "Cloud & MLOps",
    skills: ["AWS", "GCP", "Docker", "Git/GitHub", "CI/CD", "Machine Learning"],
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
      staggerChildren: 0.2, // Stagger the animation of each child card
    },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="container py-24 sm:py-32">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          My <span className="text-primary">Skills</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          A summary of my technical expertise, focusing on the core areas of my work.
        </p>
      </div>

      <motion.div 
        className="grid md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the component is in view
      >
        {skillsData.map((skill, index) => (
          <motion.div key={index} variants={cardVariants} className="h-full">
            <Card className="flex flex-col h-full bg-background/50 hover:bg-background/80 transition-all duration-300 shadow-md hover:shadow-xl">
              <CardHeader className="flex-col items-center text-center space-y-4 pt-6 pb-4">
                <div className="p-3 rounded-full bg-secondary">
                  {skill.icon}
                </div>
                <CardTitle className="text-xl font-semibold">{skill.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 text-center text-muted-foreground p-6 pt-0">
                <ul className="space-y-2">
                  {skill.skills.map((item, i) => (
                    <li key={i} className="text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
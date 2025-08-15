"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Database, LineChart, Cloud } from "lucide-react";

const skillsData = [
  {
    icon: Database,
    title: "Data Engineering",
    skills: ["Python", "SQL", "ETL/ELT", "Data Pipelines", "Data Warehousing"],
  },
  {
    icon: LineChart,
    title: "Data Analysis & BI",
    skills: ["Python (Pandas, NumPy)", "Power BI", "Data Modeling", "Statistical Analysis"],
  },
  {
    icon: Cloud,
    title: "Cloud & MLOps",
    skills: ["AWS", "Docker", "Git/GitHub", "Big Data", "Machine Learning"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

function SkillCard({ skill, index }) {
  const IconComponent = skill.icon;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group h-full"
    >
      <Card className="h-full bg-card border border-border hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md">
        <CardHeader className="text-center pb-4">
          <div className="inline-flex p-3 rounded-full bg-muted border border-border mb-4 mx-auto group-hover:bg-primary/10 transition-colors duration-300">
            <IconComponent className="w-6 h-6 text-primary" />
          </div>
          <CardTitle className="text-lg font-semibold text-card-foreground">
            {skill.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="pt-0">
          <div className="space-y-3">
            {skill.skills.map((skillName, skillIndex) => (
              <motion.div
                key={skillIndex}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: skillIndex * 0.05 }}
                viewport={{ once: true }}
                className="group/skill"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground group-hover/skill:bg-primary transition-colors duration-200" />
                  <span className="text-sm text-muted-foreground group-hover/skill:text-foreground transition-colors duration-200">
                    {skillName}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-border">
            <div className="text-xs text-muted-foreground text-center">
              {skill.skills.length} technologies
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className=" sm:pt-20 bg-secondary  px-4 mx-auto max-w-[90%] border-b border-black pb-20"
    >
      <div className="container mx-auto max-w-7xl relative">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-3 py-1 text-xs font-medium text-secondary-foreground bg-secondary rounded-full border border-border mb-4">
            Technical Expertise
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Specialized in building scalable data solutions with modern technologies
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillsData.map((skill, index) => (
            <SkillCard key={skill.title} skill={skill} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

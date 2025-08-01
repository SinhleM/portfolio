// src/components/Skills.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Server, AppWindow } from "lucide-react";

const skillsData = [
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: "Frontend",
    description: "React, Next.js, TypeScript, Tailwind CSS, Framer Motion",
  },
  {
    icon: <Server className="w-8 h-8 text-primary" />,
    title: "Backend",
    description: "Node.js, Express, Python, SQL & NoSQL Databases",
  },
  {
    icon: <AppWindow className="w-8 h-8 text-primary" />,
    title: "Tools & Platforms",
    description: "Git, Docker, Vercel, AWS",
  },
];

export default function Skills() {
  return (
    // Add 'bg-secondary/50' or another dark color to create the contrast
    <section id="skills" className="container py-24 sm:py-32 bg-secondary/50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        My <span className="text-primary">Skills</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {skillsData.map((skill, index) => (
          <Card key={index} className="bg-background/50">
            <CardHeader className="flex items-center space-x-4">
              {skill.icon}
              <CardTitle>{skill.title}</CardTitle>
            </CardHeader>
            <CardContent>{skill.description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
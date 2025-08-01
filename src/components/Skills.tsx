import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Server, AppWindow } from "lucide-react";
import ScrollAnimate from "./ScrollAnimate";

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
    <section id="skills" className="container py-24 sm:py-32">
      <ScrollAnimate>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-primary">Skills</span>
        </h2>
      </ScrollAnimate>
      <div className="grid md:grid-cols-3 gap-8">
        {skillsData.map((skill, index) => (
          <ScrollAnimate key={index} delay={0.2 * (index + 1)}>
            <Card>
              <CardHeader className="flex items-center space-x-4">
                {skill.icon}
                <CardTitle>{skill.title}</CardTitle>
              </CardHeader>
              <CardContent>{skill.description}</CardContent>
            </Card>
          </ScrollAnimate>
        ))}
      </div>
    </section>
  );
}
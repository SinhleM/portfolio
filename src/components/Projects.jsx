import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Link from "next/link";
import ScrollAnimate from "./ScrollAnimate";

const projectData = [
  {
    title: "Project One",
    description: "A description of your awesome project. Explain the tech and your role.",
    tags: ["Next.js", "TypeScript", "shadcn/ui"],
    liveUrl: "#",
    repoUrl: "#"
  },
  {
    title: "Project Two",
    description: "Another fantastic project. Highlight the key features and outcomes.",
    tags: ["React", "Node.js", "PostgreSQL"],
    liveUrl: "#",
    repoUrl: "#"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="container py-24 sm:py-32">
      <ScrollAnimate>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Featured <span className="text-primary">Projects</span>
        </h2>
      </ScrollAnimate>
      <div className="grid md:grid-cols-2 gap-8">
        {projectData.map((project, index) => (
          <ScrollAnimate key={index} delay={0.2 * (index + 1)}>
            <Card>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => <Badge key={tag}>{tag}</Badge>)}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                 <Button asChild variant="outline"><Link href={project.repoUrl} target="_blank">Repo</Link></Button>
                 <Button asChild><Link href={project.liveUrl} target="_blank">Live Site</Link></Button>
              </CardFooter>
            </Card>
          </ScrollAnimate>
        ))}
      </div>
    </section>
  );
}
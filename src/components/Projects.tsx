"use client";

import { motion, easeOut } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import type { Project } from "@/lib/projects";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

/** Small proof pill sitting under the copy. */
function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
      {children}
    </span>
  );
}

function ProjectCard({ project }: { project: Project }) {
  // The reference card carries two proof pills; fall back to the stack when a
  // project has no highlights worth pulling forward.
  const chips = [
    project.featured ? "Case study" : project.highlights[0],
    project.featured ? project.highlights[0] : project.highlights[1],
  ].filter(Boolean) as string[];

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-md"
    >
      {/* Artwork, fixed 16:9 so every card's image reads at the same scale. */}
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="font-mono text-5xl font-bold text-muted-foreground/30">
              {project.index}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex-1">
          <h3 className="text-2xl font-semibold tracking-tight">
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {project.tagline}
          </p>
        </div>

        {chips.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {chips.map((chip) => (
              <Chip key={chip}>{chip}</Chip>
            ))}
          </div>
        )}

        <span className="mt-1 inline-flex w-full items-center justify-center rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition-colors group-hover:bg-foreground/85">
          {project.featured ? "Read case study" : "View project"}
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="container mx-auto max-w-[90%] py-20">
      <SectionHeading
        title="Project Experience"
        subtitle="Production systems I've designed, built and shipped."
        from="left"
      />

      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((project) => (
          <motion.div key={project.slug} variants={cardVariants} className="h-full">
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

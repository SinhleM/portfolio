"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { Github, Globe } from "lucide-react";

// Placeholder image URL
const placeholderImage = "/images/project-placeholder.jpg";

const projectData = [
  {
    title: "FNB Data Pipeline",
    description:
      "Built a robust ETL pipeline to ingest, transform, and load sythetic transaction data into a data warehouse, enabling real-time analytics and reporting.",
    tags: ["Python", "PostgreSQL", "Faker", "React"],
    imageUrl: "/fnb powerbi(1).jpg",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "GitHub Activity Dashboard",
    description:
      "Developed a GitHub dashboard to visulize data and activity, providing key insights to then boost productivity and activity tracking.",
    tags: ["Python", "FastAPI", "Pandas", "GitHub Actions"],
    imageUrl: "/cropped-localhost_5173_(1600 X 900).png",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "TailTrade E-Commerce App",
    description:
      "Created A full-stack ecommerce platform for pet trading and pet supplies, built to support secure listings, real-time messaging, and admin-level moderation",
    tags: ["SQL", "PHP", "React", "Tailwind CSS"],
    imageUrl: "/cropped-tailtrade.netlify.app_listing_pet_23(1600 X 900).png",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Data Analysis and Visualization",
    description:
      "Implemented a data pipeline to mimic retail data and perform sentiment analysis, providing a real-time view of retail perception.",
    tags: ["Python", "Power BI", "Data Modeling", "Business Intelligence"],
    imageUrl: "/powerbi.png",
    liveUrl: "#",
    repoUrl: "#",
  },
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="container pt-20  sm:pt-24 sm:pb-32 mx-auto max-w-[90%] border-b border-black ">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"> 
          Showcasing my work in data engineering and analytics.
        </p>
      </div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {projectData.map((project, index) => (
          <motion.div key={index} variants={cardVariants}>
            <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-xl">
              <CardHeader className="p-0">
                <div className="aspect-video w-full">
                  <Image 
                    src={project.imageUrl}
                    alt={`Image for ${project.title}`}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-1 p-6">
                <CardTitle className="text-xl font-semibold mb-2">
                  {project.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mt-auto">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2 p-6 pt-0">
                <Button asChild variant="outline" size="sm">
                  <Link
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" /> Repo
                  </Link>
                </Button>
                <Button asChild size="sm">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Globe className="mr-2 h-4 w-4" /> Live Site
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
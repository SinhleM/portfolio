// src/components/Projects.tsx
"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { Github, Globe } from "lucide-react";

// Placeholder image URL
const placeholderImage = "/images/project-placeholder.jpg"; // Updated to use a local path

const projectData = [
  {
    title: "E-commerce Data Pipeline",
    description: "Built a robust ETL pipeline to ingest, transform, and load e-commerce sales data into a data warehouse, enabling real-time analytics and reporting.",
    tags: ["Python", "Apache Airflow", "PostgreSQL", "AWS S3"],
    imageUrl: "/screely-1754130109271.png",
    liveUrl: "#",
    repoUrl: "#"
  },
  {
    title: "Customer Churn Prediction",
    description: "Developed a machine learning model to predict customer churn using historical data, providing key insights to the marketing team for targeted campaigns.",
    tags: ["Python", "Scikit-learn", "Pandas", "GCP"],
    imageUrl:"/download.png",
    liveUrl: "#",
    repoUrl: "#"
  },
  {
    title: "Financial Data Dashboard",
    description: "Created an interactive dashboard using Tableau to visualize key financial metrics, allowing stakeholders to monitor performance and make data-driven decisions.",
    tags: ["Tableau", "SQL", "Data Modeling", "Business Intelligence"],
    imageUrl: placeholderImage,
    liveUrl: "#",
    repoUrl: "#"
  },
  {
    title: "Social Media Sentiment Analysis",
    description: "Implemented a data pipeline to scrape social media data and perform sentiment analysis, providing a real-time view of brand perception.",
    tags: ["Python", "Apache Spark", "NLP", "Docker"],
    imageUrl: placeholderImage,
    liveUrl: "#",
    repoUrl: "#"
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

export default function Projects() {
  return (
    <section id="projects" className="container py-24 sm:py-32">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Showcasing my work in data engineering and analytics.
        </p>
      </div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {projectData.map((project, index) => (
          <motion.div key={index} variants={cardVariants}>
            <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-xl">
              <CardHeader className="p-0">
                {/*
                  ACTION REQUIRED:
                  Please download a high-quality, professional image and save it to your project.
                  For example, save it as: /public/images/project-placeholder.jpg
                  The current image path is a placeholder.
                */}
                <Image
                  src={project.imageUrl} // Replace with your image path
                  alt={`Image for ${project.title}`}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </CardHeader>
              <CardContent className="flex flex-col flex-1 p-6">
                <CardTitle className="text-2xl font-semibold mb-2">
                  {project.title}
                </CardTitle>
                <p className="text-muted-foreground mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2 p-6 pt-0">
                <Button asChild variant="outline">
                  <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> Repo
                  </Link>
                </Button>
                <Button asChild>
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
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
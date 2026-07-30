"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const tools = [
  { name: "Python", icon: "/python-seeklogo.png" },
  { name: "Next.js", icon: "/next.svg" },
  { name: "React", icon: "/React.svg" },
  { name: "PostgreSQL", icon: "/PostgresSQL.svg" },
  { name: "AWS", icon: "/aws-color.svg" },
  { name: "Docker", icon: "/Docker.svg" },
  { name: "Kafka", icon: "/kafka-seeklogo.png" },
  { name: "Spark", icon: "/apache-spark-seeklogo.png" },
  { name: "Git", icon: "/Git.svg" },
  { name: "Linux", icon: "/Linux.svg" },
];

function TechBlock({ name, icon, delay = 0 }: { name: string; icon: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3, delay, type: "spring", stiffness: 300, damping: 15 }}
      className="group relative flex flex-col items-center justify-center border border-border bg-card rounded-sm cursor-pointer transition-colors hover:border-foreground aspect-square overflow-hidden"
    >
      <div className="relative w-6 h-6 md:w-8 md:h-8 flex items-center justify-center transition-transform duration-300 ease-out group-hover:-translate-y-2">
        <img
          src={icon}
          alt={name}
          className="w-full h-full object-contain"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
      <div className="absolute bottom-1.5 w-full flex justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out pointer-events-none">
        <span className="text-[8px] font-bold font-mono text-foreground tracking-tighter uppercase text-center px-1">
          {name}
        </span>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background text-foreground pt-10 pb-16">
      <div className="mx-auto max-w-[90%]">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 items-center gap-12">

          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6 max-w-xl mx-auto lg:mx-0">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1]"
            >
              Hello, I&apos;m Sinhle Mkhabela
              <br />
              <span>based in Pretoria.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
              className="text-lg md:text-xl text-muted-foreground max-w-lg"
            >
              <span className="font-bold text-foreground">Software Engineer &amp; Founder</span> building production systems that
              solve real business problems. Currently building{" "}
              <Link
                href="https://sorae.co.za"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-foreground underline decoration-foreground underline-offset-4"
              >
                Sorae
              </Link>
              , a fintech platform South African lenders use to automate affordability decisions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              <Link href="https://github.com/SinhleM">
                <Button variant="ghost" size="icon" aria-label="GitHub" className="cursor-pointer border border-transparent hover:border-foreground">
                  <Github className="h-6 w-6" />
                </Button>
              </Link>

              <Link href="https://www.linkedin.com/in/sinhle-mkhabela-0b6812345/">
                <Button variant="ghost" size="icon" aria-label="LinkedIn" className="cursor-pointer border border-transparent hover:border-foreground">
                  <Linkedin className="h-6 w-6" />
                </Button>
              </Link>

              <Link href="mailto:sinhlemkhabela01@gmail.com">
                <Button variant="ghost" size="icon" aria-label="Email" className="cursor-pointer border border-transparent hover:border-foreground">
                  <Mail className="h-6 w-6" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right Side: Tech Grid */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-xs grid grid-cols-5 gap-2">
              {tools.map((tool, index) => (
                <TechBlock
                  key={tool.name}
                  name={tool.name}
                  icon={tool.icon}
                  delay={0.5 + index * 0.04}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
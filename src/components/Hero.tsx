"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

// 5x5 Grid (25 slots total)
const tools = [
  { name: "Python", icon: "/python-seeklogo.png" },
  { name: "SQL", icon: "/postgressql.svg" },
  null,
  { name: "Spark", icon: "/apache-spark-seeklogo.png" },
  { name: "AWS", icon: "/aws-color.svg" },
  { name: "n8n", icon: "/n8n-color.svg" },
  null,
  { name: "Airflow", icon: "/apache-airflow.svg" },
  { name: "React", icon: "/React.svg" },  
  null,
  { name: "Kafka", icon: "/kafka-seeklogo.png" },
  { name: "S3", icon: "/simple-storage-service.svg" },
  { name: "PowerShell", icon: "/powershell.svg" },
  null,
  { name: "Docker", icon: "/docker.svg" },
  null,
  { name: "OpenAI", icon: "/openai.svg" },
  { name: "Git", icon: "/git.svg" },
  { name: "Linux", icon: "/linux.svg" },
  null,
  { name: "Pandas", icon: "/pandas.svg" },
  null,
  { name: "Databricks", icon: "/dbrx-color.svg" },
  null,
  { name: "Bash", icon: "/bash.svg" },
];

function TechBlock({ name, icon, delay = 0 }: { name: string; icon: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ 
        duration: 0.3, 
        delay, 
        type: "spring",
        stiffness: 300,
        damping: 15 
      }}
      className="group relative flex flex-col items-center justify-center border-[1.5px] border-black bg-white rounded-sm cursor-pointer transition-all aspect-square overflow-hidden"
    >
      {/* Icon: Moves up on hover */}
      <div className="relative w-6 h-6 md:w-8 md:h-8 flex items-center justify-center transition-transform duration-300 ease-out group-hover:-translate-y-2">
        <img 
          src={icon} 
          alt={name} 
          className="w-full h-full object-contain"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      </div>

      {/* Name: Slides up from the bottom on hover */}
      <div className="absolute bottom-1.5 w-full flex justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out pointer-events-none">
        <span className="text-[8px] font-bold font-mono text-black tracking-tighter uppercase text-center px-1">
          {name}
        </span>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-16 md:pt-10 md:pb-16 text-black">
      <div className="mx-auto max-w-[90%] border-b border-black pb-8">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid items-center lg:grid-cols-2 gap-16">
          
          {/* Left Side: Text Content */}
          <div className="text-center lg:text-left space-y-6 max-w-xl mx-auto lg:mx-0">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1]"
              style={{ color: "#111" }}
            >
              Hello, I’m Sinhle Mkhabela
              <br />
              <span>based in Johannesburg.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
              className="text-lg md:text-xl text-zinc-700 max-w-lg"
            >
              <span className="font-bold underline decoration-black">Data Engineer</span> building scalable ETL pipelines and analytics systems.
              Specialized in Python, SQL, and AWS to turn raw data into production-ready insights.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
              className="flex justify-center lg:justify-start gap-4"
            >
              <Link href="https://github.com/SinhleM">
                <Button variant="ghost" size="icon" aria-label="GitHub" className="cursor-pointer border border-transparent hover:border-black rounded-none">
                  <Github className="h-6 w-6" />
                </Button>
              </Link>
              
              <Link href="https://www.linkedin.com/in/sinhle-mkhabela-0b6812345/">
                <Button variant="ghost" size="icon" aria-label="LinkedIn" className="cursor-pointer border border-transparent hover:border-black rounded-none">
                  <Linkedin className="h-6 w-6" />
                </Button>
              </Link>

              <Link href="mailto:sinhlemkhabela01@gmail.com">
                <Button variant="ghost" size="icon" aria-label="Email" className="cursor-pointer border border-transparent hover:border-black rounded-none">
                  <Mail className="h-6 w-6" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right Side: Tech Grid */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm grid grid-cols-5 gap-3 p-4">
              {tools.map((tool, index) => (
                tool ? (
                  <TechBlock 
                    key={tool.name} 
                    name={tool.name} 
                    icon={tool.icon}
                    delay={0.5 + index * 0.03} 
                  />
                ) : (
                  <div key={`empty-${index}`} className="aspect-square opacity-20 border border-zinc-100 rounded-sm" />
                )
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
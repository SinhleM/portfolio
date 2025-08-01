// src/components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      <div className="container grid lg:grid-cols-2 place-items-center gap-16 px-4 sm:px-6 lg:px-8">
        {/* Left Side: Text Content */}
        <div className="text-center lg:text-start space-y-8">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-5xl md:text-6xl font-bold leading-tight"
          >
            Hello, I’m Sinhle Mkhabela <br />
            <span className="text-primary">based in Johannesburg.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0"
          >
            Final year Computer Science student passionate about all things data from analytics and automation to building scalable data pipelines with meaningful insight.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
          >
            <Button asChild size="lg" className="w-full md:w-auto">
              <Link href="#connect">Let's Connect</Link>
            </Button>
          </motion.div>
        </div>

        {/* Right Side: Illustration/Image */}
        <div className="relative w-full h-80 md:h-96 lg:h-full lg:flex lg:justify-end lg:items-center">
          {/* Replace this with your actual image or illustration */}
          <div className="w-full h-full bg-muted rounded-xl flex items-center justify-center">
            <span className="text-muted-foreground text-center p-4">
              Illustration or 3D Model Placeholder
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
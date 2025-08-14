"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const handleScroll = (e) => {
  e.preventDefault();
  const href = e.currentTarget.href;
  const targetId = href.replace(/.*#/, "");
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  }
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-16 md:pt-10 md:pb-16 text-black">
      <div className="mx-auto max-w-[90%] border-b border-black pb-8">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid place-items-center lg:grid-cols-2 gap-16">
          {/* Text Content */}
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
              Final year Computer Science student passionate about all things data —
              from analytics and automation to building scalable data pipelines
              that deliver meaningful insights.
            </motion.p>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
              className="flex justify-center lg:justify-start gap-4"
            >
              <Link href="https://github.com/SinhleM" passHref>
                <Button variant="ghost" size="icon" aria-label="GitHub" className="cursor-pointer">
                  <Github className="h-6 w-6" />
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/sinhle-mkhabela-0b6812345/" passHref>
                <Button variant="ghost" size="icon" aria-label="LinkedIn" className="cursor-pointer">
                  <Linkedin className="h-6 w-6" />
                </Button>
              </Link>
              <Link href="mailto:sinhlemkhabela01@gmail.com" passHref>
                <Button variant="ghost" size="icon" aria-label="Email" className="cursor-pointer">
                  <Mail className="h-6 w-6" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Empty right side for spacing or future content */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
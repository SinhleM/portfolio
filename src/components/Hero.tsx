"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-5xl md:text-6xl font-bold"
        >
          Modern Portfolio <br />
          <span className="text-primary">Built for You</span>
        </motion.h1>

        <motion.p
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
           className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0"
        >
          I build clean, efficient, and user-friendly web applications.
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
        >
          <Button asChild className="w-full md:w-1/3">
             <Link href="#connect">Let's Connect</Link>
          </Button>
        </motion.div>
      </div>

      {/* Optional: Add an image or animation here */}
      <div className="hidden lg:block">
        {/* You can place an illustration or a 3D model here */}
      </div>
    </section>
  );
}
"use client";

import { motion, easeOut } from "framer-motion";

type Props = {
  title: string;
  subtitle?: string;
  /** Direction the heading travels in from. */
  from?: "left" | "right";
};

export default function SectionHeading({
  title,
  subtitle,
  from = "left",
}: Props) {
  const offset = from === "left" ? -60 : 60;

  return (
    <div className="mb-12 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, x: offset }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: easeOut }}
        className="text-3xl md:text-5xl font-bold tracking-tight mb-3"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, x: offset }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.12, ease: easeOut }}
          className="text-lg text-muted-foreground max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

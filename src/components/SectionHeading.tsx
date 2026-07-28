"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
        className={`mb-8 flex flex-col gap-3 sm:mb-10 ${align === "center" ? "items-center text-center" : "items-start text-left"}`}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="font-heading text-3xl font-semibold text-text-primary sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-text-secondary">{description}</p>
      ) : null}
    </motion.div>
  );
}

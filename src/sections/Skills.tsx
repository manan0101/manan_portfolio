"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { skills } from "@/data/portfolio";
import { staggerContainer, staggerItem } from "@/lib/motion";

export default function Skills() {
  return (
    <section id="skills" className="section-shell py-16 sm:py-20">
      <SectionHeading
        eyebrow="02 — Skills"
        title="Toolkit"
        description="Languages, frameworks, and tools I reach for when turning an idea into a working system."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {skills.map((group) => (
          <motion.div
            key={group.category}
            variants={staggerItem}
            className="glass-card p-6 transition-colors hover:border-primary/40"
          >
            <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
              {group.category}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-pill border border-border bg-background/40 px-3 py-1.5 text-sm text-text-primary"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

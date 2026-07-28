"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { experience } from "@/data/portfolio";
import { staggerContainer, staggerItem } from "@/lib/motion";

export default function Experience() {
  return (
    <section id="experience" className="section-shell py-16 sm:py-20">
      <SectionHeading
        eyebrow="04 — Experience"
        title="Where I've worked"
        description="Internship experience across applied AI and front-end development."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="relative flex flex-col gap-8 border-l border-border pl-8"
      >
        {experience.map((job) => (
          <motion.div
            key={job.role}
            variants={staggerItem}
            className="relative"
          >
            <span className="absolute -left-[38px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background" />

            <div className="glass-card p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-heading text-lg font-semibold text-text-primary">
                  {job.role}
                </h3>
                <span className="font-mono text-xs uppercase tracking-wide text-accent">
                  {job.duration}
                </span>
              </div>
              <p className="mt-1 text-sm text-text-secondary">
                {job.organization} · {job.type}
              </p>

              <ul className="mt-4 space-y-2">
                {job.responsibilities.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm leading-relaxed text-text-secondary"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {job.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border bg-background/40 px-2.5 py-1 font-mono text-[11px] text-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, CircleDashed } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/portfolio";
import { staggerContainer, staggerItem } from "@/lib/motion";

export default function Projects() {
  return (
    <section id="projects" className="section-shell py-16 sm:py-20">
      <SectionHeading
        eyebrow="03 — Projects"
        title="Selected work"
        description="A mix of AI applications, privacy tooling, and full-stack builds — from prediction platforms to IoT security systems."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="grid gap-6 md:grid-cols-2"
      >
        {projects.map((project) => (
          <motion.article
            key={project.slug}
            variants={staggerItem}
            className={`glass-card flex flex-col p-6 transition-all hover:-translate-y-1 hover:border-primary/50 ${
              project.featured ? "md:col-span-1" : "md:col-span-1"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-heading text-xl font-semibold text-text-primary">
                {project.name}
              </h3>
              {project.status ? (
                <span className="flex shrink-0 items-center gap-1.5 rounded-pill border border-warning/30 bg-warning/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-warning">
                  <CircleDashed size={11} />
                  {project.status}
                </span>
              ) : null}
            </div>

            <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border bg-background/40 px-2.5 py-1 font-mono text-[11px] text-text-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-4 border-t border-border pt-4">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-text-secondary transition-colors hover:text-accent"
                >
                  <Github size={14} />
                  Code
                </a>
              ) : null}
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-text-secondary transition-colors hover:text-accent"
                >
                  <ExternalLink size={14} />
                  Live demo
                </a>
              ) : null}
              {!project.github && !project.demo ? (
                <span className="font-mono text-xs uppercase tracking-wide text-text-secondary/50">
                  Project spotlight
                </span>
              ) : null}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

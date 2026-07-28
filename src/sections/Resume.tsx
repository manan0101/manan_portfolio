"use client";

import { motion } from "framer-motion";
import { Download, FileText, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/portfolio";
import { staggerContainer, staggerItem } from "@/lib/motion";

export default function ResumeSection() {
  return (
    <section id="resume" className="section-shell py-16 sm:py-20">
      <SectionHeading
        eyebrow="08 — Resume"
        title="View and download my resume"
        description="Use the preview below to review my background, or download the PDF directly."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]"
      >
        <motion.div variants={staggerItem} className="glass-card overflow-hidden p-3 sm:p-4">
          <div className="mb-4 flex items-center justify-between gap-3 px-2 pt-1">
            <div className="flex items-center gap-2">
              <FileText size={18} className="text-accent" />
              <h3 className="font-heading text-base font-semibold text-text-primary">Resume preview</h3>
            </div>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-text-primary transition-colors hover:bg-primary/20"
            >
              <ExternalLink size={13} />
              Open
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-background/40">
            <iframe
              title="Resume preview"
              src={profile.resumeUrl}
              className="h-[560px] w-full"
            />
          </div>
        </motion.div>

        <motion.div
          variants={staggerItem}
          className="glass-card flex flex-col justify-between gap-6 p-6"
        >
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">Available for download</p>
            <h3 className="mt-3 font-heading text-2xl font-semibold text-text-primary">
              Keep a copy of my latest resume.
            </h3>
            <p className="mt-4 leading-relaxed text-text-secondary">
              The PDF version is the most complete snapshot of my experience, projects,
              skills, and certifications.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-pill bg-primary px-5 py-3 font-mono text-sm uppercase tracking-wide text-text-primary shadow-glow transition-transform hover:-translate-y-0.5"
            >
              <ExternalLink size={16} />
              View Resume
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center justify-center gap-2 rounded-pill border border-border px-5 py-3 font-mono text-sm uppercase tracking-wide text-text-primary transition-colors hover:border-accent hover:text-accent"
            >
              <Download size={16} />
              Download PDF
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { achievements, certifications, education } from "@/data/portfolio";
import { staggerContainer, staggerItem } from "@/lib/motion";

export function EducationSection() {
  return (
    <section id="education" className="section-shell py-16 sm:py-20">
      <SectionHeading eyebrow="05 — Education" title="Academic background" />

      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} className="glass-card p-6">
        <div className="mb-5 flex items-center gap-2">
          <GraduationCap size={18} className="text-accent" />
          <h3 className="font-heading text-base font-semibold text-text-primary">Education</h3>
        </div>
        <div className="flex flex-col gap-5">
          {education.map((edu) => (
            <motion.div key={edu.degree} variants={staggerItem} className="border-l-2 border-primary/40 pl-4">
              <p className="font-heading text-sm font-semibold text-text-primary">{edu.degree}</p>
              <p className="mt-1 text-sm text-text-secondary">{edu.institution}</p>
              <p className="mt-1 font-mono text-xs text-accent">{edu.duration}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export function CertificationsSection() {
  return (
    <section id="certifications" className="section-shell py-16 sm:py-20">
      <SectionHeading eyebrow="06 — Certifications" title="Certificates and workshops" />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {certifications.map((cert, index) => (
          <motion.article
            key={cert.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: index * 0.04 }}
            className="group overflow-hidden rounded-card border border-border bg-background/35 shadow-soft transition-transform duration-300 hover:-translate-y-1 hover:border-primary/40"
          >
            <div className="relative overflow-hidden bg-surface/70">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.18),transparent_40%)]" />
              <motion.div
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent"
                animate={{ opacity: [0.35, 1, 0.35] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="relative aspect-[4/3] overflow-hidden bg-background/20 p-3 sm:p-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cert.imageUrl}
                  alt={cert.title}
                  className="h-full w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </div>

            <div className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-text-secondary">
                    {cert.category}
                  </p>
                  <h3 className="mt-2 font-heading text-lg font-semibold leading-tight text-text-primary">
                    {cert.title}
                  </h3>
                </div>
                <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                  {cert.year}
                </span>
              </div>

              <p className="mt-3 text-sm text-text-secondary">{cert.summary}</p>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a
                  href={cert.imageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-primary/35 bg-primary/10 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-text-primary transition-colors hover:bg-primary/20"
                >
                  View
                </a>
              </div>

              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.22em] text-text-secondary">
                {cert.issuer}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function AchievementsSection() {
  return (
    <section id="achievements" className="section-shell py-16 sm:py-20">
      <SectionHeading eyebrow="07 — Achievements" title="Highlights worth noting" />

      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} className="glass-card p-6">
        <div className="mb-5 flex items-center gap-2">
          <Award size={18} className="text-accent" />
          <h3 className="font-heading text-base font-semibold text-text-primary">Achievements</h3>
        </div>
        <ul className="flex flex-col gap-3">
          {achievements.map((item) => (
            <motion.li key={item} variants={staggerItem} className="flex gap-2.5 text-sm leading-relaxed text-text-secondary">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}

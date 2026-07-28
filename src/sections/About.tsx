"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Mail } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/portfolio";
import { staggerSide } from "@/lib/motion";

export default function About() {
  const paragraphs = profile.about.split("\n\n");

  return (
    <section id="about" className="section-shell py-16 sm:py-20">
      <SectionHeading
        eyebrow="01 — About"
        title="Building practical AI, one project at a time"
      />

      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <motion.div
          variants={staggerSide}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="glass-card overflow-hidden p-2 sm:p-3"
        >
          <div className="relative mx-auto aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-[10px] bg-gradient-to-br from-primary/20 via-surface to-secondary/20 sm:max-w-none sm:aspect-[4/5]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={profile.photoUrl}
              alt={profile.name}
              className="h-full w-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
          <div className="flex flex-col gap-3 p-3 font-mono text-[11px] text-text-secondary sm:p-4 sm:text-xs">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-accent" />
              {profile.location}
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap size={14} className="text-accent" />
              GLS University — MCA
            </div>
            <a href={profile.emailHref} className="flex items-center gap-2 transition-colors hover:text-accent">
              <Mail size={14} className="text-accent" />
              {profile.email}
            </a>
          </div>
        </motion.div>

        <motion.div
          variants={staggerSide}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-5"
        >
          {paragraphs.map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="leading-relaxed text-text-secondary"
            >
              {para}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

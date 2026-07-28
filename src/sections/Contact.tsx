"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/portfolio";
import { staggerContainer, staggerItem } from "@/lib/motion";

const CHANNELS = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: `+91 ${profile.phone}`,
    href: `tel:+91${profile.phone}`,
    icon: Phone,
  },
  {
    label: "GitHub",
    value: "github.com/manan0101",
    href: profile.github,
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/manan-maluka",
    href: profile.linkedin,
    icon: Linkedin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-shell py-16 sm:py-20">
      <SectionHeading
        eyebrow="06 — Contact"
        title="Let's build something"
        description="Open to Machine Learning and Python developer roles, internships, and collaborative projects. Reach out through any channel below."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="grid gap-4 sm:grid-cols-2"
      >
        {CHANNELS.map((channel) => {
          const Icon = channel.icon;
          return (
            <motion.a
              key={channel.label}
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
              variants={staggerItem}
              className="glass-card group flex items-center justify-between p-5 transition-colors hover:border-primary/50"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-accent">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-text-secondary">
                    {channel.label}
                  </p>
                  <p className="mt-0.5 text-sm text-text-primary">{channel.value}</p>
                </div>
              </div>
              <ArrowUpRight
                size={18}
                className="text-text-secondary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent"
              />
            </motion.a>
          );
        })}
      </motion.div>
    </section>
  );
}

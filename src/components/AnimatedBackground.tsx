"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type ThemeState = {
  hue: number;
  glowX: number;
  glowY: number;
  depth: number;
  section: string;
};

const SECTION_HUES: Record<string, number> = {
  top: 210,
  about: 165,
  skills: 192,
  projects: 262,
  experience: 28,
  education: 118,
  certifications: 338,
  achievements: 48,
  resume: 308,
  contact: 12,
};

export default function AnimatedBackground() {
  const [theme, setTheme] = useState<ThemeState>({
    hue: 214,
    glowX: 18,
    glowY: 14,
    depth: 0.18,
    section: "top",
  });

  useEffect(() => {
    let frame = 0;

    const updateTheme = () => {
      const sections = ["top", "about", "skills", "projects", "experience", "education", "certifications", "achievements", "resume", "contact"];
      const offset = window.innerHeight * 0.4;
      let currentSection = "top";

      for (const id of sections) {
        const element = document.getElementById(id);
        if (!element) {
          continue;
        }

        const rect = element.getBoundingClientRect();
        if (rect.top <= offset && rect.bottom > offset) {
          currentSection = id;
          break;
        }
      }

      const sectionIndex = sections.indexOf(currentSection);
      const progress = sectionIndex < 0 ? 0 : sectionIndex / Math.max(sections.length - 1, 1);
      const hue = SECTION_HUES[currentSection] ?? 214;
      const glowX = 12 + progress * 64;
      const glowY = 8 + Math.sin(progress * Math.PI * 1.75) * 18 + progress * 22;
      const depth = 0.3 + progress * 0.16;

      setTheme((current) => {
        const next = { hue, glowX, glowY, depth, section: currentSection };
        const unchanged =
          Math.abs(current.hue - next.hue) < 0.15 &&
          Math.abs(current.glowX - next.glowX) < 0.15 &&
          Math.abs(current.glowY - next.glowY) < 0.15 &&
          Math.abs(current.depth - next.depth) < 0.005 &&
          current.section === next.section;
        return unchanged ? current : next;
      });
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateTheme);
    };

    updateTheme();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateTheme);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateTheme);
    };
  }, []);

  const primaryGlow = `hsla(${theme.hue}, 100%, 68%, ${theme.depth + 0.18})`;
  const secondaryGlow = `hsla(${theme.hue + 64}, 98%, 64%, ${theme.depth + 0.12})`;
  const accentGlow = `hsla(${theme.hue + 120}, 98%, 62%, ${theme.depth + 0.1})`;
  const sectionGlow = `hsla(${theme.hue + 180}, 100%, 64%, ${theme.depth + 0.04})`;

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div
        className="absolute inset-0 bg-background transition-colors duration-700"
        style={{
          backgroundImage: `
            radial-gradient(circle at ${theme.glowX}% ${theme.glowY + 2}%, ${primaryGlow}, transparent 34%),
            radial-gradient(circle at ${100 - theme.glowX}% 12%, ${secondaryGlow}, transparent 30%),
            radial-gradient(circle at 50% 100%, ${accentGlow}, transparent 42%)
          `,
        }}
      />

      <motion.div
        className="absolute -left-24 top-16 h-[34rem] w-[34rem] rounded-full blur-3xl mix-blend-screen"
        animate={{ x: [0, 56, -28, 0], y: [0, -34, 22, 0], scale: [1, 1.14, 0.96, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ background: primaryGlow, opacity: 0.42 }}
      />
      <motion.div
        className="absolute right-[-8rem] top-28 h-[36rem] w-[36rem] rounded-full blur-3xl mix-blend-screen"
        animate={{ x: [0, -44, 26, 0], y: [0, 40, -18, 0], scale: [1, 1.12, 1.03, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ background: secondaryGlow, opacity: 0.36 }}
      />
      <motion.div
        className="absolute bottom-0 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full blur-3xl mix-blend-screen"
        animate={{ x: [0, 34, -24, 0], y: [0, -22, 28, 0], scale: [1, 1.16, 0.94, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        style={{ background: accentGlow, opacity: 0.34 }}
      />
      <motion.div
        className="absolute left-1/2 top-1/4 h-64 w-[52rem] -translate-x-1/2 rounded-full blur-3xl mix-blend-screen"
        animate={{ x: [0, 28, -30, 0], y: [0, 18, -20, 0], scale: [1, 1.08, 1.02, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        style={{ background: sectionGlow, opacity: 0.24 }}
      />

      <div
        className="absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.22) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(circle at center, black 40%, rgba(0,0,0,0.85) 68%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 40%, rgba(0,0,0,0.85) 68%, transparent 100%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.55) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />

      <motion.div
        className="absolute inset-x-0 top-0 h-20"
        animate={{ opacity: [0.25, 0.85, 0.3] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: `linear-gradient(90deg, transparent, hsla(${theme.hue}, 100%, 72%, 0.55), transparent)`,
        }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.1)_0%,rgba(15,23,42,0.34)_100%)]" />
    </div>
  );
}
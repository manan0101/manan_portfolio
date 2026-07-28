"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { profile } from "@/data/portfolio";

const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certificates", href: "#certifications" },
  { label: "Achievements", href: "#achievements" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("top");

  const navigateTo = (href: string) => {
    if (!href.startsWith("#")) {
      return;
    }

    const target = document.getElementById(href.slice(1));
    if (!target) {
      return;
    }

    setOpen(false);
    window.setTimeout(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", href);
    }, 40);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((link) => link.href.replace("#", "")).filter(Boolean);

    const updateActive = () => {
      const offset = window.innerHeight * 0.36;
      const current = ids.find((id) => {
        const element = document.getElementById(id);
        if (!element) {
          return false;
        }

        const rect = element.getBoundingClientRect();
        return rect.top <= offset && rect.bottom > offset;
      });

      if (current) {
        setActive(current);
      } else if (window.scrollY < 80) {
        setActive("top");
      }
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);

    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  const linkClass = (href: string) => {
    const current = href.replace("#", "") === active;
    return [
      "relative rounded-full px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] transition-all duration-300 xl:text-[9px] xl:tracking-[0.14em]",
      current
        ? "bg-white/12 text-text-primary shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset]"
        : "text-text-secondary hover:bg-white/5 hover:text-text-primary",
    ].join(" ");
  };

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4"
    >
      <nav
        className={`mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between gap-2 rounded-[999px] border border-border px-4 py-3 shadow-glass backdrop-blur-2xl transition-colors duration-300 sm:px-5 xl:px-6 ${
          scrolled ? "bg-background/80" : "bg-background/50"
        }`}
      >
        <a href="#top" className="flex min-w-0 items-center gap-3 font-heading text-sm font-semibold text-text-primary">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-surface text-accent shadow-soft">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={profile.photoUrl}
              alt={profile.name}
              className="h-full w-full object-cover object-[center_32%]"
            />
          </span>
          <span className="hidden min-w-0 flex-col leading-tight sm:flex">
            <span className="truncate">{profile.name}</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-secondary">
              {profile.title}
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-0.5 xl:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(event) => {
                  event.preventDefault();
                  navigateTo(link.href);
                }}
                className={linkClass(link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-primary/35 bg-primary/10 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-text-primary transition-colors hover:bg-primary/20 sm:inline-block xl:px-4"
          >
            Resume
          </a>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-border bg-white/5 p-2 text-text-primary xl:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-3 overflow-hidden rounded-[28px] border border-border bg-background/92 backdrop-blur-2xl xl:hidden"
          >
            <ul className="flex flex-col gap-1 p-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onPointerDown={() => navigateTo(link.href)}
                    onClick={() => navigateTo(link.href)}
                    className={`w-full text-left ${linkClass(link.href)}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="mt-2 block rounded-full border border-primary/40 bg-primary/10 px-3 py-3 text-center font-mono text-[11px] uppercase tracking-[0.22em] text-text-primary"
                >
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

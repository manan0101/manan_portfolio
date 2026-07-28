import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="section-shell flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-text-secondary">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-text-secondary transition-colors hover:text-accent"
          >
            <Github size={16} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-text-secondary transition-colors hover:text-accent"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={profile.emailHref}
            aria-label="Email"
            className="text-text-secondary transition-colors hover:text-accent"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}

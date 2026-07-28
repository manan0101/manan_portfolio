import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/sections/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#7C3AED",
        accent: "#06B6D4",
        background: "#0F172A",
        surface: "#1E293B",
        "surface-hover": "#243449",
        "text-primary": "#F8FAFC",
        "text-secondary": "#94A3B8",
        success: "#22C55E",
        warning: "#F59E0B",
        danger: "#EF4444",
        border: "rgba(148, 163, 184, 0.14)",
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      borderRadius: {
        DEFAULT: "16px",
        card: "16px",
        pill: "999px",
      },
      boxShadow: {
        soft: "0 8px 30px -12px rgba(0, 0, 0, 0.45)",
        glass: "0 1px 0 0 rgba(255,255,255,0.06) inset, 0 8px 30px -12px rgba(0,0,0,0.5)",
        glow: "0 0 0 1px rgba(37,99,235,0.35), 0 0 40px -8px rgba(37,99,235,0.45)",
      },
      backgroundImage: {
        "grid-glow":
          "radial-gradient(circle at 20% 20%, rgba(37,99,235,0.18), transparent 40%), radial-gradient(circle at 80% 0%, rgba(124,58,237,0.16), transparent 40%), radial-gradient(circle at 50% 100%, rgba(6,182,212,0.12), transparent 45%)",
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        pulseRing: {
          "0%": { boxShadow: "0 0 0 0 rgba(34,197,94,0.5)" },
          "70%": { boxShadow: "0 0 0 8px rgba(34,197,94,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(34,197,94,0)" },
        },
      },
      animation: {
        scan: "scan 3.5s linear infinite",
        blink: "blink 1s step-end infinite",
        pulseRing: "pulseRing 2s infinite",
      },
    },
  },
  plugins: [],
};

export default config;

import type { Metadata } from "next";
import { Poppins, Inter, JetBrains_Mono } from "next/font/google";
import AnimatedBackground from "@/components/AnimatedBackground";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

const siteUrl = "https://mananmaluka.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Manan Maluka | Machine Learning & Python Developer",
  description:
    "Portfolio of Manan Maluka, an MCA student and Machine Learning / Python developer building AI-powered applications, from mental health prediction platforms to privacy-focused chat apps.",
  keywords: [
    "Manan Maluka",
    "Machine Learning Developer",
    "Python Developer",
    "AI Developer Portfolio",
    "FastAPI Developer",
    "Data Science",
  ],
  authors: [{ name: "Manan Maluka" }],
  openGraph: {
    title: "Manan Maluka | Machine Learning & Python Developer",
    description:
      "MCA student and Machine Learning / Python developer building AI-powered applications and real-world software.",
    url: siteUrl,
    siteName: "Manan Maluka Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manan Maluka | Machine Learning & Python Developer",
    description:
      "MCA student and Machine Learning / Python developer building AI-powered applications and real-world software.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-body relative isolate overflow-x-hidden bg-background text-text-primary antialiased selection:bg-primary/30">
        <AnimatedBackground />
        {children}
      </body>
    </html>
  );
}

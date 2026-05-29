import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Danuja Jayasinghe | UI/UX Designer",
  description:
    "Portfolio of Danuja Jayasinghe — a UI/UX Designer crafting intuitive digital experiences and high-fidelity prototypes with a focus on human-centered design.",
  keywords: [
    "UI/UX Designer",
    "Danuja Jayasinghe",
    "Portfolio",
    "Figma",
    "Product Design",
    "Interaction Design",
  ],
  authors: [{ name: "Danuja Jayasinghe" }],
  creator: "Danuja Jayasinghe",
  openGraph: {
    title: "Danuja Jayasinghe | UI/UX Designer",
    description:
      "Crafting intuitive digital experiences and high-fidelity prototypes with a focus on human-centered design.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Danuja Jayasinghe | UI/UX Designer",
    description:
      "Crafting intuitive digital experiences and high-fidelity prototypes.",
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
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}

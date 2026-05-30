"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-800/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-muted/30 text-sm text-muted-foreground w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for new opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
          >
            Hi, I'm Danuja.{" "}
            <br />
            <span className="text-muted-foreground">UI/UX Designer.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-[480px] leading-relaxed"
          >
            Crafting intuitive digital experiences and high-fidelity prototypes
            with a strong focus on human-centered design and clean interfaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4 mt-2"
          >
            
              href="#work"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-all hover:gap-3"
            >
              View My Work
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            
              href="/Danuja_Jayasinghe_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-muted/50 transition-colors"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative aspect-square max-w-[460px] mx-auto lg:ml-auto"
        >
          <div className="absolute inset-0 rounded-full border border-border/40 animate-[spin_25s_linear_infinite]" />
          <div className="absolute inset-4 rounded-full border border-border/25 animate-[spin_18s_linear_infinite_reverse]" />
          <div className="absolute inset-8 rounded-full border border-accent/10 animate-[spin_12s_linear_infinite]" />

          <div className="absolute inset-12 rounded-full overflow-hidden bg-muted ring-1 ring-border">
            <img
              src="/images/pfp_1.png"
              alt="Danuja Jayasinghe — UI/UX Designer"
              className="w-full h-full object-cover"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute -right-4 top-1/3 px-4 py-2 rounded-2xl bg-muted/80 backdrop-blur-sm border border-border text-sm font-medium shadow-xl"
          >
            🎨 Figma Pro
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute -left-4 bottom-1/3 px-4 py-2 rounded-2xl bg-muted/80 backdrop-blur-sm border border-border text-sm font-medium shadow-xl"
          >
            ✦ UX Researcher
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs text-muted-foreground"
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-muted-foreground/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}

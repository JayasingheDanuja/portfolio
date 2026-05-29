"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function VisualDesign() {
  return (
    <section id="visual-design" className="py-28 relative bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold tracking-widest text-accent uppercase mb-4 block"
          >
            Visual Design
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
          >
            Design & Illustration
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-xl text-lg"
          >
            Beyond interface design — a background in graphic design and digital
            illustration using Photoshop, Illustrator, and Canva.
          </motion.p>
        </div>

        {/* Gallery placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="group relative w-full rounded-3xl border border-border bg-muted/10 overflow-hidden"
        >
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-blue-900/10 opacity-60" />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10 p-16 text-center">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="text-6xl mb-6 select-none"
            >
              🎨
            </motion.div>
            <h3 className="text-2xl font-bold mb-3">Gallery Coming Soon</h3>
            <p className="text-muted-foreground max-w-md mx-auto mb-8 text-sm leading-relaxed">
              Currently curating a selection of the best digital illustrations
              and graphic design work to showcase here.
            </p>
            <a
              href="https://drive.google.com/drive/folders/1B0TQjhgFjdpjs1MaR8P3ubeAjJrswKF7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-muted/40 hover:border-accent/40 transition-all text-sm font-medium group"
            >
              <ExternalLink className="w-4 h-4" />
              View Google Drive Folder
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Peerlit",
    category: "Gamifier Application",
    description:
      "A collaborative study platform designed to improve motivation and group-based learning with AI assistance.",
    tags: ["UX Research", "UI Design", "Figma"],
    link: "#",
    image: null,
    accent: "from-blue-500/10",
  },
  {
    title: "Drop4Life",
    category: "Mobile Application",
    description:
      "A blood donation mobile app wireframe focusing on emergency requests and strict HCI principles.",
    tags: ["Wireframing", "Interaction Design", "Case Study"],
    link: "/work/drop4life",
    image: null,
    accent: "from-red-500/10",
  },
  {
    title: "ECOX",
    category: "Mobile Application",
    description:
      "An eco-friendly route planning and environmental impact tracking mobile app concept.",
    tags: ["UI Design", "Visual Layout", "Mobile"],
    link: "#",
    image: "/images/ecox-preview.jpg",
    accent: "from-green-500/10",
  },
  {
    title: "Life on Land",
    category: "Web Development",
    description:
      "A responsive project website promoting environmental awareness using structured web design practices.",
    tags: ["HTML/CSS", "JavaScript", "Web Design"],
    link: "#",
    image: null,
    accent: "from-emerald-500/10",
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="py-28 relative">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-muted/5 -z-10" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-semibold tracking-widest text-accent uppercase mb-4 block"
            >
              Selected Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl md:text-4xl font-bold leading-tight"
            >
              Projects I'm proud of.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-sm text-base md:text-right"
          >
            From research to high-fidelity — a collection of human-centered design work.
          </motion.p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.1,  }}
              className="group relative flex flex-col rounded-3xl bg-muted/10 border border-border overflow-hidden hover:border-border/80 transition-all duration-500"
            >
              {/* Gradient hover overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.accent} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Image area */}
              <div className="relative w-full h-48 bg-muted/20 overflow-hidden border-b border-border/50">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-5xl font-black text-muted-foreground/10 tracking-tighter select-none">
                      {project.title.toUpperCase()}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col flex-1 p-7">
                <div className="text-xs font-semibold text-accent mb-2 tracking-wide uppercase">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 mt-6 pt-5 border-t border-border/50">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full border border-border/80 text-muted-foreground bg-muted/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-foreground text-background group-hover:scale-110 group-hover:bg-accent transition-all duration-300 flex-shrink-0"
                    aria-label={`View ${project.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

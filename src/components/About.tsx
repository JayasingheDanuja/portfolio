"use client";

import { motion } from "framer-motion";
import { Palette, PenTool, Layout, Box } from "lucide-react";

const skills = [
  {
    icon: <Palette className="w-5 h-5" />,
    title: "UI/UX Design",
    description: "Wireframing, high-fidelity prototyping, and user flow mapping.",
  },
  {
    icon: <PenTool className="w-5 h-5" />,
    title: "Visual Design",
    description: "Typography, color systems, and brand alignment.",
  },
  {
    icon: <Layout className="w-5 h-5" />,
    title: "Development",
    description: "HTML, CSS, JavaScript, and basic understanding of React/Next.js.",
  },
  {
    icon: <Box className="w-5 h-5" />,
    title: "Tools",
    description: "Figma, Illustrator, Photoshop, Canva.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="py-28 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-xs font-semibold tracking-widest text-accent uppercase mb-4 block">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Designer with a{" "}
              <span className="text-muted-foreground">technical edge.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              I am an Undergraduate in BSc (Hons) Computer Science with a strong
              focus on human-centered design. I blend my technical background with
              creative design principles to craft intuitive and visually appealing
              digital products.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Whether it's mapping out complex user flows or refining the smallest
              micro-interactions, I am passionate about creating interfaces that
              users love to engage with.
            </p>
          </motion.div>

          {/* Right: Skill cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid sm:grid-cols-2 gap-5"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group p-6 rounded-2xl border border-border bg-muted/10 hover:bg-muted/30 hover:border-accent/30 transition-all duration-300 cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:bg-accent/20 transition-colors">
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-base mb-2">{skill.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

const socials = [
  {
    label: "Email",
    value: "jayasinghedanuja@gmail.com",
    href: "mailto:jayasinghedanuja@gmail.com",
    icon: <Mail className="w-5 h-5" />,
    primary: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/danuja",
    href: "https://linkedin.com/",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>,
    primary: false,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative border-t border-border">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-accent/6 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Label */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold tracking-widest text-accent uppercase mb-6 block"
          >
            Get In Touch
          </motion.span>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Let's craft something{" "}
            <span className="text-muted-foreground">amazing</span> together.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed"
          >
            Currently available for new opportunities. Whether you have a project
            in mind or just want to say hi — I'll get back to you!
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {socials.map((s) =>
              s.primary ? (
                <a
                  key={s.label}
                  href={s.href}
                  className="group flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-all"
                >
                  {s.icon}
                  Say Hello
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              ) : (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-full border border-border bg-muted/10 hover:bg-muted/30 hover:border-accent/30 transition-all"
                >
                  {s.icon}
                  LinkedIn
                </a>
              )
            )}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-28 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground border-t border-border pt-8"
        >
          <p>© {new Date().getFullYear()} Danuja Jayasinghe. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#about" className="link-underline hover:text-foreground transition-colors">About</a>
            <a href="#work" className="link-underline hover:text-foreground transition-colors">Work</a>
            <a href="#contact" className="link-underline hover:text-foreground transition-colors">Contact</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

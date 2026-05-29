import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drop4Life — Case Study | Danuja Jayasinghe",
  description:
    "A high-fidelity blood donation mobile app designed with HCI principles, gamification, and user-centered design.",
};

export default function Drop4LifeCaseStudy() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-32">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Back link */}
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-14 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Work
        </Link>

        {/* Header */}
        <header className="mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full border border-border bg-muted/30 text-xs font-medium text-accent">
              UX/UI Design
            </span>
            <span className="text-sm text-muted-foreground">
              Academic Coursework (HCI)
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Drop4Life: Blood Donation Support Application
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            A high-fidelity mobile application prototype designed to streamline
            the blood donation process and motivate donors through a gamified
            rewards system.
          </p>
        </header>

        {/* Hero Image */}
        <div className="w-full aspect-video bg-muted/20 rounded-3xl mb-16 flex items-center justify-center overflow-hidden border border-border relative">
          <div className="text-muted-foreground/40 font-black text-6xl tracking-tighter select-none">
            DROP4LIFE
          </div>
          {/* Uncomment once image is added:
          <Image src="/images/drop4life-hero.png" alt="Drop4Life Screens" fill className="object-cover" />
          */}
        </div>

        {/* Project Details Grid */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16 p-8 rounded-3xl bg-muted/10 border border-border">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">Role</h3>
            <p className="text-muted-foreground text-sm">UI/UX Designer</p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">Timeline</h3>
            <p className="text-muted-foreground text-sm">2023 – 2024</p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">Tools</h3>
            <p className="text-muted-foreground text-sm">Figma, Google Forms (Testing)</p>
          </div>
        </div>

        {/* Content */}
        <article className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground">
          <h2>The Challenge</h2>
          <p>
            Blood donation centers often struggle with donor retention. The goal
            of this project was to apply Human-Computer Interaction (HCI)
            principles to design a mobile experience that not only streamlines
            the donation process but actively motivates users to become repeat
            donors.
          </p>

          <h2>The Solution: Gamified Rewards</h2>
          <p>
            Based on initial research, I designed a robust{" "}
            <strong>Rewards Feature</strong>. By incorporating gamification
            elements such as points, unlockable badges (like the Gold Vitality
            badge), shareable certificates, and redeemable health check-up
            vouchers, the app provides tangible value and social recognition to
            donors.
          </p>

          <div className="w-full aspect-video bg-muted/20 rounded-2xl my-12 flex items-center justify-center border border-border">
            <span className="text-sm text-muted-foreground">
              UI Screens Gallery (Upload pending)
            </span>
          </div>

          <h2>Evaluation & User Testing</h2>
          <p>
            The high-fidelity prototype was tested using a task-based usability
            evaluation technique. Participants engaged directly with the Figma
            prototype to upload donation proofs and redeem rewards.
          </p>
          <ul>
            <li>
              <strong>Quantitative Findings:</strong> Users rated the ease of
              locating the rewards section and the clarity of uploading proofs
              very highly (4/5 or 5/5).
            </li>
            <li>
              <strong>Qualitative Refinements:</strong> Based on feedback from
              an industry UX designer, I introduced system confirmation
              pop-ups, reward-type selection flows, and improved accessibility
              features.
            </li>
          </ul>

          <h2>Conclusion</h2>
          <p>
            The Drop4Life prototype successfully demonstrates how user-centered
            design and gamification can tackle real-world healthcare challenges
            (aligning with SDG Goal 3: Good Health and Well-being). The
            iterative testing process was crucial in refining the interface to
            meet industry UX standards.
          </p>
        </article>
      </div>
    </main>
  );
}

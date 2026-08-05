import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Code, Braces, ArrowUpRight } from "lucide-react";
import { LINKS, PROFILE } from "@/data/portfolio";
import { Section } from "./Section";
import { GlowLink } from "./GlowLink";

const socials = [
  { label: "LinkedIn", href: LINKS.linkedin, Icon: Linkedin },
  { label: "GitHub", href: LINKS.github, Icon: Github },
  { label: "LeetCode", href: LINKS.leetcode, Icon: Code },
  { label: "GeeksforGeeks", href: LINKS.gfg, Icon: Braces },
];

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-4xl glass p-8 text-center sm:p-14"
      >
        <div className="pointer-events-none absolute inset-0 hero-aura opacity-80" />
        <div className="relative">
          <h2 className="text-3xl font-bold sm:text-5xl">
            Let&apos;s build something <span className="text-gradient">great</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            Open to internships, placements and collaborations on full stack and
            AI-powered products.
          </p>

          <a
            href={`mailto:${PROFILE.email}`}
            className="group mt-8 inline-flex max-w-full items-center gap-3 rounded-full glass px-5 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50"
          >
            <Mail className="size-4 shrink-0 text-primary" />
            <span className="min-w-0 truncate font-mono text-sm">
              {PROFILE.email}
            </span>
            <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {socials.map(({ label, href, Icon }, i) => (
              <GlowLink
                key={label}
                href={href}
                variant={i === 0 ? "primary" : "glass"}
              >
                <Icon className="size-4" /> {label}
              </GlowLink>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

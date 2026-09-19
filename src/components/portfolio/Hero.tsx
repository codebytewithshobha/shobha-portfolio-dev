import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Code2, Braces } from "lucide-react";
import heroImage from "@/assets/shobha-hero.jpeg";
import { LINKS, PROFILE } from "@/data/portfolio";
import { GlowLink } from "./GlowLink";

const stats = [
  { value: "3+", label: "Shipped Projects" },
  { value: "MERN", label: "Core Stack" },
  { value: "AI", label: "Product Focus" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-5 pb-20 pt-32 sm:pt-40"
    >
      <div className="pointer-events-none absolute inset-0 hero-aura" />
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-60 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-primary"
          >
            <span className="size-1.5 animate-pulse rounded-full bg-primary" />
            Open to internships & placements
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-6xl md:text-7xl"
          >
            {PROFILE.name.split(" ")[0]}
            <br />
            <span className="text-gradient">{PROFILE.name.split(" ")[1]}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-5 font-mono text-sm text-primary sm:text-base"
          >
            {PROFILE.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {PROFILE.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <GlowLink href={LINKS.resume} variant="primary">
              <Download className="size-4" /> View Resume
            </GlowLink>
            <GlowLink href="#projects" variant="glass">
              View Projects
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </GlowLink>
            <GlowLink href={LINKS.linkedin} variant="ghost">
              <Linkedin className="size-4" /> LinkedIn
            </GlowLink>
            <GlowLink href={LINKS.github} variant="ghost">
              <Github className="size-4" /> GitHub
            </GlowLink>
            <GlowLink href={LINKS.leetcode} variant="ghost">
              <Code2 className="size-4" /> LeetCode
            </GlowLink>
            <GlowLink href={`mailto:${PROFILE.email}`} variant="ghost">
              <Mail className="size-4" /> Email
            </GlowLink>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-10 grid max-w-md grid-cols-3 gap-3"
          >
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl glass px-4 py-3">
                <dt className="font-display text-xl font-bold text-primary">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full [background:conic-gradient(from_0deg,var(--glow),transparent_35%,var(--glow-2),transparent_75%,var(--glow))] opacity-70 blur-[2px]"
          />
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="group relative m-[6px] aspect-square overflow-hidden rounded-full glass p-2 ring-glow"
          >
            <img
              src={heroImage}
              alt="Shobha Kumari, Full Stack Developer, at a developer festival"
              width={960}
              height={960}
              className="size-full rounded-full object-cover object-top transition-all duration-700 ease-out group-hover:scale-[1.06] group-hover:saturate-125"
            />
            <div className="pointer-events-none absolute inset-2 rounded-full bg-[linear-gradient(160deg,transparent_55%,color-mix(in_oklab,var(--glow)_28%,transparent))] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-2 bottom-8 flex items-center gap-2 rounded-2xl glass px-3 py-2 text-xs sm:-left-6"
          >
            <Code2 className="size-4 text-primary" /> Full Stack
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-2 top-10 flex items-center gap-2 rounded-2xl glass px-3 py-2 text-xs sm:-right-6"
          >
            <Braces className="size-4 text-accent" /> AI Builder
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

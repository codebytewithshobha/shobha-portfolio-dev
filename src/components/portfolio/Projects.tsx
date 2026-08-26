import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";
import { Section } from "./Section";
import { GlowLink } from "./GlowLink";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Products I designed, built and shipped"
      subtitle="AI-powered platforms and full stack applications built with modern, production-minded engineering."
    >
      <div className="grid gap-6">
        {PROJECTS.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: i * 0.05 }}
            className={`group grid overflow-hidden rounded-3xl glass glass-hover lg:grid-cols-2 ${
              i % 2 === 1 ? "lg:[&>figure]:order-2" : ""
            }`}
          >
            <figure className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.alt}
                loading="lazy"
                width={1200}
                height={800}
                className="h-56 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 lg:h-full"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,color-mix(in_oklab,var(--background)_85%,transparent))]" />
            </figure>

            <div className="flex flex-col gap-4 p-6 sm:p-8">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
                Project 0{i + 1}
              </span>
              <h3 className="text-xl font-bold sm:text-2xl">{project.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border bg-surface-2/50 px-3 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-3 pt-2">
                {project.live ? (
                  <GlowLink href={project.live} variant="primary" target="_blank">
                    <ExternalLink className="size-4" /> Live Demo
                  </GlowLink>
                ) : null}
                <GlowLink href={project.repo} variant="glass">
                  <Github className="size-4" /> GitHub
                </GlowLink>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

import { motion } from "framer-motion";
import { Layout, Server, Database, Sparkles, Wrench } from "lucide-react";
import { SKILL_GROUPS } from "@/data/portfolio";
import { Section } from "./Section";

const icons = { Layout, Server, Database, Sparkles, Wrench } as const;

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="A stack built for shipping"
      subtitle="Frontend craft, backend depth, data modelling, AI integration and the tooling that ties it all together."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((group, i) => {
          const Icon = icons[group.icon as keyof typeof icons];
          return (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className="rounded-3xl glass glass-hover p-6"
            >
              <div className="flex items-center gap-3">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl [background:var(--gradient-brand)] text-primary-foreground">
                  <Icon className="size-5" />
                </span>
                <h3 className="min-w-0 truncate text-lg font-semibold">
                  {group.title}
                </h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <span className="inline-block rounded-full border border-border bg-surface-2/50 px-3 py-1.5 font-mono text-xs text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}

import { motion } from "framer-motion";
import {
  Trophy,
  Lightbulb,
  Code2,
  Rocket,
  Users,
  GraduationCap,
} from "lucide-react";
import { ACHIEVEMENTS } from "@/data/portfolio";
import { Section } from "./Section";

const icons = { Trophy, Lightbulb, Code2, Rocket, Users, GraduationCap } as const;

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title="Milestones that shaped my engineering"
      subtitle="Hackathons, innovation challenges, coding practice and technical wins."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ACHIEVEMENTS.map((a, i) => {
          const Icon = icons[a.icon as keyof typeof icons];
          return (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="relative overflow-hidden rounded-3xl glass glass-hover p-6"
            >
              <span className="grid size-11 place-items-center rounded-2xl bg-secondary text-primary">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {a.description}
              </p>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}

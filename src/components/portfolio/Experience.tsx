import { motion } from "framer-motion";
import { EXPERIENCE } from "@/data/portfolio";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="A timeline of building and deploying"
      subtitle="Hands-on full stack development, AI integration, cloud deployment and software engineering practice."
    >
      <div className="relative pl-6 sm:pl-10">
        <motion.span
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
          className="absolute left-1.5 top-2 h-[calc(100%-1rem)] w-px [background:var(--gradient-brand)] sm:left-3"
        />
        <div className="grid gap-6">
          {EXPERIENCE.map((item, i) => (
            <motion.article
              key={item.role}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative rounded-3xl glass glass-hover p-6"
            >
              <span className="absolute -left-[1.35rem] top-8 size-3 rounded-full bg-primary ring-4 ring-background sm:-left-[2.1rem]" />
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
                {item.period}
              </span>
              <h3 className="mt-3 text-lg font-semibold sm:text-xl">
                {item.role}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.org}</p>
              <ul className="mt-4 grid gap-2">
                {item.points.map((p) => (
                  <li
                    key={p}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}

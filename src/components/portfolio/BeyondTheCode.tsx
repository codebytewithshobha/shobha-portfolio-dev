import { motion } from "framer-motion";
import { Users, Sparkles, Quote } from "lucide-react";
import nssImage from "@/assets/nss-president.jpeg";
import { LEADERSHIP } from "@/data/portfolio";
import { Section } from "./Section";

export function BeyondTheCode() {
  const [nss, helix] = LEADERSHIP as [
    (typeof LEADERSHIP)[number],
    (typeof LEADERSHIP)[number],
  ];

  return (
    <Section
      id="beyond"
      eyebrow="Beyond The Code"
      title="Leading people, not just projects"
      subtitle="Leadership, teamwork and community contribution — the story that runs alongside my engineering work."
    >
      <div className="relative grid gap-6 lg:grid-cols-2">
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="group overflow-hidden rounded-3xl glass glass-hover"
        >
          <figure className="relative overflow-hidden">
            <img
              src={nssImage}
              alt="Shobha Kumari announced as NSS President for the 2024-25 NSS team at R.V.S. College of Engineering & Technology"
              loading="lazy"
              width={1080}
              height={770}
              className="h-64 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05] sm:h-72"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,color-mix(in_oklab,var(--background)_92%,transparent))]" />
            <figcaption className="absolute bottom-4 left-5 flex items-center gap-2 rounded-full glass px-3 py-1.5 font-mono text-xs text-primary">
              <Users className="size-3.5" /> NSS Team 2024–25
            </figcaption>
          </figure>

          <div className="p-6 sm:p-8">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
              {nss.period}
            </span>
            <h3 className="mt-3 text-2xl font-bold">{nss.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{nss.org}</p>

            <div className="relative mt-6 pl-6">
              <span className="absolute left-1 top-2 h-[calc(100%-1rem)] w-px [background:var(--gradient-brand)]" />
              <ul className="grid gap-3">
                {nss.points.map((p, i) => (
                  <motion.li
                    key={p}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                    className="relative text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="absolute -left-[1.4rem] top-1.5 size-2 rounded-full bg-primary ring-4 ring-card" />
                    {p}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.article>

        <div className="grid gap-6 content-start">
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-3xl glass glass-hover p-6 sm:p-8"
          >
            <span className="grid size-11 place-items-center rounded-2xl [background:var(--gradient-brand)] text-primary-foreground">
              <Sparkles className="size-5" />
            </span>
            <span className="mt-5 block font-mono text-xs uppercase tracking-[0.18em] text-primary">
              {helix.period}
            </span>
            <h3 className="mt-3 text-2xl font-bold">{helix.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{helix.org}</p>
            <div className="relative mt-6 pl-6">
              <span className="absolute left-1 top-2 h-[calc(100%-1rem)] w-px [background:var(--gradient-brand)]" />
              <ul className="grid gap-3">
                {helix.points.map((p, i) => (
                  <motion.li
                    key={p}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                    className="relative text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="absolute -left-[1.4rem] top-1.5 size-2 rounded-full bg-accent ring-4 ring-card" />
                    {p}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.article>

          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl glass p-6 sm:p-8"
          >
            <Quote className="size-6 text-primary" />
            <p className="mt-4 font-display text-lg leading-snug">
              “Leading volunteers taught me what code alone never could —
              clarity, ownership and bringing people along.”
            </p>
            <footer className="mt-4 text-sm text-muted-foreground">
              Shobha Kumari
            </footer>
          </motion.blockquote>
        </div>
      </div>
    </Section>
  );
}

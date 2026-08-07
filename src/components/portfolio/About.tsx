import { motion } from "framer-motion";
import {
  GraduationCap,
  Layers,
  BrainCircuit,
  Binary,
  Heart,
  Server,
} from "lucide-react";
import { PROFILE } from "@/data/portfolio";
import { Section } from "./Section";

const cards = [
  {
    Icon: Layers,
    title: "Full Stack Journey",
    body: "From first HTML page to production-grade apps — I own the flow from UI polish to API design and deployment.",
  },
  {
    Icon: Server,
    title: "MERN Stack Expertise",
    body: "MongoDB, Express, React and Node.js: authentication, REST APIs, modular architecture and clean state management.",
  },
  {
    Icon: BrainCircuit,
    title: "AI Integration",
    body: "Shipping features on top of Generative AI APIs — summarization, quiz generation and intelligent recommendations.",
  },
  {
    Icon: Binary,
    title: "DSA Practice",
    body: "Consistent Data Structures & Algorithms practice on LeetCode and GeeksforGeeks to keep problem solving sharp.",
  },
  {
    Icon: Heart,
    title: "Impactful Technology",
    body: "I care about products that solve real problems — travel, education and agriculture have all been playgrounds.",
  },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About Me"
      title="Engineering software that solves real problems"
      subtitle={PROFILE.about}
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map(({ Icon, title, body }, i) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.06 }}
            className="rounded-3xl glass glass-hover p-6"
          >
            <span className="grid size-11 place-items-center rounded-2xl bg-secondary text-primary">
              <Icon className="size-5" />
            </span>
            <h3 className="mt-5 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {body}
            </p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

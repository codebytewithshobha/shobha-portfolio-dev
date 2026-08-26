import { motion } from "framer-motion";
import { Github, Linkedin, FileText, Braces, Code2 } from "lucide-react";
import { LINKS } from "@/data/portfolio";

const items = [
  { label: "GitHub Profile", href: LINKS.github, Icon: Github },
  { label: "LinkedIn Profile", href: LINKS.linkedin, Icon: Linkedin },
  { label: "LeetCode Profile", href: LINKS.leetcode, Icon: Code2 },
  { label: "GeeksforGeeks Profile", href: LINKS.gfg, Icon: Braces },
  { label: "View Resume", href: LINKS.resume, Icon: FileText },
];

export function ProfileLinks() {
  return (
    <div className="px-5">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto grid w-full max-w-6xl gap-3 rounded-3xl glass p-4 sm:grid-cols-2 lg:grid-cols-5"
      >
        {items.map(({ label, href, Icon }) => {
          return (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              className="group flex items-center gap-3 rounded-2xl border border-border bg-surface-2/40 px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-secondary text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-4" />
              </span>
              <span className="min-w-0 truncate text-sm font-medium">{label}</span>
            </a>
          );
        })}
      </motion.div>
    </div>
  );
}

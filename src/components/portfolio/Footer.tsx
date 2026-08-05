import { Github, Linkedin, Mail } from "lucide-react";
import { LINKS, NAV_ITEMS, PROFILE } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-10">
      <div className="mx-auto grid w-full max-w-6xl gap-6 sm:flex sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p className="font-display text-base font-bold">
            Shobha<span className="text-gradient">.dev</span>
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            {PROFILE.role}
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-4 gap-y-2">
          {NAV_ITEMS.slice(0, 5).map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-3">
          {[
            { href: LINKS.github, Icon: Github, label: "GitHub" },
            { href: LINKS.linkedin, Icon: Linkedin, label: "LinkedIn" },
            { href: `mailto:${PROFILE.email}`, Icon: Mail, label: "Email" },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              {...(href.startsWith("http")
                ? { target: "_blank", rel: "noreferrer noopener" }
                : {})}
              className="grid size-10 place-items-center rounded-full glass text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:text-primary"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
      <p className="mx-auto mt-8 w-full max-w-6xl text-xs text-muted-foreground">
        © {new Date().getFullYear()} Shobha Kumari. Built with React, TypeScript
        and Tailwind CSS.
      </p>
    </footer>
  );
}

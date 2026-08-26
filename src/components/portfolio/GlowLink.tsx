import type { ReactNode } from "react";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants = {
  primary:
    "text-primary-foreground [background:var(--gradient-brand)] hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-glow)]",
  glass:
    "glass text-foreground hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary",
  ghost:
    "border border-border text-muted-foreground hover:border-primary/50 hover:text-primary",
} as const;

export function GlowLink({
  href,
  children,
  variant = "glass",
  download,
  className = "",
  ariaLabel,
  target,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  download?: boolean;
  className?: string;
  ariaLabel?: string;
  target?: string;
}) {
  const external = target === "_blank" || href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target={target || (external ? "_blank" : undefined)}
      rel={external ? "noreferrer noopener" : undefined}
      {...(download ? { download: "" } : {})}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}


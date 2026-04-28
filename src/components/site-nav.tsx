import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const links = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/about", label: "About" },
    { to: "/team", label: "Team", hash: undefined as string | undefined },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border/40 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="group flex flex-col leading-none">
          <span className="font-display text-2xl font-bold tracking-tight">
            STR<span className="text-accent">/</span>IDE
          </span>
          <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Virtual Assistant
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l, i) => (
            <Link
              key={`${l.to}-${l.label}-${i}`}
              to={l.to}
              hash={l.hash}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex" />
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border/40 bg-background/90 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {links.map((l, i) => (
              <Link
                key={`${l.to}-${l.label}-${i}`}
                to={l.to}
                hash={l.hash}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="mailto:info@stride.con"
              className="mt-2 rounded-full bg-accent px-5 py-2 text-center text-sm font-medium text-accent-foreground"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-2.5 leading-none">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-display text-xl">
              S
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-2xl tracking-tight">Stride</span>
              <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                Executive Support
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A founder-led executive support firm helping busy professionals reclaim their time and move with confidence.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="mailto:info@stride.com" aria-label="Email" className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent">
              <Mail className="h-4 w-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Twitter" className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent">
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="md:col-span-3">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground">Company</h4>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li><Link to="/" className="transition-colors hover:text-foreground">Home</Link></li>
            <li><Link to="/services" className="transition-colors hover:text-foreground">Services</Link></li>
            <li><Link to="/about" className="transition-colors hover:text-foreground">About</Link></li>
            <li><Link to="/team" className="transition-colors hover:text-foreground">Team</Link></li>
            <li><Link to="/contact" className="transition-colors hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground">Get in touch</h4>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>
              <a href="mailto:info@stride.com" className="transition-colors hover:text-foreground">
                info@stride.com
              </a>
            </li>
            <li>Mon – Fri · 9am to 6pm EST</li>
            <li className="text-xs text-muted-foreground/80">Reply within one business day.</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Stride Executive Support. All rights reserved.</p>
          <p className="font-medium">Built for people who move first.</p>
        </div>
      </div>
    </footer>
  );
}
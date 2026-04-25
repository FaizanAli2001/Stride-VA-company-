import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-background/40 backdrop-blur-xl">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-2xl font-bold tracking-tight">
              STR<span className="text-accent">/</span>IDE
            </span>
            <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
              Virtual Assistant
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Boutique virtual assistant support helping busy professionals keep their momentum.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Home</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="mailto:info@stride.com" className="hover:text-foreground">
                info@stride.com
              </a>
            </li>
            <li>Mon to Fri · 9am to 6pm</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-muted-foreground md:flex-row">
          <p>© 2026 Stride. All rights reserved.</p>
          <p>Built for founders who'd rather be building.</p>
        </div>
      </div>
    </footer>
  );
}
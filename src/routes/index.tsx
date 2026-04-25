import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Lock,
  Users,
  Building2,
  Briefcase,
  Rocket,
  Target,
  CheckCircle2,
  Star,
} from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Stride — Executive support for founders & busy teams" },
      {
        name: "description",
        content:
          "Stride is a boutique executive support firm. We handle inbox, calendar, CRM and operations so you can focus on the work that grows your business.",
      },
      { property: "og:title", content: "Stride — Executive support for founders & busy teams" },
      {
        property: "og:description",
        content: "Founder-led executive support for busy professionals. Onboard in five days. Cancel anytime.",
      },
    ],
  }),
});

const pills = ["Inbox", "Calendar", "CRM", "Operations"];
const marquee = [
  "Inbox triage",
  "Calendar management",
  "CRM hygiene",
  "Client follow-ups",
  "Travel & expenses",
  "Document preparation",
  "Lead enrichment",
  "Project operations",
];
const trustLogos = ["NORTHWIND", "ACME & CO.", "MERIDIAN", "HARBOUR", "VERTEX", "LUMEN"];

function Index() {
  return (
    <div className="min-h-screen text-foreground" style={{ background: "var(--gradient-page)" }}>
      <SiteNav />

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-5xl px-6 pt-20 pb-20 text-center md:pt-28 md:pb-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Founder-led · Boutique by design
          </div>
          <h1 className="mx-auto mt-8 max-w-4xl font-display text-6xl leading-[1.02] tracking-tight text-foreground md:text-8xl lg:text-[7.5rem]">
            Executive support
            <br />
            <span className="italic text-accent">that earns its keep.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Stride pairs founders and busy professionals with a small, senior team that quietly runs the
            background of your business — so you can lead the front of it.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90"
            >
              Book a discovery call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-card"
            >
              Explore services
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-accent" /> Live in 5 business days</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-accent" /> Month to month</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-accent" /> NDA & vetted access</span>
          </div>
        </div>

        {/* Trust strip — capabilities */}
        <div className="relative overflow-hidden border-y border-border/50 bg-card/40 py-6 backdrop-blur">
          <div className="flex animate-[marquee_45s_linear_infinite] gap-12 whitespace-nowrap text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {[...marquee, ...marquee, ...marquee].map((m, i) => (
              <span key={i} className="inline-flex items-center gap-3">
                <span className="h-1 w-1 rounded-full bg-accent" />
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Our story */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <div className="grid gap-12 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Our approach
            </p>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
              Discreet support.<br /><span className="italic">Disproportionate impact.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              We built Stride because too many brilliant operators were losing days to inbox triage,
              calendar tetris, and the long tail of admin. Our small, senior team runs that work for you —
              with the judgment of a chief of staff and the quiet rigour of a great EA.
            </p>
            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent"
            >
              The story behind Stride
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="md:col-span-7 grid gap-4 sm:grid-cols-2">
            {[
              { icon: Rocket, t: "Founder led", d: "You work directly with the partners who built this firm." },
              { icon: Target, t: "Hand-picked roster", d: "A capped client list means deep attention on your business." },
              { icon: Zap, t: "Onboard in 5 days", d: "Structured onboarding. No six-week kickoffs or process bloat." },
              { icon: ShieldCheck, t: "No lock-in", d: "Earn trust monthly. Pause or cancel with 14 days notice." },
            ].map((f) => (
              <div key={f.t} className="rounded-2xl border border-border bg-card/60 p-7 backdrop-blur transition-colors hover:border-accent/40">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-2xl tracking-tight">{f.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we handle */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            How we work
          </p>
          <h2 className="mt-4 mx-auto max-w-3xl font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
            The quiet engine behind <span className="italic">every great week.</span>
          </h2>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {[
            { icon: Lock, t: "NDA & secure access", d: "Encrypted vaults, scoped credentials, and signed agreements from day one. Built for confidence." },
            { icon: Zap, t: "Same-day response", d: "Replies inside one business day on every plan. Real humans, real ownership." },
            { icon: ShieldCheck, t: "Calm month-to-month", d: "No lock-ins, no surprise invoices. Pause, scale, or cancel with 14 days notice." },
          ].map((f) => (
            <div key={f.t} className="bg-card/80 p-8 transition-colors hover:bg-card">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-2xl tracking-tight">{f.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-card"
          >
            View all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* From the founders */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card/70 p-10 backdrop-blur md:p-16">
          <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
          <div className="relative grid gap-10 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <div className="flex items-center gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 font-display text-2xl leading-snug tracking-tight md:text-4xl">
                "We started Stride after watching too many operators — ourselves included — drown in
                inbox triage and scheduling tetris. No agency layers, no junior pool. Just our small
                team, treating your business as if it were our own."
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-lg font-display text-primary-foreground">
                  S
                </div>
                <div>
                  <p className="font-medium text-foreground">The Stride founders</p>
                  <p className="text-sm text-muted-foreground">Boutique by design</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-background/60 p-5 backdrop-blur">
                <p className="font-display text-4xl tracking-tight text-accent">24h</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Response promise</p>
              </div>
              <div className="rounded-2xl bg-background/60 p-5 backdrop-blur">
                <p className="font-display text-4xl tracking-tight text-accent">5d</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">To live onboarding</p>
              </div>
              <div className="rounded-2xl bg-background/60 p-5 backdrop-blur">
                <p className="font-display text-4xl tracking-tight text-accent">100%</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Founder led</p>
              </div>
              <div className="rounded-2xl bg-background/60 p-5 backdrop-blur">
                <p className="font-display text-4xl tracking-tight text-accent">0</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Long-term contracts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built for */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Built for</p>
          <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
            People who move first.
          </h2>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Rocket, t: "Founders", d: "Get your hours back to lead, sell, and build the next thing." },
            { icon: Building2, t: "Real estate", d: "More showings closed, less time spent on inbound DMs." },
            { icon: Briefcase, t: "Legal & finance", d: "Document prep, client comms, billing — handled with discretion." },
            { icon: Users, t: "Agencies", d: "Free your senior team from internal admin and project ops." },
          ].map((f) => (
            <div key={f.t} className="group rounded-2xl border border-border bg-card/60 p-7 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:bg-card">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-2xl tracking-tight">{f.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-28">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-20 text-center text-primary-foreground md:px-16 md:py-24">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/40 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-accent/25 blur-3xl" />
          <div className="relative mx-auto max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground/70">
              Get started
            </p>
            <h2 className="mt-4 font-display text-5xl leading-[1.02] tracking-tight md:text-7xl">
              Your business,<br /><span className="italic">in full stride.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-base text-primary-foreground/80 md:text-lg">
              Twenty minutes on a call. We'll map what to hand off first. No pitch, no pressure.
            </p>
            <Link
              to="/contact"
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-background px-8 py-4 text-sm font-semibold text-foreground transition-all hover:bg-background/90"
            >
              <span>Book your free intro call</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

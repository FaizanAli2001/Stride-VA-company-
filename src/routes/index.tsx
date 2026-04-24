import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Mail, Calendar, Database, FileText, Sparkles, Briefcase } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Stride — Virtual Assistants for Busy Founders" },
      { name: "description", content: "Stride pairs founders with skilled virtual assistants who handle email, calendar, CRM and the daily busywork." },
      { property: "og:title", content: "Stride — Virtual Assistants for Busy Founders" },
      { property: "og:description", content: "We handle the busywork. You run the business." },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute top-40 -left-20 h-[400px] w-[400px] rounded-full bg-primary/10 blur-3xl" />
        </div>
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            A new kind of virtual assistant company
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            We handle the busywork.
            <br />
            <span className="italic text-accent">You run the business.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Stride pairs founders, agencies, and small teams with reliable virtual assistants
            for inbox, calendar, CRM, and the daily admin that eats your week.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
            >
              See what we do
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="mailto:info@stride.con"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              info@stride.con
            </a>
          </div>
        </div>
      </section>

      {/* Who we help */}
      <section className="border-y border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Built for the businesses that hate admin
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6 text-center md:grid-cols-5">
            {["Healthcare", "Law Firms", "Real Estate", "Marketing", "Coaches"].map((n) => (
              <div
                key={n}
                className="rounded-xl border border-border/60 bg-card/60 px-4 py-5 font-display text-lg"
              >
                {n}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium text-accent">What we do</p>
            <h2 className="mt-2 max-w-2xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
              Quiet support for the loud parts of your day.
            </h2>
          </div>
          <Link
            to="/services"
            className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
          >
            View all services →
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Mail, title: "Inbox management", desc: "Triage, reply, and clear your inbox to zero — daily." },
            { icon: Calendar, title: "Calendar & scheduling", desc: "Meetings booked, reminders sent, conflicts handled." },
            { icon: Database, title: "CRM updates", desc: "Keep HubSpot, Salesforce, or Pipedrive clean and current." },
            { icon: FileText, title: "Admin & research", desc: "Reports, data entry, travel, document prep, follow-ups." },
          ].map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-primary-foreground md:px-16">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative max-w-2xl">
            <Briefcase className="h-8 w-8 text-accent" />
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
              Get a few hours back this week.
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Tell us what's clogging your day. We'll match you with a virtual assistant who can take it off your plate.
            </p>
            <a
              href="mailto:info@stride.con"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              Email info@stride.con
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

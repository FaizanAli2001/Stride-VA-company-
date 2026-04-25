import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Mail,
  Calendar,
  Database,
  MessageSquare,
  FolderOpen,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services. Stride" },
      {
        name: "description",
        content:
          "Admin support, shaped around how you actually work. Email, calendar, CRM, client comms, file ops and general VA support, month to month.",
      },
      { property: "og:title", content: "Services. Stride" },
      { property: "og:description", content: "Mix and match. Cancel anytime." },
    ],
  }),
});

const services = [
  {
    icon: Mail,
    title: "Email & inbox management",
    desc: "Triage, filtering, drafting, and replying in your tone. Inbox-zero, every day.",
    bullets: ["Daily triage & labeling", "Drafted responses", "Spam & newsletter cleanup", "VIP flagging"],
  },
  {
    icon: Calendar,
    title: "Calendar & scheduling",
    desc: "Coordinate meetings across timezones without the back-and-forth.",
    bullets: ["Meeting scheduling", "Reminders & prep notes", "Travel coordination", "Time-block planning"],
  },
  {
    icon: Database,
    title: "CRM management",
    desc: "Keep your CRM clean, current, and useful. HubSpot, Pipedrive, Notion, or Airtable.",
    bullets: ["Data entry & cleanup", "Pipeline updates", "Follow-up sequences", "Reporting"],
  },
  {
    icon: MessageSquare,
    title: "Client communication",
    desc: "Warm, personalized follow-ups and onboarding messages that feel like you wrote them.",
    bullets: ["Follow-up emails", "Onboarding flows", "Status updates", "Newsletter coordination"],
  },
  {
    icon: FolderOpen,
    title: "Document & file organization",
    desc: "Cloud drives sorted, templates created, SOPs documented.",
    bullets: ["Drive structure", "Template creation", "SOP writing", "File renaming & tagging"],
  },
  {
    icon: Sparkles,
    title: "General virtual assistance",
    desc: "Research, bookings, expense tracking, and the long-tail of small tasks.",
    bullets: ["Research", "Bookings & reservations", "Expense logging", "Data gathering"],
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen text-foreground" style={{ background: "var(--gradient-page)" }}>
      <SiteNav />
      <section className="mx-auto max-w-5xl px-6 pt-24 pb-14 text-center md:pt-32">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
          Services
        </p>
        <h1 className="mt-5 font-display text-5xl leading-[1.05] tracking-tight md:text-7xl">
          Support shaped around <br /><span className="italic text-accent">how you actually work.</span>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Start with one area, add more as you go. Every engagement is month-to-month. Cancel or
          pause anytime.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-border bg-card/60 p-8 backdrop-blur transition-all hover:-translate-y-1 hover:border-accent/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 font-display text-3xl tracking-tight">{s.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">{s.desc}</p>
              <ul className="mt-6 grid gap-2.5 text-sm text-muted-foreground sm:grid-cols-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-border bg-card/70 p-10 text-center backdrop-blur md:p-16">
          <h2 className="font-display text-4xl leading-tight tracking-tight md:text-5xl">
            Not sure which fits?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Tell us what your week looks like. We'll suggest the right starting point. No upsell, no obligation.
          </p>
          <Link
            to="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
          >
            Talk to us
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

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
      { title: "Services — Stride" },
      {
        name: "description",
        content:
          "Admin support, shaped around how you actually work. Email, calendar, CRM, client comms, file ops and general VA support — month-to-month.",
      },
      { property: "og:title", content: "Services — Stride" },
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
    desc: "Keep your CRM clean, current, and useful — HubSpot, Pipedrive, Notion, or Airtable.",
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
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-12 text-center md:pt-28">
        <p className="inline-flex rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
          Services
        </p>
        <h1 className="mt-5 font-display text-5xl font-bold tracking-tight md:text-6xl">
          Admin support, shaped around how you actually work.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Mix and match. Start with one area, add more as you go. Every plan is monthly — cancel or
          pause anytime.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="glass rounded-2xl p-7 transition-all hover:-translate-y-0.5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-muted-foreground">{s.desc}</p>
              <ul className="mt-5 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
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

        <div className="glass mt-16 rounded-3xl p-10 text-center md:p-14">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Not sure which fits?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Tell us what your week looks like. We'll suggest the right starting point — no upsell.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90"
          >
            Talk to us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

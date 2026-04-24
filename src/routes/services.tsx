import { createFileRoute } from "@tanstack/react-router";
import { Mail, Calendar, Database, FileText, Phone, Plane, FileSpreadsheet, MessageSquare } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Stride Virtual Assistants" },
      { name: "description", content: "From inbox triage to CRM cleanup, see how Stride virtual assistants take admin off your plate." },
      { property: "og:title", content: "Services — Stride Virtual Assistants" },
      { property: "og:description", content: "Inbox, calendar, CRM, research, document prep — handled." },
    ],
  }),
});

const services = [
  { icon: Mail, title: "Inbox management", desc: "Daily triage, drafted replies, label systems, and inbox-zero hygiene across Gmail and Outlook." },
  { icon: Calendar, title: "Calendar & scheduling", desc: "Meeting coordination across time zones, reminders, prep notes, and rescheduling without the back-and-forth." },
  { icon: Database, title: "CRM management", desc: "Clean records and pipelines in HubSpot, Salesforce, Pipedrive, GoHighLevel — updated daily." },
  { icon: FileText, title: "Document & report prep", desc: "Proposals, decks, contracts, and weekly reports formatted to your brand." },
  { icon: FileSpreadsheet, title: "Data entry & research", desc: "Lead lists, market research, competitor scans, spreadsheet cleanup." },
  { icon: Plane, title: "Travel & lifestyle", desc: "Flights, hotels, itineraries, restaurant bookings — sorted." },
  { icon: MessageSquare, title: "Client follow-ups", desc: "Polite, on-brand follow-ups so no warm lead goes cold." },
  { icon: Phone, title: "Light project management", desc: "Asana, ClickUp, Trello — kept tidy so your team always knows what's next." },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-12 md:pt-28">
        <p className="text-sm font-medium text-accent">Services</p>
        <h1 className="mt-3 max-w-3xl font-display text-5xl font-semibold tracking-tight md:text-6xl">
          Everything an executive assistant does — without the overhead.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Pick what you need. Scale up when things get busy. Pause when they don't.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="glass flex gap-5 rounded-2xl p-6 transition-all hover:-translate-y-0.5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <s.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="glass mt-16 rounded-3xl p-10 text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Don't see what you need?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            If it's repetitive, time-consuming, and not the reason you started your business — we probably do it. Just ask.
          </p>
          <a
            href="mailto:info@stride.con"
            className="mt-6 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
          >
            info@stride.con
          </a>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
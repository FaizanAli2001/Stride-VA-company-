import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Mail, Clock, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Stride Virtual Assistants" },
      { name: "description", content: "Get in touch with Stride. Email info@stride.con and tell us what you need help with." },
      { property: "og:title", content: "Contact — Stride" },
      { property: "og:description", content: "Email us. We reply within one business day." },
    ],
  }),
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <section className="mx-auto max-w-4xl px-6 pt-20 pb-24 md:pt-28">
        <p className="text-sm font-medium text-accent">Contact</p>
        <h1 className="mt-3 font-display text-5xl font-semibold tracking-tight md:text-6xl">
          Tell us what's eating your week.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Send us a quick note about what you do, what's piling up, and how many hours a week
          you'd want back. We'll reply within one business day with next steps.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <a
            href="mailto:info@stride.con"
            className="glass group flex items-start gap-4 rounded-2xl p-6 transition-all hover:-translate-y-0.5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold">Email us</h3>
              <p className="mt-1 text-sm text-muted-foreground">The fastest way to reach us.</p>
              <p className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-foreground">
                info@stride.con
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </p>
            </div>
          </a>
          <div className="glass flex items-start gap-4 rounded-2xl p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold">Hours</h3>
              <p className="mt-1 text-sm text-muted-foreground">Monday – Friday</p>
              <p className="mt-3 text-sm font-medium">9:00 AM – 6:00 PM</p>
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-3xl bg-primary p-10 text-primary-foreground md:p-12">
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Not sure what to ask for?
          </h2>
          <p className="mt-3 max-w-xl text-primary-foreground/80">
            Just send a few sentences about your day. We'll suggest where a virtual assistant could save you the most time.
          </p>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
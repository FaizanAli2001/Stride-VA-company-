import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Mail, Calendar, MessageCircle } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Stride Executive Support" },
      { name: "description", content: "Get in touch with Stride. Tell us what's on your plate and we'll respond within one business day." },
      { property: "og:title", content: "Contact. Stride" },
      { property: "og:description", content: "Email us. We reply within one business day." },
    ],
  }),
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const company = String(data.get("company") || "");
    const message = String(data.get("message") || "");

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in your name, email, and message.");
      return;
    }

    setSubmitting(true);
    const { error } = await supabase.from("contact_submissions").insert({
      name: name.trim().slice(0, 100),
      email: email.trim().slice(0, 255),
      company: company.trim().slice(0, 100) || null,
      message: message.trim().slice(0, 2000),
    });
    setSubmitting(false);

    if (error) {
      toast.error("Could not send your message. Please try again.");
      return;
    }

    toast.success("Message received. We'll be in touch soon.");
    setSubmitted(true);
    form.reset();
  };

  return (
    <div className="min-h-screen text-foreground" style={{ background: "var(--gradient-page)" }}>
      <SiteNav />
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-12 md:pt-32">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
          Contact
        </p>
        <h1 className="mt-5 font-display text-5xl leading-[1.05] tracking-tight md:text-7xl">
          Let's get you in <br /><span className="italic text-accent">full stride.</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Tell us a bit about your week and what's piling up. We'll respond within one business
          day with next steps.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-border bg-card/70 p-8 backdrop-blur md:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold">
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  maxLength={100}
                  className="mt-2 w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength={255}
                  className="mt-2 w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="company" className="block text-sm font-semibold">
                Company (optional)
              </label>
              <input
                id="company"
                name="company"
                type="text"
                maxLength={100}
                className="mt-2 w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
              />
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="block text-sm font-semibold">
                What can we help with?
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                maxLength={1000}
                placeholder="A few sentences about your week & where time is leaking..."
                className="mt-2 w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-accent focus:ring-2 focus:ring-accent/30"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="mt-7 inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? "Sending..." : submitted ? "Sent ✓ Send another" : "Send message"}
            </button>
          </form>

          {/* Info cards */}
          <div className="flex flex-col gap-6">
            <div className="rounded-3xl border border-border bg-card/70 p-7 backdrop-blur">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Calendar className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-2xl tracking-tight">Book an intro call</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                A free 20-minute conversation to see if we're a fit. Use the form to request a slot.
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-card/70 p-7 backdrop-blur">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Mail className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-2xl tracking-tight">Email us</h3>
              <a
                href="mailto:info@stride.com"
                className="mt-2 block text-sm font-medium text-foreground hover:text-accent"
              >
                info@stride.com
              </a>
              <p className="mt-1 text-sm text-muted-foreground">Reply within one business day.</p>
            </div>

            <div className="rounded-3xl border border-border bg-card/70 p-7 backdrop-blur">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent">
                <MessageCircle className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-2xl tracking-tight">Office hours</h3>
              <p className="mt-2 text-sm text-muted-foreground">Monday to Friday</p>
              <p className="text-sm font-medium">9am to 6pm EST</p>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
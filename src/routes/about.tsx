import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, HeartHandshake, Sparkles, ShieldCheck, Rocket, Users, Clock, Heart } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Stride" },
      {
        name: "description",
        content:
          "Stride is a founder led virtual assistant firm helping businesses move at full momentum, without the admin drag.",
      },
      { property: "og:title", content: "About Stride" },
      {
        property: "og:description",
        content:
          "Founder led, human first. Learn the story, mission, and values behind Stride.",
      },
    ],
  }),
});

const values = [
  {
    icon: HeartHandshake,
    title: "People first",
    body: "We treat every client like a long term partner, not a ticket in a queue.",
  },
  {
    icon: ShieldCheck,
    title: "Quietly reliable",
    body: "No theatrics. We do the work, hit the deadline, and keep your day calm.",
  },
  {
    icon: Compass,
    title: "Clear direction",
    body: "We bring structure to the chaos so you always know what's moving and why.",
  },
  {
    icon: Sparkles,
    title: "Craft over volume",
    body: "We'd rather do a few things brilliantly than a hundred things halfway.",
  },
];

const stats = [
  { icon: Rocket, value: "2026", label: "Year founded" },
  { icon: Users, value: "4", label: "Founders, hands on" },
  { icon: Clock, value: "24h", label: "Response promise" },
  { icon: Heart, value: "100%", label: "Founder led" },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-24 pb-16 text-center md:pt-32">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
          About Stride
        </p>
        <h1 className="mt-5 font-display text-5xl leading-[1.05] tracking-tight md:text-7xl">
          Built by operators, <br /><span className="italic text-accent">for operators.</span>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          We built Stride because too many brilliant businesses were losing pace under the weight
          of admin work. Our job is simple: give you a clear run so you can move at full speed.
        </p>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Our story
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight tracking-tight md:text-5xl">
              The firm we wished existed.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Stride is a brand new firm, founded in 2026 by four friends who spent
              years inside startups, clinics, and small teams watching brilliant people
              drown in inboxes, calendars, and back office work nobody had time for.
            </p>
            <p>
              We didn't want to build another faceless agency. We wanted a small, sharp
              team you could actually trust, one that learns how you work and quietly
              keeps everything moving in the background.
            </p>
            <p>
              We're just getting started, which means every early client works directly
              with the founders. You get our full attention, our best thinking, and a
              partnership we're personally invested in making exceptional.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl border border-border bg-card/70 p-10 backdrop-blur md:p-14">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Our mission
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight tracking-tight md:text-5xl">
            Give every business a clear run.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            We exist to remove friction. The recurring tasks, the inbox triage, the
            scheduling, the follow ups, all the small things that quietly slow great
            people down. When those disappear, momentum takes over.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            What we value
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight tracking-tight md:text-6xl">
            How we show up.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div
              key={v.title}
              className="group rounded-3xl border border-border bg-card/60 p-7 backdrop-blur transition-all hover:-translate-y-1 hover:border-accent/40"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-2xl tracking-tight">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid grid-cols-2 gap-6 rounded-3xl border border-border bg-card/60 p-10 backdrop-blur md:grid-cols-4 md:p-12">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <s.icon className="h-5 w-5" />
              </div>
              <p className="mt-4 font-display text-5xl tracking-tight text-accent md:text-6xl">
                {s.value}
              </p>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 pb-28 text-center">
        <h2 className="font-display text-5xl leading-tight tracking-tight md:text-6xl">
          Be one of our <span className="italic text-accent">founding clients.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          We're taking on a small group of founding clients right now. Work directly with us and
          help shape what Stride becomes.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/team"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
          >
            Meet the team
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-card"
          >
            Book an intro call
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
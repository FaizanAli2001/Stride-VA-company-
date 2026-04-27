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
  Star,
} from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import review1 from "@/assets/review-1.jpg";
import review2 from "@/assets/review-2.jpg";
import review3 from "@/assets/review-3.jpg";
import review4 from "@/assets/review-4.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Stride. We handle the work. You keep the momentum." },
      {
        name: "description",
        content:
          "Stride is a boutique virtual assistant firm helping busy professionals move faster: emails, calendars, CRM and everything in between.",
      },
      { property: "og:title", content: "Stride. We handle the work. You keep the momentum." },
      {
        property: "og:description",
        content: "Boutique virtual assistant support for founders and small teams.",
      },
    ],
  }),
});

const pills = ["Email mgmt", "Calendar", "CRM", "Task ops"];
const marquee = [
  "Inbox triage",
  "Calendar wrangling",
  "CRM hygiene",
  "Client follow ups",
  "Travel & expenses",
  "Document prep",
  "Lead enrichment",
  "Project ops",
];

function Index() {
  return (
    <div className="min-h-screen text-foreground" style={{ background: "var(--gradient-page)" }}>
      <SiteNav />

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-5xl px-6 pt-16 pb-20 text-center md:pt-24 md:pb-28">
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Boutique Virtual Assistant
          </div>
          <h1 className="mx-auto mt-8 max-w-4xl font-display text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl lg:text-8xl">
            We handle the work.
            <br />
            <span className="text-accent">You keep the momentum.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Stride is a boutique virtual assistant firm helping busy professionals move faster:
            emails, calendars, CRM and everything in between.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition-all hover:opacity-90"
            >
              Get a clear run
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/services"
              className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-card"
            >
              See what we handle
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {pills.map((p) => (
              <span
                key={p}
                className="rounded-full bg-accent/10 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-accent"
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden border-y border-border/40 bg-card/30 py-5 backdrop-blur">
          <div className="flex animate-[marquee_40s_linear_infinite] gap-12 whitespace-nowrap text-sm font-medium uppercase tracking-widest text-muted-foreground">
            {[...marquee, ...marquee, ...marquee].map((m, i) => (
              <span key={i} className="inline-flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Our story */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="inline-flex rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
              Our story
            </p>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-tight md:text-5xl">
              A stride is what full momentum feels like.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              No friction, no slowdowns. We built Stride because too many brilliant businesses were
              losing pace under the weight of admin work. Four founders, one mission: give you a
              clear run so you can move at full speed, every single day.
            </p>
            <Link
              to="/about"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent"
            >
              The story behind Stride
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Rocket, t: "Founder led", d: "You work directly with the people who built this." },
              { icon: Target, t: "Hyper focused", d: "A small client roster means deep attention on yours." },
              { icon: Zap, t: "Fast onboarding", d: "Live in 5 business days. No 6-week kickoffs." },
              { icon: ShieldCheck, t: "Cancel anytime", d: "Earn your trust monthly. No lock ins." },
            ].map((f) => (
              <div key={f.t} className="glass rounded-2xl p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{f.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we handle */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="text-center">
          <p className="inline-flex rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
            What we handle
          </p>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight md:text-5xl">
            The quiet engine behind every great day.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            { icon: Lock, t: "NDA + secure access", d: "Password vaults, scoped logins, signed agreements from day one." },
            { icon: Zap, t: "Same day response", d: "Replies inside one business day on every plan. Usually faster." },
            { icon: ShieldCheck, t: "No lock in", d: "Month to month. Pause or cancel with 14 days' notice." },
          ].map((f) => (
            <div key={f.t} className="glass rounded-2xl p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold">{f.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground hover:bg-card"
          >
            All services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* From the founders */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="glass relative overflow-hidden rounded-3xl p-10 md:p-16">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative">
            <p className="inline-flex rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
              From the founders
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-3xl font-bold tracking-tight md:text-5xl">
              Built by four friends who've been the bottleneck.
            </h2>
            <p className="mt-6 max-w-3xl text-lg italic text-muted-foreground">
              "We started Stride after watching too many founders, ourselves included, drown in
              inbox triage and scheduling tetris. No agency layers, no junior pool. Just four of us,
              in your corner, treating your business like our own."
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground">
                S
              </div>
              <div>
                <p className="font-display text-base font-semibold">The Stride founders</p>
                <p className="text-sm text-muted-foreground">Building boutique, on purpose</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built for */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="text-center">
          <p className="inline-flex rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
            Built for
          </p>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Teams who move fast.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Rocket, t: "Founders", d: "Get your hours back to actually build." },
            { icon: Building2, t: "Real estate", d: "More showings, fewer scheduling DMs." },
            { icon: Briefcase, t: "Legal & finance", d: "Document prep & client comms, handled." },
            { icon: Users, t: "Agencies", d: "Free your team from internal admin." },
          ].map((f) => (
            <div key={f.t} className="glass rounded-2xl p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{f.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="text-center">
          <p className="inline-flex rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
            Loved across the US
          </p>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight md:text-5xl">
            What our clients say.
          </h2>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={
                    i < 4
                      ? "h-4 w-4 fill-accent text-accent"
                      : "h-4 w-4 fill-accent/60 text-accent"
                  }
                />
              ))}
            </div>
            <span className="font-semibold text-foreground">4.7/5</span>
            <span>from 140+ US clients · trusted by realtors nationwide</span>
          </div>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              quote:
                "Honestly didn't think a VA could keep up with the Houston market, but they nailed it. Showings booked, lockboxes scheduled, sellers updated weekly. I closed 3 extra deals last quarter just from having my time back.",
              name: "Sarah Mitchell",
              role: "Realtor, Keller Williams",
              location: "Houston, TX",
              avatar: review1,
              rating: 5,
            },
            {
              quote:
                "My Follow Up Boss was a graveyard. Three weeks in, every lead is tagged, drip-campaigned and warm. Took a sec to get our systems aligned but it's solid now.",
              name: "Marcus Reed",
              role: "Managing Broker, Reed Realty Group",
              location: "Houston, TX",
              avatar: review2,
              rating: 4,
            },
            {
              quote:
                "I run 40+ active listings in The Heights and Katy. Stride handles the MLS updates, buyer follow-ups and transaction coordination. Total game changer for a solo agent.",
              name: "Priya Hernandez",
              role: "Real Estate Agent, Compass",
              location: "Houston, TX",
              avatar: review3,
              rating: 5,
            },
            {
              quote:
                "Started rocky, took about 2 weeks of back and forth on our CRM workflow. Once they got it though, my open house RSVPs and post-showing follow ups have been on point. Glad I stuck with it.",
              name: "Andre Jackson",
              role: "Realtor, eXp Realty",
              location: "Sugar Land, TX",
              avatar: review4,
              rating: 3,
            },
            {
              quote:
                "Same person every week, knows my buyers cold, knows which lenders I prefer, even remembers my closing gift vendors. Feels like a real assistant, not a call center.",
              name: "Jennifer Caldwell",
              role: "Broker Associate, Coldwell Banker",
              location: "Austin, TX",
              avatar: review5,
              rating: 5,
            },
            {
              quote:
                "Was skeptical about handing over client comms but Stride writes in my voice now. Buyers can't tell. The Houston team turnaround is fast - usually under an hour.",
              name: "David Nguyen",
              role: "Realtor, JPAR Real Estate",
              location: "The Woodlands, TX",
              avatar: review6,
              rating: 4,
            },
          ].map((t) => (
            <div key={t.name} className="glass flex flex-col rounded-2xl p-6">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={
                      i < t.rating
                        ? "h-4 w-4 fill-accent text-accent"
                        : "h-4 w-4 text-muted-foreground/40"
                    }
                  />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                "{t.quote}"
              </p>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-display text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.role} · {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground md:px-16 md:py-20">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/40 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
              Your business, in full stride.
            </h2>
            <p className="mt-5 text-lg text-primary-foreground/80">
              20 minutes on a call. We'll map what to hand off first. No pitch, no pressure.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground hover:opacity-90"
            >
              <span>Book your free intro call</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Heart, Lock, Eye, ArrowRight } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import lintaImg from "@/assets/team-linta.jpeg";
import malikImg from "@/assets/team-malik.jpg";
import kulsoomImg from "@/assets/team-kulsoom.png";
import faizanImg from "@/assets/team-faizan.png";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Stride" },
      {
        name: "description",
        content:
          "A stride is what full momentum feels like. We built Stride to give brilliant businesses a clear run, every single day.",
      },
      { property: "og:title", content: "About — Stride" },
      { property: "og:description", content: "Four founders. One mission: full momentum." },
    ],
  }),
});

const team = [
  {
    name: "Dr. Linta Tanwir",
    role: "CEO",
    img: lintaImg,
    points: [
      "Leads the company's direction and long-term growth",
      "Builds trusted client relationships and partnerships",
      "Keeps the team aligned around service excellence",
    ],
  },
  {
    name: "Dr. Malik Wasif Khalid",
    role: "CTO",
    img: malikImg,
    points: [
      "Shapes the technology behind smooth client delivery",
      "Improves systems, tools, and internal workflows",
      "Makes operations smarter, faster, and more reliable",
    ],
  },
  {
    name: "Kulsoom Waheed",
    role: "CMO",
    img: kulsoomImg,
    points: [
      "Owns brand voice, positioning, and marketing strategy",
      "Drives awareness through clear, human messaging",
      "Helps Stride connect with the right clients",
    ],
  },
  {
    name: "Faizan Ali",
    role: "COO",
    img: faizanImg,
    points: [
      "Runs day-to-day operations across the business",
      "Builds efficient processes for client support",
      "Ensures delivery stays consistent and dependable",
    ],
  },
];

const beliefs = [
  { icon: Heart, t: "Genuinely helpful", d: "We treat your business like it's our own." },
  { icon: Lock, t: "Discreet & trustworthy", d: "NDA-friendly. Your data stays yours." },
  { icon: Eye, t: "Quietly proactive", d: "We don't wait to be asked. We notice and act." },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <section className="mx-auto max-w-4xl px-6 pt-20 pb-16 text-center md:pt-28">
        <p className="inline-flex rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
          About
        </p>
        <h1 className="mt-5 font-display text-5xl font-bold tracking-tight md:text-6xl">
          A stride is what full momentum feels like.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          No friction, no slowdowns. We built Stride because too many brilliant businesses were
          losing pace under the weight of admin work. Four founders, one mission: give you a clear
          run so you can move at full speed, every single day.
        </p>
      </section>

      {/* Beliefs */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-center font-display text-3xl font-bold tracking-tight md:text-4xl">
          What we believe
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {beliefs.map((b) => (
            <div key={b.t} className="glass rounded-2xl p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <b.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold">{b.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="mx-auto max-w-4xl px-6 pb-20">
        <div className="glass rounded-3xl p-10 md:p-14">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Our approach
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            We don't believe in cookie-cutter packages. Every business runs differently, so we spend
            the first week learning your tone, tools, and rhythms. From there, we slot into the
            gaps — gently, never disruptively.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            We're a small team on purpose. It means every client gets a dedicated point of contact
            who actually knows their work, not a faceless ticket queue.
          </p>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="mx-auto max-w-6xl px-6 pb-24 scroll-mt-24">
        <div className="mb-12 text-center">
          <p className="inline-flex rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
            The team
          </p>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Four founders. One mission.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <article
              key={m.name}
              className="glass group flex flex-col overflow-hidden rounded-3xl transition-transform duration-500 hover:-translate-y-1"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <img
                  src={m.img}
                  alt={`${m.name}, ${m.role} of Stride`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-semibold">{m.name}</h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-accent">
                  {m.role}
                </p>
                <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                  {m.points.map((p) => (
                    <li key={p} className="flex gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span className="leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Meet the team CTA */}
      <section className="mx-auto max-w-4xl px-6 pb-24 text-center">
        <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
          Want to <span className="text-accent">meet the team?</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
          Book a free 20-minute intro call. No pitch, no pressure.
        </p>
        <a
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/30 transition-transform hover:-translate-y-0.5"
        >
          Book your free intro call
          <ArrowRight className="h-4 w-4" />
        </a>
      </section>

      <SiteFooter />
    </div>
  );
}

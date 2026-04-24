import { createFileRoute } from "@tanstack/react-router";
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
      { title: "About — Stride Virtual Assistants" },
      { name: "description", content: "Stride was founded by 4 friends who believe small businesses deserve the same support big ones get." },
      { property: "og:title", content: "About — Stride" },
      { property: "og:description", content: "Four founders. One mission: free founders from admin." },
    ],
  }),
});

const team = [
  { name: "Dr. Linta Tanwir", role: "CEO", img: lintaImg },
  { name: "Dr. Malik Wasif Khalid", role: "CTO", img: malikImg },
  { name: "Kulsoom Waheed", role: "CMO", img: kulsoomImg },
  { name: "Faizan Ali", role: "COO", img: faizanImg },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <section className="mx-auto max-w-4xl px-6 pt-20 pb-16 text-center md:pt-28">
        <p className="text-sm font-medium text-accent">About Stride</p>
        <h1 className="mt-3 font-display text-5xl font-semibold tracking-tight md:text-6xl">
          Started by 4 friends who believe founders deserve their evenings back.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Stride is a virtual assistant company built for founders, healthcare practices, law firms,
          real estate agents, and marketers — anyone drowning in inboxes, calendars, and CRM admin.
          We're new, hungry, and we treat every client like our first.
        </p>
      </section>

      {/* Brand story */}
      <section className="mx-auto max-w-4xl px-6 pb-20">
        <div className="glass rounded-3xl p-8 md:p-12">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">Our story</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            A stride is what full momentum feels like.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            No friction, no slowdowns. We built Stride because too many brilliant
            businesses were losing pace under the weight of admin work. Three founders,
            one mission: give you a clear run so you can move at full speed,
            every single day.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-12 text-center">
          <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Meet the team
          </h2>
          <p className="mt-3 text-muted-foreground">The four people behind Stride.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <div key={m.name} className="group text-center">
              <div className="glass relative mx-auto aspect-[4/5] w-full overflow-hidden rounded-2xl">
                <img
                  src={m.img}
                  alt={`${m.name}, ${m.role} of Stride`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{m.name}</h3>
              <p className="mt-1 text-sm font-medium uppercase tracking-wider text-accent">
                {m.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-border/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-3">
          {[
            { t: "Reliable", d: "Show up, follow through, no surprises. Admin should be the last thing you worry about." },
            { t: "Discreet", d: "Your inbox, calendar, and clients are sensitive. We treat them that way." },
            { t: "Honest", d: "We tell you what's worth doing — and what's not. No fluff, no upsells." },
          ].map((v) => (
            <div key={v.t} className="glass rounded-2xl p-6">
              <h3 className="font-display text-2xl font-semibold">{v.t}</h3>
              <p className="mt-3 text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import lintaImg from "@/assets/team-linta.jpeg";
import malikImg from "@/assets/team-malik.jpg";
import kulsoomImg from "@/assets/team-kulsoom.png";
import faizanImg from "@/assets/team-faizan.png";

export const Route = createFileRoute("/team")({
  component: TeamPage,
  head: () => ({
    meta: [
      { title: "Team. Stride" },
      {
        name: "description",
        content:
          "Meet the four founders behind Stride. A small, founder led firm working directly with you.",
      },
      { property: "og:title", content: "Team. Stride" },
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
      "Leads the company's direction and long term growth",
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
    name: "Kulsoom Waheed Psychologist",
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
      "Runs day to day operations across the business",
      "Builds efficient processes for client support",
      "Ensures delivery stays consistent and dependable",
    ],
  },
];

function TeamPage() {
  return (
    <div className="min-h-screen text-foreground" style={{ background: "var(--gradient-page)" }}>
      <SiteNav />

      {/* Team */}
      <section id="team" className="mx-auto max-w-6xl px-6 pt-24 pb-24 scroll-mt-24 md:pt-32">
        <div className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            The team
          </p>
          <h1 className="mt-5 font-display text-5xl leading-[1.05] tracking-tight md:text-7xl">
            Four partners. <br /><span className="italic text-accent">One promise.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Stride is founder-led by design. When you work with us, you work directly with the
            people who built this firm — never a routed account manager.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <article
              key={m.name}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card/60 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-accent/40"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <img
                  src={m.img}
                  alt={`${m.name}, ${m.role} of Stride`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  {m.role}
                </p>
                <h3 className="mt-2 font-display text-2xl tracking-tight leading-tight">{m.name}</h3>
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
      <section className="mx-auto max-w-4xl px-6 pb-28 text-center">
        <h2 className="font-display text-5xl leading-tight tracking-tight md:text-6xl">
          Want to <span className="italic text-accent">meet the team?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Book a free 20-minute intro call. No pitch, no pressure.
        </p>
        <a
          href="/contact"
          className="group mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
        >
          Book your free intro call
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </section>

      <SiteFooter />
    </div>
  );
}

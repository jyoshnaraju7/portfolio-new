import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Languages, Sparkles, Target, Users, Zap, Brain } from "lucide-react";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — A. Jyoshna" },
      { name: "description", content: "About A. Jyoshna: career objective, education timeline, languages, and strengths." },
      { property: "og:title", content: "About — A. Jyoshna" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const education = [
  { degree: "B.Tech — Internet of Things (IoT)", school: "Sidharth Institute of Science and Technology", score: "79%", year: "2022 — 2026" },
  { degree: "Intermediate (Class XII)", school: "Sri Sai Jyothi Junior College", score: "79%", year: "2022" },
  { degree: "SSC (Class X)", school: "RKSR Government High School", score: "95%", year: "2020" },
];

const strengths = [
  { icon: Brain, title: "Problem Solving" },
  { icon: Users, title: "Leadership" },
  { icon: Zap, title: "Quick Learner" },
  { icon: Sparkles, title: "Team Collaboration" },
];

function About() {
  return (
    <PageShell kicker="About me" title="A passion for data & devices">
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="glass rounded-2xl p-7 lg:col-span-2">
          <div className="flex items-center gap-2 text-accent"><Target className="h-5 w-5" /><span className="text-sm font-semibold uppercase tracking-wider">Career Objective</span></div>
          <p className="mt-3 text-base leading-relaxed text-foreground/85">
            Motivated and detail-oriented B.Tech (IoT) graduate with hands-on knowledge of Python,
            Power BI, and IoT technologies. Seeking an opportunity to apply my technical skills, learn
            new technologies, and contribute to organizational growth while building a successful
            professional career in data analytics.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {strengths.map((s) => (
              <div key={s.title} className="flex items-center gap-3 rounded-xl border border-border bg-card/60 p-3 transition-all hover:border-accent hover:bg-accent/5">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent"><s.icon className="h-4 w-4" /></div>
                <span className="text-sm font-medium">{s.title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-2xl p-7">
          <div className="flex items-center gap-2 text-accent"><Languages className="h-5 w-5" /><span className="text-sm font-semibold uppercase tracking-wider">Languages</span></div>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex justify-between border-b border-border pb-2"><span>English</span><span className="text-muted-foreground">Read / Write</span></li>
            <li className="flex justify-between border-b border-border pb-2"><span>Telugu</span><span className="text-muted-foreground">Read / Write</span></li>
            <li className="flex justify-between"><span>Tamil</span><span className="text-muted-foreground">Spoken</span></li>
          </ul>
        </div>
      </div>

      <section className="mt-14">
        <h2 className="font-display text-2xl font-bold">Education Timeline</h2>
        <div className="relative mt-8 space-y-6 before:absolute before:left-4 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-accent before:via-primary before:to-transparent md:before:left-5">
          {education.map((e, i) => (
            <div key={i} className="relative pl-12 md:pl-16 animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="absolute left-0 top-1 grid h-9 w-9 place-items-center rounded-full bg-hero text-white shadow-glow md:h-10 md:w-10">
                <GraduationCap className="h-4 w-4" />
              </div>
              <div className="glass rounded-2xl p-5">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display text-lg font-semibold">{e.degree}</h3>
                    <p className="text-sm text-muted-foreground">{e.school}</p>
                  </div>
                  <div className="text-right">
                    <div className="rounded-full bg-accent/10 px-3 py-1 text-xs font-bold text-accent">{e.score}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{e.year}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/internships")({
  head: () => ({
    meta: [
      { title: "Internships — A. Jyoshna" },
      { name: "description", content: "Internship experience at QSpiders (Data Analysis) and Edu Tantra Ventures (Full Stack Web Development)." },
      { property: "og:title", content: "Internships — A. Jyoshna" },
      { property: "og:url", content: "/internships" },
    ],
    links: [{ rel: "canonical", href: "/internships" }],
  }),
  component: Internships,
});

const experiences = [
  {
    company: "QSpiders",
    role: "Data Analysis Intern",
    duration: "6 Months",
    summary: "Hands-on experience in data analytics, dashboard creation, and reporting using Python, SQL, Excel and Power BI.",
    skills: ["Python", "SQL", "Excel", "Power BI", "Dashboard Creation", "Data Cleaning", "Reporting"],
  },
  {
    company: "Edu Tantra Ventures Pvt. Ltd.",
    role: "Full Stack Web Development Intern",
    duration: "4 Months",
    summary: "Built dynamic web applications working across front-end, back-end, and database integration.",
    skills: ["Frontend Development", "Backend Development", "Database Integration", "Dynamic Web Apps"],
  },
];

function Internships() {
  return (
    <PageShell kicker="Experience" title="Internships & Impact">
      <div className="grid gap-6 md:grid-cols-2">
        {experiences.map((x, i) => (
          <article key={x.company} className="glass group relative overflow-hidden rounded-2xl p-7 transition-all hover:-translate-y-1 hover:shadow-elegant animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/20 blur-3xl transition-opacity group-hover:opacity-100" />
            <div className="flex items-start gap-3">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-hero text-white shadow-glow">
                <Briefcase className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-xl font-bold">{x.role}</h3>
                <p className="text-sm font-medium text-accent">{x.company}</p>
                <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground"><Calendar className="h-3 w-3" />{x.duration}</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-foreground/80">{x.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {x.skills.map((s) => (
                <span key={s} className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium">
                  <CheckCircle2 className="h-3 w-3 text-accent" />{s}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  );
}

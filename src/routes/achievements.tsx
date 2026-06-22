import { createFileRoute } from "@tanstack/react-router";
import { Award, BookOpen, Trophy, Users } from "lucide-react";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements — A. Jyoshna" },
      { name: "description", content: "CGPA 8.32, technical events, workshops, and internship certifications." },
      { property: "og:title", content: "Achievements — A. Jyoshna" },
      { property: "og:url", content: "/achievements" },
    ],
    links: [{ rel: "canonical", href: "/achievements" }],
  }),
  component: Achievements,
});

const items = [
  { icon: Trophy, title: "B.Tech CGPA 8.32", desc: "Consistent academic excellence throughout the degree." },
  { icon: Users, title: "Technical Events", desc: "Active participation in college-level technical competitions." },
  { icon: BookOpen, title: "Workshops Attended", desc: "Hands-on workshops in data analytics and IoT." },
  { icon: Award, title: "Internship Certifications", desc: "Certified completion from QSpiders & Edu Tantra Ventures." },
];

function Achievements() {
  return (
    <PageShell kicker="Recognition" title="Achievements & Milestones">
      <div className="grid gap-5 sm:grid-cols-2">
        {items.map((it, i) => (
          <div key={it.title} className="glass group relative overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-glow animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/20 blur-2xl" />
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-hero text-white shadow-glow">
              <it.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-lg font-bold">{it.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}

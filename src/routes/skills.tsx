import { createFileRoute } from "@tanstack/react-router";
import { Code2, Database, BarChart3, Cpu, Wrench } from "lucide-react";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — A. Jyoshna" },
      { name: "description", content: "Technical skills: Python, SQL, Power BI, IoT (Arduino/ESP), data science libraries, and tools." },
      { property: "og:title", content: "Skills — A. Jyoshna" },
      { property: "og:url", content: "/skills" },
    ],
    links: [{ rel: "canonical", href: "/skills" }],
  }),
  component: Skills,
});

const groups = [
  { icon: Code2, title: "Programming", color: "from-blue-500 to-indigo-500", skills: [{ n: "Python", v: 85 }] },
  { icon: Database, title: "Database", color: "from-indigo-500 to-purple-500", skills: [{ n: "Oracle SQL", v: 80 }] },
  { icon: BarChart3, title: "Data Analytics & ML", color: "from-purple-500 to-pink-500", skills: [
    { n: "Power BI", v: 85 }, { n: "Excel", v: 88 }, { n: "Pandas", v: 80 },
    { n: "NumPy", v: 80 }, { n: "Matplotlib", v: 75 }, { n: "Scikit-Learn", v: 70 },
  ] },
  { icon: Cpu, title: "IoT Technologies", color: "from-pink-500 to-rose-500", skills: [
    { n: "Arduino", v: 85 }, { n: "Sensors", v: 80 }, { n: "ESP Microcontrollers", v: 78 }, { n: "IoT Protocols", v: 72 },
  ] },
  { icon: Wrench, title: "Tools & Platforms", color: "from-cyan-500 to-blue-500", skills: [
    { n: "VS Code", v: 90 }, { n: "Jupyter Notebook", v: 88 }, { n: "Thonny", v: 75 },
  ] },
];

function Bar({ n, v }: { n: string; v: number }) {
  return (
    <div>
      <div className="mb-1.5 flex justify-between text-xs"><span className="font-medium">{n}</span><span className="text-muted-foreground">{v}%</span></div>
      <div className="h-2 overflow-hidden rounded-full bg-muted">
        <div className="h-full rounded-full bg-hero transition-all duration-1000" style={{ width: `${v}%` }} />
      </div>
    </div>
  );
}

function Skills() {
  return (
    <PageShell kicker="My toolkit" title="Skills & Technologies">
      <div className="grid gap-6 md:grid-cols-2">
        {groups.map((g, i) => (
          <div key={g.title} className="glass rounded-2xl p-6 animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
            <div className="flex items-center gap-3">
              <div className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${g.color} text-white shadow-glow`}>
                <g.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-bold">{g.title}</h3>
            </div>
            <div className="mt-5 space-y-4">
              {g.skills.map((s) => <Bar key={s.n} {...s} />)}
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}

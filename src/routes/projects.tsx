import { createFileRoute } from "@tanstack/react-router";
import { Activity, Cpu, Brain, HeartPulse, Stethoscope, LineChart, Layers } from "lucide-react";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — A. Jyoshna" },
      { name: "description", content: "Case study: IoT-Enabled Smart E-Healthcare System with Predictive Prescription Algorithm." },
      { property: "og:title", content: "Projects — A. Jyoshna" },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

const tech = ["Arduino", "IoT Sensors", "Random Forest", "Python", "Machine Learning"];
const features = [
  { icon: HeartPulse, t: "Heart Rate Monitoring", d: "Continuous BPM tracking via pulse sensor" },
  { icon: Activity, t: "Respiratory Rate", d: "Real-time breathing pattern analysis" },
  { icon: Stethoscope, t: "Body Temperature & SpO₂", d: "Multi-parameter vital sign capture" },
  { icon: Brain, t: "Predictive Algorithm", d: "Random Forest predicts potential conditions" },
];

function Projects() {
  return (
    <PageShell kicker="Featured project" title="IoT Smart E-Healthcare System">
      <div className="glass overflow-hidden rounded-3xl">
        <div className="bg-hero p-8 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-80">Academic Capstone</p>
          <h2 className="mt-2 font-display text-2xl font-bold md:text-3xl">
            IoT-Enabled Smart E-Healthcare with Predictive Prescription Algorithm
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {tech.map((t) => (
              <span key={t} className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">{t}</span>
            ))}
          </div>
        </div>

        <div className="grid gap-8 p-8 md:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">Problem Statement</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/80">
              Traditional patient monitoring relies on manual, intermittent checks, delaying early
              detection of critical conditions and limiting personalized treatment.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">Solution</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/80">
              An Arduino-driven IoT system continuously captures vitals and feeds them to a Random
              Forest model that predicts conditions and recommends personalized prescriptions in real time.
            </p>
          </div>
        </div>

        <div className="border-t border-border p-8">
          <h3 className="font-display text-lg font-bold">Key Features</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {features.map((f) => (
              <div key={f.t} className="flex items-start gap-3 rounded-xl border border-border bg-card/60 p-4">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent"><f.icon className="h-4 w-4" /></div>
                <div className="min-w-0"><div className="text-sm font-semibold">{f.t}</div><div className="text-xs text-muted-foreground">{f.d}</div></div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-border p-8">
          <h3 className="font-display text-lg font-bold">System Architecture</h3>
          <div className="mt-5 grid grid-cols-1 items-center gap-3 md:grid-cols-5">
            {[
              { icon: HeartPulse, l: "IoT Sensors" },
              { icon: Cpu, l: "Arduino Hub" },
              { icon: Layers, l: "Data Pipeline" },
              { icon: Brain, l: "Random Forest" },
              { icon: Stethoscope, l: "Prescription" },
            ].map((n, i, a) => (
              <div key={n.l} className="flex items-center gap-3 md:flex-col">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-hero text-white shadow-glow">
                  <n.icon className="h-5 w-5" />
                </div>
                <div className="text-xs font-semibold md:text-center">{n.l}</div>
                {i < a.length - 1 && <div className="hidden h-px w-full bg-gradient-to-r from-accent/40 to-transparent md:block" />}
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-border p-8">
          <h3 className="font-display text-lg font-bold">Results & Impact</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {[
              { v: "24/7", l: "Continuous monitoring" },
              { v: "4+", l: "Vitals tracked in real time" },
              { v: "ML-driven", l: "Personalized recommendations" },
            ].map((r) => (
              <div key={r.l} className="rounded-xl border border-border bg-card/60 p-5">
                <div className="font-display text-2xl font-bold gradient-text">{r.v}</div>
                <div className="mt-1 text-xs text-muted-foreground"><LineChart className="mr-1 inline h-3 w-3" />{r.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}

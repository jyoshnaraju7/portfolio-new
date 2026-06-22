import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Download, Mail, Sparkles, TrendingUp, Code2, Database } from "lucide-react";
import profile from "@/assets/profile.jpg";
import resume from "@/assets/resume.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "A. Jyoshna — Data Analyst & IoT Graduate" },
      { name: "description", content: "Welcome to the portfolio of A. Jyoshna — Data Analyst and B.Tech IoT graduate." },
      { property: "og:title", content: "A. Jyoshna — Data Analyst & IoT Graduate" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function useCounter(target: number, duration = 1400) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let raf = 0; const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setVal(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return val;
}

function Stat({ value, suffix = "", label, icon: Icon, decimals = 0 }: { value: number; suffix?: string; label: string; icon: React.ComponentType<{ className?: string }>; decimals?: number }) {
  const n = useCounter(value);
  return (
    <div className="glass rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-glow">
      <Icon className="h-6 w-6 text-accent" />
      <div className="mt-4 font-display text-3xl font-bold gradient-text">
        {n.toFixed(decimals)}{suffix}
      </div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

function Home() {
  return (
    <main className="relative overflow-hidden pt-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/3 h-96 w-96 rounded-full bg-accent/30 blur-3xl animate-blob" />
        <div className="absolute top-20 -right-32 h-96 w-96 rounded-full bg-primary/25 blur-3xl animate-blob" style={{ animationDelay: "5s" }} />
      </div>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 lg:grid-cols-[1.2fr_1fr]">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            <Sparkles className="h-3 w-3" /> Open to opportunities
          </span>
          <h1 className="mt-5 font-display text-5xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Hi, I'm <span className="gradient-text">A. Jyoshna</span>
          </h1>
          <p className="mt-3 text-lg font-medium text-foreground/80">
            Data Analyst <span className="text-accent">|</span> B.Tech IoT Graduate
          </p>
          <p className="mt-5 max-w-xl text-base text-muted-foreground">
            Motivated and detail-oriented graduate transforming raw data into actionable insights with
            Python, SQL, Power BI, and IoT-driven systems.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={resume.url} download
              className="inline-flex items-center gap-2 rounded-xl bg-hero px-5 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.02]">
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <Link to="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold transition-all hover:border-accent hover:text-accent">
              <Mail className="h-4 w-4" /> Contact Me
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm animate-fade-up" style={{ animationDelay: "150ms" }}>
          <div className="absolute -inset-4 rounded-[2rem] bg-hero opacity-30 blur-2xl" />
          <div className="glass relative overflow-hidden rounded-[2rem] p-3">
            <img src={profile} alt="A. Jyoshna" width={768} height={768}
              className="aspect-square w-full rounded-3xl object-cover" />
          </div>
          <div className="glass absolute -bottom-5 -left-5 flex items-center gap-2 rounded-2xl px-4 py-3 animate-float">
            <Database className="h-5 w-5 text-accent" />
            <div className="text-xs"><div className="font-semibold">SQL · Power BI</div><div className="text-muted-foreground">Data Ready</div></div>
          </div>
          <div className="glass absolute -top-3 -right-3 flex items-center gap-2 rounded-2xl px-4 py-3 animate-float" style={{ animationDelay: "1.5s" }}>
            <Code2 className="h-5 w-5 text-primary" />
            <div className="text-xs"><div className="font-semibold">Python · ML</div><div className="text-muted-foreground">Analytics</div></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Stat value={8.32} decimals={2} label="B.Tech CGPA" icon={TrendingUp} />
          <Stat value={10} suffix="+" label="Months Internship" icon={Sparkles} />
          <Stat value={1} suffix="+" label="Live Projects" icon={Code2} />
          <Stat value={10} suffix="+" label="Tools Mastered" icon={Database} />
        </div>
        <div className="mt-10 text-center">
          <Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline">
            Learn more about me <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}

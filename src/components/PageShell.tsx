import type { ReactNode } from "react";

export function PageShell({ title, kicker, children }: { title: string; kicker?: string; children: ReactNode }) {
  return (
    <main className="relative min-h-screen pt-32">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl animate-blob" />
        <div className="absolute top-40 -right-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
      </div>
      <div className="mx-auto max-w-6xl px-6">
        <div className="animate-fade-up">
          {kicker && <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">{kicker}</p>}
          <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            <span className="gradient-text">{title}</span>
          </h1>
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </main>
  );
}

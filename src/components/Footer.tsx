import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-soft">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <h3 className="font-display text-xl font-bold gradient-text">A. Jyoshna</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Data Analyst & B.Tech IoT Graduate, turning data into decisions.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/70">Quick Links</h4>
          <ul className="mt-3 grid grid-cols-2 gap-1 text-sm">
            {["About","Skills","Projects","Contact"].map((l) => (
              <li key={l}>
                <Link to={`/${l.toLowerCase()}`} className="text-muted-foreground hover:text-accent">{l}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/70">Connect</h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {[
              { href: "mailto:rajujyoshna25@gmail.com", icon: Mail, label: "Email" },
              { href: "tel:+917671938133", icon: Phone, label: "Phone" },
              { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
              { href: "https://github.com", icon: Github, label: "GitHub" },
            ].map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label}
                className="rounded-lg border border-border bg-card p-2 transition-all hover:border-accent hover:text-accent hover:shadow-glow">
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} A. Jyoshna. Crafted with precision.
      </div>
    </footer>
  );
}

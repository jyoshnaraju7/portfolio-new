import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, Linkedin, Github, Send, Download, MapPin } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import resume from "@/assets/resume.asset.json";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — A. Jyoshna" },
      { name: "description", content: "Get in touch with A. Jyoshna — email, phone, LinkedIn, and GitHub." },
      { property: "og:title", content: "Contact — A. Jyoshna" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio inquiry from ${data.get("name")}`);
    const body = encodeURIComponent(`${data.get("message")}\n\nFrom: ${data.get("name")} (${data.get("email")})`);
    window.location.href = `mailto:rajujyoshna25@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const channels = [
    { icon: Mail, label: "Email", value: "rajujyoshna25@gmail.com", href: "mailto:rajujyoshna25@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 76719 38133", href: "tel:+917671938133" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/jyoshna", href: "https://linkedin.com" },
    { icon: Github, label: "GitHub", value: "github.com/jyoshna", href: "https://github.com" },
  ];

  return (
    <PageShell kicker="Get in touch" title="Let's build something together">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          {channels.map((c) => (
            <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
              className="glass group flex items-center gap-4 rounded-2xl p-5 transition-all hover:-translate-y-0.5 hover:shadow-glow">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-hero text-white shadow-glow"><c.icon className="h-5 w-5" /></div>
              <div className="min-w-0">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.label}</div>
                <div className="truncate text-sm font-medium group-hover:text-accent">{c.value}</div>
              </div>
            </a>
          ))}
          <div className="glass flex items-center gap-4 rounded-2xl p-5">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent"><MapPin className="h-5 w-5" /></div>
            <div><div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Location</div><div className="text-sm font-medium">India · Open to relocation</div></div>
          </div>
          <a href={resume.url} download
            className="flex items-center justify-center gap-2 rounded-2xl bg-hero p-4 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.01]">
            <Download className="h-4 w-4" /> Download ATS-Friendly Resume
          </a>
        </div>

        <form onSubmit={onSubmit} className="glass space-y-4 rounded-2xl p-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="mb-1.5 block font-medium">Name</span>
              <input required name="name" className="w-full rounded-xl border border-border bg-card/60 px-4 py-2.5 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30" />
            </label>
            <label className="block text-sm">
              <span className="mb-1.5 block font-medium">Email</span>
              <input required type="email" name="email" className="w-full rounded-xl border border-border bg-card/60 px-4 py-2.5 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30" />
            </label>
          </div>
          <label className="block text-sm">
            <span className="mb-1.5 block font-medium">Subject</span>
            <input name="subject" className="w-full rounded-xl border border-border bg-card/60 px-4 py-2.5 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30" />
          </label>
          <label className="block text-sm">
            <span className="mb-1.5 block font-medium">Message</span>
            <textarea required name="message" rows={5} className="w-full resize-none rounded-xl border border-border bg-card/60 px-4 py-2.5 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30" />
          </label>
          <button type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-hero px-5 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.01]">
            <Send className="h-4 w-4" /> {sent ? "Opening your mail app…" : "Send Message"}
          </button>
        </form>
      </div>
    </PageShell>
  );
}

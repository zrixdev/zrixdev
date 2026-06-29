import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import {
  Server, Terminal, Cpu, Shield, Network, Database, Boxes, Wrench,
  Hammer, Code2, Gauge, Github, Mail, MessageSquare, ArrowRight, Check,
  Sparkles, Activity,
} from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Carter — Minecraft Server Developer & Sysadmin" },
      { name: "description", content: "5+ years building high-performance Minecraft servers, plugin stacks, and VPS infrastructure. View skills, projects, and contact." },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function Portfolio() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Stats />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2 font-display text-sm font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-primary/15 text-primary">
            <Boxes className="h-4 w-4" />
          </span>
          <span className="text-foreground">alex<span className="text-primary">.mc</span></span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
              {n.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden rounded-md border border-primary/40 bg-primary/10 px-4 py-2 font-display text-xs font-bold uppercase tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:glow-neon md:inline-block">
          Hire me
        </a>
        <button onClick={() => setOpen(!open)} className="rounded-md p-2 text-foreground md:hidden" aria-label="Menu">
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </div>
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col p-4">
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground">
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id="home" className="relative overflow-hidden hero-bg">
      <motion.div
        className="mx-auto max-w-6xl px-6 pb-24 pt-20 md:pb-32 md:pt-28"
        initial="hidden"
        animate="show"
        variants={stagger}
      >
        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-display text-[11px] font-semibold uppercase tracking-widest text-primary">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Available for new server builds
        </motion.div>
        <motion.h1 variants={fadeUp} className="mt-6 font-display text-4xl font-extrabold leading-[1.05] text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Building & Optimizing<br />
          <span className="text-gradient">High-Performance</span><br />
          Minecraft Infrastructure.
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          I'm Alex — a Minecraft server developer and systems administrator with{" "}
          <span className="text-foreground">5+ years</span> of experience in server architecture,
          plugin configuration, and VPS management. I build servers that stay online,
          run fast, and scale cleanly.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
          <motion.a
            href="#skills"
            whileHover={reduce ? undefined : { y: -2 }}
            whileTap={reduce ? undefined : { scale: 0.97 }}
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-display text-sm font-bold text-primary-foreground transition-all hover:glow-neon"
          >
            View My Skills
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={reduce ? undefined : { y: -2 }}
            whileTap={reduce ? undefined : { scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-3 font-display text-sm font-bold text-foreground transition-colors hover:border-primary/50 hover:bg-surface-elevated"
          >
            Contact Me
          </motion.a>
        </motion.div>

        <motion.div variants={stagger} className="mt-16 grid gap-3 sm:grid-cols-3">
          <TerminalCard icon={Server} label="paper-1.21.jar" value="TPS 20.0 / 20" />
          <TerminalCard icon={Activity} label="systemctl status" value="active (running)" />
          <TerminalCard icon={Shield} label="firewall" value="hardened" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function TerminalCard({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -3, borderColor: "oklch(0.86 0.22 145 / 0.5)" }}
      className="rounded-lg border border-border bg-surface/80 p-4 backdrop-blur"
    >
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Icon className="h-3.5 w-3.5 text-primary" />
        <span className="font-display">{label}</span>
      </div>
      <div className="mt-2 font-display text-sm font-bold text-foreground">
        <span className="text-primary">→</span> {value}
      </div>
    </motion.div>
  );
}

function About() {
  return (
    <section id="about" className="border-y border-border/60 bg-surface/30">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionTag>About</SectionTag>
        <div className="mt-4 grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              I run Minecraft servers like production infrastructure.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              From bare VPS provisioning to fine-tuned Paper/Purpur configs, I treat every server
              like a real system: hardened, monitored, and tuned for TPS. Over the last five
              years I've shipped survival networks, mini-game hubs, and custom economies — and
              fixed plenty of broken ones along the way.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Production-grade Linux ops",
                "Plugin stacks that don't lag",
                "Network-wide data sync",
                "Documented, handover-ready setups",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-background p-1 font-display text-xs">
            <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
              <span className="ml-2 text-muted-foreground">~/server</span>
            </div>
            <pre className="overflow-x-auto p-4 leading-relaxed text-muted-foreground">
{`$ ./start.sh
[INFO] Loading Paper 1.21.1...
[INFO] Loaded 34 plugins
[INFO] LuckPerms: connected (MySQL)
[INFO] WorldEdit: ready
[INFO] EssentialsX: ready
`}<span className="text-primary">[OK]   Server ready · TPS 20.0</span>{`
$ uptime
  up 142 days, load: 0.18 0.21 0.19`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

const SKILL_GROUPS = [
  {
    title: "Systems & Hosting",
    icon: Server,
    skills: [
      { label: "VPS Setup", icon: Cpu },
      { label: "Linux / Ubuntu Server", icon: Terminal },
      { label: "IP & Port Forwarding", icon: Network },
      { label: "Network Optimization", icon: Gauge },
      { label: "DDoS Protection", icon: Shield },
    ],
  },
  {
    title: "Server Development",
    icon: Code2,
    skills: [
      { label: "Advanced Plugin Configuration", icon: Wrench },
      { label: "Paper / Purpur / Spigot Optimization", icon: Gauge },
      { label: "YAML / JSON Editing", icon: Code2 },
      { label: "Permissions (LuckPerms)", icon: Shield },
      { label: "Economy & Database Integration", icon: Database },
    ],
  },
  {
    title: "In-Game Management",
    icon: Hammer,
    skills: [
      { label: "Spawn Building (WorldEdit / FAWE)", icon: Hammer },
      { label: "Command Block Automation", icon: Terminal },
      { label: "Server Optimization", icon: Sparkles },
    ],
  },
];

function Skills() {
  return (
    <section id="skills">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionTag>Skills</SectionTag>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold text-foreground md:text-4xl">
          A full stack for shipping Minecraft servers.
        </h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {SKILL_GROUPS.map((g) => (
            <div key={g.title} className="group relative rounded-xl border border-border bg-surface p-6 transition-all hover:border-primary/40 hover:bg-surface-elevated">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-md bg-primary/15 text-primary">
                  <g.icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-bold text-foreground">{g.title}</h3>
              </div>
              <ul className="mt-6 space-y-2">
                {g.skills.map((s) => (
                  <li key={s.label} className="flex items-center gap-2.5 rounded-md border border-border/60 bg-background px-3 py-2 text-sm text-foreground transition-colors hover:border-primary/40">
                    <s.icon className="h-3.5 w-3.5 shrink-0 text-primary" />
                    {s.label}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const STATS = [
  { value: "5+", label: "Years Experience" },
  { value: "50+", label: "Plugins Configured" },
  { value: "100%", label: "Uptime VPS Setups" },
  { value: "30+", label: "Servers Shipped" },
];

function Stats() {
  return (
    <section className="border-y border-border/60 bg-surface/40">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden bg-border md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="bg-background px-6 py-10 text-center">
            <div className="font-display text-4xl font-extrabold text-gradient md:text-5xl">{s.value}</div>
            <div className="mt-2 font-display text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const PROJECTS = [
  {
    title: "Custom Survival Server Setup",
    tag: "Infrastructure",
    desc: "Full VPS provisioning, port forwarding, and a curated stack of 30+ optimized plugins delivering a smooth survival experience at scale.",
    stack: ["Ubuntu 22.04", "Paper 1.21", "30+ Plugins", "DDoS Shield"],
    icon: Server,
  },
  {
    title: "In-Game Spawn & Commands",
    tag: "World Building",
    desc: "Custom spawn region built with WorldEdit and FAWE, paired with command-block automation for warps, tutorials, and event triggers.",
    stack: ["WorldEdit", "FAWE", "Command Blocks", "Functions"],
    icon: Hammer,
  },
  {
    title: "Network Economy Sync",
    tag: "Backend",
    desc: "Cross-server economy and player data sync powered by MySQL, with LuckPerms and Vault integrations keeping balances consistent network-wide.",
    stack: ["MySQL", "LuckPerms", "Vault", "BungeeCord"],
    icon: Database,
  },
];

function Projects() {
  return (
    <section id="projects">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionTag>Projects</SectionTag>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              Selected work.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            A few representative builds — from raw VPS to live networks.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <article key={p.title} className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_10px_40px_-12px_oklch(0.86_0.22_145/0.4)]">
              <div className="relative h-40 overflow-hidden border-b border-border bg-background">
                <div className="absolute inset-0 hero-bg opacity-60" />
                <div className="absolute inset-0 grid place-items-center">
                  <p.icon className="h-16 w-16 text-primary/40 transition-transform group-hover:scale-110" strokeWidth={1.25} />
                </div>
                <span className="absolute left-3 top-3 rounded-full border border-primary/30 bg-background/80 px-2.5 py-0.5 font-display text-[10px] font-bold uppercase tracking-wider text-primary backdrop-blur">
                  {p.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-bold text-foreground">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded border border-border bg-background px-2 py-0.5 font-display text-[10px] font-semibold text-muted-foreground">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="border-t border-border/60 bg-surface/30">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <SectionTag>Contact</SectionTag>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            Got a server to build or rescue?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Drop a message and I'll get back within 24 hours. Happy to scope new builds,
            optimize existing setups, or do a one-off audit.
          </p>
          <div className="mt-8 space-y-3">
            <ContactLink icon={MessageSquare} label="Discord" value="alex.mc#0042" href="#" />
            <ContactLink icon={Github} label="GitHub" value="github.com/alex-mc" href="https://github.com" />
            <ContactLink icon={Mail} label="Email" value="alex@alexmc.dev" href="mailto:alex@alexmc.dev" />
          </div>
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="rounded-xl border border-border bg-surface p-6 md:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" placeholder="Your name" />
            <Field label="Email" name="email" type="email" placeholder="you@server.gg" />
          </div>
          <div className="mt-4">
            <Field label="Subject" name="subject" placeholder="New survival server setup" />
          </div>
          <div className="mt-4">
            <label className="mb-1.5 block font-display text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message</label>
            <textarea
              required
              rows={5}
              placeholder="Tell me about your server, player count, and goals..."
              className="w-full resize-none rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 font-display text-sm font-bold text-primary-foreground transition-all hover:glow-neon sm:w-auto"
          >
            {sent ? "Message sent ✓" : "Send message"}
            {!sent && <ArrowRight className="h-4 w-4" />}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block font-display text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}

function ContactLink({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href: string }) {
  return (
    <a href={href} className="flex items-center gap-4 rounded-lg border border-border bg-background p-4 transition-colors hover:border-primary/50">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary/15 text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <div className="font-display text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="truncate text-sm font-medium text-foreground">{value}</div>
      </div>
    </a>
  );
}

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
      <span className="h-px w-6 bg-primary" />
      {children}
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 sm:flex-row">
        <p className="font-display text-xs text-muted-foreground">
          © {new Date().getFullYear()} Alex Carter · Built with precision.
        </p>
        <p className="font-display text-xs text-muted-foreground">
          <span className="text-primary">TPS</span> 20.0 / 20
        </p>
      </div>
    </footer>
  );
}

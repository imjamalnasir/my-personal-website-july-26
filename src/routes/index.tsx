import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Github, Linkedin, Twitter, Mail, ArrowRight, Download, Sparkles,
  Palette, Code2, Server, Database, Brain, Bot, Cloud, ArrowUpRight,
  Briefcase, GraduationCap, Award, Quote, Send, MapPin, Phone, Calendar,
  ChevronUp, Star, Zap, Layers, Rocket, Target, Cpu, Globe,
} from "lucide-react";
import avatarImg from "@/assets/avatar.jpg";
import myPic from "@/assets/mypic.jpg";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const ROLES = [
  "Lead UI/UX Designer",
  "Product Designer",
  "Front-End Developer",
  "Back-End Developer",
  "Full Stack Developer",
  "AI & Machine Learning Engineer",
  "Agentic AI Developer",
  "Generative AI Engineer",
  "AI Automation Expert",
  "Software Architect",
  "Problem Solver",
  "Technology Consultant",
];

/* ---------- Cursor Glow ---------- */
function CursorGlow() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const sx = useSpring(x, { stiffness: 200, damping: 30 });
  const sy = useSpring(y, { stiffness: 200, damping: 30 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-[100] h-[400px] w-[400px] rounded-full"
      style={{
        x: sx, y: sy, translateX: "-50%", translateY: "-50%",
        background: "radial-gradient(circle, oklch(0.68 0.22 255 / 0.12), transparent 60%)",
        mixBlendMode: "screen",
      }}
    />
  );
}

/* ---------- Aurora BG ---------- */
function AuroraBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full blur-3xl animate-aurora"
        style={{ background: "radial-gradient(circle, oklch(0.68 0.22 255 / 0.4), transparent 70%)" }} />
      <div className="absolute top-1/3 -right-40 h-[700px] w-[700px] rounded-full blur-3xl animate-aurora"
        style={{ background: "radial-gradient(circle, oklch(0.65 0.24 300 / 0.35), transparent 70%)", animationDelay: "3s" }} />
      <div className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full blur-3xl animate-aurora"
        style={{ background: "radial-gradient(circle, oklch(0.85 0.15 200 / 0.3), transparent 70%)", animationDelay: "6s" }} />
    </div>
  );
}

/* ---------- Nav ---------- */
function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["About", "#about"], ["Expertise", "#expertise"], ["Work", "#work"],
     ["Services", "#services"], ["Contact", "#contact"],
  ];
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-x-0 top-4 z-50 mx-auto max-w-6xl px-4"
    >
      <nav className="glass-strong flex items-center justify-between rounded-2xl px-5 py-3">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold">
          <img
            src={myPic}
            alt="Jamal Nasir"
            className="h-8 w-8 rounded-lg object-cover"
          />
          <span>Jamal Nasir<span className="text-gradient"></span></span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map(([l, h]) => (
            <li key={h}>
              <a href={h} className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground">
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[color:var(--electric)] to-[color:var(--purple)] px-4 py-2 text-sm font-medium text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-105">
          Hire Me <ArrowRight className="h-4 w-4" />
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Menu">
          <Layers className="h-5 w-5" />
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="glass-strong mt-2 rounded-2xl p-4 md:hidden">
            {links.map(([l, h]) => (
              <a key={h} href={h} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-sm hover:bg-white/5">{l}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

/* ---------- Rotating Roles ---------- */
function RolesSlider() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % ROLES.length), 2400);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="relative h-10 overflow-hidden sm:h-12">
      <AnimatePresence mode="wait">
        <motion.div
          key={i}
          initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="text-lg font-semibold text-gradient sm:text-2xl">{ROLES[i]}</span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ---------- Section wrapper ---------- */
function Section({ id, eyebrow, title, subtitle, children }: {
  id?: string; eyebrow?: string; title: string; subtitle?: string; children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        {eyebrow && (
          <span className="glass mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--electric)]" />
            {eyebrow}
          </span>
        )}
        <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl">
          {title.split(" ").map((w, i) =>
            i === title.split(" ").length - 1 ? <span key={i} className="text-gradient"> {w}</span> : <span key={i}>{i ? " " : ""}{w}</span>
          )}
        </h2>
        {subtitle && <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">{subtitle}</p>}
      </motion.div>
      {children}
    </section>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-4 pt-32 sm:px-6">
      <div className="mx-auto w-full max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }} className="flex flex-col items-center"
        >
          <motion.span
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--cyan)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--cyan)]" />
            </span>
             Current Available - Open to work.
          </motion.span>
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Hi, I'm <span className="text-gradient">Jamal Nasir</span>
          </h1>
          <p className="mx-auto mt-5 max-w-6xl text-lg text-muted-foreground sm:text-xl">
          Design Lead | Senior UI/UX Designer | Front-End Developer | Agentic AI Explorer
          </p>
          
          <p className="mx-auto mt-6 max-w-4xl text-sm text-muted-foreground/90 sm:text-base">
          Experienced Design Lead, Senior UI/UX Designer, Front-End & Full-Stack JavaScript Developer with over 10 years of experience designing and developing enterprise web and mobile applications, Skilled in leveraging AI-powered design tools and AI-assisted design workflows to accelerate ideation, UX research, wireframing, prototyping,.
            </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#work" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[color:var(--electric)] to-[color:var(--purple)] px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]">
              View Portfolio <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#" className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors hover:bg-white/10">
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold transition-colors hover:border-white/30 hover:bg-white/5">
              Hire Me
            </a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              { icon: Linkedin, label: "LinkedIn" }, { icon: Github, label: "GitHub" },
              { icon: Palette, label: "Behance" }, { icon: Sparkles, label: "Dribbble" },
              { icon: Twitter, label: "Twitter" }, { icon: Layers, label: "Medium" },
              { icon: Mail, label: "Email" },
            ].map(({ icon: Icon, label }) => (
              <a key={label} href="#" aria-label={label} className="glass grid h-10 w-10 place-items-center rounded-full transition-all hover:scale-110 hover:bg-white/10">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- About ---------- */
function About() {
  const stats = [
    { v: "8+", l: "Years Experience" }, { v: "100+", l: "Projects Completed" },
    { v: "50+", l: "Happy Clients" }, { v: "20+", l: "AI Solutions Built" },
    { v: "15+", l: "Industries Served" }, { v: "99%", l: "Client Satisfaction" },
  ];
  return (
    <Section id="about" eyebrow="About" title="Crafting Digital Excellence" subtitle="Experienced Design Lead, Senior UI/UX Designer, Front-End & Full-Stack JavaScript Developer with over 10 years of experience ">
      <div className="mx-auto max-w-6xl px-4  sm:px-6 ">
       
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7 }} className="lg:col-span-3">
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg text-center">
          Designing and developing enterprise web and mobile applications, Skilled in leveraging AI-powered design tools and AI-assisted design workflows to accelerate ideation, UX research, wireframing, prototyping.
        
          Strong background in UI/UX design, React ecosystem, Node.js development, responsive front-end engineering, and modern JavaScript technologies.
          </p>
          <div className="mt-8 max-w-4xl mx-auto grid grid-cols-2 gap-3 sm:grid-cols-3">
            {stats.map((s, i) => (
              <motion.div key={s.l}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="glass rounded-2xl p-4 transition-transform hover:-translate-y-1"
              >
                <div className="text-2xl font-bold text-gradient sm:text-3xl">{s.v}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

/* ---------- Expertise ---------- */
const EXPERTISE = [
  { icon: Palette, title: "UI/UX Design", items: ["User Research", "UX Strategy", "Design Systems", "Wireframing", "Prototyping", "Figma", "Adobe XD", "Interaction Design", "Accessibility"] },
  { icon: Code2, title: "Front-End", items: ["React", "Next.js", "TypeScript", "Vue", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3", "JavaScript"] },
  { icon: Server, title: "Back-End", items: ["Node.js", "Express", "Python", "Django", "FastAPI", "Laravel", "REST APIs", "GraphQL", "Auth"] },
  { icon: Database, title: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Supabase", "Redis"] },
  { icon: Brain, title: "AI & ML", items: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "LLM Integration", "LangChain", "RAG", "Fine-Tuning", "Vector DBs"] },
  { icon: Bot, title: "Agentic AI", items: ["AI Agents", "Multi-Agent Systems", "MCP", "Tool Calling", "CrewAI", "AutoGen", "LangGraph", "OpenAI", "Gemini", "Claude"] },
  { icon: Cloud, title: "DevOps & Cloud", items: ["Docker", "Kubernetes", "AWS", "Azure", "GCP", "CI/CD", "GitHub Actions", "Linux", "Nginx"] },
];
function Expertise() {
  return (
    <Section id="expertise" eyebrow="Expertise" title="A Full Spectrum of Skills"
      subtitle="From pixels to production — from design systems to autonomous agents.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {EXPERTISE.map((e, i) => (
          <motion.div key={e.title}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="glass group relative overflow-hidden rounded-3xl p-6 transition-shadow hover:shadow-[var(--shadow-glow)]"
          >
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-[color:var(--electric)]/30 to-[color:var(--purple)]/20 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[color:var(--electric)] to-[color:var(--purple)] shadow-[var(--shadow-glow)]">
                <e.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">{e.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {e.items.map((it) => (
                  <span key={it} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-white/25 hover:text-foreground">
                    {it}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Projects ---------- */
const PROJECTS = [
  { cat: "AI", title: "Nova — Autonomous Research Agent", desc: "Multi-agent research assistant with tool calling, memory, and citations.", tech: ["LangGraph", "Next.js", "Postgres"], color: "from-indigo-500 to-purple-500" },
  { cat: "UI/UX", title: "Orbit Banking App", desc: "End-to-end redesign for a neo-bank serving 2M users across LATAM.", tech: ["Figma", "Design Systems"], color: "from-cyan-400 to-blue-500" },
  { cat: "Front-End", title: "Helix Analytics Dashboard", desc: "Realtime dashboard with 60fps charts and rich micro-interactions.", tech: ["React", "D3", "Framer Motion"], color: "from-fuchsia-500 to-pink-500" },
  { cat: "Back-End", title: "Photon API Platform", desc: "GraphQL platform handling 1B events/day with sub-30ms p99 latency.", tech: ["Node.js", "GraphQL", "Redis"], color: "from-emerald-400 to-cyan-500" },
  { cat: "ML", title: "Vision QA Pipeline", desc: "Computer vision defect detection lowering scrap rate by 34%.", tech: ["PyTorch", "FastAPI"], color: "from-orange-400 to-rose-500" },
  { cat: "Agentic AI", title: "Atlas Sales Copilot", desc: "Agent that qualifies leads, drafts outreach and syncs CRM autonomously.", tech: ["CrewAI", "OpenAI", "Supabase"], color: "from-violet-500 to-indigo-500" },
];
const FILTERS = ["All", "UI/UX", "Front-End", "Back-End", "AI", "ML", "Agentic AI"];
function Projects() {
  const [f, setF] = useState("All");
  const shown = f === "All" ? PROJECTS : PROJECTS.filter((p) => p.cat === f);
  return (
    <Section id="work" eyebrow="Selected Work" title="Featured Projects" subtitle="Selected products built at the intersection of design, engineering and AI.">
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {FILTERS.map((x) => (
          <button key={x} onClick={() => setF(x)}
            className={`rounded-full border px-4 py-2 text-xs font-medium transition-all ${
              f === x ? "border-transparent bg-gradient-to-r from-[color:var(--electric)] to-[color:var(--purple)] text-white shadow-[var(--shadow-glow)]" : "border-white/10 bg-white/5 text-muted-foreground hover:border-white/25 hover:text-foreground"
            }`}>{x}</button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((p, i) => (
            <motion.article key={p.title} layout
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: i * 0.05 }} whileHover={{ y: -6 }}
              className="glass group overflow-hidden rounded-3xl"
            >
              <div className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${p.color}`}>
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Rocket className="h-16 w-16 text-white/40 transition-transform duration-700 group-hover:scale-110" />
                </div>
                <span className="absolute left-3 top-3 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur">{p.cat}</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-md bg-white/5 px-2 py-0.5 text-[11px] text-muted-foreground">{t}</span>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-2 text-xs">
                  <a href="#" className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1.5 hover:bg-white/15">Live <ArrowUpRight className="h-3 w-3" /></a>
                  <a href="#" className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1.5 hover:bg-white/15"><Github className="h-3 w-3" /> Code</a>
                  <a href="#" className="inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1.5 hover:bg-white/5">Case Study</a>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
}

/* ---------- Case Study ---------- */
function CaseStudy() {
  const steps = [
    { k: "Problem", v: "Legacy system unable to scale beyond 100K daily active users." },
    { k: "Research", v: "12 stakeholder interviews and 4 weeks of quantitative analysis." },
    { k: "Design", v: "New IA, design tokens and 60+ reusable components." },
    { k: "Development", v: "React + Node microservices with GraphQL federation." },
    { k: "AI Integration", v: "Embedded RAG-based support copilot with tool calling." },
    { k: "Outcome", v: "3.2x throughput, 41% support deflection, NPS +28." },
  ];
  return (
    <Section eyebrow="Case Study" title="Reimagining a SaaS Platform" subtitle="How we shipped a category-defining rebuild in 14 weeks.">
      <div className="glass-strong overflow-hidden rounded-[2rem] p-6 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="grid gap-4">
            {steps.map((s, i) => (
              <motion.div key={s.k}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-2xl p-4"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[color:var(--electric)] to-[color:var(--purple)] text-xs font-bold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="font-semibold">{s.k}</h4>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{s.v}</p>
              </motion.div>
            ))}
          </div>
          <div className="flex flex-col justify-center gap-4">
            {[
              { k: "3.2x", v: "Throughput" }, { k: "41%", v: "Support Deflection" },
              { k: "+28", v: "NPS Increase" }, { k: "14w", v: "Time to Ship" },
            ].map((m) => (
              <div key={m.v} className="glass flex items-baseline justify-between rounded-2xl p-5">
                <span className="text-3xl font-bold text-gradient sm:text-4xl">{m.k}</span>
                <span className="text-sm text-muted-foreground">{m.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------- Experience ---------- */
const XP = [
  { yr: "2023 — Present", role: "Principal AI Engineer", co: "Northwind Labs", d: "Lead agentic AI platform serving Fortune 500 clients." },
  { yr: "2020 — 2023", role: "Senior Full-Stack Engineer", co: "Helix Systems", d: "Rebuilt analytics platform; scaled to 1B events/day." },
  { yr: "2017 — 2020", role: "Product Designer & Developer", co: "Orbit Studio", d: "Shipped 40+ digital products across fintech and SaaS." },
];
function Experience() {
  return (
    <Section id="experience" eyebrow="Journey" title="Experience Timeline">
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[color:var(--electric)] via-[color:var(--purple)] to-transparent sm:left-1/2" />
        {XP.map((x, i) => (
          <motion.div key={x.role}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`relative mb-10 pl-14 sm:w-1/2 sm:pl-0 ${i % 2 ? "sm:ml-auto sm:pl-10" : "sm:pr-10 sm:text-right"}`}
          >
            <div className={`glass rounded-2xl p-5`}>
              <div className="text-xs font-medium text-[color:var(--cyan)]">{x.yr}</div>
              <div className="mt-1 text-lg font-semibold">{x.role}</div>
              <div className="text-sm text-muted-foreground">{x.co}</div>
              <p className="mt-2 text-sm text-muted-foreground">{x.d}</p>
            </div>
            <span className={`absolute top-6 grid h-4 w-4 place-items-center rounded-full bg-gradient-to-br from-[color:var(--electric)] to-[color:var(--purple)] shadow-[var(--shadow-glow)] left-2 sm:left-auto ${i % 2 ? "sm:-left-2" : "sm:-right-2"}`} />
          </motion.div>
        ))}
      </div>

      <div className="mt-16 grid gap-4 sm:grid-cols-3">
        {[
          { icon: GraduationCap, t: "MSc Computer Science", s: "Stanford University · 2016" },
          { icon: Award, t: "AWS Solutions Architect", s: "Professional · 2023" },
          { icon: Briefcase, t: "Advanced ML Specialization", s: "DeepLearning.AI" },
        ].map((e) => (
          <div key={e.t} className="glass rounded-2xl p-5">
            <e.icon className="mb-3 h-6 w-6 text-[color:var(--cyan)]" />
            <div className="font-semibold">{e.t}</div>
            <div className="text-xs text-muted-foreground">{e.s}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Skills bars ---------- */
const SKILL_GROUPS = [
  { name: "Design", items: [["Figma", 98], ["Design Systems", 95], ["Prototyping", 92]] },
  { name: "Front-End", items: [["React / Next.js", 97], ["TypeScript", 95], ["Tailwind", 96]] },
  { name: "Back-End", items: [["Node.js", 94], ["Python", 92], ["GraphQL", 88]] },
  { name: "AI/ML", items: [["LLM Integration", 96], ["LangChain / LangGraph", 93], ["PyTorch", 84]] },
] as const;
function Skills() {
  return (
    <Section eyebrow="Technical" title="Skills & Proficiency">
      <div className="grid gap-6 md:grid-cols-2">
        {SKILL_GROUPS.map((g, gi) => (
          <motion.div key={g.name}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: gi * 0.08 }}
            className="glass rounded-3xl p-6"
          >
            <div className="mb-4 flex items-center gap-2">
              <Zap className="h-4 w-4 text-[color:var(--cyan)]" />
              <h3 className="font-semibold">{g.name}</h3>
            </div>
            <div className="space-y-4">
              {g.items.map(([name, pct]) => (
                <div key={name}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span>{name}</span><span className="text-muted-foreground">{pct}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }} whileInView={{ width: `${pct}%` }} viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-[color:var(--electric)] to-[color:var(--purple)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Services ---------- */
const SERVICES = [
  { icon: Bot, t: "AI Services", items: ["AI Chatbots", "Agentic AI", "LLM Applications", "AI Automation", "Recommendation Systems"] },
  { icon: Palette, t: "Design", items: ["UI Design", "UX Design", "Mobile Apps", "SaaS Dashboards", "Enterprise Systems"] },
  { icon: Rocket, t: "Development", items: ["Website Development", "SaaS Platforms", "API Development", "Cloud Deployment", "Database Architecture"] },
];
function Services() {
  return (
    <Section id="services" eyebrow="Services" title="What I Can Build for You">
      <div className="grid gap-6 md:grid-cols-3">
        {SERVICES.map((s, i) => (
          <motion.div key={s.t}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.1 }} whileHover={{ y: -6 }}
            className="glass group relative overflow-hidden rounded-3xl p-8"
          >
            <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-gradient-to-br from-[color:var(--electric)]/30 to-[color:var(--purple)]/20 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <s.icon className="mb-4 h-8 w-8 text-[color:var(--cyan)]" />
              <h3 className="text-2xl font-semibold">{s.t}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {s.items.map((x) => (
                  <li key={x} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-[color:var(--cyan)]" />{x}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Stack Marquee ---------- */
const STACK = [
  "Figma","React","Next.js","Node.js","Python","Django","FastAPI","PostgreSQL","MongoDB",
  "Docker","AWS","Azure","TensorFlow","PyTorch","LangChain","OpenAI","Gemini","Claude",
  "Redis","Tailwind","TypeScript","GitHub","Linux","GraphQL",
];
function StackMarquee() {
  return (
    <section className="relative overflow-hidden py-16">
      <div className="mb-6 text-center text-xs uppercase tracking-widest text-muted-foreground">Technology Stack</div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="flex w-max animate-marquee gap-3">
          {[...STACK, ...STACK].map((s, i) => (
            <div key={i} className="glass flex items-center gap-2 rounded-full px-5 py-2.5 text-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--cyan)]" />{s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
const TESTIMONIALS = [
  { name: "Sara Chen", co: "VP Product, Helix", r: 5, q: "Alex is a rare full-spectrum builder — from research to launch, the quality is exceptional." },
  { name: "Marcus Lee", co: "CTO, Northwind", r: 5, q: "The AI agents Alex shipped now run half our operations. Truly transformational work." },
  { name: "Priya Nair", co: "Founder, Orbit", r: 5, q: "Beautiful design, rock-solid engineering. Our conversion rate went up 62% post launch." },
];
function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <Section eyebrow="Testimonials" title="Trusted by Builders">
      <div className="mx-auto max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.div key={i}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="glass-strong rounded-3xl p-8 sm:p-10"
          >
            <Quote className="mb-4 h-8 w-8 text-[color:var(--cyan)]" />
            <p className="text-lg leading-relaxed sm:text-xl">"{TESTIMONIALS[i].q}"</p>
            <div className="mt-6 flex items-center justify-between">
              <div>
                <div className="font-semibold">{TESTIMONIALS[i].name}</div>
                <div className="text-sm text-muted-foreground">{TESTIMONIALS[i].co}</div>
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: TESTIMONIALS[i].r }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-[color:var(--cyan)] text-[color:var(--cyan)]" />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="mt-6 flex justify-center gap-2">
          {TESTIMONIALS.map((_, k) => (
            <button key={k} onClick={() => setI(k)}
              className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-gradient-to-r from-[color:var(--electric)] to-[color:var(--purple)]" : "w-3 bg-white/20"}`}
              aria-label={`Testimonial ${k + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- Process ---------- */
const PROCESS = ["Discovery", "Research", "Design", "Development", "AI Integration", "Launch"];
function Process() {
  return (
    <Section eyebrow="Process" title="How I Work">
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
        {PROCESS.map((p, i) => (
          <motion.div key={p}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="glass relative rounded-2xl p-5 text-center"
          >
            <div className="mx-auto mb-3 grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[color:var(--electric)] to-[color:var(--purple)] text-sm font-bold text-white shadow-[var(--shadow-glow)]">
              {i + 1}
            </div>
            <div className="text-sm font-semibold">{p}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Blog ---------- */
const POSTS = [
  { t: "Designing Agentic AI Products", tag: "Agentic AI", r: "8 min", d: "Jul 2026" },
  { t: "The New Rules of Micro-Interactions", tag: "UI/UX", r: "5 min", d: "Jun 2026" },
  { t: "Scaling GraphQL to 1B events/day", tag: "Engineering", r: "12 min", d: "May 2026" },
];
function Blog() {
  return (
    <Section eyebrow="Insights" title="Latest Writing">
      <div className="grid gap-6 md:grid-cols-3">
        {POSTS.map((p, i) => (
          <motion.a key={p.t} href="#"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.08 }} whileHover={{ y: -6 }}
            className="glass group block overflow-hidden rounded-3xl"
          >
            <div className="relative aspect-[16/9] bg-gradient-to-br from-[color:var(--electric)]/30 via-[color:var(--purple)]/30 to-[color:var(--cyan)]/30">
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="absolute inset-0 grid place-items-center">
                <Target className="h-12 w-12 text-white/40" />
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="rounded-full bg-white/10 px-2 py-0.5">{p.tag}</span>
                <span>·</span><span>{p.r}</span><span>·</span><span>{p.d}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold group-hover:text-gradient">{p.t}</h3>
              <div className="mt-3 inline-flex items-center gap-1 text-sm text-[color:var(--cyan)]">
                Read More <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}

/* ---------- CTA ---------- */
function CTA() {
  return (
    <section id="contact" className="relative mx-auto max-w-5xl px-4 py-24 sm:px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="glass-strong relative overflow-hidden rounded-[2.5rem] p-8 text-center sm:p-16"
      >
        <div className="absolute -top-32 left-1/2 h-64 w-[80%] -translate-x-1/2 rounded-full bg-gradient-to-r from-[color:var(--electric)] to-[color:var(--purple)] opacity-30 blur-3xl" />
        <div className="relative">
          <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Let's Build Something <span className="text-gradient">Extraordinary</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground sm:text-lg">
            Whether it's a digital product, AI solution, SaaS platform, or enterprise application — I'm ready to help transform your vision into reality.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[color:var(--electric)] to-[color:var(--purple)] px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-105">
              Start a Project <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold hover:bg-white/10">
              <Calendar className="h-4 w-4" /> Schedule a Call
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  return (
    <Section id="contact-old" eyebrow="Contact" title="Get In Touch">
      <div className="grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <form onSubmit={(e) => e.preventDefault()} className="glass-strong grid gap-4 rounded-3xl p-6 sm:p-8 sm:grid-cols-2">
            {[
              ["Name", "text"], ["Email", "email"], ["Company", "text"], ["Phone", "tel"],
              ["Project Type", "text"], ["Budget", "text"],
            ].map(([l, t]) => (
              <label key={l} className="text-xs text-muted-foreground">
                {l}
                <input type={t} className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-[color:var(--electric)]" placeholder={l} />
              </label>
            ))}
            <label className="text-xs text-muted-foreground sm:col-span-2">
              Message
              <textarea rows={4} className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-[color:var(--electric)]" placeholder="Tell me about your project..." />
            </label>
            <button className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[color:var(--electric)] to-[color:var(--purple)] px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02] sm:col-span-2">
              Send Message <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </div>
        <div className="grid gap-3 lg:col-span-2">
          {[
            { icon: Mail, l: "Email", v: "hello@alexrivera.dev" },
            { icon: Phone, l: "Phone", v: "+1 (415) 555-0142" },
            { icon: MapPin, l: "Location", v: "San Francisco, CA" },
            { icon: Linkedin, l: "LinkedIn", v: "/in/alexrivera" },
            { icon: Github, l: "GitHub", v: "@alexrivera" },
            { icon: Calendar, l: "Calendar", v: "Book a call" },
          ].map((c) => (
            <div key={c.l} className="glass flex items-center gap-4 rounded-2xl p-4">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[color:var(--electric)] to-[color:var(--purple)]">
                <c.icon className="h-4 w-4 text-white" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.l}</div>
                <div className="text-sm font-medium">{c.v}</div>
              </div>
            </div>
          ))}
          <div className="glass overflow-hidden rounded-2xl">
            <iframe
              title="Location map"
              src="https://www.google.com/maps?q=San+Francisco&output=embed"
              className="h-56 w-full grayscale-[0.6] contrast-125"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/5 px-4 py-12 sm:px-6">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[color:var(--electric)] to-[color:var(--purple)]">
              <Sparkles className="h-4 w-4 text-white" />
            </span>
            Alex<span className="text-gradient">.dev</span>
          </a>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Designing experiences. Engineering products. Building intelligent AI.
          </p>
        </div>
        {[
          { t: "Quick Links", items: ["About", "Work", "Services", "Contact"] },
          { t: "Services", items: ["AI Solutions", "Web Apps", "SaaS Platforms", "Design"] },
          { t: "Connect", items: ["LinkedIn", "GitHub", "Twitter", "Email"] },
        ].map((c) => (
          <div key={c.t}>
            <div className="text-sm font-semibold">{c.t}</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {c.items.map((x) => (<li key={x}><a href="#" className="hover:text-foreground">{x}</a></li>))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-xs text-muted-foreground sm:flex-row">
        <div>© {new Date().getFullYear()} Alex Rivera. All rights reserved.</div>
        <div className="flex items-center gap-2"><Globe className="h-3 w-3" /> Crafted with care.</div>
      </div>
    </footer>
  );
}

/* ---------- Back to top ---------- */
function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.a href="#top"
          initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }}
          className="fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-[color:var(--electric)] to-[color:var(--purple)] text-white shadow-[var(--shadow-glow)]"
          aria-label="Back to top"
        ><ChevronUp className="h-5 w-5" /></motion.a>
      )}
    </AnimatePresence>
  );
}

/* ---------- Page ---------- */
function Portfolio() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <div className="relative">
      <AuroraBackground />
      <CursorGlow />
      <motion.div
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-[color:var(--electric)] via-[color:var(--purple)] to-[color:var(--cyan)]"
      />
      <Nav />
      <main>
        <Hero />
        <Projects />
        
        <About />
        <Services />
        <Expertise />
        {/* <CaseStudy /> <Experience />  <StackMarquee />
        <Testimonials /> <Process /> <Blog /> <Contact /> */}
        
        
        <Skills />
        
       
        
        
        <CTA />
        
      </main>
      {/* <Footer /> */}
      <BackToTop />
    </div>
  );
}

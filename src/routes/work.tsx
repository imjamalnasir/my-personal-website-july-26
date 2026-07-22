import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { useState } from "react";
import { CaseStudyDialog } from "@/components/case-study-dialog";
import { ProjectCardMedia } from "@/components/project-card-media";
import { PageShell } from "@/components/page-shell";
import { FILTERS, PROJECTS } from "@/data/projects";
import type { Project } from "@/data/projects";

export const Route = createFileRoute("/work")({
  component: WorkPage,
  head: () => ({
    meta: [
      { title: "Work — Jamal Nasir" },
      {
        name: "description",
        content: "Selected projects across UI/UX design, front-end development, back-end systems, and AI.",
      },
    ],
  }),
});

function WorkPage() {
  const [filter, setFilter] = useState("All");
  const [caseStudy, setCaseStudy] = useState<Pick<Project, "title" | "caseStudyImage"> | null>(null);
  const shown = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.cat === filter);

  return (
    <PageShell>
      <main className="px-4 pb-24 pt-32 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link
              to="/"
              className="glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>
            <span className="glass mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--electric)]" />
              Portfolio
            </span>
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
              Selected <span className="text-gradient">Work</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
              A collection of products built at the intersection of design, engineering, and AI — from
              enterprise platforms to intelligent agents.
            </p>
          </motion.div>

          <div className="mt-12 flex flex-wrap justify-center gap-2">
            {FILTERS.map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`rounded-full border px-4 py-2 text-xs font-medium transition-all ${
                  filter === item
                    ? "border-transparent bg-gradient-to-r from-[color:var(--electric)] to-[color:var(--purple)] text-white shadow-[var(--shadow-glow)]"
                    : "border-white/10 bg-white/5 text-muted-foreground hover:border-white/25 hover:text-foreground"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {shown.map((project, index) => (
                <motion.article
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: index * 0.04 }}
                  whileHover={{ y: -6 }}
                  className="glass group overflow-hidden rounded-3xl"
                  role="button"
                  tabIndex={0}
                  aria-label={`Open case study for ${project.title}`}
                  onClick={() =>
                    setCaseStudy({ title: project.title, caseStudyImage: project.caseStudyImage })
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setCaseStudy({ title: project.title, caseStudyImage: project.caseStudyImage });
                    }
                  }}
                >
                  <ProjectCardMedia
                    color={project.color}
                    category={project.cat}
                    imageSrc={project.caseStudyImage}
                    title={project.title}
                  />
                  <div className="p-6">
                    <h2 className="text-lg font-semibold">{project.title}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{project.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-white/5 px-2 py-0.5 text-[11px] text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2 text-xs">
                      <a
                        href="#"
                        className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1.5 hover:bg-white/15"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Live <ArrowUpRight className="h-3 w-3" />
                      </a>
                      <a
                        href="#"
                        className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1.5 hover:bg-white/15"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="h-3 w-3" /> Code
                      </a>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setCaseStudy({ title: project.title, caseStudyImage: project.caseStudyImage });
                        }}
                        className="inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1.5 hover:bg-white/5"
                      >
                        Case Study
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-strong mt-20 rounded-[2rem] p-8 text-center sm:p-12"
          >
            <h2 className="text-2xl font-bold sm:text-3xl">Have a project in mind?</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
              Let&apos;s collaborate on your next product, platform, or AI-powered experience.
            </p>
            <a
              href="/#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[color:var(--electric)] to-[color:var(--purple)] px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
            >
              Start a conversation
            </a>
          </motion.div>
        </div>
      </main>

      <CaseStudyDialog
        open={caseStudy !== null}
        onOpenChange={(open) => !open && setCaseStudy(null)}
        title={caseStudy?.title ?? ""}
        imageSrc={caseStudy?.caseStudyImage}
      />
    </PageShell>
  );
}

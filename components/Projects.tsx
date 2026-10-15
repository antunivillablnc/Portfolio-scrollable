import Section from "./Section";
import { projects, type Project } from "@/lib/data";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col rounded-xl border border-slate-800 bg-slate-900/60 p-6 transition hover:-translate-y-0.5 hover:border-indigo-400/60 hover:bg-slate-900">
      <h3 className="text-lg font-semibold text-slate-100 transition group-hover:text-indigo-300">
        {project.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
        {project.description}
      </p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <li
            key={t}
            className="rounded-full border border-indigo-400/20 bg-indigo-400/10 px-2.5 py-0.5 text-xs font-medium text-indigo-300"
          >
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-center gap-4 text-sm">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 transition hover:text-indigo-300"
          >
            GitHub →
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 transition hover:text-indigo-300"
          >
            Live demo →
          </a>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Work"
      title="Selected projects"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </Section>
  );
}

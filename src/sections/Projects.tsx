import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-24">
      <h2 className="text-3xl font-semibold text-white sm:text-4xl">
        Projects
      </h2>

      <p className="mt-4 max-w-2xl text-zinc-400">
        A selection of projects focused on backend systems, distributed
        architecture, and real-time applications.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
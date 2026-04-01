type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
};

export default function ProjectCard({
  title,
  description,
  tech,
}: ProjectCardProps) {
  return (
    <div className="group rounded-3xl border border-zinc-800 bg-zinc-950/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-zinc-600 hover:bg-zinc-900/80">
      <h3 className="text-xl font-semibold text-white transition group-hover:text-zinc-100">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-zinc-400">{description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {tech.map((item, index) => (
          <span
            key={index}
            className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
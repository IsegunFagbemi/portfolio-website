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
    <div className="rounded-2xl border border-zinc-800 p-6 transition hover:border-zinc-600 hover:bg-zinc-900">
      <h3 className="text-xl font-semibold text-white">{title}</h3>

      <p className="mt-3 text-sm text-zinc-400">{description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((item, index) => (
          <span
            key={index}
            className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
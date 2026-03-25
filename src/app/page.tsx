export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-400">
            Software Engineering Portfolio
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
            Computer Science student building scalable backend systems,
            developer tools, and secure applications.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Focused on distributed systems, cybersecurity, and real-time
            software engineering.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
            >
              View Projects
            </a>

            <a
              href="https://github.com/IsegunFagbemi"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium text-white transition hover:border-zinc-500 hover:bg-zinc-900"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

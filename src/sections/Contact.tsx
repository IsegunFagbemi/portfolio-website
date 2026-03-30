export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
      <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 sm:p-12">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
          Contact
        </p>

        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
          Let’s build something impactful.
        </h2>

        <p className="mt-6 max-w-2xl text-zinc-400">
          I’m currently looking for software engineering internship opportunities
          and open to connecting about backend systems, developer tools,
          cybersecurity, and real-world engineering work.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="mailto:isegunoluwafagbemi1@gmail.com"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
          >
            Email Me
          </a>

          <a
            href="https://github.com/IsegunFagbemi"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium text-white transition hover:border-zinc-500 hover:bg-zinc-900"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/isegunoluwa"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium text-white transition hover:border-zinc-500 hover:bg-zinc-900"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

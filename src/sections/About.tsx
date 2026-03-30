export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            About
          </p>

          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Building software with a systems mindset.
          </h2>
        </div>

        <div className="space-y-6 text-zinc-400">
          <p>
            I’m a Computer Science student focused on backend engineering,
            distributed systems, cybersecurity, and developer tools. I enjoy
            building software that is reliable, scalable, and grounded in real
            technical problem solving.
          </p>

          <p>
            My work spans secure application development, real-time systems,
            and infrastructure-oriented projects, with an emphasis on writing
            clean code and understanding how systems behave under real-world
            constraints.
          </p>

          <p>
            Right now, I’m focused on strengthening my software engineering
            foundations through hands-on projects and internship opportunities
            where I can continue learning, contribute meaningfully, and grow as
            an engineer.
          </p>
        </div>
      </div>
    </section>
  );
}
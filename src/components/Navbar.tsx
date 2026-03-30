export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="text-sm font-semibold tracking-wide text-white">
          Isegun Fagbemi
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#projects"
            className="text-sm text-zinc-300 transition hover:text-white"
          >
            Projects
          </a>
          <a
            href="#about"
            className="text-sm text-zinc-300 transition hover:text-white"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-sm text-zinc-300 transition hover:text-white"
          >
            Contact
          </a>
        </div>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-zinc-700 px-4 py-2 text-sm font-medium text-white transition hover:border-zinc-500 hover:bg-zinc-900"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
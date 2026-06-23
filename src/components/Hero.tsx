import { Button } from "@/components/ui/button";

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";

const navLinks = [
  { label: "Home", href: "#", active: true },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Now", href: "#now" },
  { label: "Contact", href: "#contact" },
];

const notes = [
  {
    date: "March 22, 2026",
    title: "The Metric Trap: Stop Counting, Start Living",
    excerpt:
      "On the quiet exhaustion of measuring everything, and the relief of letting some things simply matter without proof.",
    href: "#",
  },
  {
    date: "February 23, 2026",
    title: "The Human Element in an AI World",
    excerpt:
      "A reflection on what remains stubbornly human when the machines get faster, smarter, and louder.",
    href: "#",
  },
  {
    date: "December 15, 2025",
    title: "The Urge to Build",
    excerpt:
      "On moving from spectator to maker, and the particular loneliness of a creativity that refuses to stay quiet.",
    href: "#",
  },
];

export default function Hero() {
  const displayFont = { fontFamily: "'Instrument Serif', serif" };

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Fullscreen background video */}
      <video
        className="fixed inset-0 z-0 h-full w-full object-cover"
        src={VIDEO_SRC}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Navigation */}
      <nav className="relative z-10 mx-auto flex max-w-7xl flex-row items-center justify-between px-8 py-6">
        <a
          href="#"
          className="text-3xl tracking-tight text-foreground"
          style={displayFont}
        >
          Sadab<sup className="text-xs">®</sup>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`text-sm transition-colors hover:text-foreground ${
                  link.active ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <Button
          variant="glass"
          size="sm"
          className="rounded-full px-6 py-2.5 text-sm text-foreground"
        >
          Say Hello
        </Button>
      </nav>

      {/* Hero content */}
      <section className="relative z-10 flex flex-col items-center px-6 pt-32 pb-40 py-[90px] text-center">
        <h1
          className="animate-fade-rise max-w-7xl text-5xl font-normal leading-[0.95] tracking-[-2.46px] text-foreground sm:text-7xl md:text-8xl"
          style={displayFont}
        >
          I get <em className="not-italic text-muted-foreground">curious.</em>{" "}
          Then I{" "}
          <em className="not-italic text-muted-foreground">
            build something.
          </em>
        </h1>

        <p className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          When I see new technology, I want to know how it works. So I read
          about it, try things, break it sometimes, and then build something
          small with it. This site is where I keep what I've built and learned
          so far.
        </p>

        <div className="animate-fade-rise-delay-2 mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <Button
            variant="glass"
            size="lg"
            className="cursor-pointer rounded-full px-14 py-5 text-base text-foreground"
          >
            See what I've built
          </Button>
          <Button
            variant="glass"
            size="lg"
            className="cursor-pointer rounded-full px-14 py-5 text-base text-foreground"
          >
            Read the notes
          </Button>
        </div>
      </section>

      {/* From the notebook */}
      <section
        id="blog"
        className="relative z-10 mx-auto max-w-7xl px-8 pb-32"
      >
        <div className="mb-12 flex items-end justify-between">
          <h2
            className="text-4xl font-normal tracking-tight text-foreground sm:text-5xl"
            style={displayFont}
          >
            From the{" "}
            <em className="not-italic text-muted-foreground">notebook</em>
          </h2>
          <a
            href="#"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            All writing →
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {notes.map((note) => (
            <a
              key={note.title}
              href={note.href}
              className="liquid-glass group flex flex-col rounded-2xl p-7 transition-transform hover:scale-[1.02]"
            >
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                {note.date}
              </span>
              <h3
                className="mt-4 text-2xl font-normal leading-tight text-foreground"
                style={displayFont}
              >
                {note.title}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {note.excerpt}
              </p>
              <span className="mt-6 text-sm text-foreground/90 transition-colors group-hover:text-foreground">
                Read more →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-8 pb-10 text-center sm:flex-row sm:text-left">
        <span
          className="text-xl text-foreground"
          style={displayFont}
        >
          Sadab Munshi
        </span>
        <span className="text-xs text-muted-foreground">
          Learning by doing
        </span>
      </footer>
    </main>
  );
}

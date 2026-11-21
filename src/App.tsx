import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowUpRight,
  Download,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import portrait from "./assets/portrait.jpg";
import { ThemeToggle } from "./components/ThemeToggle";
import {
  certifications,
  education,
  experience,
  profile,
  projects,
  skills,
  spokenLanguages,
} from "./data";

const sections = ["about", "work", "projects", "education", "contact"] as const;

function useActiveSection() {
  const [active, setActive] = useState("");
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return active;
}

export default function App() {
  const active = useActiveSection();

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur">
        <nav className="wrap flex h-14 items-center justify-between">
          <a href="#top" className="font-display text-lg">
            mohan<span className="text-accent">.</span>
          </a>
          <ul className="hidden gap-7 text-sm sm:flex">
            {sections.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className={active === id ? "text-fg" : "text-dim hover:text-fg"}>
                  {id}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>
      </header>

      <main id="top">
        <Hero />

        <Section id="about" n="01" title="About">
          <div className="grid gap-10 md:grid-cols-[1.6fr_1fr]">
            <div className="space-y-4 text-dim">
              <p>
                I spent about two years at Prodapt in Chennai writing Java and Spring services for
                Verizon's C-Ops platform. Mostly backend: APIs, database work, and a fair share of
                debugging things in production.
              </p>
              <p>
                In 2025 I moved to Gothenburg for a master's at Chalmers, on the Algorithms,
                Languages and Logic track. I'm looking for a software role in Sweden, ideally
                backend or full-stack, but I'm open to other areas too.
              </p>
              <p>
                Outside of code I play football, handball and badminton, do the daily Wordle, play
                some chess and read way too much manga.
              </p>
            </div>
            <div>
              <h3 className="label">Speaks</h3>
              <dl className="mt-3 divide-y divide-line text-sm">
                {spokenLanguages.map(([lang, level]) => (
                  <div key={lang} className="flex justify-between py-2">
                    <dt>{lang}</dt>
                    <dd className="text-dim">{level}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map(([group, items]) => (
              <div key={group}>
                <h3 className="label">{group}</h3>
                <p className="mt-2 text-sm leading-7">{items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="work" n="02" title="Work">
          <ol className="relative space-y-10 border-l border-line pl-6">
            {experience.map((job) => (
              <li key={job.period} className="relative">
                <span className="absolute -left-[29px] top-2 h-2.5 w-2.5 rounded-full bg-accent" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl">
                    {job.role} <span className="text-dim">@ {job.company}</span>
                  </h3>
                  <span className="font-mono text-xs text-dim">{job.period}</span>
                </div>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-dim marker:text-accent">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="projects" n="03" title="Projects">
          <div className="divide-y divide-line border-y border-line">
            {projects.map((p) => (
              <article key={p.title} className="grid gap-3 py-7 md:grid-cols-[220px_1fr]">
                <div>
                  <h3 className="text-xl">{p.title}</h3>
                  <p className="mt-1 font-mono text-xs text-accent">{p.tag}</p>
                </div>
                <div>
                  <p className="text-dim">{p.summary}</p>
                  <p className="mt-3 font-mono text-xs text-dim">{p.stack.join(" / ")}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm text-dim">
            More on{" "}
            <a href={profile.github} className="link" target="_blank" rel="noreferrer">
              GitHub
            </a>
            .
          </p>
        </Section>

        <Section id="education" n="04" title="Education">
          <ul className="space-y-6">
            {education.map((e) => (
              <li key={e.degree} className="flex flex-wrap justify-between gap-2">
                <div>
                  <h3 className="text-lg">{e.degree}</h3>
                  <p className="text-sm text-dim">{e.school}</p>
                </div>
                <span className="font-mono text-xs text-dim">{e.period}</span>
              </li>
            ))}
          </ul>
          <details className="mt-10 rounded-lg border border-line p-5 [&_summary]:cursor-pointer">
            <summary className="label">Certificates &amp; awards ({certifications.length})</summary>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-dim marker:text-accent">
              {certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </details>
        </Section>

        <Section id="contact" n="05" title="Contact">
          <p className="max-w-xl text-lg text-dim">
            Hiring in Sweden, or just want to talk about Java, networks or football? Send me an
            email. I usually answer within a day.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="btn btn-solid">
              <Mail size={16} /> {profile.email}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn">
              <Github size={16} /> GitHub
            </a>
            <a href={profile.instagram} target="_blank" rel="noreferrer" className="btn">
              <Instagram size={16} /> Instagram
            </a>
          </div>
        </Section>
      </main>

      <footer className="border-t border-line">
        <div className="wrap flex flex-wrap justify-between gap-2 py-6 text-xs text-dim">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>Built with React + Vite, hosted on GitHub Pages</span>
        </div>
      </footer>
    </>
  );
}

function Hero() {
  return (
    <section className="wrap grid items-center gap-10 py-16 md:grid-cols-[1fr_280px] md:py-28">
      <div>
        <p className="font-mono text-sm text-accent">Hej! I'm</p>
        <h1 className="mt-3 text-5xl leading-[1.05] md:text-7xl">
          Mohanraam
          <br />
          <em className="text-accent">Vasanthi Krishna</em>
        </h1>
        <p className="mt-6 max-w-lg text-lg text-dim">
          Software engineer, currently doing an MSc in Computer Science at Chalmers. Before that,
          two years of backend work in the telecom world.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={profile.resume} download={profile.resumeName} className="btn btn-solid">
            <Download size={16} /> Download CV
          </a>
          <a href={profile.resume} target="_blank" rel="noreferrer" className="btn">
            View CV <ArrowUpRight size={16} />
          </a>
        </div>
        <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-dim">
          <li className="flex items-center gap-2">
            <MapPin size={15} className="text-accent" /> {profile.city}
          </li>
          <li className="flex items-center gap-2">
            <Mail size={15} className="text-accent" /> {profile.email}
          </li>
          <li className="flex items-center gap-2">
            <Phone size={15} className="text-accent" /> {profile.phone}
          </li>
        </ul>
      </div>
      <img
        src={portrait}
        alt="Mohanraam Vasanthi Krishna"
        className="mx-auto w-56 rotate-2 rounded-2xl border border-line object-cover shadow-xl md:w-full"
      />
    </section>
  );
}

function Section({
  id,
  n,
  title,
  children,
}: {
  id: string;
  n: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="wrap scroll-mt-16 py-16 md:py-20">
      <h2 className="mb-10 flex items-baseline gap-4 text-3xl md:text-4xl">
        <span className="font-mono text-sm text-accent">{n}</span>
        {title}
        <span className="h-px flex-1 bg-line" />
      </h2>
      {children}
    </section>
  );
}

import CountUp from "@/components/CountUp";
import Header from "@/components/Header";
import ScrollProgress from "@/components/ScrollProgress";
import Spotlight from "@/components/Spotlight";
import ImageSlot from "@/components/ImageSlot";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import Tag from "@/components/Tag";
import {
  certifications,
  education,
  experience,
  expertise,
  languages,
  profile,
  projects,
  roles,
  skills,
  softSkills,
  stats,
} from "@/data/portfolio";

/* ------------------------------------------------------------------ icons */
const I = {
  arrow: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  external: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  ),
  download: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
    </svg>
  ),
  mail: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
  phone: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
    </svg>
  ),
  pin: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
  calendar: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </svg>
  ),
  cap: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="m2 9 10-5 10 5-10 5L2 9Z" />
      <path d="M6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
    </svg>
  ),
  globe: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3Z" />
    </svg>
  ),
  award: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="12" cy="9" r="6" />
      <path d="m8.5 14-1.5 7 5-3 5 3-1.5-7" />
    </svg>
  ),
  check: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
      <path d="m5 12 4.5 4.5L19 7" />
    </svg>
  ),
};

const expertiseIcons = [
  // GenAI
  <svg key="a" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
    <circle cx="12" cy="12" r="3.5" />
  </svg>,
  // Data
  <svg key="b" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <ellipse cx="12" cy="5.5" rx="7" ry="2.5" />
    <path d="M5 5.5v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6M5 11.5v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" />
  </svg>,
  // Apps
  <svg key="c" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 9h18M8 14l-2 2 2 2M16 14l2 2-2 2" />
  </svg>,
];

export default function Home() {
  const socials = (Object.entries(profile.links) as [string, string][]).filter(([, url]) => url);
  const marquee = Array.from(new Set(skills.flatMap((g) => g.items)));
  const socialLabel = (k: string) => (k === "linkedin" ? "LinkedIn" : k === "github" ? "GitHub" : k);

  return (
    <>
      <ScrollProgress />
      <Spotlight />
      <Header />

      <main id="top">
        {/* =============================================================== HERO */}
        <section className="relative overflow-hidden pb-16 pt-28 sm:pt-36">
          <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
          <div
            className="animate-blob pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-accent/15 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="animate-blob-slow pointer-events-none absolute -left-32 top-48 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="animate-blob pointer-events-none absolute bottom-0 right-1/3 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative mx-auto grid max-w-page gap-12 px-5 sm:px-8 lg:grid-cols-[1.35fr_1fr] lg:items-center">
            <div>
              <Reveal>
                <p className="inline-flex items-center gap-2.5 rounded-full border border-accent/25 bg-accent-soft px-3.5 py-1.5 text-sm font-medium text-accent">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50 motion-reduce:hidden" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  {profile.availability}
                </p>
              </Reveal>
              <Reveal delay={80}>
                <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-muted">{profile.title}</p>
                <h1 className="mt-3 font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                  {profile.firstName} <span className="text-gradient">{profile.lastName}</span>
                </h1>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-5 font-display text-xl font-semibold text-ink/80 sm:text-2xl">
                  Spécialisée en{" "}
                  <span className="word-rotator text-accent">
                    {roles.map((r) => (
                      <span key={r}>{r}</span>
                    ))}
                  </span>
                </p>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{profile.headline}</p>
              </Reveal>
              <Reveal delay={220} className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#projets"
                  className="btn-shine inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-on-accent shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30"
                >
                  Voir mes projets {I.arrow}
                </a>
                <a
                  href={profile.cvPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-5 py-3 text-sm font-semibold transition-colors hover:border-ink/30"
                >
                  {I.download} Télécharger le CV
                </a>
              </Reveal>
            </div>

            {/* Business card */}
            <Reveal delay={200}>
              <div className="animate-float">
              <aside className="border-animated rounded-2xl bg-surface p-6 shadow-2xl shadow-accent/10 ring-1 ring-inset ring-line sm:p-7">
                <div className="flex items-center gap-5">
                  <ImageSlot
                    src={profile.photo}
                    alt={`Photo de ${profile.name}`}
                    compact
                    priority
                    sizes="112px"
                    className="h-[8.5rem] w-28 shrink-0 rounded-xl bg-paper ring-1 ring-line"
                  />
                  <div>
                    <p className="font-display text-xl font-bold">{profile.name}</p>
                    <p className="mt-1 text-sm font-medium text-accent">{profile.title}</p>
                    <p className="mt-2 text-sm leading-snug text-muted">{profile.subtitle}</p>
                  </div>
                </div>
                <ul className="mt-6 divide-y divide-line border-t border-line text-sm">
                  <li>
                    <a href={`mailto:${profile.email}`} className="flex items-center gap-3 py-3 hover:text-accent">
                      <span className="text-muted">{I.mail}</span>
                      <span className="break-all">{profile.email}</span>
                    </a>
                  </li>
                  <li>
                    <a href={`tel:${profile.phoneHref}`} className="flex items-center gap-3 py-3 hover:text-accent">
                      <span className="text-muted">{I.phone}</span>
                      {profile.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-3 py-3">
                    <span className="text-muted">{I.pin}</span>
                    {profile.location}
                  </li>
                  <li className="flex items-center gap-3 py-3">
                    <span className="text-muted">{I.globe}</span>
                    {languages.map((l) => l.name).join(" · ")}
                  </li>
                </ul>
                {socials.length > 0 && (
                  <div className="mt-4 flex gap-2">
                    {socials.map(([k, url]) => (
                      <a
                        key={k}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-line px-3 py-2 text-xs font-semibold hover:border-accent hover:text-accent"
                      >
                        {socialLabel(k)} {I.external}
                      </a>
                    ))}
                  </div>
                )}
              </aside>
              </div>
            </Reveal>
          </div>

          {/* Key figures */}
          <div className="relative mx-auto mt-16 max-w-page px-5 sm:px-8">
            <Reveal>
              <dl className="grid grid-cols-2 overflow-hidden rounded-2xl border border-line bg-surface lg:grid-cols-4">
                {stats.map((s, i) => (
                  <div
                    key={s.label}
                    className={`p-6 sm:p-7 ${i % 2 === 1 ? "border-l border-line" : ""} ${i >= 2 ? "border-t border-line lg:border-t-0" : ""} ${
                      i === 2 ? "lg:border-l" : ""
                    }`}
                  >
                    <dd className="font-display text-2xl font-extrabold tracking-tight text-ink sm:text-4xl">
                      <CountUp value={s.value} />
                    </dd>
                    <dt className="mt-1 text-sm text-muted">{s.label}</dt>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        {/* ========================================================== MARQUEE */}
        <div className="marquee overflow-hidden border-y border-line bg-surface py-5" aria-hidden="true">
          <div className="marquee-track flex w-max gap-3">
            {[...marquee, ...marquee].map((t, i) => (
              <span
                key={t + i}
                className="whitespace-nowrap rounded-full border border-line bg-paper px-4 py-1.5 font-display text-sm font-semibold text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ============================================================ PROFIL */}
        <Section id="profil" eyebrow="Profil" title="Data, IA générative et applications intelligentes" className="border-t border-line bg-surface">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
            <Reveal className="space-y-5 text-lg leading-relaxed text-ink/80">
              {profile.about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-2xl border border-line bg-paper p-6 sm:p-7">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">En bref</h3>
                <ul className="mt-5 space-y-4 text-sm">
                  <li className="flex gap-3">
                    <span className="mt-0.5 text-accent">{I.cap}</span>
                    <span>
                      <span className="block font-semibold">Formation</span>
                      <span className="text-muted">Cycle ingénieur — Data Science & IA, EMSI</span>
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 text-accent">{I.calendar}</span>
                    <span>
                      <span className="block font-semibold">Disponibilité</span>
                      <span className="text-muted">Stage PFE de 6 mois à partir de février 2027</span>
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 text-accent">{I.pin}</span>
                    <span>
                      <span className="block font-semibold">Localisation</span>
                      <span className="text-muted">{profile.location}</span>
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 text-accent">{I.globe}</span>
                    <span>
                      <span className="block font-semibold">Langues</span>
                      <span className="text-muted">{languages.map((l) => `${l.name} (${l.level.toLowerCase()})`).join(", ")}</span>
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {expertise.map((e, i) => (
              <Reveal key={e.title} delay={i * 90} className="h-full">
                <article className="spotlight group flex h-full flex-col rounded-2xl border border-line bg-paper p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 sm:p-7">
                  <span className="group-hover-wiggle grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-on-accent">{expertiseIcons[i]}</span>
                  <h3 className="mt-5 font-display text-lg font-bold">{e.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{e.text}</p>
                  <div className="tag-pop mt-auto flex flex-wrap gap-1.5 pt-5">
                    {e.tools.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* ======================================================== EXPERIENCE */}
        <Section
          id="experience"
          eyebrow="Expérience"
          title="Parcours professionnel"
          intro="Trois stages, du développement web et mobile jusqu'au traitement de données douanières par l'IA."
          className="border-t border-line"
        >
          <ol className="relative space-y-8">
            <span className="timeline-line absolute bottom-0 left-[12.5rem] top-2 hidden w-0.5 rounded bg-gradient-to-b from-accent via-cyan-400 to-line lg:block" aria-hidden="true" />
            {experience.map((exp, i) => (
              <li key={exp.company + exp.role} className="relative lg:grid lg:grid-cols-[11rem_1fr] lg:gap-12">
                <Reveal className="mb-3 lg:mb-0 lg:pt-6 lg:text-right">
                  <p className="text-sm font-semibold text-ink">{exp.period}</p>
                  <p className="text-sm text-muted">{exp.type}</p>
                  <span
                    className={`absolute left-[12.5rem] top-7 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-paper lg:block ${
                      i === 0 ? "pulse-dot bg-accent" : "bg-accent/60"
                    }`}
                    aria-hidden="true"
                  />
                </Reveal>
                <Reveal delay={80}>
                  <article className="spotlight rounded-2xl border border-line bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 sm:p-8">
                    <div className="flex items-start gap-4">
                      <ImageSlot
                        src={exp.logo}
                        alt={`Logo ${exp.company}`}
                        compact
                        sizes="56px"
                        className="h-14 w-14 shrink-0 rounded-xl bg-paper"
                      />
                      <div>
                        <h3 className="font-display text-xl font-bold">{exp.role}</h3>
                        <p className="mt-0.5 font-medium text-accent">
                          {exp.company}
                          {exp.companyFull && <span className="font-normal text-muted"> — {exp.companyFull}</span>}
                        </p>
                      </div>
                    </div>
                    <ul className="mt-6 space-y-3">
                      {exp.points.map((pt) => (
                        <li key={pt} className="flex gap-3 leading-relaxed text-ink/80">
                          <span className="mt-1 shrink-0 text-accent">{I.check}</span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                    <div className="tag-pop mt-6 flex flex-wrap gap-1.5 border-t border-line pt-5">
                      {exp.stack.map((s) => (
                        <Tag key={s}>{s}</Tag>
                      ))}
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </Section>

        {/* ========================================================== PROJETS */}
        <Section
          id="projets"
          eyebrow="Projets"
          title="Projets académiques"
          intro="IA générative, agents LLM, ingénierie des données et analyse de graphes."
          className="border-t border-line bg-surface"
        >
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 90} className="h-full">
                <article className="spotlight group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/15">
                  <ImageSlot
                    src={p.image}
                    alt={`Capture du projet ${p.title}`}
                    hint="Capture du projet"
                    sizes="(min-width: 768px) 580px, 100vw"
                    className="zoom-img aspect-[16/9] border-b border-line"
                  />
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <div className="flex items-center justify-between gap-4">
                      <span className="rounded-md bg-accent-soft px-2.5 py-1 text-xs font-semibold text-accent">{p.category}</span>
                      <span className="font-display text-sm font-bold text-muted/60">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 className="mt-4 font-display text-xl font-bold transition-colors group-hover:text-accent sm:text-2xl">{p.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted">{p.summary}</p>
                    <div className="tag-pop mt-auto flex flex-wrap gap-1.5 pt-6">
                      {p.stack.map((s) => (
                        <Tag key={s}>{s}</Tag>
                      ))}
                    </div>
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
                      >
                        Voir le projet {I.external}
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* ======================================================= COMPETENCES */}
        <Section
          id="competences"
          eyebrow="Compétences"
          title="Compétences techniques"
          className="border-t border-line"
        >
          <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
            <Reveal>
              <div className="overflow-hidden rounded-2xl border border-line bg-surface">
                {skills.map((g, i) => (
                  <div
                    key={g.group}
                    className={`grid gap-3 p-5 transition-colors hover:bg-accent-soft/40 sm:grid-cols-[11rem_1fr] sm:gap-6 sm:p-6 ${i > 0 ? "border-t border-line" : ""}`}
                  >
                    <h3 className="font-display font-bold">{g.group}</h3>
                    <div className="tag-pop flex flex-wrap gap-1.5">
                      {g.items.map((s) => (
                        <Tag key={s}>{s}</Tag>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <div className="space-y-6">
              <Reveal delay={80}>
                <div className="rounded-2xl border border-line bg-surface p-6">
                  <h3 className="font-display font-bold">Compétences interpersonnelles</h3>
                  <ul className="mt-4 space-y-2.5 text-sm">
                    {softSkills.map((s) => (
                      <li key={s} className="flex items-center gap-2.5">
                        <span className="text-accent">{I.check}</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={140}>
                <div className="rounded-2xl border border-line bg-surface p-6">
                  <h3 className="font-display font-bold">Langues</h3>
                  <ul className="mt-4 divide-y divide-line text-sm">
                    {languages.map((l) => (
                      <li key={l.name} className="flex justify-between py-2.5">
                        <span className="font-medium">{l.name}</span>
                        <span className="text-muted">{l.level}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </Section>

        {/* ========================================================= FORMATION */}
        <Section id="formation" eyebrow="Formation" title="Formation & certifications" className="border-t border-line bg-surface">
          <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
            <Reveal>
              <ol className="space-y-4">
                {education.map((e, i) => (
                  <li
                    key={e.degree}
                    className={`grid gap-2 rounded-2xl border p-5 sm:grid-cols-[9rem_1fr] sm:gap-6 sm:p-6 ${
                      i === 0 ? "border-accent/40 bg-accent-soft/50" : "border-line bg-paper"
                    }`}
                  >
                    <p className="text-sm font-semibold text-accent">{e.period}</p>
                    <div>
                      <h3 className="font-semibold leading-snug">{e.degree}</h3>
                      <p className="mt-1 text-sm text-muted">{e.school}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal delay={100}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">Certifications</h3>
              <ul className="space-y-4">
                {certifications.map((c) => (
                  <li key={c.name} className="flex gap-4 rounded-2xl border border-line bg-paper p-5">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent">{I.award}</span>
                    <div>
                      {c.link ? (
                        <a href={c.link} target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-accent">
                          {c.name}
                        </a>
                      ) : (
                        <p className="font-semibold">{c.name}</p>
                      )}
                      <p className="text-sm text-muted">{c.issuer}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Section>

        {/* =========================================================== CONTACT */}
        <section id="contact" className="relative overflow-hidden bg-navy py-20 text-white sm:py-24">
          <div className="animate-aurora pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-accent/25 blur-3xl" aria-hidden="true" />
          <div className="animate-blob-slow pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-page gap-12 px-5 sm:px-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <Reveal>
              <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#93b4ff]">
                <span className="h-px w-8 bg-[#93b4ff]" />
                Contact
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
                Un sujet de PFE en Data ou en IA ? Parlons-en.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
                Disponible pour un stage de fin d&apos;études de 6 mois à partir de février 2027, à Casablanca.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${profile.email}?subject=Proposition%20de%20stage%20PFE`}
                  className="btn-shine inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#0b162e] transition-transform hover:-translate-y-0.5"
                >
                  Envoyer un email {I.arrow}
                </a>
                <a
                  href={profile.cvPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-5 py-3 text-sm font-semibold transition-colors hover:border-white"
                >
                  {I.download} Télécharger le CV
                </a>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <ul className="divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <li>
                  <a href={`mailto:${profile.email}`} className="flex items-center gap-4 p-5 transition-colors hover:bg-white/5">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/10">{I.mail}</span>
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-white/50">Email</span>
                      <span className="break-all font-medium">{profile.email}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href={`tel:${profile.phoneHref}`} className="flex items-center gap-4 p-5 transition-colors hover:bg-white/5">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/10">{I.phone}</span>
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-white/50">Téléphone</span>
                      <span className="font-medium">{profile.phone}</span>
                    </span>
                  </a>
                </li>
                <li className="flex items-center gap-4 p-5">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/10">{I.pin}</span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-white/50">Localisation</span>
                    <span className="font-medium">{profile.location}</span>
                  </span>
                </li>
                {socials.map(([k, url]) => (
                  <li key={k}>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 transition-colors hover:bg-white/5">
                      <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/10">{I.external}</span>
                      <span className="font-medium">{socialLabel(k)}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-surface">
        <div className="mx-auto flex max-w-page flex-col gap-2 px-5 py-7 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {profile.name} — {profile.title}
          </p>
          <a href="#top" className="hover:text-ink">
            Retour en haut
          </a>
        </div>
      </footer>
    </>
  );
}

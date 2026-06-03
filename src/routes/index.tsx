import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, GraduationCap, BrainCircuit, Compass, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import hero from "@/assets/hero-training.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "G2 — Conocimiento que transforma organizaciones" },
      { name: "description", content: "Capacitación corporativa, pruebas psicométricas y consultoría TI en República Dominicana. Aceleramos la transformación digital de tu empresa." },
      { property: "og:title", content: "G2 — Conocimiento que transforma" },
      { property: "og:description", content: "Capacitación, consultoría y tecnología para la transformación digital." },
    ],
  }),
  component: Home,
});

const services = [
  {
    icon: GraduationCap,
    title: "Capacitación",
    desc: "Catálogo in-house y abierto al público. Presentamos al mercado un catálogo de capacitaciones acorde a las actualidades y necesidades del mercado; esto mediante modalidades in house y programas abiertos al público.",
    to: "/servicios",
    bullets: [
      "Fundamentos de Inteligencia Artificial (IA)",
      "Machine Learning (ML)",
      "Buenas prácticas en TI (ITIL, CobIT, normas ISO, entre otros)",
      "DB Database performance",
      "Business Intelligence (BI) y modelos analíticos",
      "Desarrollo de software",
      "Gestión de proyectos — Agile / Scrum",
    ],
  },
  { icon: BrainCircuit, title: "Pruebas Psicométricas", desc: "Tecnología para acceso a evaluaciones objetivas de habilidades, personalidad y aptitudes laborales.", to: "/servicios" },
  { icon: Compass, title: "Consultoría", desc: "Sistemas de Información, controles de TI, planeamiento estratégico y auditoría de sistemas.", to: "/servicios" },
];


const stats = [
  { k: "15+", v: "años elevando talento" },
  { k: "200+", v: "programas dictados" },
  { k: "98%", v: "satisfacción de clientes" },
];

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[image:var(--gradient-mesh)] opacity-70" />
        <div className="container-x grid items-center gap-12 pt-20 pb-24 lg:grid-cols-[1.1fr_1fr] lg:pt-28 lg:pb-32">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              <Sparkles size={14} className="text-accent" />
              Nuevo portal G2 · 2026
            </div>
            <h1 className="text-display mt-6 text-5xl text-foreground sm:text-6xl lg:text-7xl">
              Conocimiento que <span className="italic text-primary">transforma</span> en riqueza.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              G2 es una entidad facilitadora de iniciativas, programas y propuestas
              novedosas apoyadas en tecnología de la información — para empresas que
              quieren crecer con propósito.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/capacitaciones"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-elevated transition hover:-translate-y-0.5"
              >
                Ver calendario
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </Link>
              <Link
                to="/servicios"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-medium text-foreground transition hover:border-foreground"
              >
                Explorar servicios
              </Link>
            </div>
            <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
              {stats.map((s) => (
                <div key={s.v}>
                  <dt className="text-display text-3xl text-foreground sm:text-4xl">{s.k}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-[image:var(--gradient-brand)] opacity-20 blur-2xl" />
            <div className="overflow-hidden rounded-3xl border border-border shadow-elevated">
              <img
                src={hero}
                alt="Equipo en capacitación G2"
                width={1920}
                height={1080}
                className="aspect-[4/5] h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-x py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Nuestros servicios</p>
            <h2 className="text-display mt-3 max-w-2xl text-4xl text-foreground sm:text-5xl">
              Tres frentes, una misma misión: hacer crecer tu organización.
            </h2>
          </div>
          <Link to="/servicios" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
            Ver todos <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Link
              key={s.title}
              to={s.to}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[image:var(--gradient-brand)] opacity-0 blur-2xl transition group-hover:opacity-30" />
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
                  <s.icon size={22} />
                </div>
                <h3 className="text-display mt-6 text-2xl text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                {s.bullets && (
                  <ul className="mt-4 space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                          <ArrowRight size={8} strokeWidth={3} />
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="mt-8 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">0{i + 1} / 03</span>
                <ArrowRight size={18} className="text-foreground transition group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-[color:var(--color-ink)] p-10 text-background md:p-16">
          <div className="absolute inset-0 -z-0 bg-[image:var(--gradient-brand)] opacity-25" />
          <div className="relative grid items-center gap-8 md:grid-cols-[1.5fr_1fr]">
            <div>
              <p className="eyebrow text-background/60">Hablemos</p>
              <h3 className="text-display mt-3 text-4xl sm:text-5xl">
                Diseñemos juntos tu próximo programa de transformación.
              </h3>
            </div>
            <Link
              to="/contacto"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-semibold text-accent-foreground transition hover:opacity-90"
            >
              Agendar conversación <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

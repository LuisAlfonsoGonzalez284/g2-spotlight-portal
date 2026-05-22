import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/capacitaciones")({
  head: () => ({
    meta: [
      { title: "Capacitaciones — Calendario G2" },
      { name: "description", content: "Programas abiertos y certificaciones en TIC, IT Frameworks, IA y gestión de proyectos." },
      { property: "og:title", content: "Capacitaciones — G2" },
      { property: "og:description", content: "Calendario abierto de programas G2." },
    ],
  }),
  component: Capacitaciones,
});

const courses = [
  { cat: "IA", title: "Fundamentos de Inteligencia Artificial Aplicada", date: "12 Mar", duration: "24h", mode: "Virtual" },
  { cat: "Frameworks", title: "ITIL® 4 Foundation con preparación a certificación", date: "02 Abr", duration: "16h", mode: "Híbrido" },
  { cat: "Datos", title: "DB Performance Tuning para equipos de operaciones", date: "18 Abr", duration: "20h", mode: "Presencial" },
  { cat: "Gestión", title: "Gestión de Proyectos con metodologías ágiles", date: "06 May", duration: "32h", mode: "Virtual" },
  { cat: "TIC", title: "Buenas prácticas en Seguridad de la Información", date: "20 May", duration: "12h", mode: "In-house" },
  { cat: "IA", title: "Implementación práctica de copilotos en la empresa", date: "10 Jun", duration: "18h", mode: "Virtual" },
];

function Capacitaciones() {
  return (
    <SiteLayout>
      <section className="container-x pt-20 pb-10 md:pt-28">
        <p className="eyebrow">Capacitaciones</p>
        <h1 className="text-display mt-4 max-w-4xl text-5xl text-foreground sm:text-6xl lg:text-7xl">
          Calendario <span className="italic text-primary">abierto</span> de programas.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Inscripción individual o por equipos. ¿Necesitas un programa a la medida?
          <Link to="/contacto" className="ml-1 text-primary underline-offset-4 hover:underline">Hablemos</Link>.
        </p>
      </section>

      <section className="container-x pb-24">
        <div className="grid gap-4">
          {courses.map((c, i) => (
            <div
              key={c.title}
              className="group grid items-center gap-4 rounded-2xl border border-border bg-card p-6 transition hover:border-foreground hover:shadow-soft md:grid-cols-[80px_120px_1fr_auto_auto] md:gap-8"
            >
              <div className="text-display text-3xl text-muted-foreground/70">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground">
                  {c.cat}
                </span>
              </div>
              <h3 className="text-display text-xl text-foreground md:text-2xl">{c.title}</h3>
              <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><Calendar size={14} />{c.date}</span>
                <span className="inline-flex items-center gap-1.5"><Clock size={14} />{c.duration}</span>
                <span className="inline-flex items-center gap-1.5"><MapPin size={14} />{c.mode}</span>
              </div>
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition group-hover:bg-primary"
              >
                Inscribirme <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

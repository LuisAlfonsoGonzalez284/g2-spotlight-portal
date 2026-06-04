import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ArrowRight, GraduationCap } from "lucide-react";

export const Route = createFileRoute("/capacitaciones")({
  head: () => ({
    meta: [
      { title: "Catálogo In-house y abierto al público — G2" },
      { name: "description", content: "Catálogo de formaciones G2 disponibles en modalidad in-house para tu organización o abiertas al público para participantes individuales." },
      { property: "og:title", content: "Catálogo In-house y abierto al público — G2" },
      { property: "og:description", content: "Formaciones actualizadas y alineadas a las necesidades empresariales." },
    ],
  }),
  component: Capacitaciones,
});

const bullets = [
  "Fundamentos de Inteligencia Artificial (IA)",
  "Machine Learning (ML)",
  "Buenas prácticas en TI (ITIL, CobIT, normas ISO, entre otros)",
  "DB Database performance",
  "Business Intelligence (BI) y modelos analíticos",
  "Desarrollo de software",
  "Gestión de proyectos — Agile / Scrum",
];

function Capacitaciones() {
  return (
    <SiteLayout>
      <section className="container-x pt-20 pb-8 md:pt-28">
        
        <h1 className="text-display mt-4 max-w-4xl text-5xl text-foreground sm:text-6xl lg:text-7xl">
          Catálogo <span className="italic text-primary">In-house</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Presentamos al mercado una oferta de formaciones actualizadas y alineadas a las
          necesidades empresariales, disponibles bajo modalidades cerradas para tu
          organización o sesiones abiertas para participantes individuales.
        </p>
      </section>

      <section className="container-x pb-24">
        <div className="surface-card grid gap-10 p-8 md:grid-cols-[1fr_1.2fr] md:p-12">
          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary">
              <GraduationCap size={26} />
            </div>
            <h2 className="text-display mt-6 text-3xl text-foreground sm:text-4xl">
              Nuestra oferta formativa.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Programas diseñados para equipos completos o profesionales que buscan
              actualizar sus competencias en tecnología, datos y gestión.
            </p>
            <Link
              to="/contacto"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:-translate-y-0.5"
            >
              Solicitar información <ArrowRight size={16} />
            </Link>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 rounded-2xl border border-border bg-background p-4 text-sm text-foreground"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <ArrowRight size={10} strokeWidth={3} />
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SiteLayout>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Check } from "lucide-react";
import training from "@/assets/service-training.jpg";
import psycho from "@/assets/service-psychometric.jpg";
import consult from "@/assets/service-consulting.jpg";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — G2 Capacitación, Gestión de Cambio y Consultoría" },
      { name: "description", content: "Capacitación en buenas prácticas TIC, gestión del cambio organizacional y consultoría en sistemas de información." },
      { property: "og:title", content: "Servicios — G2" },
      { property: "og:description", content: "Capacitación, gestión de cambio y consultoría TI." },
    ],
  }),
  component: Servicios,
});

const blocks = [
  {
    tag: "01 · Capacitación",
    title: "Catálogo in-house y abierto al público.",
    intro:
      "Presentamos al mercado un catálogo de capacitaciones acorde a las actualidades y necesidades del mercado; esto mediante modalidades in house y programas abiertos al público. Capacitación y consultoría en buenas prácticas en Tecnología de la Información.",
    image: training,
    groups: [
      { label: "Buenas Prácticas", bullets: ["ITIL v3", "CobIT 5", "ISO 27001"] },
      {
        label: "Metodologías",
        bullets: [
          "Scrum / Agile",
          "Ingeniería de Requerimientos",
          "Aseguramiento de Calidad de Software",
          "Business Continuity Plan",
          "Management 3.0",
          "Datawarehouse",
          "UML",
          "Gestión de Proyectos",
        ],
      },
    ],
  },
  {
    tag: "02 · Gestión de Cambio",
    title: "El lado humano del cambio organizacional.",
    intro:
      "La gestión del cambio organizacional es un marco para gestionar los efectos de los nuevos procesos de negocios, cambios en una estructura organizacional o cambios culturales dentro de la empresa. Lleva adelante el lado de la gestión del cambio que tiene que ver con las personas. Un enfoque sistemático es beneficioso cuando el cambio requiere que las personas aprendan nuevos comportamientos y habilidades.",
    image: psycho,
    groups: [
      {
        label: "Beneficios",
        bullets: [
          "Asienta formalmente las expectativas",
          "Herramientas para mejorar la comunicación",
          "Reduce malos entendidos en los equipos",
          "Mayor aceptación y compromiso con la iniciativa de cambio",
        ],
      },
    ],
  },
  {
    tag: "03 · Consultoría",
    title: "Tecnología como ventaja competitiva.",
    intro:
      "La tecnología es una herramienta que, si es correctamente entendida y utilizada, puede convertirse en un valor estratégico para las organizaciones, generando una ventaja competitiva para aquellas que la aprovechan.",
    image: consult,
    groups: [
      {
        label: "Servicios",
        bullets: [
          "Diagnóstico e Implementación de un Sistema de Seguridad de la Información (ISO 27001)",
          "Diagnóstico e Implementación de un Modelo de Controles de TI basado en COBIT",
          "Planeamiento Estratégico de la Función Informática",
          "Pruebas de uso en los Sistemas de Información",
          "Diseño de Soluciones Tecnológicas",
          "Análisis y Diseño de Modelos Ejecutivos de Explotación de Información Gerencial",
          "Auditoría de Sistemas de Información",
        ],
      },
    ],
  },
];

function Servicios() {
  return (
    <SiteLayout>
      <section className="container-x pt-20 pb-12 md:pt-28">
        <p className="eyebrow">Servicios</p>
        <h1 className="text-display mt-4 max-w-4xl text-5xl text-foreground sm:text-6xl lg:text-7xl">
          Soluciones <span className="italic text-primary">end-to-end</span> para crecer con tecnología.
        </h1>
      </section>

      <section className="container-x space-y-24 pb-24">
        {blocks.map((b, i) => (
          <article
            key={b.tag}
            className={`grid items-start gap-10 lg:grid-cols-2 ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}
          >
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
                <img src={b.image} alt={b.title} loading="lazy" width={1280} height={960} className="aspect-[5/4] h-full w-full object-cover" />
              </div>
              <div className="absolute -bottom-5 left-6 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background">
                {b.tag}
              </div>
            </div>
            <div>
              <h2 className="text-display text-3xl text-foreground sm:text-4xl lg:text-5xl">{b.title}</h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">{b.intro}</p>
              <div className="mt-8 space-y-6">
                {b.groups.map((g) => (
                  <div key={g.label}>
                    <p className="eyebrow text-foreground">{g.label}</p>
                    <ul className="mt-3 space-y-2">
                      {g.bullets.map((bl) => (
                        <li key={bl} className="flex items-start gap-3">
                          <span className="mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                            <Check size={10} strokeWidth={3} />
                          </span>
                          <span className="text-sm text-muted-foreground">{bl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>
    </SiteLayout>
  );
}

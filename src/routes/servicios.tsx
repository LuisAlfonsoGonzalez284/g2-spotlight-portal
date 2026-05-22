import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Check } from "lucide-react";
import training from "@/assets/service-training.jpg";
import psycho from "@/assets/service-psychometric.jpg";
import consult from "@/assets/service-consulting.jpg";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — G2 Capacitación, Pruebas Psicométricas y Consultoría TI" },
      { name: "description", content: "Capacitación corporativa, tecnología para pruebas psicométricas y consultoría en sistemas de información." },
      { property: "og:title", content: "Servicios — G2" },
      { property: "og:description", content: "Capacitación, pruebas psicométricas y consultoría TI." },
    ],
  }),
  component: Servicios,
});

const blocks = [
  {
    tag: "01 · Capacitación",
    title: "Programas in-house y abiertos para equipos que aprenden rápido.",
    image: training,
    bullets: [
      "Buenas prácticas en TIC",
      "IT Frameworks (ITIL, COBIT, TOGAF)",
      "Metodologías de proyectos y gestión",
      "DB performance y administración",
      "Inteligencia Artificial y sus componentes",
    ],
  },
  {
    tag: "02 · Pruebas Psicométricas",
    title: "Tecnología para evaluar talento con datos confiables y sin sesgo.",
    image: psycho,
    bullets: [
      "Selección de personal basada en competencias reales",
      "Reducción de rotación prediciendo desempeño",
      "Planes de capacitación y promoción interna",
      "Estructuración de equipos equilibrados",
    ],
  },
  {
    tag: "03 · Consultoría TI",
    title: "Convertimos la tecnología en una ventaja competitiva.",
    image: consult,
    bullets: [
      "Diagnóstico e implementación de Sistemas de Información",
      "Modelos de control de TI",
      "Planeamiento estratégico de la función informática",
      "Diseño de soluciones tecnológicas",
      "Auditoría de Sistemas de Información",
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
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Combinamos formación, evaluación de talento y consultoría para resolver retos
          reales de negocio.
        </p>
      </section>

      <section className="container-x space-y-24 pb-24">
        {blocks.map((b, i) => (
          <article
            key={b.tag}
            className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}
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
              <ul className="mt-8 space-y-3">
                {b.bullets.map((bl) => (
                  <li key={bl} className="flex items-start gap-3 text-foreground">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span className="text-base text-muted-foreground">{bl}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </SiteLayout>
  );
}

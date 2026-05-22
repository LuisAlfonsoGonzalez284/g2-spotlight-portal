import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Target, Heart, Zap } from "lucide-react";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros — G2 Capacitación" },
      { name: "description", content: "G2 es una entidad facilitadora de iniciativas y programas novedosos apoyados en tecnología de la información." },
      { property: "og:title", content: "Nosotros — G2" },
      { property: "og:description", content: "Comprometidos con la excelencia, transformando conocimiento en riqueza." },
    ],
  }),
  component: Nosotros,
});

const values = [
  { icon: Target, title: "Propósito", desc: "Convertir el conocimiento en una ventaja competitiva real para cada cliente." },
  { icon: Heart, title: "Compromiso", desc: "Excelencia operativa en cada programa, propuesta y entrega." },
  { icon: Zap, title: "Innovación", desc: "Tecnología, IA y nuevas metodologías al servicio de tu organización." },
];

function Nosotros() {
  return (
    <SiteLayout>
      <section className="container-x pt-20 pb-12 md:pt-28">
        <p className="eyebrow">Nosotros</p>
        <h1 className="text-display mt-4 max-w-4xl text-5xl text-foreground sm:text-6xl lg:text-7xl">
          Una entidad facilitadora de <span className="italic text-primary">transformación digital</span>.
        </h1>
      </section>

      <section className="container-x grid gap-12 pb-20 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            <span className="font-semibold text-foreground">G2</span> es una entidad facilitadora de
            iniciativas, programas y propuestas novedosas apoyadas en el uso de la
            tecnología de la información.
          </p>
          <p>
            Estos programas han motivado el interés empresarial en mejorar su
            productividad, han fortalecido el empoderamiento social y han contribuido a
            la transformación digital del país.
          </p>
          <p>
            Estamos comprometidos con la excelencia en cada uno de nuestros servicios,
            siendo el espacio de formación y desarrollo del talento humano de las
            empresas — desde donde transformamos el conocimiento en riqueza.
          </p>
        </div>
        <div className="grid gap-4">
          {values.map((v) => (
            <div key={v.title} className="surface-card flex gap-5 p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                <v.icon size={22} />
              </div>
              <div>
                <h3 className="text-display text-xl text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

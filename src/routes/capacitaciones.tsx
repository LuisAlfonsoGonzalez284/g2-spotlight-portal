import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { CalendarOff } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/capacitaciones")({
  head: () => ({
    meta: [
      { title: "Capacitaciones — Calendario G2" },
      { name: "description", content: "Calendario de capacitaciones G2. Filtra por evento y modalidad (presencial o en línea)." },
      { property: "og:title", content: "Capacitaciones — G2" },
      { property: "og:description", content: "Calendario de capacitaciones G2." },
    ],
  }),
  component: Capacitaciones,
});

const eventFilters = ["Todos", "Próximos", "Pasados"] as const;
const modeFilters = ["Todos", "Presencial", "En Línea"] as const;

function Capacitaciones() {
  const [event, setEvent] = useState<(typeof eventFilters)[number]>("Todos");
  const [mode, setMode] = useState<(typeof modeFilters)[number]>("Todos");

  return (
    <SiteLayout>
      <section className="container-x pt-20 pb-8 md:pt-28">
        <p className="eyebrow">Capacitaciones</p>
        <h1 className="text-display mt-4 max-w-4xl text-5xl text-foreground sm:text-6xl lg:text-7xl">
          Calendario de <span className="italic text-primary">capacitaciones</span>.
        </h1>
      </section>

      <section className="container-x pb-24">
        <div className="surface-card grid gap-6 p-6 md:grid-cols-2 md:p-8">
          <FilterGroup
            label="Filtrar por Evento"
            options={eventFilters}
            value={event}
            onChange={(v) => setEvent(v as (typeof eventFilters)[number])}
          />
          <FilterGroup
            label="Filtrar por Modo"
            options={modeFilters}
            value={mode}
            onChange={(v) => setMode(v as (typeof modeFilters)[number])}
          />
        </div>

        <div className="mt-10 flex flex-col items-center justify-center rounded-3xl border border-dashed border-border bg-card p-16 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-muted-foreground">
            <CalendarOff size={24} />
          </div>
          <h3 className="text-display mt-6 text-2xl text-foreground">
            No hay capacitaciones que cumplan este criterio.
          </h3>
          <p className="mt-3 max-w-md text-sm text-muted-foreground">
            Próximamente publicaremos nuevas fechas. ¿Te interesa un programa a la
            medida para tu equipo?
          </p>
          <Link
            to="/contacto"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
          >
            Solicitar información
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}

function FilterGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: readonly string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <p className="eyebrow">{label}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o}
            onClick={() => onChange(o)}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              value === o
                ? "border-foreground bg-foreground text-background"
                : "border-border bg-background text-foreground hover:border-foreground"
            }`}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

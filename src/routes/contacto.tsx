import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — G2" },
      { name: "description", content: "Conversemos sobre tu próximo programa de capacitación o consultoría." },
      { property: "og:title", content: "Contacto — G2" },
      { property: "og:description", content: "Escríbenos para diseñar tu programa a la medida." },
    ],
  }),
  component: Contacto,
});

function Contacto() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <section className="container-x grid gap-16 pt-20 pb-24 md:pt-28 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="eyebrow">Contacto</p>
          <h1 className="text-display mt-4 text-5xl text-foreground sm:text-6xl">
            Diseñemos tu próximo <span className="italic text-primary">programa</span>.
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Cuéntanos sobre tu organización y los retos que quieres resolver. Te
            responderemos en menos de 24 horas.
          </p>
          <ul className="mt-10 space-y-5 text-sm">
            <li className="flex items-center gap-3"><Mail size={18} className="text-primary" /> info@g2.com.do</li>
            <li className="flex items-center gap-3"><Phone size={18} className="text-primary" /> +1 (809) 000-0000</li>
            <li className="flex items-center gap-3"><MapPin size={18} className="text-primary" /> Santo Domingo, República Dominicana</li>
          </ul>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="surface-card grid gap-5 p-8 md:p-10"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Nombre" name="nombre" />
            <Field label="Empresa" name="empresa" />
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Correo" name="email" type="email" />
            <Field label="Teléfono" name="tel" />
          </div>
          <div>
            <label className="eyebrow">Mensaje</label>
            <textarea
              required
              rows={5}
              className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-foreground"
              placeholder="Cuéntanos sobre tu proyecto…"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition hover:opacity-90"
          >
            {sent ? "¡Mensaje enviado!" : (<>Enviar mensaje <Send size={16} /></>)}
          </button>
        </form>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-foreground"
      />
    </div>
  );
}

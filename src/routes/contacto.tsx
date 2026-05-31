import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Mail, MapPin, Phone, Send, Smartphone } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — G2" },
      { name: "description", content: "Sucursales en Santo Domingo y Santiago. Escríbenos a info@g2.com.do o llámanos al (809) 701-6092." },
      { property: "og:title", content: "Contacto — G2" },
      { property: "og:description", content: "Escríbenos o visítanos en Santo Domingo y Santiago." },
    ],
  }),
  component: Contacto,
});

const sucursales = [
  {
    city: "Santo Domingo",
    address: "Calle Roberto Pastoriza #706, Evaristo Morales.",
    region: "Santo Domingo, República Dominicana.",
    tel: "+1 (809) 701-6092",
    telHref: "tel:8097016092",
  },
  {
    city: "Santiago",
    address: "Calle Onésimo Jiménez. 58, Central Work – Plaza Camelia, 2do nivel, local C2.",
    region: "Santiago de los Caballeros 51102, República Dominicana.",
    tel: "+1 (809) 701-6092",
    telHref: "tel:8097016092",
  },
  {
    city: "Punta Cana",
    address: "Cormont Plaza II, Blvd. Turístico del Este.",
    region: "Punta Cana 23302, República Dominicana.",
    tel: "+1 (809) 701-6092",
    telHref: "tel:8097016092",
  },
];

function Contacto() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <section className="container-x pt-20 pb-12 md:pt-28">
        <p className="eyebrow">Contacto</p>
        <h1 className="text-display mt-4 max-w-4xl text-5xl text-foreground sm:text-6xl lg:text-7xl">
          Conversemos sobre tu próximo <span className="italic text-primary">programa</span>.
        </h1>
      </section>

      <section className="container-x pb-12">
        <p className="eyebrow">Sucursales</p>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {sucursales.map((s) => (
            <div key={s.city} className="surface-card p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary">
                  <MapPin size={18} />
                </span>
                <h3 className="text-display text-2xl text-foreground">{s.city}</h3>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{s.address}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.region}</p>
              <a
                href={s.telHref}
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                <Phone size={14} /> {s.tel}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x grid gap-12 pb-24 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="eyebrow">Teléfonos</p>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Phone size={18} className="mt-0.5 text-primary" />
              <span>
                <span className="block font-medium text-foreground">Central telefónica</span>
                <a href="tel:8097016092" className="text-muted-foreground hover:text-foreground">(809) 701-6092</a>
                <span className="text-muted-foreground"> / </span>
                <a href="tel:8097016095" className="text-muted-foreground hover:text-foreground">(809) 701-6095</a>
                <span className="block text-xs text-muted-foreground">Extensiones Santo Domingo: 100, 102–110, 112, 113 · Santiago: 200–204</span>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Smartphone size={18} className="mt-0.5 text-primary" />
              <span>
                <span className="block font-medium text-foreground">Celulares de soporte</span>
                <a href="tel:8492682066" className="text-muted-foreground hover:text-foreground">(849) 268-2066</a>
                <span className="text-muted-foreground"> / </span>
                <a href="tel:8492610028" className="text-muted-foreground hover:text-foreground">(849) 261-0028</a>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={18} className="mt-0.5 text-primary" />
              <span>
                <span className="block font-medium text-foreground">Email</span>
                <a href="mailto:info@g2.com.do" className="text-muted-foreground hover:text-foreground">info@g2.com.do</a>
              </span>
            </li>
          </ul>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="surface-card grid gap-5 p-8 md:p-10"
        >
          <div>
            <p className="eyebrow">Envíanos un mensaje</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Escríbenos al correo{" "}
              <a href="mailto:info@g2.com.do" className="text-primary hover:underline">
                info@g2.com.do
              </a>{" "}
              o contáctanos a través de este formulario.
            </p>
          </div>
          <Field label="Nombre" name="nombre" />
          <Field label="Email" name="email" type="email" />
          <Field label="Asunto" name="asunto" />
          <div>
            <label className="eyebrow">Mensaje</label>
            <textarea
              required
              rows={5}
              className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-foreground"
              placeholder="Escribe tu mensaje…"
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

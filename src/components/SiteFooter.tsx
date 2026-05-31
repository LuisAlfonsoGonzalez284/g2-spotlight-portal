import { Link } from "@tanstack/react-router";
import logo from "@/assets/g2-logo.png";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border bg-[color:var(--color-ink)] text-background">
      <div className="container-x grid gap-12 py-20 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="G2" className="h-12 w-auto rounded-md bg-white p-1.5" />
            <span className="text-display text-xl text-background">G2 Capacitación</span>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-background/70">
            Transformamos el conocimiento en riqueza. Capacitación, consultoría y
            tecnología para acelerar la transformación digital de tu organización.
          </p>
        </div>
        <div>
          <p className="eyebrow text-background/60">Empresa</p>
          <ul className="mt-4 space-y-2 text-sm text-background/80">
            <li><Link to="/nosotros" className="hover:text-accent">Nosotros</Link></li>
            <li><Link to="/servicios" className="hover:text-accent">Servicios</Link></li>
            <li><Link to="/capacitaciones" className="hover:text-accent">Capacitaciones</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow text-background/60">Servicios</p>
          <ul className="mt-4 space-y-2 text-sm text-background/80">
            <li>Capacitación</li>
            <li>Pruebas Psicométricas</li>
            <li>Consultoría</li>
            <li>Auditoría de Sistemas</li>

          </ul>
        </div>
        <div>
          <p className="eyebrow text-background/60">Contacto</p>
          <ul className="mt-4 space-y-2 text-sm text-background/80">
            <li>Santo Domingo · Santiago · Punta Cana</li>
            <li><a href="tel:8097016092" className="hover:text-accent">(809) 701-6092</a></li>
            <li><a href="mailto:info@g2.com.do" className="hover:text-accent">info@g2.com.do</a></li>
            <li><Link to="/contacto" className="text-accent hover:underline">Escríbenos →</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-background/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} G2. Todos los derechos reservados.</p>
          <p>Conocimiento → Riqueza</p>
        </div>
      </div>
    </footer>
  );
}

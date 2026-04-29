import Link from "next/link";
import { navigation, siteMeta } from "../_data/site-content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="footer-shell">
          <div className="footer-hero">
            <div className="footer-hero__copy">
              <p className="footer-label">Bruma</p>
              <p className="footer-tagline">{siteMeta.tagline}</p>
            </div>
            <div className="footer-hero__actions">
              <a
                className="button-primary button-primary-light"
                href={siteMeta.whatsapp}
              >
                Reservar mesa
              </a>
              <Link
                className="button-secondary button-secondary-dark"
                href="/contato"
              >
                Contato
              </Link>
            </div>
          </div>

          <div className="footer-info">
            <div className="footer-column">
              <p className="footer-label">Navegação</p>
              <nav className="footer-nav" aria-label="Navegação do rodapé">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="footer-link"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="footer-column footer-column--info">
              <p className="footer-label">Contato</p>
              <address className="footer-contact">
                <span>{siteMeta.address}</span>
                <span>{siteMeta.hours}</span>
                <a className="footer-link" href={`tel:${siteMeta.phone}`}>
                  {siteMeta.phone}
                </a>
                <a className="footer-link" href={`mailto:${siteMeta.email}`}>
                  {siteMeta.email}
                </a>
                <a className="footer-link" href={siteMeta.instagram}>
                  Instagram
                </a>
              </address>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              © 2026 Criado e desenvolvido por{" "}
              <strong>WebLuma Tecnologia LTDA</strong>. Todos os direitos
              reservados.
            </p>
            <p>
              Consultoria financeira estratégica para empresas, ao vivo e
              online.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

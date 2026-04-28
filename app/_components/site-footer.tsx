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
              <h2>
                Um lugar para vinho, cozinha sazonal e noites que se estendem.
              </h2>
              <p>
                Um encerramento direto, com presença de marca e caminhos claros
                para reserva, contato e visita.
              </p>
            </div>
            <div className="footer-hero__actions">
              <a
                className="button-primary button-primary-light"
                href={siteMeta.whatsapp}
              >
                Reservar uma mesa
              </a>
              <Link
                className="button-secondary button-secondary-dark"
                href="/contato"
              >
                Entrar em contato
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
                <Link href="/contato#reserva-form" className="footer-link">
                  Reservar
                </Link>
              </nav>
            </div>

            <div className="footer-column footer-column--info">
              <p className="footer-label">Informações</p>
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
              Bruma · presença institucional para reservas, contato e visita.
            </p>
            <p>{siteMeta.tagline}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

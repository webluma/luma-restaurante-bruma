import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  galleryImages,
  menuSections,
  siteMeta,
  wineSelections,
} from "../_data/site-content";

export const metadata: Metadata = {
  title: "Bruma | Menu",
  description:
    "Consulte o menu da estação do Bruma: pequenos pratos, principais, finalizações e seleção de vinhos.",
};

export default function MenuPage() {
  const allItems = menuSections.flatMap((section) =>
    section.items.map((item) => ({ ...item, section: section.name })),
  );
  const featuredItems = allItems.filter((item) => item.seasonal).slice(0, 3);

  return (
    <main className="menu-page bg-[var(--color-cream)] text-[var(--color-ink)]">
      <section className="menu-cover">
        <div className="menu-cover__copy">
          <p className="home-kicker">Menu da estação</p>
          <h1>Uma carta curta. Um ritmo de mesa.</h1>
          <p>
            Pratos de mercado, vinho escolhido sem pressa e uma cozinha que muda
            conforme a estação.
          </p>
          <div className="home-hero__actions">
            <a className="button-primary" href="#carta">
              Ver carta
            </a>
            <Link className="button-secondary" href="/contato#reserva-form">
              Reservar mesa
            </Link>
          </div>
        </div>
        <div className="menu-cover__visual">
          <Image
            src={galleryImages[1].src}
            alt={galleryImages[1].alt}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 46vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="menu-season">
        <div>
          <p className="home-kicker">Da estação</p>
          <h2>Três pontos de partida para a noite.</h2>
        </div>
        <div className="menu-season__grid">
          {featuredItems.map((item) => (
            <article key={item.title}>
              <div className="menu-season__image">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
              <span>{item.section}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="carta" className="menu-ledger" aria-label="Carta do Bruma">
        <div className="menu-ledger__intro">
          <p className="home-kicker">Carta</p>
          <h2>Escolhas enxutas, leitura clara.</h2>
          <p>O menu pode variar conforme mercado, safra e disponibilidade.</p>
        </div>
        <div className="menu-ledger__sections">
          {menuSections.map((section) => (
            <section key={section.name} className="menu-ledger__section">
              <h3>{section.name}</h3>
              <div className="menu-ledger__items">
                {section.items.map((item) => (
                  <article key={item.title} className="menu-ledger__item">
                    <div>
                      <div className="menu-ledger__title">
                        <h4>{item.title}</h4>
                        {item.seasonal ? <span>Estação</span> : null}
                      </div>
                      <p>{item.detail}</p>
                    </div>
                    <strong>R$ {item.price}</strong>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="menu-wine">
        <div className="menu-wine__image">
          <Image
            src={galleryImages[3].src}
            alt={galleryImages[3].alt}
            fill
            sizes="(max-width: 900px) 100vw, 38vw"
            className="object-cover"
          />
        </div>
        <div className="menu-wine__copy">
          <p className="home-kicker">Vinhos</p>
          <h2>Uma carta viva, curta e gastronômica.</h2>
          <div className="menu-wine__list">
            {wineSelections.map((item) => (
              <article key={item.label}>
                <span>{item.label}</span>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <a className="button-primary" href={siteMeta.whatsapp}>
            Perguntar sobre a carta
          </a>
        </div>
      </section>
      <section className="contact-visit">
        <div className="contact-visit__copy">
          <h2>Batel, Curitiba.</h2>
          <p>{siteMeta.address}</p>
          <div className="contact-visit__links">
            <a href={`tel:${siteMeta.phone}`}>{siteMeta.phone}</a>
            <a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a>
            <a href={siteMeta.instagram}>Instagram</a>
          </div>
          <Link className="button-secondary" href="/menu">
            Ver menu
          </Link>
        </div>
        <div className="contact-visit__map">
          <iframe
            title="Mapa de localização do Bruma"
            src={siteMeta.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  );
}

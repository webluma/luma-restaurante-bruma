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
  const featuredItem = menuSections[1].items[0];

  return (
    <main className="subpage bg-[var(--color-cream)] text-[var(--color-ink)]">
      <section className="page-hero page-hero--menu">
        <Image
          src={galleryImages[1].src}
          alt={galleryImages[1].alt}
          fill
          priority
          sizes="100vw"
          className="page-hero__image"
        />
        <div className="page-hero__shade" />
        <div className="page-hero__content">
          <p className="home-kicker">Menu da estação</p>
          <h1>Uma carta curta para escolher com calma.</h1>
          <p>
            Pratos de mercado, vinhos de textura e uma leitura clara do que vale
            pedir agora.
          </p>
          <div className="home-hero__actions">
            <Link className="button-primary" href="/contato#reserva-form">
              Reservar mesa
            </Link>
            <a className="button-secondary button-secondary-dark" href="#menu-lista">
              Ver pratos
            </a>
          </div>
        </div>
      </section>

      <section className="menu-note" aria-label="Nota sobre sazonalidade">
        <span>Menu sujeito à estação</span>
        <span>Pequenos lotes de mercado</span>
        <span>Carta viva de vinhos</span>
      </section>

      <section className="menu-featured">
        <div className="menu-featured__copy">
          <p className="home-kicker">Destaque</p>
          <h2>{featuredItem.title}</h2>
          <p>{featuredItem.detail}</p>
        </div>
        <div className="menu-featured__image">
          <Image
            src={featuredItem.image}
            alt={featuredItem.title}
            fill
            sizes="(max-width: 900px) 100vw, 42vw"
            className="object-cover"
          />
        </div>
      </section>

      <section id="menu-lista" className="menu-board" aria-label="Menu completo">
        {menuSections.map((section) => (
          <section key={section.name} className="menu-board__section">
            <div className="menu-board__head">
              <p className="home-kicker">Categoria</p>
              <h2>{section.name}</h2>
            </div>
            <div className="menu-list">
              {section.items.map((item) => (
                <article key={item.title} className="menu-entry">
                  <div className="menu-entry__image">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 900px) 100vw, 180px"
                      className="object-cover"
                    />
                  </div>
                  <div className="menu-entry__content">
                    <div className="menu-entry__title">
                      <h3>{item.title}</h3>
                      {item.seasonal ? (
                        <span className="season-badge">Da estação</span>
                      ) : null}
                    </div>
                    <p>{item.detail}</p>
                  </div>
                  <p className="menu-price">R$ {item.price}</p>
                </article>
              ))}
            </div>
          </section>
        ))}
      </section>

      <section className="wine-editorial">
        <div>
          <p className="home-kicker">Carta de vinhos</p>
          <h2>Taças e garrafas para prolongar a conversa.</h2>
        </div>
        <div className="wine-editorial__list">
          {wineSelections.map((item) => (
            <article key={item.label}>
              <span>{item.label}</span>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="subpage-cta">
        <div>
          <p className="home-kicker">Reserva</p>
          <h2>Consulte o menu da estação à mesa.</h2>
        </div>
        <div className="subpage-cta__actions">
          <Link className="button-primary" href="/contato#reserva-form">
            Reservar agora
          </Link>
          <a className="button-secondary" href={siteMeta.whatsapp}>
            Falar com a casa
          </a>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ReviewCarousel } from "./_components/review-carousel";
import {
  clientReviews,
  credibilityItems,
  galleryImages,
  heroImages,
  homeMenuHighlights,
  reservations,
  siteMeta,
} from "./_data/site-content";

export const metadata: Metadata = {
  title: "Bruma | Início",
  description:
    "Conheça Bruma: vinho, cozinha sazonal e encontros sem pressa em uma atmosfera intimista e memorável.",
};

export default function HomePage() {
  return (
    <main className="home-page bg-[var(--color-cream)] text-[var(--color-ink)]">
      <section id="top" className="home-hero">
        <Image
          src={heroImages[0].src}
          alt={heroImages[0].alt}
          fill
          priority
          sizes="100vw"
          className="home-hero__image"
        />
        <div className="home-hero__shade" />
        <div className="home-hero__mist" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="home-hero__content">
          <p className="home-kicker">Wine bar · cozinha sazonal · Curitiba</p>
          <h1>Bruma</h1>
          <p className="home-hero__copy">
            Vinho, pratos de estação e encontros sem pressa.
          </p>
          <div className="home-hero__actions">
            <Link className="button-primary" href="/contato#reserva-form">
              Reservar mesa
            </Link>
            <Link className="button-secondary button-secondary-dark" href="/menu">
              Ver menu
            </Link>
          </div>
        </div>
        <div className="home-hero__foot">
          <span>Qua a dom · 18h</span>
          <span>Batel · Curitiba</span>
          <span>Mesas limitadas</span>
        </div>
      </section>

      <section className="home-strip" aria-label="Credenciais do Bruma">
        {credibilityItems.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </section>

      <section className="home-statement">
        <div>
          <p className="home-kicker">Conceito</p>
          <h2>
            Uma casa pequena, quente e precisa.
          </h2>
        </div>
        <div className="home-statement__aside">
          <p>
            A experiência acontece no intervalo entre a taça, o prato e a pausa.
          </p>
          <span>Luz baixa</span>
          <span>Cozinha sazonal</span>
          <span>Conversa sem pressa</span>
        </div>
      </section>

      <section className="home-senses">
        <div>
          <p className="home-kicker">Vinho</p>
          <h3>Carta curta. Escolhas vivas.</h3>
        </div>
        <div>
          <p className="home-kicker">Cozinha</p>
          <h3>Estação, textura e calor.</h3>
        </div>
        <div>
          <p className="home-kicker">Tempo</p>
          <h3>Uma noite para ficar.</h3>
        </div>
      </section>

      <section className="home-menu-feature">
        <div className="home-menu-feature__media">
          <Image
            src={galleryImages[1].src}
            alt={galleryImages[1].alt}
            fill
            sizes="(max-width: 900px) 100vw, 48vw"
            className="object-cover"
          />
        </div>
        <div className="home-menu-feature__content">
          <p className="home-kicker">Menu da estação</p>
          <h2>Pratos que mudam com o mercado. Vinhos que prolongam a conversa.</h2>
          <div className="home-menu-list">
            {homeMenuHighlights.map((item) => (
              <article key={item.title}>
                <span>{item.course}</span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
          <Link className="button-primary button-primary-light" href="/menu">
            Consultar menu
          </Link>
        </div>
      </section>

      <section className="home-atmosphere">
        <div className="home-atmosphere__intro">
          <p className="home-kicker">Atmosfera</p>
          <h2>Luz baixa, mesa próxima, conversa longa.</h2>
        </div>
        <div className="home-atmosphere__grid">
          {galleryImages.slice(0, 4).map((image) => (
            <figure key={image.src}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 900px) 50vw, 25vw"
                className="object-cover"
              />
              <figcaption>{image.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="home-reviews">
        <div className="home-reviews__intro">
          <p className="home-kicker">Avaliações</p>
          <h2>Noites lembradas pela luz, pela mesa e pela calma.</h2>
        </div>
        <ReviewCarousel reviews={clientReviews} />
      </section>

      <section className="home-reserve">
        <div className="home-reserve__heading">
          <p className="home-kicker">Reservas</p>
          <h2>Uma mesa para chegar devagar.</h2>
        </div>
        <div className="home-reserve__details">
          <dl>
            {reservations.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
          <Link className="button-primary" href="/contato#reserva-form">
            Solicitar reserva
          </Link>
        </div>
        <div className="home-reserve__map" aria-label="Localização do Bruma em Curitiba">
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

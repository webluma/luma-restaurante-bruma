import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ReviewCarousel } from "./_components/review-carousel";
import {
  clientReviews,
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
      <section id="top" className="home-cover">
        <div className="home-cover__copy">
          <p className="home-kicker">Wine bar · cozinha sazonal · Curitiba</p>
          <h1>Bruma</h1>
          <p>
            Uma casa para chegar devagar, escolher bem e ficar um pouco mais.
          </p>
          <div className="home-hero__actions">
            <Link className="button-primary" href="/contato#reserva-form">
              Reservar mesa
            </Link>
            <Link className="button-secondary" href="/menu">
              Ver menu
            </Link>
          </div>
        </div>
        <div className="home-cover__visual">
          <Image
            src={heroImages[0].src}
            alt={heroImages[0].alt}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 52vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="home-manifesto">
        <div>
          <p className="home-kicker">Conceito</p>
          <h2>Entre a taça, o prato e a pausa.</h2>
        </div>
        <p>
          Bruma existe para noites de luz baixa, cozinha de estação e conversas
          que não precisam terminar cedo.
        </p>
      </section>

      <section className="home-about">
        <div className="home-about__media">
          <Image
            src={heroImages[1].src}
            alt={heroImages[1].alt}
            fill
            sizes="(max-width: 900px) 100vw, 38vw"
            className="object-cover"
          />
        </div>
        <div className="home-about__copy">
          <div className="home-about__heading">
            <p className="home-kicker">Sobre o restaurante</p>
            <h2>Uma casa pequena, feita para noites que amadurecem à mesa.</h2>
          </div>
          <div className="home-about__text">
            <p>
              Bruma nasce da ideia de um restaurante sem pressa: carta curta,
              cozinha sazonal e um salão íntimo onde a luz, o serviço e o vinho
              conduzem a experiência com discrição.
            </p>
            <p>
              A proposta é autoral, mas direta. Poucas escolhas, bons encontros
              e uma atmosfera pensada para fazer o tempo desacelerar.
            </p>
          </div>
        </div>
      </section>

      <section className="home-table-note">
        <div>
          <p className="home-kicker">À mesa</p>
          <h2>O ritmo da noite é parte do menu.</h2>
        </div>
        <div className="home-table-note__list">
          <p>
            <span></span>
            Uma carta curta para escolher sem ruído.
          </p>
          <p>
            <span></span>
            Pratos que acompanham mercado, clima e estação.
          </p>
          <p>
            <span></span>
            Serviço atento, luz baixa e tempo para permanecer.
          </p>
        </div>
      </section>

      <section className="home-carte">
        <div className="home-carte__image">
          <Image
            src={galleryImages[1].src}
            alt={galleryImages[1].alt}
            fill
            sizes="(max-width: 900px) 100vw, 42vw"
            className="object-cover"
          />
        </div>
        <div className="home-carte__copy">
          <p className="home-kicker">Menu da estação</p>
          <h2>Pratos de mercado, feitos para acompanhar a taça.</h2>
          <div className="home-carte__list">
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

      <section className="home-salon">
        <div className="home-salon__intro">
          <p className="home-kicker">Atmosfera</p>
          <h2>Luz baixa, mesa próxima, conversa longa.</h2>
        </div>
        <div className="home-salon__grid">
          {galleryImages.slice(0, 5).map((image) => (
            <figure key={image.src}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 900px) 50vw, 24vw"
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

      <section className="home-booking">
        <div className="home-booking__copy">
          <p className="home-kicker">Reservas</p>
          <h2>Uma mesa para chegar devagar.</h2>
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
        <div
          className="home-booking__map"
          aria-label="Localização do Bruma em Curitiba"
        >
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

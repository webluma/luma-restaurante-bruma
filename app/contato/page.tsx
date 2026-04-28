import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { contactHighlights, galleryImages, siteMeta } from "../_data/site-content";

export const metadata: Metadata = {
  title: "Bruma | Contato",
  description:
    "Entre em contato com o Bruma para reservas, visitas, celebrações intimistas e localização.",
};

export default function ContactPage() {
  return (
    <main className="subpage bg-[var(--color-cream)] text-[var(--color-ink)]">
      <section className="page-hero page-hero--contact">
        <Image
          src={galleryImages[5].src}
          alt={galleryImages[5].alt}
          fill
          priority
          sizes="100vw"
          className="page-hero__image"
        />
        <div className="page-hero__shade" />
        <div className="page-hero__content">
          <p className="home-kicker">Contato</p>
          <h1>Reserve uma noite sem pressa.</h1>
          <p>
            Fale com a casa para reservas, encontros à mesa ou celebrações
            intimistas.
          </p>
          <div className="home-hero__actions">
            <a className="button-primary" href={siteMeta.whatsapp}>
              WhatsApp
            </a>
            <a className="button-secondary button-secondary-dark" href="#reserva-form">
              Formulário
            </a>
          </div>
        </div>
      </section>

      <section className="contact-strip" aria-label="Caminhos de contato">
        {contactHighlights.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </section>

      <section className="contact-reserve">
        <form id="reserva-form" className="contact-form-shell">
          <div className="contact-form-shell__head">
            <p className="home-kicker">Solicitação</p>
            <h2>Conte o essencial. A casa confirma pelo WhatsApp.</h2>
          </div>
          <div className="contact-form-grid">
            <label className="field">
              <span>Nome</span>
              <input type="text" name="name" placeholder="Seu nome" />
            </label>
            <label className="field">
              <span>E-mail</span>
              <input type="email" name="email" placeholder="voce@email.com" />
            </label>
            <label className="field">
              <span>Telefone</span>
              <input type="tel" name="phone" placeholder="(11) 99999-9999" />
            </label>
            <label className="field">
              <span>Data desejada</span>
              <input type="date" name="date" />
            </label>
            <label className="field">
              <span>Número de pessoas</span>
              <input type="number" min="1" max="12" name="guests" placeholder="2" />
            </label>
            <label className="field field--wide">
              <span>Mensagem ou observação</span>
              <textarea
                name="message"
                rows={5}
                placeholder="Celebração, preferência de mesa ou restrição alimentar."
              />
            </label>
          </div>
          <div className="contact-form-shell__foot">
            <p>Reservas para 2 a 8 pessoas · retorno em horário comercial.</p>
            <button className="button-primary" type="submit">
              Enviar solicitação
            </button>
          </div>
        </form>

        <aside className="contact-details" aria-label="Informações do Bruma">
          <div>
            <p className="home-kicker">Endereço</p>
            <h2>{siteMeta.address}</h2>
          </div>
          <dl>
            <div>
              <dt>Horários</dt>
              <dd>{siteMeta.hours}</dd>
            </div>
            <div>
              <dt>Telefone</dt>
              <dd>
                <a href={`tel:${siteMeta.phone}`}>{siteMeta.phone}</a>
              </dd>
            </div>
            <div>
              <dt>E-mail</dt>
              <dd>
                <a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a>
              </dd>
            </div>
            <div>
              <dt>Instagram</dt>
              <dd>
                <a href={siteMeta.instagram}>@bruma</a>
              </dd>
            </div>
          </dl>
        </aside>
      </section>

      <section className="contact-location">
        <div className="contact-location__copy">
          <p className="home-kicker">Localização</p>
          <h2>Batel, Curitiba.</h2>
          <p>Uma casa pequena, reservada e fácil de encontrar.</p>
          <Link className="button-secondary" href={siteMeta.whatsapp}>
            Reservar pelo WhatsApp
          </Link>
        </div>
        <div className="contact-location__map">
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

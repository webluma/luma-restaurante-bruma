import type { Metadata } from "next";
import Link from "next/link";
import { reservations, siteMeta } from "../_data/site-content";

export const metadata: Metadata = {
  title: "Bruma | Contato",
  description:
    "Entre em contato com o Bruma para reservas, visitas, celebrações intimistas e localização.",
};

export default function ContactPage() {
  return (
    <main className="contact-page bg-[var(--color-cream)] text-[var(--color-ink)]">
      <section className="contact-cover">
        <div className="contact-cover__copy">
          <h1>Fale com o Bruma.</h1>
        </div>
        <div className="contact-cover__summary">
          <p>
            Reservas, visitas e encontros pequenos em uma casa feita para chegar
            sem pressa.
          </p>
          <div className="home-hero__actions">
            <a className="button-primary" href={siteMeta.whatsapp}>
              WhatsApp
            </a>
            <a className="button-secondary" href="#reserva-form">
              Enviar pedido
            </a>
          </div>
        </div>
      </section>

      <section className="contact-booking">
        <aside className="contact-booking__aside">
          <p className="home-kicker">Antes da visita</p>
          <h2>O essencial para reservar.</h2>
          <dl>
            {reservations.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </aside>

        <form id="reserva-form" className="contact-booking__form">
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
            <input type="tel" name="phone" placeholder="(41) 00000-0000" />
          </label>
          <label className="field">
            <span>Data desejada</span>
            <input type="date" name="date" />
          </label>
          <label className="field">
            <span>Pessoas</span>
            <input
              type="number"
              min="1"
              max="12"
              name="guests"
              placeholder="2"
            />
          </label>
          <label className="field field--wide">
            <span>Observação</span>
            <textarea
              name="message"
              rows={5}
              placeholder="Preferência de mesa, celebração ou restrição alimentar."
            />
          </label>
          <div className="contact-booking__submit">
            <p>Confirmação feita por WhatsApp em horário comercial.</p>
            <button className="button-primary" type="submit">
              Solicitar reserva
            </button>
          </div>
        </form>
      </section>

      <section className="contact-visit">
        <div className="contact-visit__copy">
          <p className="home-kicker">Visita</p>
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

import Link from "next/link";
import { navigation } from "../_data/site-content";
import { MobileNavigation } from "./mobile-navigation";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-header__brand">
          Bruma
        </Link>
        <nav aria-label="Navegação principal" className="site-header__nav">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <a className="button-primary site-header__cta" href="/contato#reserva-form">
          Reservar
        </a>

        <MobileNavigation />
      </div>
    </header>
  );
}

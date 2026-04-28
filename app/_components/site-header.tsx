import Link from "next/link";
import { navigation } from "../_data/site-content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[color:rgba(20,15,13,0.72)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 sm:px-8 lg:px-12">
        <Link href="/" className="font-display text-3xl tracking-[0.08em] text-[var(--color-cream)]">
          Bruma
        </Link>
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-8 text-sm text-[color:rgba(245,238,228,0.7)] lg:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              className="transition-colors hover:text-[var(--color-cream)]"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a className="button-primary" href="/contato#reserva-form">
          Reservar
        </a>
      </div>
    </header>
  );
}

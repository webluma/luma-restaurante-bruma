"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { navigation } from "../_data/site-content";

export function MobileNavigation() {
  const pathname = usePathname();
  const detailsRef = useRef<HTMLDetailsElement>(null);

  function closeMenu() {
    if (detailsRef.current) {
      detailsRef.current.open = false;
    }
  }

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  return (
    <details ref={detailsRef} className="site-header__mobile">
      <summary aria-label="Abrir menu de navegação">
        <span />
        <span />
        <span />
      </summary>
      <div className="site-header__mobile-panel">
        {navigation.map((item) => (
          <Link key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </Link>
        ))}
        <a href="/contato#reserva-form" onClick={closeMenu}>
          Reservar
        </a>
      </div>
    </details>
  );
}

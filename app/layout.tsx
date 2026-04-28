import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { SiteFooter } from "./_components/site-footer";
import { SiteHeader } from "./_components/site-header";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bruma | Wine bar e cozinha sazonal",
    template: "%s",
  },
  description:
    "Bruma é um wine bar autoral com cozinha sazonal, atmosfera intimista e reservas pensadas para noites sem pressa.",
  keywords: [
    "wine bar",
    "restaurante autoral",
    "cozinha sazonal",
    "reserva restaurante",
    "bruma",
  ],
  openGraph: {
    title: "Bruma | Vinho, cozinha sazonal e encontros sem pressa",
    description:
      "Uma casa para chegar devagar, escolher bem e ficar um pouco mais.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${manrope.variable}`}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}

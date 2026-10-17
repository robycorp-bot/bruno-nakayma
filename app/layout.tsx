import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-editorial",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bruno Nakayma | Um espaço para vocês dois",
  description: "Terapia de casais com Bruno Nakayma. Um espaço de escuta e compreensão para reconstruir o diálogo, a intimidade e o companheirismo.",
  openGraph: {
    title: "Bruno Nakayma | Terapia de casais",
    description: "O amor também precisa de um novo espaço. Escuta, vínculo e reencontro.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${manrope.variable} ${instrumentSerif.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

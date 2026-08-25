import type { Metadata } from "next";
import { Montserrat, Cinzel } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "FAMOL MODA MASCULINA | Atendimento Exclusivo",
  description:
    "Escolha um de nossos especialistas para uma experiência personalizada e curadoria sob medida para o seu estilo na Famol Moda Masculina.",
  keywords: [
    "Famol",
    "Moda Masculina",
    "Famol Moda Masculina",
    "Alfaiataria",
    "Atendimento Exclusivo",
    "Privé",
    "Consultoria de Estilo",
  ],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${cinzel.variable} h-full antialiased dark`}
    >
      <body className="min-h-full bg-[#0a0a0c] text-[#f4f4f5] font-sans selection:bg-[#c5a059]/30 selection:text-[#f8f5ee] flex flex-col">
        {children}
      </body>
    </html>
  );
}

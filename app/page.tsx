"use client";

import Image from "next/image";
import Link from "next/link";

interface Consultant {
  id: string;
  name: string;
  role: string;
  image: string;
  phone: string;
}

const CONSULTANTS: Consultant[] = [
  {
    id: "vinicius",
    name: "VINICIUS",
    role: "CONSULTOR DE VENDAS",
    image: "/images/5.png",
    phone: "5588992763063",
  },
  // {
  //   id: "veronica",
  //   name: "VERÔNICA",
  //   role: "CONSULTORA DE VENDAS",
  //   image: "/images/3.png",
  //   phone: "5588994428993",
  // },
  // {
  //   id: "marlucia",
  //   name: "MARLÚCIA",
  //   role: "CONSULTORA DE VENDAS",
  //   image: "/images/2.png",
  //   phone: "5588994070679",
  // },
  // {
  //   id: "cheila",
  //   name: "CHEILA",
  //   role: "CONSULTORA DE VENDAS",
  //   image: "/images/4.png",
  //   phone: "5588992849558",
  // },
];

export default function ExclusiveServicePage() {
  const getWhatsAppLink = (consultant: Consultant) => {
    const text = encodeURIComponent(
      `Olá ${consultant.name}, gostaria de iniciar um atendimento Famol (${consultant.role.toLowerCase()}).`
    );
    return `https://api.whatsapp.com/send?phone=${consultant.phone}&text=${text}`;
  };

  const handleOpenWhatsApp = (consultant: Consultant) => {
    window.open(getWhatsAppLink(consultant), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-[#0d0d0f] text-white flex flex-col justify-between selection:bg-[#c5a059]/40 selection:text-white">
      {/* ----------------- TOP NAVBAR (LOGO CENTRALIZADA) ----------------- */}
      <header className="sticky top-0 z-40 w-full border-b border-white/[0.06] bg-[#0d0d0f]/90 backdrop-blur-md transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-20 flex items-center justify-center">
          {/* Brand Logo Centralizada */}
          <a
            href="#"
            aria-label="Famol Moda Masculina"
            className="flex items-center gap-2 px-3 py-1.5 rounded transition-all duration-200 hover:scale-105"
          >
            <div className="flex items-center gap-1.5 font-bold tracking-widest text-xs uppercase font-serif">
              {/* Crown Icon */}
              {/* <svg
                className="w-4 h-4 text-[#b89535]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z" />
              </svg>
              <span className="font-extrabold tracking-widest text-[13px] font-sans">
                famol
              </span> */}
              <Image src="/LOGO-MODAS-BCO.png" alt="Logo Famol" width={250} height={250} />
            </div>
          </a>
        </div>
      </header>

      {/* ----------------- MAIN CONTENT ----------------- */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20 flex flex-col items-center">
        {/* Header Hero Section */}
        <section className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 sm:mb-5 uppercase font-sans">
            ATENDIMENTO EXCLUSIVO
          </h1>
          <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-xl mx-auto px-2">
            Escolha um de nossos especialistas para uma experiência personalizada e curadoria sob medida para o seu estilo.
          </p>
        </section>

        {/* Consultants Grid */}
        <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {CONSULTANTS.map((consultant) => (
            <article
              key={consultant.id}
              className="group relative bg-[#131316] border border-white/[0.08] hover:border-[#c5a059]/40 transition-all duration-300 flex flex-col overflow-hidden shadow-2xl"
            >
              {/* Image Container with Dark Overlay */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-neutral-900">
                <Image
                  src={consultant.image}
                  alt={`Especialista ${consultant.name} - Famol Moda Masculina`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
                {/* Vignette / Bottom Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#131316] via-[#131316]/30 to-transparent pointer-events-none" />

                {/* Name & Role overlay positioned at bottom of image area */}
                <div className="absolute bottom-3 left-4 sm:bottom-4 sm:left-6 z-10">
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white uppercase drop-shadow-md">
                    {consultant.name}
                  </h2>
                  <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#c5a059] uppercase mt-0.5">
                    {consultant.role}
                  </p>
                </div>
              </div>

              {/* Bottom Card Panel with Action Button (Direct WhatsApp) */}
              <div className="p-4 sm:p-5 bg-[#131316] flex items-center justify-center border-t border-white/[0.04]">
                <a
                  href={getWhatsAppLink(consultant)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    handleOpenWhatsApp(consultant);
                  }}
                  className="w-full py-3.5 px-6 bg-white hover:bg-neutral-100 active:scale-[0.99] text-black font-bold text-xs tracking-[0.18em] uppercase transition-all duration-200 flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg group/btn cursor-pointer"
                >
                  {/* Chat Icon matching original */}
                  <svg
                    className="w-4 h-4 text-black group-hover/btn:translate-x-0.5 transition-transform"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    <line x1="8" y1="9" x2="16" y2="9" />
                    <line x1="8" y1="13" x2="13" y2="13" />
                  </svg>
                  <span>INICIAR ATENDIMENTO</span>
                </a>
              </div>
            </article>
          ))}
        </section>
      </main>

      {/* ----------------- FOOTER ----------------- */}
      <footer className="w-full border-t border-white/[0.06] bg-[#09090b] py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Footer Left: Brand Badge & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded text-white">
              {/* <svg
                className="w-3.5 h-3.5 text-[#b89535]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z" />
              </svg>
              <span className="font-bold tracking-widest text-[11px] uppercase font-sans">
                famol
              </span> */}
              <Image src="/LOGO-MODAS-BCO.png" alt="Logo Famol" width={100} height={100} />
            </div>
            <p className="text-[11px] sm:text-xs tracking-wider text-neutral-400 uppercase">
              © {new Date().getFullYear()} FAMOL MODA MASCULINA. PARA HOMENS E MENINOS COM ESTILO.
            </p>
          </div>

          {/* Footer Right: Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-[11px] sm:text-xs font-medium tracking-widest uppercase">
            <Link
              href="https://instagram.com/famolmodamasculina"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors duration-200"
            >
              Instagram
            </Link>
            <Link
              href="https://wa.me/5588992763063"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c5a059] hover:text-[#e5c07b] transition-colors duration-200 font-semibold"
            >
              Whatsapp
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

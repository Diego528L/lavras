"use client";

import Image from "next/image";
import {
  House,
  Leaf,
  User,
  MapPin,
  VenetianMask,
  Clapperboard,
  Phone,
  BookUser,
  Star,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import ConhecaModal from "../componentes/conhecaModal";
  

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans flex items-center justify-center w-full flex-col bg-white overflow-x-hidden">
      {/* HEADER */}
      <header className="w-full h-20 flex items-center justify-between px-4 lg:px-12 fixed top-0 left-0 bg-white z-50 shadow-md">
        <Image
          src="/logotransparentefundo.png"
          alt="Logo"
          width={64}
          height={64}
          className="object-contain"
        />

        {/* MENU DESKTOP */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-12">
          <a
            href="/"
            className="text-green-700 hover:text-800 text-lg font-bold  flex items-center gap-2"
          >
            <House size={20} />
            Início
          </a>

          <a
            href="/"
            className="text-green-700 hover:text-800 text-lg font-bold  flex items-center gap-2"
          >
            <Clapperboard size={20} />
            Conheça
          </a>

          <a
            href="/"
            className="text-green-700 hover:text-800 text-lg font-bold  flex items-center gap-2"
          >
            <VenetianMask size={20} />
            Cultura
          </a>

          <a
            href="/"
            className="text-green-700 hover:text-800 text-lg font-bold  flex items-center gap-2"
          >
            <Phone size={20} />
            Contato
          </a>

          <a
            href="/"
            className="text-green-700 hover:text-800 text-lg font-bold  flex items-center gap-2"
          >
            <BookUser size={20} />
            Sobre
          </a>
        </div>

        {/* LOGIN DESKTOP */}
        <a
          href="/login"
          className="hidden lg:flex px-8 py-3 bg-green-800 text-white rounded-full cursor-pointer items-center justify-center gap-2 hover:bg-green-900 transition-all duration-300"
        >
          <User size={20} />
          Login
        </a>

        {/* BOTÃO MOBILE */}
        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* MENU MOBILE */}
        {menuOpen && (
          <div className="absolute top-20 left-0 w-full bg-white shadow-lg flex flex-col items-center gap-6 py-8 lg:hidden">
            <a
              href="/"
              className="flex items-center gap-2 text-lg"
            >
              <House />
              Início
            </a>

            <a
              href="/"
              className="flex items-center gap-2 text-lg"
            >
              <Clapperboard />
              Conheça
            </a>

            <a
              href="/"
              className="flex items-center gap-2 text-lg"
            >
              <VenetianMask />
              Cultura
            </a>

            <a
              href="/"
              className="flex items-center gap-2 text-lg"
            >
              <Phone />
              Contato
            </a>

            <a
              href="/"
              className="flex items-center gap-2 text-lg"
            >
              <BookUser />
              Sobre
            </a>

            <a
              href="/login"
              className="px-8 py-3 bg-green-800 text-white rounded-full flex items-center gap-2"
            >
              <User />
              Login
            </a>
          </div>
        )}
      </header>

      <main className="w-full min-h-screen bg-[url('/fotodecapa.png')] bg-cover bg-center relative overflow-x-hidden flex flex-col lg:flex-row items-center justify-center gap-12 pt-32 pb-28 px-6 lg:px-20">

        {/* OVERLAY ESCURO */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20"></div>

        {/* CONTEÚDO */}
        <div className="relative z-10 flex flex-col w-full lg:w-[48%] gap-8">

          <div className="flex flex-col gap-4">
            <span className="w-fit px-4 py-1 rounded-full bg-green-500/20 text-green-200 border border-green-400/30 text-sm tracking-wide uppercase font-semibold backdrop-blur-sm">
              Turismo • Cultura • Natureza
            </span>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-green-300 font-extrabold leading-tight drop-shadow-2xl">
              Descubra Lavras
            </h1>

            <h2 className="text-2xl lg:text-3xl text-lime-200 font-semibold drop-shadow-md">
              Entre serras, sabores e letras
            </h2>
          </div>

          <p className="text-base lg:text-xl text-gray-100 leading-relaxed max-w-2xl drop-shadow-md">
            Descubra Lavras, um destino onde a natureza,
            a cultura e a hospitalidade se encontram
            para criar experiências inesquecíveis.
          </p>

          {/* BOTÕES */}
          <div className="flex flex-col sm:flex-row gap-5 w-full">

            <a className="px-8 py-4 items-center h-15 justify-center flex bg-green-700/90 text-white rounded-full cursor-pointer border border-green-400/40 hover:bg-green-800 transition-all duration-300 gap-3 shadow-xl hover:scale-105">
              <MapPin size={20} />
              Planeje Sua Viagem
            </a>

            <div className="px-8 py-4 items-center h-15 justify-center gap-3 flex bg-white/15 backdrop-blur-sm text-white rounded-full border border-white/20 transition-all duration-300 hover:scale-105 shadow-xl">
              <Leaf size={20} />
              <ConhecaModal />
            </div>
            
          </div>
        </div>

        {/* LOGO */}
        <div className="relative z-5 flex items-center justify-center">

          {/* EFEITO DE BRILHO */}
          <div className="absolute w-[320px] h-[320px] lg:w-[500px] lg:h-[500px] bg-green-400/20 blur-3xl rounded-full"></div>

          <Image
            src="/logotransparentefundo.png"
            alt="Logo"
            width={450}
            height={450}
            className="relative z-10 w-56 sm:w-72 lg:w-[430px] h-auto object-contain drop-shadow-[0_0_40px_rgba(255,255,255,0.25)]"
          />
        </div>
      </main>

      {/* EXPERIÊNCIAS */}
      <section className="w-full flex flex-col items-center py-16 px-6">
        <div className="flex items-center p-5 justify-center gap-3">
          <img
            className="w-12 h-12 object-contain"
            src="/folha3.svg"
            alt="Folha decorativa"
          />

          <h2 className="text-3xl lg:text-5xl font-semibold text-green-900 text-center">
            Experiências Que Conectam
          </h2>

          <img
            className="w-12 h-12 object-contain"
            src="/folha3.svg"
            alt="Folha decorativa"
          />
        </div>
        <div className="grid grid-cols-1 p-5 sm:grid-cols-2 xl:grid-cols-4 gap-10 w-full max-w-7xl">
          {/* CARD */}
          <div className="flex flex-col items-center gap-5 rounded-2xl py-6 px-5 shadow-xl border border-gray-300 hover:-translate-y-2 transition-all duration-300">
            <div className="rounded-full w-32 h-32 justify-center flex items-center overflow-hidden shadow-lg">
              <Image
                src="/natureza2.png"
                alt="Natureza"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-green-900 font-bold text-2xl">
              NATUREZA
            </h3>

            <p className="text-center">
              Cachoeiras, trilhas e paisagens incríveis entre as serras.
            </p>
          </div>

          {/* CARD */}
          <div className="flex flex-col items-center gap-5 rounded-2xl py-6 px-5 shadow-xl border border-gray-300 hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-center justify-center rounded-full w-32 h-32 shadow-lg">
              <Image
                src="/nativo.png"
                alt="Cultura"
                width={128}
                height={128}
                className="w-24 h-24 object-cover"
              />
            </div>

            <h3 className="text-green-900 font-bold text-2xl">
              CULTURA
            </h3>

            <p className="text-center">
              Tradições, festivais e a riqueza histórica da cidade dos ipês.
            </p>
          </div>

          {/* CARD */}
          <div className="flex flex-col items-center gap-5 rounded-2xl py-6 px-5 shadow-xl border border-gray-300 hover:-translate-y-2 transition-all duration-300">
            <div className="flex justify-center items-center rounded-full w-32 h-32 shadow-lg">
              <Image
                src="/restaurante.png"
                alt="Gastronomia"
                width={128}
                height={128}
                className="w-24 h-24 object-cover"
              />
            </div>

            <h3 className="text-green-900 font-bold text-2xl">
              GASTRONOMIA
            </h3>

            <p className="text-center">
              Sabores locais e pratos típicos que refletem a identidade da região.
            </p>
          </div>

          {/* CARD */}
          <div className="flex flex-col items-center gap-5 rounded-2xl py-6 px-5 shadow-xl border border-gray-300 hover:-translate-y-2 transition-all duration-300">
            <div className="flex justify-center items-center rounded-full w-32 h-32 shadow-lg">
              <Image
                src="/hotel2.png"
                alt="Hospitalidade"
                width={128}
                height={128}
                className="w-24 h-24 object-cover"
              />
            </div>

            <h3 className="text-green-900 font-bold text-2xl">
              HOSPITALIDADE
            </h3>

            <p className="text-center">
              O acolhimento caloroso e o espírito solidário da comunidade local.
            </p>
          </div>
        </div>
      </section>

      {/* DESTINOS */}
      <section className="w-full py-20 flex flex-col justify-center gap-5 items-center px-6">
        <div className="flex items-center justify-center gap-3">
          <img
            className="w-12 h-12 md:w-12 md:h-12 object-contain"
            src="/folha3.svg"
            alt="Folha decorativa"
          />

          <h2 className="text-3xl lg:text-5xl font-semibold text-green-900 text-center">
            Destinos Populares em Lavras
          </h2>

          <img
            className="w-12 h-12 md:w-12 md:h-12 object-contain"
            src="/folha3.svg"
            alt="Folha decorativa"
          />
        </div>

        <p className="text-lg lg:text-xl text-center text-gray-700 max-w-3xl">
          Explore os locais mais amados e bem avaliados por nossa comunidade
          de viajantes.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-full max-w-7xl">
          {/* CARD POST */}
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="rounded-2xl overflow-hidden shadow-2xl bg-white hover:-translate-y-2 transition-all duration-300"
            >
              <div className="bg-pink-200 w-full h-64 flex justify-center items-center text-xl font-bold">
                Imagem Post
              </div>

              <div className="w-full flex flex-col">
                <div className="w-full flex justify-between items-center px-5 py-4 border-b">
                  <p className="font-bold text-lg">
                    TÍTULO DO POST
                  </p>

                  <div className="flex gap-2 items-center">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <p>4.1</p>
                  </div>
                </div>

                <div className="px-5 py-5 border-b">
                  <p className="text-gray-700 leading-relaxed">
                    A Secretaria Municipal de Cultura, Esporte,
                    Lazer e Turismo tem como competência formular,
                    promover e incentivar ações culturais.
                  </p>
                </div>

                <div className="px-5 py-5 flex flex-col gap-2 text-gray-700">
                  <p>Rua João Pomárico, s/n, bairro Padre Dehon</p>
                  <p>Segunda a Domingo 07:00 às 21:00</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-green-900 text-white flex rounded  flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-8 gap-5">
        <p className="text-center">
          &copy; 2026 Descubra Lavras. Todos os direitos reservados.
        </p>
        <div className="flex gap-6">
          <a href="/" className="hover:text-gray-300 transition">
            Facebook
          </a>
          <a href="/" className="hover:text-gray-300 transition">
            Instagram
          </a>

          <a href="/" className="hover:text-gray-300 transition">
            Twitter
          </a>
        </div>
      </footer>
    </div>
  );
}
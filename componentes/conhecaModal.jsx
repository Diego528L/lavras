"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function ConhecaModal({
  titulo = "Conheça Lavras - MG",
  textoBotao = "Conheça Lavras",
  corBotao = "border-white/20 hover:bg-white/25",
}) {
  const [Open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Garante que o código do Portal só rode no lado do cliente (navegador)
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Estrutura do Modal isolada
  const modalConteudo = (
    <div className="fixed inset-0 bg-black/50 z-[99999] flex items-center justify-center p-4">
      <div
        className="bg-white p-8 rounded-lg shadow-xl overflow-y-auto"
        style={{ 
          width: "85vw", 
          height: "80vh" 
        }}
      >
        <div className="mb-4 flex items-center justify-end gap-2">
          
          <button
            onClick={() => setOpen(false)}
            className="text-black px-3 py-1 rounded hover:bg-gray-100 transition-all"
          >
            X
          </button>
        </div>

        <h2 className="text-3xl font-bold text-green-900 mb-5">
          {titulo}
        </h2>

        <div className="text-gray-700 w-full space-y-4 text-base leading-relaxed">
          <p>
            Lavras é uma importante cidade do sul de Minas Gerais,
            conhecida por sua tradição educacional, desenvolvimento
            agrícola e qualidade de vida. Sua história começou no
            século XVIII, durante o período da mineração em Minas,
            quando bandeirantes chegaram à região em busca de ouro.
          </p>

          <p>
            O antigo nome da cidade era
            <strong> “Sant’Ana das Lavras do Funil”</strong>. O termo
            “lavras” surgiu por causa das escavações feitas para a
            extração de ouro, chamadas de lavras minerais. Com o passar
            do tempo, a mineração perdeu força e a cidade passou a se
            destacar na agricultura, pecuária e comércio regional.
          </p>

          <p>
            Atualmente, Lavras é reconhecida nacionalmente pelo setor
            educacional. A cidade abriga a famosa
            <strong> Universidade Federal de Lavras (UFLA)</strong>,
            considerada uma das melhores universidades do Brasil,
            especialmente nas áreas de agronomia, engenharia,
            tecnologia, meio ambiente e pesquisa científica.
          </p>

          <p>
            Graças às universidades e instituições de ensino, Lavras
            recebe milhares de estudantes de várias regiões do país,
            sendo conhecida como a
            <strong> “terra dos ipês e das escolas”</strong>.
          </p>

          <p>
            No aspecto natural, a cidade possui belas paisagens,
            clima agradável e áreas de preservação ambientais, como o
            Parque Quedas do Rio Bonito, além de forte ligação com a
            produção agrícola e cafeeira do sul de Minas.
          </p>

          <p>
            O comércio de Lavras também é bastante desenvolvido,
            oferecendo infraestrutura moderna, shopping, hotéis,
            restaurantes e diversas oportunidades de negócios,
            impulsionadas pelo crescimento universitário e agrícola da
            região.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`${corBotao} text-white font-bold py-2 px-4 border-white/20 hover:bg-white/25 rounded transition-all duration-300`}
      >
        {textoBotao}
      </button>

      {/* O Truque Mágico: se estiver aberto, teleporta o modal para fora do botão, direto para o body */}
      {Open && mounted ? createPortal(modalConteudo, document.body) : null}
    </>
  );
}
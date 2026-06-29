"use client";

import { useState } from "react";

export function AreaUpload() {
  const [previa, setPrevia] = useState("");

  function aoEscolher(evento) {
    const arquivo = evento.target.files?.[0];

    if (arquivo) {
      setPrevia(URL.createObjectURL(arquivo));
    }
  }

  return (
    <label className="flex min-h-[140px] cursor-pointer flex-col items-center justify-center rounded-[14px] border-2 border-dashed border-slate-300 bg-slate-50 p-5 text-center hover:border-green-700 hover:bg-green-50">
      <input
        type="file"
        name="imagem"
        accept="image/*"
        onChange={aoEscolher}
        className="hidden"
      />

      {previa ? (
        <img
          src={previa}
          alt="Previa da imagem"
          className="max-h-[240px] max-w-full rounded-[10px] object-cover"
        />
      ) : (
        <span className="font-bold text-slate-700">Clique para escolher uma imagem</span>
      )}
    </label>
  );
}

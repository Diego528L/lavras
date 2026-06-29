"use client";

import { useFormStatus } from "react-dom";

export function BotaoEnviar() {
  const status = useFormStatus();

  return (
    <button
      type="submit"
      disabled={status.pending}
      className="w-fit rounded-[10px] bg-green-700 px-5 py-2 text-sm font-bold text-white disabled:cursor-not-allowed disabled:bg-slate-400"
    >
      {status.pending ? "Enviando..." : "Enviar foto"}
    </button>
  );
}

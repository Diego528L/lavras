"use server";

import { put } from "@vercel/blob";
import { redimensionar } from "./redimensionar";

function mapearErroBlob(error) {
  const mensagem = String(error?.message || "");

  if (mensagem.includes("No blob credentials found")) {
    return "Vercel Blob nao configurado. Defina BLOB_READ_WRITE_TOKEN no arquivo .env e reinicie o servidor.";
  }

  if (mensagem.includes("Access denied")) {
    return "Token do Vercel Blob invalido ou sem permissao para este projeto/store.";
  }

  return "Erro ao enviar foto para o Blob.";
}

export async function uploadFotoParaBlob(arquivo, prefixo = "cadastro") {
  if (!arquivo || typeof arquivo === "string" || arquivo.size === 0) {
    return "";
  }

  const tamanhoMaximo = 4.5 * 1024 * 1024;
  if (arquivo.size > tamanhoMaximo) {
    throw new Error("A imagem excede o limite de 4,5 MB.");
  }

  const imagemPng = await redimensionar(arquivo);

  try {
    const blob = await put(`${prefixo}.png`, imagemPng, {
      access: "public",
      addRandomSuffix: true,
      contentType: "image/png",
    });

    return blob.url;
  } catch (error) {
    throw new Error(mapearErroBlob(error));
  }
}
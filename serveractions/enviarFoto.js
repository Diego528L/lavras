"use server";

import { put } from "@vercel/blob";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { redimensionar } from "./redimensionar";

export async function enviarFoto(formData) {
  const titulo = String(formData.get("titulo") || "").trim();
  const arquivo = formData.get("imagem");

  if (!arquivo || arquivo.size === 0 || !titulo) {
    return { success: false, error: "Escolha uma imagem e informe um titulo." };
  }

  const tamanhoMaximo = 4.5 * 1024 * 1024;
  if (arquivo.size > tamanhoMaximo) {
    return {
      success: false,
      error: "A imagem excede o limite de 4,5 MB.",
    };
  }

  try {
    const imagemPng = await redimensionar(arquivo);

    const blob = await put("foto.png", imagemPng, {
      access: "public",
      addRandomSuffix: true,
      contentType: "image/png",
    });

    await prisma.foto.create({
      data: {
        titulo,
        url: blob.url,
      },
    });

    revalidatePath("/album");

    return { success: true };
  } catch (error) {
    const mensagem = String(error?.message || "");

    if (mensagem.includes("No blob credentials found")) {
      return {
        success: false,
        error:
          "Vercel Blob nao configurado. Defina BLOB_READ_WRITE_TOKEN no arquivo .env e reinicie o servidor.",
      };
    }

    if (mensagem.includes("Access denied")) {
      return {
        success: false,
        error: "Token do Vercel Blob invalido ou sem permissao para este projeto/store.",
      };
    }

    return { success: false, error: "Erro ao enviar foto." };
  }
}

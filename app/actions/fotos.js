"use server";

import { put } from "@vercel/blob";
import { revalidatePath } from "next/cache";

export async function uploadImagem(formData) {
  const arquivo = formData.get("imagem");

  if (!arquivo || arquivo.size === 0) {
    return { success: false, error: "Selecione uma imagem." };
  }

  try {
    const blob = await put(arquivo.name, arquivo, {
      access: "public",
      addRandomSuffix: true,
    });

    revalidatePath("/album");

    return { success: true, url: blob.url };
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

    return { success: false, error: "Erro ao fazer upload da imagem." };
  }
}

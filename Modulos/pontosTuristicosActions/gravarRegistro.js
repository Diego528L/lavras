"use server";

import { prisma } from "../../lib/prisma.js";
import { uploadFotoParaBlob } from "../../serveractions/uploadFotoParaBlob.js";

export async function gravarRegistro(formData) {
  const nome = String(formData.get("nome") || "").trim();
  const categoria = String(formData.get("categoria") || "").trim();
  const descricao = String(formData.get("descricao") || "").trim();
  const endereco = String(formData.get("endereco") || "").trim();
  const fotoField = formData.get("foto");

  if (!nome || !categoria || !descricao || !endereco) {
    return { success: false, error: "Campos obrigatórios faltando." };
  }

  let foto = "";
  try {
    foto = await uploadFotoParaBlob(fotoField, "pontos-turisticos");
  } catch (error) {
    return { success: false, error: error.message || "Erro ao enviar foto." };
  }

  console.log("\x1b[34m%s\x1b[0m", `Server Action gravando ponto turístico... ${new Date().toLocaleString()}`);

  const registro = await prisma.pontoTuristico.create({ data: { nome, categoria, descricao, endereco, foto } });

  return { success: true, message: "Ponto Turístico cadastrado com sucesso!", registro };
}
 
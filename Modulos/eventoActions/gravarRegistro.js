"use server";

import { prisma } from "../../lib/prisma.js";
import { uploadFotoParaBlob } from "../../serveractions/uploadFotoParaBlob.js";

export async function gravarRegistro(formData) {
  const nome = String(formData.get("nome") || "").trim();
  const local = String(formData.get("local") || "").trim();
  const contato = String(formData.get("contato") || "").trim();
  const descricao = String(formData.get("descricao") || "").trim();
  const fotoField = formData.get("foto");

  if (!nome || !local || !descricao) {
    return { success: false, error: "Campos obrigatórios faltando." };
  }

  let foto = "";
  try {
    foto = await uploadFotoParaBlob(fotoField, "eventos");
  } catch (error) {
    return { success: false, error: error.message || "Erro ao enviar foto." };
  }

  console.log("\x1b[34m%s\x1b[0m", `Server Action gravando evento... ${new Date().toLocaleString()}`);

  const registro = await prisma.eventos.create({ data: { nome, local, contato, descricao, foto } });

  return { success: true, message: "Evento cadastrado com sucesso!", registro };
}
 
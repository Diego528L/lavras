"use server";

import { prisma } from "../../lib/prisma.js";

export async function gravarRegistro(formData) {
  const nome = String(formData.get("nome") || "").trim();
  const local = String(formData.get("local") || "").trim();
  const contato = String(formData.get("contato") || "").trim();
  const descricao = String(formData.get("descricao") || "").trim();
  const fotoField = formData.get("foto");
  const foto = fotoField && fotoField.name ? String(fotoField.name) : String(fotoField || "").trim();

  if (!nome || !local || !descricao) {
    return { success: false, error: "Campos obrigatórios faltando." };
  }

  console.log("\x1b[34m%s\x1b[0m", `Server Action gravando evento... ${new Date().toLocaleString()}`);

  const registro = await prisma.eventos.create({ data: { nome, local, contato, descricao, foto } });

  return { success: true, message: "Evento cadastrado com sucesso!", registro };
}
 
"use server";

import { prisma } from "../../lib/prisma.js";

export async function gravarRegistro(formData) {
  const nome = String(formData.get("nome") || "").trim();
  const telefone = String(formData.get("telefone") || "").trim();
  const descricao = String(formData.get("descricao") || "").trim();
  const fotoField = formData.get("foto");
  const foto = fotoField && fotoField.name ? String(fotoField.name) : String(fotoField || "").trim();

  if (!nome || !telefone || !descricao) {
    return { success: false, error: "Campos obrigatórios faltando." };
  }

  console.log("\x1b[34m%s\x1b[0m", `Server Action gravando hospedagem... ${new Date().toLocaleString()}`);

  const registro = await prisma.hospedagem.create({ data: { nome, telefone, descricao, foto } });

  return { success: true, message: "Hospedagem cadastrada com sucesso!", registro };
}

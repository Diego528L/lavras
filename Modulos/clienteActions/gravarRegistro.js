"use server";
 
import { prisma } from "../../lib/prisma.js";
import { uploadFotoParaBlob } from "../../serveractions/uploadFotoParaBlob.js";
 
 
export async function gravarRegistro(formData) {
  const nome = String(formData.get("nome") || "").trim();
  const comentario = String(formData.get("comentario") || "").trim();
  const fotoField = formData.get("foto");

  if (!nome || !comentario) {
    return { success: false, error: "Campos obrigatórios faltando." };
  }

  let foto = "";
  try {
    foto = await uploadFotoParaBlob(fotoField, "clientes");
  } catch (error) {
    return { success: false, error: error.message || "Erro ao enviar foto." };
  }

  console.log(
    "\x1b[34m%s\x1b[0m",
    `Server Action gravando cliente... ${new Date().toLocaleString()}`
  );
 
  const registro = await prisma.cliente.create({
    data: {
      nome,
      comentario,
      foto,
    },
  });
 
 
  return {
    success: true,
    message: "Cliente cadastrado com sucesso!",
    registro,
  };
}
 
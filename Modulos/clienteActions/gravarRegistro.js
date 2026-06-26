"use server";
 
import { prisma } from "../../lib/prisma.js";
 
 
export async function gravarRegistro(formData) {
  const nome = String(formData.get("nome") || "").trim();
  const comentario = String(formData.get("comentario") || "").trim();
  const fotoField = formData.get("foto");
  const foto = fotoField && fotoField.name ? String(fotoField.name) : String(fotoField || "").trim();

  if (!nome || !comentario) {
    return { success: false, error: "Campos obrigatórios faltando." };
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
 
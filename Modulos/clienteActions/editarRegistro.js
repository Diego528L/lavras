"use server";
 
import { prisma } from "@/lib/prisma.js";
import { uploadFotoParaBlob } from "../../serveractions/uploadFotoParaBlob.js";
 
export async function atualizarRegistro(formData) {
  const id = Number(formData.get("id"));
  const nome = String(formData.get("nome") || "").trim();
  const comentario = String(formData.get("comentario") || "").trim();
  const fotoAtual = String(formData.get("fotoAtual") || "").trim();
  const fotoField = formData.get("foto");

  if (!id || !nome || !comentario) {
    return { success: false, error: "Campos obrigatorios faltando." };
  }
 
  try {
    let foto = fotoAtual;
    if (fotoField && typeof fotoField !== "string" && fotoField.size > 0) {
      foto = await uploadFotoParaBlob(fotoField, "clientes");
    }
 
    const clienteAtualizado = await prisma.cliente.update({
      where: { id },
      data: {
        nome,
        comentario,
        foto,
      },
    });
   
    return {
      success: true,
      message: "Cliente atualizado!",
      cliente: clienteAtualizado,
    };
 
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: "Erro ao atualizar cliente.",
    };
  }
}


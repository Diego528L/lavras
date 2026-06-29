"use server";
 
import { prisma } from "@/lib/prisma.js";
import { uploadFotoParaBlob } from "../../serveractions/uploadFotoParaBlob.js";
 
export async function atualizarRegistro(formData) {
  const id = Number(formData.get("id"));
  const nome = String(formData.get("local") || formData.get("nome") || "").trim();
  const categoria = String(formData.get("categoria") || "").trim();
  const telefone = String(formData.get("contato") || formData.get("telefone") || "").trim();
  const descricao = String(formData.get("descricao") || "").trim();
  const fotoAtual = String(formData.get("fotoAtual") || "").trim();
  const fotoField = formData.get("foto");

  if (!id || !nome || !categoria || !descricao) {
    return { success: false, error: "Campos obrigatorios faltando." };
  }
 
  try {
    let foto = fotoAtual;
    if (fotoField && typeof fotoField !== "string" && fotoField.size > 0) {
      foto = await uploadFotoParaBlob(fotoField, "gastronomia");
    }
 
    const gastronomiaAtualizada = await prisma.gastronomia.update({
      where: { id },
      data: {
        nome,
        categoria,
        telefone,
        descricao,
        foto,
      },
    });
   
    return {
      success: true,
      message: "Gastronomia atualizada!",
      gastronomia: gastronomiaAtualizada,
    };
 
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: "Erro ao atualizar gastronomia.",
    };
  }
}
  

"use server";
 
import { prisma } from "@/lib/prisma.js";
import { uploadFotoParaBlob } from "../../serveractions/uploadFotoParaBlob.js";
 
export async function atualizarRegistro(formData) {
  const id = Number(formData.get("id"));
  const nome = String(formData.get("nome") || "").trim();
  const categoria = String(formData.get("categoria") || "").trim();
  const descricao = String(formData.get("descricao") || "").trim();
  const endereco = String(formData.get("endereco") || "").trim();
  const fotoAtual = String(formData.get("fotoAtual") || "").trim();
  const fotoField = formData.get("foto");

  if (!id || !nome || !categoria || !descricao || !endereco) {
    return { success: false, error: "Campos obrigatorios faltando." };
  }
 
  try {
    let foto = fotoAtual;
    if (fotoField && typeof fotoField !== "string" && fotoField.size > 0) {
      foto = await uploadFotoParaBlob(fotoField, "pontos-turisticos");
    }
 
    const pontoTuristicosAtualizado = await prisma.pontoTuristico.update({
      where: { id },
      data: {
        nome,
        categoria,
        descricao,
        endereco,
        foto,
      },
    });
   
    return {
      success: true,
      message: "Ponto turístico atualizado!",
      pontoTuristicos: pontoTuristicosAtualizado,
    };
 
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: "Erro ao atualizar ponto turístico.",
    };
  }
}
  

"use server";
 
import { prisma } from "@/lib/prisma.js";
import { uploadFotoParaBlob } from "../../serveractions/uploadFotoParaBlob.js";
 
export async function atualizarRegistro(formData) {
  const id = Number(formData.get("id"));
  const nome = String(formData.get("nome") || "").trim();
  const local = String(formData.get("local") || "").trim();
  const contato = String(formData.get("contato") || "").trim();
  const descricao = String(formData.get("descricao") || "").trim();
  const fotoAtual = String(formData.get("fotoAtual") || "").trim();
  const fotoField = formData.get("foto");

  if (!id || !nome || !local || !descricao) {
    return { success: false, error: "Campos obrigatorios faltando." };
  }
 
  try {
    let foto = fotoAtual;
    if (fotoField && typeof fotoField !== "string" && fotoField.size > 0) {
      foto = await uploadFotoParaBlob(fotoField, "eventos");
    }
 
    const eventoAtualizado = await prisma.eventos.update({
      where: { id },
      data: {
        nome,
        local,
        contato,
        descricao,
        foto,
      },
    });
   
    return {
      success: true,
      message: "Evento atualizado!",
      evento: eventoAtualizado,
    };
 
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: "Erro ao atualizar evento.",
    };
  }
}
  

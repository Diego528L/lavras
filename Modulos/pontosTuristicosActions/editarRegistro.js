"use server";
 
import { prisma } from "@/lib/prisma.js";
 
export async function atualizarRegistro(id, dadospontosTuristicos) {
 
  try {
    console.log(
 
      "\x1b[36m%s\x1b[0m",
      'Atualizando ponto turístico ID: {id}'
    );
 
      console.log(
 
        "\x1b[33m%s\x1b[0m",
        'Dados do ponto turístico recebidos:', dadospontosTuristicos
      );
 
    const pontoTuristicosAtualizado =
    await prisma.pontoTuristicos.update({
 
      where: {
        id: Number(id),
      },
      data: dadospontosTuristicos
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
 
 
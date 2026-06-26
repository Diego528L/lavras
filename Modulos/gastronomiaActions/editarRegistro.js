"use server";
 
import { prisma } from "@/lib/prisma.js";
 
export async function atualizarRegistro(id, dadosGastronomia) {
 
  try {
    console.log(
 
      "\x1b[36m%s\x1b[0m",
      'Atualizando gastronomia ID: {id}'
    );
 
      console.log(
 
        "\x1b[33m%s\x1b[0m",
        'Dados da gastronomia recebidos:', dadosGastronomia
      );
 
    const gastronomiaAtualizada =
    await prisma.gastronomia.update({
 
      where: {
        id: Number(id),
      },
      data: dadosGastronomia
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
 
 
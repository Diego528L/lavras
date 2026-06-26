"use server";
 
import { prisma } from "@/lib/prisma.js";
 
export async function atualizarRegistro(id, dadoshospedagem) {
 
  try {
    console.log(
 
      "\x1b[36m%s\x1b[0m",
      'Atualizando hospedagem ID: {id}'
    );
 
      console.log(
 
        "\x1b[33m%s\x1b[0m",
        'Dados da hospedagem recebidos:', dadoshospedagem
      );
 
    const hospedagemAtualizada =
    await prisma.hospedagem.update({
 
      where: {
        id: Number(id),
      },
      data: dadoshospedagem
    });
   
    return {
      success: true,
      message: "Hospedagem atualizada!",
      hospedagem: hospedagemAtualizada,
    };
 
  } catch (error) {
 
    console.error(error);
 
    return {
 
      success: false,
 
      error: "Erro ao atualizar hospedagem.",
 
    };
 
  }
 
}
 
 
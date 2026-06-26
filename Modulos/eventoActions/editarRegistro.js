"use server";
 
import { prisma } from "@/lib/prisma.js";
 
export async function atualizarRegistro(id, dadosEvento) {
 
  try {
    console.log(
 
      "\x1b[36m%s\x1b[0m",
      'Atualizando evento ID: {id}'
    );
 
      console.log(
 
        "\x1b[33m%s\x1b[0m",
        'Dados do evento recebidos:', dadosEvento
      );
 
    const eventoAtualizado =
    await prisma.evento.update({
 
      where: {
        id: Number(id),
      },
      data: dadosEvento
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
 
 
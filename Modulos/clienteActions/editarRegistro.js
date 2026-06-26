"use server";
 
import { prisma } from "@/lib/prisma.js";
 
export async function atualizarRegistro(id, dadosCliente) {
 
  try {
    console.log(
 
      "\x1b[36m%s\x1b[0m",
      'Atualizando cliente ID: {id}'
    );
 
      console.log(
 
        "\x1b[33m%s\x1b[0m",
        'Dados do cliente recebidos:', dadosCliente
      );
 
    const clienteAtualizado =
    await prisma.cliente.update({
 
      where: {
        id: Number(id),
      },
      data: dadosCliente
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
 
 
"use server";
import { prisma } from '../../lib/prisma.js';
 
export async function deletarRegistro(id) {
  try {
    const funcionarioDeletado = await prisma.funcionario.delete({
      where: {
        id: Number(id),
      },
    });

    return {
      success: true,
      message: "Funcionário deletado com sucesso!",
      funcionario: funcionarioDeletado,
    };
  } catch (error) {
    console.error("Erro ao deletar funcionário:", error);
    return {
      success: false,
      error: "Erro ao deletar funcionário.",
    };
  }
}

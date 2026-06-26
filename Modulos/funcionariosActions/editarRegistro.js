"use server";
 
import { prisma } from "@/lib/prisma.js";
 
export async function atualizarRegistro(id, dadosFuncionario) {
  try {
    console.log(
      "\x1b[36m%s\x1b[0m",
      `Atualizando funcionário ID: ${id}`
    );

    const dadosAtualizados = {
      ...(dadosFuncionario.nome && { nome: dadosFuncionario.nome.toString().trim() }),
      ...(dadosFuncionario.email && { email: dadosFuncionario.email.toString().trim() }),
      ...(dadosFuncionario.celular && { telefone: dadosFuncionario.celular.toString().trim() }),
      ...(dadosFuncionario.senha && { password: dadosFuncionario.senha.toString().trim() }),
    };

    const funcionarioAtualizado = await prisma.funcionario.update({
      where: {
        id: Number(id),
      },
      data: dadosAtualizados,
    });

    return {
      success: true,
      message: "Funcionário atualizado!",
      funcionario: funcionarioAtualizado,
    };
  } catch (error) {
    console.error("Erro ao atualizar funcionário:", error);
    return {
      success: false,
      error: "Erro ao atualizar funcionário.",
    };
  }
}
 
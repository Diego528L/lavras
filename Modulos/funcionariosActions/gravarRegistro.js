"use server";
 
import { prisma } from "../../lib/prisma.js";
 
export async function gravarRegistro(dadosFuncionario) {
  console.log(
    "\x1b[36m%s\x1b[0m",
    `Iniciando gravação de funcionário: ${JSON.stringify(dadosFuncionario)}`
  );

  if (!dadosFuncionario) {
    return { success: false, error: "Dados do funcionário não fornecidos." };
  }

  const nome = dadosFuncionario.nome?.toString().trim();
  const email = dadosFuncionario.email?.toString().trim();
  const telefone = dadosFuncionario.celular?.toString().trim();
  const password = dadosFuncionario.senha?.toString().trim();

  const dados = {
    nome,
    email,
    telefone,
    password,
  };

  try {
    const registro = await prisma.funcionario.create({
      data: dados,
    });

    return {
      success: true,
      message: "Funcionário registrado com sucesso.",
      registro,
    };
  } catch (error) {
    console.error("Erro ao gravar funcionário:", error);
    return {
      success: false,
      error: "Erro ao cadastrar funcionário.",
    };
  }
}
 
 
 
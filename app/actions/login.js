"use server";

import { prisma } from "@/lib/prisma.js";
 
export async function login(email, senha) {
  const emailTratado = String(email || "").trim().toLowerCase();
  const senhaTratada = String(senha || "").trim();

  if (!emailTratado || !senhaTratada) {
    return { success: false, error: "Informe email e senha." };
  }

  try {
    const funcionario = await prisma.funcionario.findUnique({
      where: { email: emailTratado },
      select: {
        id: true,
        nome: true,
        email: true,
        password: true,
      },
    });

    if (!funcionario || funcionario.password !== senhaTratada) {
      return { success: false, error: "Email ou senha invalidos." };
    }

    return {
      success: true,
      usuario: {
        id: funcionario.id,
        nome: funcionario.nome,
        email: funcionario.email,
      },
    };
  } catch (error) {
    console.error("Erro no login:", error);
    return { success: false, error: "Erro ao autenticar." };
  }
}
 
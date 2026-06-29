"use server";

import { del } from "@vercel/blob";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

export async function excluirFoto(formData) {
  const id = Number(formData.get("id"));
  const url = String(formData.get("url") || "").trim();

  if (!id || !url) {
    return { success: false, error: "Dados invalidos para exclusao." };
  }

  await del(url);

  await prisma.foto.delete({
    where: { id },
  });

  revalidatePath("/album");

  return { success: true };
}

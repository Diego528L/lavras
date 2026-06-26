"use server";
 
import { prisma } from "../../lib/prisma.js";
 
 
export async function gravarRegistro(formData) {
      const nome = String(formData.get("local") || formData.get("nome") || "").trim();
      const categoria = String(formData.get("categoria") || "").trim();
      const telefone = String(formData.get("contato") || formData.get("telefone") || "").trim();
      const descricao = String(formData.get("descricao") || "").trim();
      const fotoField = formData.get("foto");
      const foto = fotoField && fotoField.name ? String(fotoField.name) : String(fotoField || "").trim();

      if (!nome || !categoria || !descricao) {
        return { success: false, error: "Campos obrigatórios faltando." };
      }

      console.log("\x1b[34m%s\x1b[0m", `Server Action gravando gastronomia... ${new Date().toLocaleString()}`);

      const registro = await prisma.gastronomia.create({ data: { nome, categoria, telefone, descricao, foto } });

      return { success: true, message: "Gastronomia cadastrada com sucesso!",
         registro };
    }


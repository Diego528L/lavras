"use client";

import { atualizarRegistro } from "@/Modulos/funcionariosActions/editarRegistro";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useState } from "react";


export default function ModalEditar({ funcionario }) {
  const [open, setOpen] = useState(false);

  function handleClose() {
    setOpen(false);
  }
  const router = useRouter();

  // Função responsável por editar o aluno
  async function handleEditar(e) {
    try {
      e.preventDefault();
      const formData = new FormData(e.target);
      const dadosFuncionario = {
        nome: formData.get("nome").toString().trim(),
        email: formData.get("email").toString().trim(),
        celular: formData.get("celular").toString().trim(),
        senha: formData.get("senha").toString().trim(),
      };
      console.log('Dados do funcionário a serem atualizados:', dadosFuncionario);
      const res = await atualizarRegistro(funcionario.id, dadosFuncionario);
      if (res.success) {
        router.refresh();
        toast.success(res.message);
        setOpen(false);
      } else {
        console.log('Erro ao editar funcionário:', res.error);
        toast.error(res.error);
      }

    } catch (error) {
      console.log('Erro ao editar funcionário:', error);
      toast.error('Erro interno ao editar funcionário');
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-blue-600 text-white px-4 py-3 rounded-lg"
      >
        Editar Registro
      </button>
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl w-full max-w-2xl relative">
            <button onClick={handleClose} className="absolute right-3 top-3">
              x
            </button>

            {/* Cabeçalho */}
            <div className="border-b m-0 p-0">
              <h2 className="text-2xl font-bold text-gray-800">
                Editar Registro
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Faça as alterações necessárias.
              </p>
            </div>
            {/* Formulário */}
            <div className="mt-6">
            <form
              onSubmit={handleEditar}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 border-none my-2 p-0"
            >
              {/* Nome */}
              <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-600">Nome Completo</label>
                <input
                  name="nome"
                  defaultValue={funcionario.nome}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  name="email"
                  defaultValue={funcionario.email}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              {/* celular */}
              <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-600">Celular</label>
                <input
                  name="celular"
                  defaultValue={funcionario.celular}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* senha */}
              <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-600">
                  Senha
                </label>
                <input
                  type="password"
                  name="senha"
                  defaultValue={funcionario.senha}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Botões */}
              <div className="md:col-span-2 flex flex-col md:flex-row gap-4 justify-center pt-4">
                <button
                  type="submit"
                  className="px-3 py-3 rounded-md bg-blue-800 hover:opacity-70 w-[80%] text-white text-md font-medium transition"
                >
                  Salvar Alterações
                </button>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-md bg-red-800 hover:opacity-70 w-[78%] text-white text-md font-medium transition"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      )}
    </>
  );
}

